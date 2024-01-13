import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("auth-token");
    const url = request.nextUrl.clone();
    const { pathname } = url;
    // List of routes that are considered "auth routes"
    const authRoutes = ["/login", "/register"];

    // List of image file extensions
    const imageExtensions = [".jpg", ".jpeg", ".png", ".svg", ".gif", ".webp"];

    // Check if the request is for an image
    const isImageRequest = imageExtensions.some(extension =>
        pathname.endsWith(extension)
    );

    // If the request is for an image, allow it to continue
    if (isImageRequest) {
        return NextResponse.next();
    }

    // Redirect to /login if no token and on a non-auth route
    if (!token && !authRoutes.includes(pathname)) {
        url.pathname = "/login";
        return NextResponse.redirect(url);
    }

    // Redirect to a non-auth route (e.g., homepage) if token exists and on an auth route
    if (token && authRoutes.includes(pathname)) {
        url.pathname = "/"; // Redirect to homepage or any other page
        return NextResponse.redirect(url);
    }
    // Allow the request to continue as normal
    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!_next/static|_next/image|favicon.ico).*)",
    ],
};
