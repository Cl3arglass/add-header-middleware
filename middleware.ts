// import { NextResponse } from 'next/server'

// export function middleware() {
//   // Store the response so we can modify its headers
//   const response = NextResponse.next()

//   // Set custom header
//   response.headers.set('x-set-ex', 'DENY')

//   // Return response
//   return response
// }

import { next } from '@vercel/edge';

export function middleware() {
  return next({
    headers: { 'x-set-ex': 'DENY' },
  });
}