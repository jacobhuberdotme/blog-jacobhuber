export interface RSVP {
  id: number;
  name: string;
  email: string;
  attending: string;
  preferredTime: string;
  message: string;
  created_at: string;
}

export interface RSVPFormProps {
  editingRSVP: RSVP | null;
  onSubmit: (name: string, attending: string, preferredTime: string) => void;
  onCancel: () => void;
}