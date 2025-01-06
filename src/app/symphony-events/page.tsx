"use client";

import { Button } from "@/components/ui/button";

// export default function SymphonyEventPage() {
//   return (
//     <main className="container mx-auto py-12 text-center">
//       <h1 className="text-4xl font-bold mb-6">Saint Louis Symphony Orchestra</h1>
//       <p className="text-lg text-muted-foreground mb-8">
//         I’ve been enjoying the Saint Louis Symphony Orchestra more recently, especially the performances paired with movies. It&apos;s a great way to unwind and enjoy incredible music right here in St. Louis.
//       </p>
//       <p className="text-lg text-muted-foreground mb-8">
//         Click below to add all the events directly to your calendar.
//       </p>
//       <a
//         href="webcal://jacobhuber.me/saint-louis-symphony-orchestra.ics"
//       >
//         <Button variant="default">Add to Calendar</Button>
//       </a>
//       <p className="text-lg text-muted-foreground mt-8">See you at the symphony!</p>
//     </main>
//   );
// }

export default function TestICSPage() {
  return (
    <main className="container mx-auto py-12 text-center">
      <h1 className="text-4xl font-bold mb-6">Test Symphony Events</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Click the button below to test the ICS file locally.
      </p>
      <a href="/saint-louis-symphony-orchestra.ics" className="inline-block">
        <Button variant="default">Download ICS File</Button>
      </a>
    </main>
  );
}