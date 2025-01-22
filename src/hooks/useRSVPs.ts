import { useState, useEffect } from "react";
import { RSVP } from "@/types/rsvp";

export default function useRSVPs() {
  const [rsvps, setRsvps] = useState<RSVP[]>([]);
  const [message, setMessage] = useState<string | null>(null);

  const fetchRSVPs = async () => {
    try {
      const response = await fetch("/api/rsvps");
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to fetch RSVPs: ${errorMessage}`);
      }
      const data = await response.json();
      setRsvps(data);
      setMessage(null);
    } catch (error) {
      console.error("Error fetching RSVPs:", error);
      setMessage("Failed to fetch RSVP data.");
    }
  };

  useEffect(() => {
    fetchRSVPs();
  }, []);

  return { rsvps, message, fetchRSVPs };
}