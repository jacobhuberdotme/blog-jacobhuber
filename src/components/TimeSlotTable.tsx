import React from "react";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Info } from "lucide-react";

type TimeSlotTableProps = {
  timeSlots: { name: string; timeSlot: string }[]; // Adjusted to match the database structure
};

const TimeSlotTable: React.FC<TimeSlotTableProps> = ({ timeSlots }) => {
  // Group data by time slots
  const groupedByTime = timeSlots.reduce((acc, entry) => {
    const time = entry.timeSlot || "No Time Selected";
    if (!acc[time]) acc[time] = [];
    acc[time].push(entry.name);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <div className="overflow-x-auto">
        {/* Disclaimer */}
        <Alert className="mb-4 border-l-4 border-yellow-500 bg-yellow-100">
        <div className="flex items-start">
            <Info className="h-6 w-6 text-yellow-500 mr-3" />
            <div>
            <AlertTitle className="text-yellow-800 font-bold">Important Note</AlertTitle>
            <AlertDescription className="text-yellow-800">
                Each VR experience can only accommodate <strong>6 attendees</strong> per time slot. I apologize if you
                were unable to secure your preferred time. Please talk to Ellen, and she will get you a drink!
            </AlertDescription>
            </div>
        </div>
        </Alert>
      <Table className="min-w-full rounded-md">
        <TableHeader>
          <TableRow>
            <TableCell className="font-bold text-left">Time Slot</TableCell>
            <TableCell className="font-bold text-left">Attendees</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(groupedByTime).map(([time, attendees]) => (
            <TableRow key={time}>
              <TableCell>{time}</TableCell>
              <TableCell>
                {attendees.map((attendee, index) => (
                  <div key={index} className="mb-1">
                    {attendee}
                  </div>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TimeSlotTable;