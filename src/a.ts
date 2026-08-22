// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function proxy(request: NextRequest) {
//   const token = request.cookies.get('eCommerce_accessToken')?.value;

//   if (request.nextUrl.pathname.startsWith('/dashboard')) {
//     if (!token) {
//       const signInUrl = new URL('/sign-in', request.url);
//       signInUrl.searchParams.set('callbackUrl', request.nextUrl.pathname);
//       return NextResponse.redirect(signInUrl);
//     }
//   }

//   // Optionally protect checkout if required, but usually handled client-side or similarly
//   if (request.nextUrl.pathname.startsWith('/checkout')) {
//     if (!token) {
//       const signInUrl = new URL('/sign-in', request.url);
//       signInUrl.searchParams.set('callbackUrl', request.nextUrl.pathname);
//       return NextResponse.redirect(signInUrl);
//     }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/dashboard/:path*', '/checkout'],
// };
