import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json();

    // Check if the credentials match the predefined values
    if (email === 'hr@asd.com' && password === '1234') {
      // Return the user data
      return NextResponse.json({
        id: 1, // {{ edit_1 }}
        name: 'HR Manager',
        email: email,
        type: 'hrManager',
      });
    }
    if (email === 'fin@asd.com' && password === '1234') {
      // Return the user data
      return NextResponse.json({
        id: 2, // {{ edit_2 }}
        name: 'Finance Manager',
        email: email,
        type: 'financeManager',
      });
    }
    if (email === 'store@asd.com' && password === '1234') {
      // Return the user data
      return NextResponse.json({
        id: 3, // {{ edit_3 }}
        name: 'Store Manager',
        email: email,
        type: 'storeManager',
      });
    }
    if (email === 'driver@asd.com' && password === '1234') {
      // Return the user data
      return NextResponse.json({
        id: 4, // {{ edit_4 }}
        name: 'Driver',
        email: email,
        type: 'driver',
      });
    }
    if (email === 'asdriver@asd.com' && password === '1234') {
      // Return the user data
      return NextResponse.json({
        id: 5, // {{ edit_5 }}
        name: 'Assistant Driver',
        email: email,
        type: 'assistantDriver',
      });
    }
    if (email === 'customer@asd.com' && password === '1234') {
      // Return the user data
      return NextResponse.json({
        id: 6, // {{ edit_6 }}
        name: 'Customer',
        email: email,
        type: 'customer',
      });
    }

  

  // If credentials don't match, return an error response
  return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
}