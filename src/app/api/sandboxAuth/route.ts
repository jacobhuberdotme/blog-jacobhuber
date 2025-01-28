import { NextResponse } from 'next/server';

export async function POST() {
  const response = await fetch('https://sandboxvr.auth0.com/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      realm: 'Username-Password-Authentication',
      audience: 'https://sandboxvr.auth0.com/api/v2/',
      client_id: process.env.AUTH0_CLIENT_ID,
      scope: 'openid email',
      grant_type: 'http://auth0.com/oauth/grant-type/password-realm',
      username: process.env.AUTH0_USERNAME,
      password: process.env.AUTH0_PASSWORD,
    }),
  });

  if (!response.ok) {
    console.error('Error fetching auth token:', await response.text());
    return NextResponse.json({ error: 'Failed to fetch token' }, { status: 500 });
  }

  const data = await response.json();
  // Return both tokens for flexibility
  return NextResponse.json({
    access_token: data.access_token,
    id_token: data.id_token, // Include id_token
  });
}