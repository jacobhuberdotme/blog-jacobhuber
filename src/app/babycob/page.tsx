'use client';

import { useEffect, useState } from 'react';
import { useUser, useClerk } from '@clerk/nextjs';
import { RSVP } from '@/types/rsvp';
import RSVPForm from '@/components/RSVPForm';
import RSVPTable from "@/components/RSVPTable";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import useRSVPs from '@/hooks/useRSVPs';
import Image from 'next/image';

export default function BabyShowerPage() {
  const { user, isSignedIn } = useUser();
  const { openSignIn } = useClerk();
  const email = user?.emailAddresses[0]?.emailAddress;
  const { rsvps, fetchRSVPs, message } = useRSVPs();

  const [userRSVP, setUserRSVP] = useState<RSVP | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isRSVPListOpen, setIsRSVPListOpen] = useState(false);

  useEffect(() => {
    const currentRSVP = rsvps.find((rsvp) => rsvp.email === email);
    setUserRSVP(currentRSVP && currentRSVP.guests.length > 0 ? currentRSVP : null);
  }, [rsvps, email]);

  const handleRSVPClick = () => {
    if (!isSignedIn) openSignIn();
    else setIsFormOpen((prev) => !prev);
  };

  const addRSVP = async (guests: { name: string; attending: boolean }[], msg: string) => {
    if (!email) return;
    await fetch('/api/rsvps', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ guests, email, message: msg }),
    });
    fetchRSVPs();
  };

  const updateRSVP = async (guests: { name: string; attending: boolean }[], msg: string) => {
    if (!userRSVP) return;
    await fetch(`/api/rsvps/${userRSVP.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ guests, email, message: msg }),
    });
    await fetchRSVPs();
  };

  // const removeRSVP = async () => {
  //   if (!userRSVP) return;
  //   await fetch(`/api/rsvps/${userRSVP.id}`, {
  //     method: 'DELETE',
  //     headers: { email: email || '' },
  //   });
  //   await fetchRSVPs();
  // };

  return (
    <div className="space-y-8 max-w-3xl mx-auto p-4">
      <Card className="overflow-hidden rounded-xl">
  <div className="relative w-full h-72">
    <Image
      src="/baby-shower.png"
      alt="Baby Shower Floral Header"
      fill
      priority
      className="object-cover"
      sizes="100vw"
    />
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center px-4 bg-black/40">
      <h1 className="text-3xl font-bold mb-2">A Baby BOY is in Bloom</h1>
      <p className="text-lg max-w-xl">
        Open house baby shower for Baby Huber
      </p>
      <p>All are welcome!</p>
    </div>
  </div>

  <CardContent className="text-center space-y-3 pt-6">
    <p><strong>Date:</strong> Saturday, June 7th</p>
    <p><strong>Time:</strong> 12 PM – 6 PM</p>
    <p><strong>Address:</strong> 2327 Park Ave, St. Louis, MO 63104</p>
    <p>
      <strong>Registry:</strong>{' '}
      <a
        href="https://my.babylist.com/ellen-huber"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        babylist.com
      </a>
    </p>
    <p><strong>RSVP:</strong> By May 17th</p>
  </CardContent>
</Card>

<Collapsible open={isFormOpen}>
        <div className="flex justify-center">
          <CollapsibleTrigger asChild>
          <Button
  onClick={handleRSVPClick}
  className="w-full max-w-3xl mx-auto bg-[#b7cfdc] hover:bg-[#a9c0d1] text-white text-lg py-6 font-semibold rounded-md transition"
>
  {isFormOpen ? 'Hide RSVP' : 'Add RSVP'}
</Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          {isSignedIn ? (
            <>
              {/* <h2 className="text-xl font-semibold mt-4 text-center">
                {userRSVP ? 'Edit Your RSVP' : 'Add Your RSVP'}
              </h2> */}
              {message && <p className="text-red-500 text-center">{message}</p>}
              <RSVPForm
                existingRSVP={userRSVP}
                onSubmit={(guests, msg) =>
                  userRSVP
                    ? updateRSVP(guests, msg)
                    : addRSVP(guests, msg)
                }
              />
            </>
          ) : (
            <p className="text-center text-gray-500 mt-4">Please sign in to RSVP.</p>
          )}
        </CollapsibleContent>
      </Collapsible>

      {['nj9zyv2mgd@privaterelay.appleid.com', 'hello@jacobhuber.me'].includes(email || '') && (
        <div className="text-center">
          <Button
            onClick={() => setIsRSVPListOpen(!isRSVPListOpen)}
            className="w-full max-w-3xl mx-auto bg-[#d9b7c6] hover:bg-[#cba9b7] text-white text-lg py-4 font-semibold rounded-md transition"
          >
            {isRSVPListOpen ? 'Hide Guest List' : 'View Guest List'}
          </Button> 
          {isRSVPListOpen && <RSVPTable rsvps={rsvps} />}
        </div>
      )}
    </div>
  );
}