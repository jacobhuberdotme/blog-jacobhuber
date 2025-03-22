'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RSVP } from "@/types/rsvp";
import { toast } from "sonner";
import { Card, CardHeader } from "./ui/card";
import Image from 'next/image';

interface RSVPFormProps {
  existingRSVP: RSVP | null;
  onSubmit: (guests: { id?: number; name: string; attending: boolean }[], message: string) => void;
}

export default function RSVPForm({ existingRSVP, onSubmit }: RSVPFormProps) {
  const [guests, setGuests] = useState<{ id?: number; name: string; attending: boolean }[]>(
    existingRSVP?.guests || [{ name: "", attending: true }]
  );
  const [message, setMessage] = useState(existingRSVP?.message || "");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleGuestChange = (index: number, key: "name" | "attending", value: string | boolean) => {
    const updatedGuests = [...guests];
    updatedGuests[index] = {
      ...updatedGuests[index],
      [key]: value,
    };
    setGuests(updatedGuests);
  };

  const addGuest = () => {
    setGuests([...guests, { name: "", attending: true }]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (existingRSVP) {
        await fetch(`/api/rsvps/${existingRSVP.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ guests, message }),
        });
        toast.success("RSVP saved!", {
          description: "Your changes have been saved successfully.",
        });
      } else {
        onSubmit(guests, message);
        toast.success("RSVP saved!", {
          description: "Your changes have been saved successfully.",
        });
      }
    } catch (err) {
      console.error('Failed to submit RSVP:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">
        {existingRSVP ? "Edit RSVP" : "Add RSVP"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          {guests.map((guest, index) => (
            <div key={index} className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4 w-full">
              <input
                type="text"
                value={guest.name}
                onChange={(e) => handleGuestChange(index, "name", e.target.value)}
                placeholder="Guest name"
                className="border p-2 rounded sm:flex-1 w-full"
                required
                disabled={isSubmitting}
              />
              <div className="flex flex-row gap-2 sm:gap-4 sm:flex-1 w-full">
                <select
                  value={guest.attending ? "yes" : "no"}
                  onChange={(e) => handleGuestChange(index, "attending", e.target.value === "yes")}
                  className="border p-2 rounded w-full"
                  disabled={isSubmitting}
                >
                  <option value="yes">Attending</option>
                  <option value="no">Not Attending</option>
                </select>
                {existingRSVP?.id && (
                  <Button
                    type="button"
                    onClick={async () => {
                      const removedGuest = guests[index];
                      const updatedGuests = guests.filter((_, i) => i !== index);
                      setGuests(updatedGuests);

                      if (removedGuest.id) {
                        await fetch(`/api/guests/${removedGuest.id}`, {
                          method: 'DELETE',
                        });
                      }
                    }}
                    className="bg-[#d9b7c6] hover:bg-[#cba9b7] text-white text-sm px-4 py-2 rounded-md whitespace-nowrap sm:whitespace-nowrap sm:flex-shrink-0"
                    disabled={isSubmitting}
                  >
                    Remove
                  </Button>
                )}
              </div>
            </div>
          ))}
          <Button type="button" onClick={addGuest} className="bg-[#b7cfdc] hover:bg-[#a9c0d1] text-sm" disabled={isSubmitting}>
            + Add another guest
          </Button>
          <textarea
            placeholder="Optional message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border p-2 rounded w-full"
            disabled={isSubmitting}
          />
          <Card>
                  <CardHeader>
                    <div className="relative w-full h-64 rounded-xl overflow-hidden">
                      <Image
                        src="/diaper-raffle.png"
                        alt="Diaper Raffle"
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                    </div>
                  </CardHeader>
                </Card>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full">
            <Button
              type="submit"
              className="w-full sm:w-1/2 h-14 bg-[#b7cfdc] hover:bg-[#a9c0d1] text-white font-semibold px-6 rounded-md"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : existingRSVP ? "Save Changes" : "Submit RSVP"}
            </Button>
            <a
              href="/baby-shower.ics"
              download
              className={`w-full sm:w-1/2 h-14 ${isSubmitting ? 'opacity-50 pointer-events-none' : ''} bg-[#d9b7c6] hover:bg-[#cba9b7] text-white font-semibold px-6 rounded-md text-center flex items-center justify-center`}
            >
              Add to Calendar
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}