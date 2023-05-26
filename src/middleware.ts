const jwt = require("jsonwebtoken");
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: any) {
    if (request.nextUrl.pathname.startsWith('/api') && !request.nextUrl.pathname.startsWith('/api/login')) {
        try {
            const token = request.headers.get('authorization');
            const SECRET_KEY = process.env.JWT_SECRET || "";
            jwt.verify(token,SECRET_KEY);
        } catch (error: any) {
            return NextResponse.redirect(new URL('/api/auth/unauthorized', request.url));
        }
    }
}

// See "Matching Paths" below to learn more
// export const config = {
//     matcher: ['/about/:path*','/about/:path*']
//   };