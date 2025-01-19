'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RSVP } from "@/types/rsvp";

interface RSVPTableProps {
  rsvps: RSVP[];
}

export default function RSVPTable({ rsvps }: RSVPTableProps) {
  return (
    <Table>
      {/* <TableCaption>A list of RSVP responses.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead>Name(s)</TableHead>
          <TableHead>Attending</TableHead>
          <TableHead>Preferred Time</TableHead>
          <TableHead>Message</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rsvps.length === 0 ? (
          <TableRow>
            <TableCell colSpan={5} className="text-center">
              No RSVPs found
            </TableCell>
          </TableRow>
        ) : (
          rsvps.map((rsvp) => (
            <TableRow key={rsvp.id}>
              <TableCell>{rsvp.name}</TableCell>
              <TableCell>{rsvp.attending}</TableCell>
              <TableCell>{rsvp.preferredTime}</TableCell>
              <TableCell>{rsvp.message}</TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}