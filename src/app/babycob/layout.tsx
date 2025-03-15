import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  title: "Baby Huber Shower | Join Us to Celebrate",
  description:
    "A baby boy is in bloom! Join us at our home in St. Louis for an open house baby shower celebrating Baby Huber. Food, fun, and joy await. RSVP today!",
  keywords: [
    "Baby Shower",
    "Baby Huber",
    "St. Louis Baby Shower",
    "RSVP Baby Shower",
    "Baby Boy Celebration",
    "Huber Family Event"
  ],
  authors: [{ name: "Jacob Huber", url: "https://www.jacobhuber.me" }],
  openGraph: {
    title: "Baby Huber Shower | Join Us to Celebrate",
    description:
      "A baby boy is in bloom! Join us at our home in St. Louis for an open house baby shower celebrating Baby Huber. Food, fun, and joy await. RSVP today!",
    url: "https://www.jacobhuber.me/babycob",
    images: [
      {
        url: "https://www.jacobhuber.me/baby-shower-invite.png",
        alt: "Baby Shower Bloom Invitation",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Baby Huber Shower | Join Us to Celebrate",
    description:
      "A baby boy is in bloom! Join us for an open house baby shower in St. Louis celebrating Baby Huber. RSVP online.",
    images: [
      "https://www.jacobhuber.me/baby-shower-invite.png",
    ],
  },
};

export default function CelebrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <Toaster />
    </div>
  );
}