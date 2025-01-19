// src/app/celebration/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Jacob's 34th Birthday Celebration",
  description:
    "Join me at Sandbox VR and the Foundry to celebrate my 34th birthday! Enjoy great food, drinks, and activities. RSVP now to reserve your spot!",
  openGraph: {
    title: "Jacob's 34th Birthday Celebration",
    description:
      "Join me at Sandbox VR and the Foundry to celebrate my 34th birthday! Enjoy great food, drinks, and activities. RSVP now to reserve your spot!",
    url: "https://www.jacobhuber.me/celebration",
    images: [
      {
        url: "https://sandboxvr.imgix.net/posters/squidgame-banner.jpg?auto=format&h=264&dpr=2",
        alt: "Sandbox VR Experience Banner",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jacob's 34th Birthday Celebration",
    description:
      "Join me at Sandbox VR and the Foundry to celebrate my 34th birthday! Enjoy great food, drinks, and activities. RSVP now to reserve your spot!",
    images: [
      "https://sandboxvr.imgix.net/posters/squidgame-banner.jpg?auto=format&h=264&dpr=2",
    ],
  },
};

export default function CelebrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}