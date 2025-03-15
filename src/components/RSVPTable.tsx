'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Guest {
  id?: number;
  name: string;
  attending: boolean;
}

interface RSVP {
  id: number;
  email: string;
  message?: string;
  created_at: string;
  guests: Guest[];
}

interface RSVPTableProps {
  rsvps: RSVP[];
}

export default function RSVPTable({ rsvps }: RSVPTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Guest Name</TableHead>
          <TableHead>Attending</TableHead>
          <TableHead>Message</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rsvps.length === 0 ? (
          <TableRow>
            <TableCell colSpan={4} className="text-center">
              No RSVPs found
            </TableCell>
          </TableRow>
        ) : (
          rsvps.flatMap((rsvp) =>
            rsvp.guests.map((guest) => (
              <TableRow key={`${rsvp.id}-${guest.id}`}>
                <TableCell>{guest.name}</TableCell>
                <TableCell>{guest.attending ? "Yes" : "No"}</TableCell>
                <TableCell>{rsvp.message || "—"}</TableCell>
                <TableCell>{rsvp.email}</TableCell>
              </TableRow>
            ))
          )
        )}
      </TableBody>
    </Table>
  );
}