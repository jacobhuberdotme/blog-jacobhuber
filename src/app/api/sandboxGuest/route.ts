import { NextResponse } from 'next/server';
import {GuestEvent} from '@/types/SandboxGuest'

export async function POST(req: Request) {
  try {
    const { headers } = req;
    const authHeader = headers.get('Authorization');

    // Validate Authorization header
    if (!authHeader) {
      return NextResponse.json(
        { error: 'Authorization header is missing' },
        { status: 400 }
      );
    }

    // Make the GraphQL request
    const response = await fetch('https://sandboxvr.com/api/graphql', {
      method: 'POST',
      headers: {
        Authorization: authHeader, // Use the Authorization header from the request
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        operationName: 'CurrentGuest',
        variables: {},
        query: `
          query CurrentGuest {
            currentGuest {
              id
              email
              firstName
              lastName
              events {
                id
                location {
                  name
                }
                experience {
                  title
                }
                date
                time
              }
            }
          }
        `,
      }),
    });

    // Check if the response is successful
    if (!response.ok) {
      const errorText = await response.text();
      console.error('GraphQL API Error:', errorText);
      return NextResponse.json(
        { error: 'Failed to fetch data from GraphQL API' },
        { status: response.status }
      );
    }

    // Parse the response data
    const data = await response.json();
    const guest = data?.data?.currentGuest;

    if (guest?.events) {
      const uniqueEvents = Array.from(
        new Map(
          guest.events.map((event: GuestEvent) => [
            `${event.experience.title}-${event.date}-${event.time}`,
            event,
          ])
        ).values()
      );
    
      guest.events = uniqueEvents;
    }

    return NextResponse.json({ data: { currentGuest: guest } });
  } catch (error) {
    console.error('Internal Server Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}