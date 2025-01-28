"use client";

import { useState, useEffect } from "react";
import { DataTable } from "@/app/celebration/data-table";
import { eventColumns, EventRow } from "@/app/celebration/columns";
import { Skeleton } from "@/components/ui/skeleton";
import { GuestEvent } from "@/types/SandboxGuest";

interface Member {
  name: string;
  score: number;
}

interface Media {
  type: string;
  video: {
    url: string;
  };
  thumbnail: {
    url: string;
  };
}

interface EventData {
  id: string;
  date: string;
  time: string;
  experience: { title: string };
  sessionData: {
    team: { name: string }[];
    members: Member[];
  };
  media: Media[];
}

interface MediaWithTeam {
  type: string;
  videoUrl: string;
  thumbnailUrl: string;
  teamName: string;
}

export default function Scores() {
  const [events, setEvents] = useState<EventRow[]>([]);
  const [mediaUrls, setMediaUrls] = useState<MediaWithTeam[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const flattenEventData = (events: EventData[]): EventRow[] => {
    return events
      .flatMap((event) =>
        event.sessionData.members.map((member) => ({
          id: event.id,
          date: event.date,
          time: event.time,
          experienceTitle: event.experience.title,
          team: event.sessionData.team[0]?.name || "N/A",
          memberName: member.name,
          memberScore: member.score,
        }))
      )
      .filter((event) => event.experienceTitle === "Squid Game Virtuals")
      .sort((a, b) => b.memberScore - a.memberScore); // Sort by score descending
  };

  const extractMediaUrls = (events: EventData[]): MediaWithTeam[] => {
    return events.flatMap((event) =>
      event.media
        .filter((media) => media.type === "SquidGame_Trailer" || media.type === "Dance_Selfie")
        .map((media) => ({
          type: media.type === "SquidGame_Trailer" ? "Highlights" : "Dance Party",
          videoUrl: media.video.url,
          thumbnailUrl: media.thumbnail.url,
          teamName: event.sessionData.team[0]?.name || "N/A",
        }))
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("/api/sandboxAuth", { method: "POST" });
        if (!response.ok) throw new Error("Failed to fetch auth token");
        const { id_token }: { id_token: string } = await response.json();

        const guestResponse = await fetch("/api/sandboxGuest", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${id_token}`,
            "Content-Type": "application/json",
          },
        });

        if (!guestResponse.ok) throw new Error("Failed to fetch guest data");

        const { data } = await guestResponse.json();
        const eventIds = data.currentGuest.events.map((event: GuestEvent) => event.id);

        const eventPromises = eventIds.map((id: string) =>
          fetch("/api/sandboxEvents", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${id_token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ eventId: id }),
          }).then((res) => res.json())
        );

        const eventData = await Promise.all(eventPromises) as { data: { event: EventData } }[];
        const flatData = flattenEventData(eventData.map((data) => data.data.event));
        const mediaData = extractMediaUrls(eventData.map((data) => data.data.event));
        setEvents(flatData);
        setMediaUrls(mediaData);
      } catch (err: unknown) {
        console.error("Error fetching data:", err);
      
        if (err instanceof Error) {
          // Access the `message` property safely
          setError(err.message || "An error occurred while fetching data.");
        } else {
          // Fallback message for non-Error types
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        {/* Skeleton for Table */}
        <div className="rounded-md border p-4">
          {[...Array(10)].map((_, i) => (
            <Skeleton key={i} className="h-8 w-full mb-2" />
          ))}
          <div className="flex items-center justify-between mt-4">
            <Skeleton className="h-8 w-1/6" />
            <Skeleton className="h-8 w-1/6" />
          </div>
        </div>

        {/* Skeleton for Videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="rounded-md border p-4">
              <Skeleton className="h-8 w-3/4 mb-2" />
              <Skeleton className="h-48 w-full rounded-md" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="space-y-4">
      <DataTable columns={eventColumns} data={events} />

      <h2 className="text-2xl font-bold mt-8">Videos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mediaUrls.length > 0 ? (
          mediaUrls.map((media, index) => (
            <div key={index} className="rounded-md border p-4">
              <p className="font-semibold">{media.teamName} - {media.type}</p>
              <video
                controls
                preload="none"
                poster={media.thumbnailUrl}
                className="rounded-md w-full h-auto"
              >
                <source src={media.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))
        ) : (
          <p>No videos available</p>
        )}
      </div>
    </div>
  );
}