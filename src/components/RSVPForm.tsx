'use client';

import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { RSVP } from "@/types/rsvp";

interface RSVPFormProps {
  existingRSVP: RSVP | null;
  onSubmit: (name: string, attending: string, preferredTime: string | null, message: string) => void;
  onDelete: () => void;
}

interface Option {
  id: number;
  value: string;
}

export default function RSVPForm({ existingRSVP, onSubmit, onDelete }: RSVPFormProps) {
  const [attendingOptions, setAttendingOptions] = useState<Option[]>([]);
  const [preferredTimeOptions, setPreferredTimeOptions] = useState<Option[]>([]);
  const [selectedAttending, setSelectedAttending] = useState<string | null>(
    existingRSVP?.attending || null
  );
  const [selectedPreferredTime, setSelectedPreferredTime] = useState<string | null>(
    existingRSVP?.preferredTime || null
  );
  const [isDoingVR, setIsDoingVR] = useState<boolean>(!!existingRSVP?.preferredTime);

  useEffect(() => {
    async function fetchOptions() {
      try {
        const [attendingRes, preferredTimeRes] = await Promise.all([
          fetch("/api/attending-options"),
          fetch("/api/preferred-time-options"),
        ]);

        if (!attendingRes.ok || !preferredTimeRes.ok) {
          throw new Error("Failed to fetch options");
        }

        const [attendingData, preferredTimeData] = await Promise.all([
          attendingRes.json(),
          preferredTimeRes.json(),
        ]);

        setAttendingOptions(
          attendingData.map((opt: { id: number; option: string }) => ({
            id: opt.id,
            value: opt.option,
          }))
        );
        setPreferredTimeOptions(
          preferredTimeData.map((opt: { id: number; time: string }) => ({
            id: opt.id,
            value: opt.time,
          }))
        );
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    }

    fetchOptions();
  }, []);

  useEffect(() => {
    if (existingRSVP) {
      setSelectedAttending(existingRSVP.attending || null);
      setSelectedPreferredTime(existingRSVP.preferredTime || null);
      setIsDoingVR(!!existingRSVP.preferredTime);
    }
  }, [existingRSVP]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const message = formData.get("message") as string;

    onSubmit(
      name,
      selectedAttending || "",
      isDoingVR ? selectedPreferredTime : null,
      message || ""
    );
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">
        {existingRSVP ? "Edit RSVP" : "Add RSVP"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            name="name"
            placeholder="Name(s)"
            defaultValue={existingRSVP?.name || ""}
            className="border p-2 rounded"
            required
          />
          <Select
            value={selectedAttending || undefined}
            onValueChange={(value) => setSelectedAttending(value || null)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Attending (Yes/No/Maybe)" />
            </SelectTrigger>
            <SelectContent>
              {attendingOptions.map((option) => (
                <SelectItem key={option.id} value={option.value}>
                  {option.value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="vr-participation"
              checked={isDoingVR}
              onChange={(e) => setIsDoingVR(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="vr-participation">Participating in VR?</label>
          </div>
          {isDoingVR && (
            <Select
              value={selectedPreferredTime || undefined}
              onValueChange={(value) => setSelectedPreferredTime(value || null)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Preferred Time" />
              </SelectTrigger>
              <SelectContent>
                {preferredTimeOptions.map((option) => (
                  <SelectItem key={option.id} value={option.value}>
                    {option.value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
          <input
            name="message"
            placeholder="Message"
            defaultValue={existingRSVP?.message || ""}
            className="border p-2 rounded"
          />
        </div>
        <div className="flex gap-4 mt-4">
          <Button type="submit">{existingRSVP ? "Save Changes" : "Add RSVP"}</Button>
          {existingRSVP && (
            <Button type="button" variant="destructive" onClick={onDelete}>
              Delete RSVP
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}