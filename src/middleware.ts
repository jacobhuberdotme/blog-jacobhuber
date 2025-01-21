import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/rsvp-tracking(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  console.log("Path:", req.nextUrl.pathname); // Log the current path

  if (isProtectedRoute(req)) {
    console.log("Protected route accessed:", req.nextUrl.pathname);
    await auth.protect(); // Only protect this route
  } else {
    console.log("Public route accessed:", req.nextUrl.pathname);
  }
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", // Match all routes except static files and Next.js internals
    "/", // Include the root route
  ],
};