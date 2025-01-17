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
  onSubmit: (name: string, attending: string, preferredTime: string, message: string) => void;
  onDelete: () => void; // Add delete handler
}

interface Option {
  id: number;
  value: string;
}

export default function RSVPForm({ existingRSVP, onSubmit, onDelete }: RSVPFormProps) {
  const [attendingOptions, setAttendingOptions] = useState<Option[]>([]);
  const [preferredTimeOptions, setPreferredTimeOptions] = useState<Option[]>([]);
  const [selectedAttending, setSelectedAttending] = useState<string | undefined>(
    existingRSVP?.attending
  );
  const [selectedPreferredTime, setSelectedPreferredTime] = useState<string | undefined>(
    existingRSVP?.preferredTime
  );

  // Fetch dropdown options
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

  // Update selected values when editing an RSVP
  useEffect(() => {
    if (existingRSVP) {
      setSelectedAttending(existingRSVP.attending);
      setSelectedPreferredTime(existingRSVP.preferredTime);
    }
  }, [existingRSVP]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const message = formData.get("message") as string;

    if (selectedAttending && selectedPreferredTime) {
      onSubmit(name, selectedAttending, selectedPreferredTime, message || "");
    } else {
      console.error("Attending or Preferred Time not selected");
    }
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
            placeholder="Name"
            defaultValue={existingRSVP?.name || ""}
            className="border p-2 rounded"
            required
          />
          <Select
            value={selectedAttending}
            onValueChange={setSelectedAttending}
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
          <Select
            value={selectedPreferredTime}
            onValueChange={setSelectedPreferredTime}
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