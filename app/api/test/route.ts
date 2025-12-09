// app/api/users/route.ts
import { NextResponse } from 'next/server';
import { connectDB } from '../lib/db';
import { User } from '../models/user.model';

/* ✅ GET: Read users from DB */
export async function GET() {
  try {
    await connectDB();
    const users = await User.find().lean();

    return NextResponse.json({
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}

/* ✅ POST: Insert user into DB */
export async function POST(request: Request) {
  try {
    const body = await request.json();

    await connectDB();

    const userNew = new User({ name: body.name });

    const user = await userNew.save();

    return NextResponse.json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { success: false, error: 'Failed to create user' },
      { status: 500 }
    );
  }
}
