import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { headers } = req;
  const authHeader = headers.get('Authorization');
  const { eventId } = await req.json();

  const response = await fetch('https://sandboxvr.com/api/graphql', {
    method: 'POST',
    headers: {
      Authorization: authHeader!,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      operationName: 'GetEvent',
      variables: { eventId },
      query: `
    query GetEvent($eventId: ID!) {
      event(id: $eventId) {
        id
        date
        time
        experience {
          id
          title
          __typename
        }
        location {
          shortname
          name
          address1
          address2
          phone
          mapUrl
          currency
          storeCode
          __typename
        }
        host {
          id
          firstName
          lastName
          email
          enrolledLoyalty
          __typename
        }
        members {
          id
          firstName
          lastName
          __typename
        }
        status
        sessionData {
          challenges
          extraData
          team {
            id
            name
            score
            result
            gameTime
            puzzleTime
            tutorialTime
            sessionTime
            isVictoryTeam
            chosenPath
            reachedTower
            ending
            npcsSaved {
              name
              result
              __typename
            }
            civilianResult
            __typename
          }
          members {
            id
            sessionPlayerId
            teamId
            first_name
            last_name
            name
            score
            damageDealt
            damageDealtWithTorch
            damageDealtOnRunes
            damageTaken
            shots
            shotHits
            accuracy
            character
            mvp
            kill {
              name
              count
              __typename
            }
            extPlayerId
            chosenArmor
            class
            gender
            saveData
            __typename
          }
          __typename
        }
        media {
          webm
          type
          thumbnail {
            name
            contentType
            url
            __typename
          }
          video {
            name
            contentType
            url
            __typename
          }
          __typename
        }
        maxGuest
        checkfrontBookingId
        sku
        itemRemoved
        __typename
      }
    }
  `,
}),
  });

  const data = await response.json();
  return NextResponse.json(data);
}