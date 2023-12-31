/** @format */

import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/user';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(req) {
	try {
		const { name, lastname, email, password, company, role, access } = await req.json();

		const hashedPassword = await bcrypt.hash(password, 10);
		await connectMongoDB('register');
		await User.create({ name, lastname, email, password: hashedPassword, company, role, access });

		return NextResponse.json({ message: 'User registered.' }, { status: 201 });
	} catch (error) {
		return NextResponse.json({ message: 'An error occurred while registering the user.' }, { status: 500 });
	}
}
