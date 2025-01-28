export interface GuestEvent {
    id: string;
    location: {
      shortname: string;
      __typename: string;
    };
    experience: {
      id: string;
      title: string;
      __typename: string;
    };
    date: string;
    time: string;
    __typename: string;
  }
  
  // interface Guest {
  //   id: string;
  //   email: string;
  //   firstName: string;
  //   lastName: string;
  //   events: Event[];
  //   __typename: string;
  // }