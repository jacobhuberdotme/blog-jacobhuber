'use client';

import { useState, useEffect } from 'react';
import { useUser, useClerk } from '@clerk/nextjs'; // Import useClerk
import RSVPForm from '@/components/RSVPForm';
import RSVPTable from '@/components/RSVPTable';
import useRSVPs from '@/hooks/useRSVPs';
import { RSVP } from '@/types/rsvp';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

export default function RSVPTrackingPage() {
  const { rsvps, message, fetchRSVPs } = useRSVPs();
  const { user, isSignedIn } = useUser();
  const { openSignIn } = useClerk(); // Access the Clerk client to use openSignIn
  const email = user?.emailAddresses[0]?.emailAddress;

  const [userRSVP, setUserRSVP] = useState<RSVP | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const currentRSVP = rsvps.find((rsvp) => rsvp.email === email) || null;
    setUserRSVP(currentRSVP);
  }, [rsvps, email]);

  const handleRSVPButtonClick = () => {
    if (!isSignedIn) {
      // Open the Clerk sign-in modal if the user is not signed in
      openSignIn();
    } else {
      setIsFormOpen((prev) => !prev);
    }
  };

  const addRSVP = async (name: string, attending: string, preferredTime: string, message: string) => {
    try {
      if (!email) throw new Error('User email not available.');
      const response = await fetch('/api/rsvps', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, attending, preferredTime, message }),
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to add RSVP: ${errorMessage}`);
      }
      fetchRSVPs();
    } catch (error) {
      console.error(error);
    }
  };

  const updateRSVP = async (name: string, attending: string, preferredTime: string, message: string) => {
    try {
      if (!userRSVP) throw new Error('No RSVP selected for editing.');
      await fetch(`/api/rsvps/${userRSVP.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, attending, preferredTime, message }),
      });
      fetchRSVPs();
    } catch (error) {
      console.error(error);
    }
  };

  const removeRSVP = async () => {
    try {
      if (!userRSVP) throw new Error('No RSVP to delete.');
      await fetch(`/api/rsvps/${userRSVP.id}`, {
        method: 'DELETE',
        headers: { email: email || '' },
      });
      fetchRSVPs();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-6 space-y-8">
      {/* Event Details */}
      <Card>
        <CardHeader>
          <img
            src="https://sandboxvr.imgix.net/posters/squidgame-banner.jpg?auto=format&h=264&dpr=2"
            alt="Sandbox VR Experience"
            className="rounded-lg w-full h-64 object-cover mb-4"
          />
          <CardTitle className="text-3xl">Jacob&apos;s 34th Birthday</CardTitle>
          <CardDescription>
            Join me at Sandbox VR and the Foundry to celebrate my 34th birthday! Come and go as you please, enjoy great food, drinks, and activities, and sign up for a VR time slot if you&apos;re interested.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            I will be doing the 6:15 PM experience and plan to arrive at the{' '}
            <a
              href="https://www.cityfoundrystl.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Foundry
            </a>{' '}
            around 5:30 PM for a bite to eat and some drinks. I&apos;ll hang out until the last VR session (6:55 PM) and likely a bit after. Let&apos;s see where the night takes us!
          </p>
          <p className="mt-2">
            <strong>Experience:</strong>{' '}
            <a
              href="https://sandboxvr.com/stlouis/experience/squidgame"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Squid Game VR
            </a>
          </p>
          <p>
            <strong>Location:</strong>{' '}
            <a
              href="https://www.google.com/maps/dir//3730+Foundry+Way+%23114,+St.+Louis,+MO+63110"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Sandbox VR, 3730 Foundry Way #114, St. Louis, MO 63110
            </a>
          </p>
          <p>
            <strong>Times:</strong> 6:15 PM, 6:40 PM, 6:55 PM (can add additional if needed)
          </p>
          <p>
            <strong>Cost:</strong> $63 per person.{' '}
            <a
              href="https://account.venmo.com/u/cobmin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Please Venmo me
            </a>{' '}
            and sign up for your preferred time below. Feel free to include an alternative time in your message if needed.
          </p>
          <p className="mt-4">
            <strong>Don&apos;t want to do VR?</strong> No problem! You can check out{' '}
            <a
              href="https://www.puttshack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Puttshack
            </a>{' '}
            at the Foundry or just hang out at one of the many cool spots nearby.
          </p>
        </CardContent>
      </Card>

      <Collapsible open={isFormOpen}>
  <div className="flex items-center justify-start gap-4 mb-4">
    <CollapsibleTrigger asChild>
      <Button
        onClick={handleRSVPButtonClick}
        className="px-6 py-4 text-xl font-semibold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 shadow-lg rounded-lg transition-all duration-200 transform hover:scale-105"
      >
        {isFormOpen ? 'Hide RSVP Form' : 'Add/Edit RSVP'}
      </Button>
    </CollapsibleTrigger>
  </div>
  <CollapsibleContent>
    {isSignedIn ? (
      <>
        <h2 className="text-2xl font-bold mb-4">
          {userRSVP ? 'Edit Your RSVP' : 'Add Your RSVP'}
        </h2>
        {message && <p className="text-red-500">{message}</p>}
        <RSVPForm
          existingRSVP={userRSVP}
          onSubmit={(name, attending, preferredTime, message) =>
            userRSVP
              ? updateRSVP(
                  name,
                  attending || '',
                  preferredTime || '',
                  message
                )
              : addRSVP(
                  name,
                  attending || '',
                  preferredTime || '',
                  message
                )
          }
          onDelete={removeRSVP}
        />
      </>
    ) : (
      <p className="text-center text-gray-500">Please log in to RSVP!</p>
    )}
  </CollapsibleContent>
</Collapsible>

      <Separator className="my-6" />

      {/* RSVP List */}
      <div>
        <h2 className="text-2xl font-bold mb-4">RSVP List</h2>
        <RSVPTable rsvps={rsvps} />
      </div>
    </div>
  );
}