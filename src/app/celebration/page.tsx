'use client';

import SandboxEvents from '@/components/SandboxEvents';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default function RSVPTrackingPage() {
  return (
    <div className="space-y-8">
      {/* Thank You Card */}
      <Card>
        <CardHeader>
        <div className="relative w-full h-64 mb-4">
            <Image
              src="https://sandboxvr.imgix.net/posters/squidgame-banner.jpg?auto=format&h=264&dpr=2"
              alt="Sandbox VR Experience"
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
              className="rounded-lg object-cover"
              priority
            />
          </div>
          <CardTitle className="text-3xl text-center">Thank You!</CardTitle>
          <CardDescription className="text-center text-lg mt-2">
            I had such an amazing time celebrating my birthday with all of you.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p>
            Thank you to everyone who came to the Foundry and Sandbox VR to make the day special.
            Your presence, laughter, and energy made this celebration unforgettable.
            Whether you joined the VR experience, or simply enjoyed the food and drinks, 
            it was truly wonderful to spend time with all of you.
          </p>
          <p className="mt-4">
            <strong>Check out the scores and videos below!</strong>
          </p>
          <p className="mt-4 font-semibold">
            Looking forward to more great memories together in the future!
          </p>
        </CardContent>
      </Card>

      {/* Scores Section */}
      <h2 className="text-2xl font-bold mb-4">Scores and Videos</h2>
      <SandboxEvents />
    </div>
  );
}