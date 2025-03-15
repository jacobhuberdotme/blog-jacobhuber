export interface Guest {
  id?: number;
  name: string;
  attending: boolean;
}

export interface RSVP {
  id: number;
  email: string;
  guests: Guest[];
  message: string;
  created_at: string;
}

export interface RSVPFormProps {
  existingRSVP: RSVP | null;
  onSubmit: (guests: { name: string; attending: boolean }[], message: string) => void;
  onDelete?: () => void;
}