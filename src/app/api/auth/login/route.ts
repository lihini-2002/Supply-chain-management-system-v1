import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Check if the credentials match the predefined values
  if (email === 'admin@asd.com' && password === '1234') {
    // Return the user data
    return NextResponse.json({
      id: 1,
      name: 'Admin User',
      email: 'admin@asd.com'
    });
  }

  // If credentials don't match, return an error response
  return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
}