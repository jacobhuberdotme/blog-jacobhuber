export interface RootSandbox {
  data: Data;
}

export interface Data {
  event: Event;
}

export interface Event {
  id: string;
  date: string;
  time: string;
  experience: Experience;
  location: Location;
  host: Host;
  members: Member[];
  status: string;
  sessionData: SessionData;
  media: Medum[];
  maxGuest: number;
  checkfrontBookingId: string;
  sku: string;
  itemRemoved: boolean;
  __typename: string;
}

export interface Experience {
  id: string;
  title: string;
  __typename: string;
}

export interface Location {
  shortname: string;
  name: string;
  address1: string;
  address2: string;
  phone: string;
  mapUrl: string;
  currency: string;
  storeCode: string;
  __typename: string;
}

export interface Host {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  enrolledLoyalty: boolean;
  __typename: string;
}

export interface Member {
  id: string;
  firstName: string;
  lastName: string;
  __typename: string;
}

export interface SessionData {
  challenges: unknown; // Replace `unknown` with the actual type if known
  extraData: ExtraData;
  team: Team[];
  members: Member2[];
  __typename: string;
}

export interface ExtraData {
  "chosenPath.Tomb": number;
  "chosenPath.UndergroundRiver": number;
  "chosenPath.null": number;
  "ending.DestroyTheShard": number;
  "ending.TakeThePower": number;
  "ending.null": number;
}

export interface Team {
  id: string;
  name: string;
  score: number;
  result: string;
  gameTime: number;
  puzzleTime: number | null;
  tutorialTime: number;
  sessionTime: number | null;
  isVictoryTeam: boolean | null;
  chosenPath: string;
  reachedTower: boolean;
  ending: string;
  npcsSaved: number | null;
  civilianResult: string | null;
  __typename: string;
}

export interface Member2 {
  id: string;
  sessionPlayerId: string;
  teamId: string | null;
  first_name: string | null;
  last_name: string | null;
  name: string;
  score: number;
  damageDealt: number;
  damageDealtWithTorch: number | null;
  damageDealtOnRunes: number;
  damageTaken: number;
  shots: number | null;
  shotHits: number | null;
  accuracy: number;
  character: string | null;
  mvp: boolean;
  kill: Kill[];
  extPlayerId: string | null;
  chosenArmor: string | null;
  class: string;
  gender: string;
  saveData: SaveData;
  __typename: string;
}

export interface Kill {
  name: string;
  count: number;
  __typename: string;
}

export interface SaveData {
  BerserkersAxe?: number;
  BowOfWizardry?: number;
  DefaultMaleSword?: number;
  SwordOfVenom?: number;
  lootTierFury: number;
  lootTierHunter: number;
  lootTierKnight: number;
  lootWeaponFury: number;
  lootWeaponHunter: number;
  lootWeaponKnight: number;
  previousWeaponFury?: number;
  ButchersAxe?: number;
  DefaultFemaleAxe?: number;
  SwordOfThunder?: number;
  previousWeaponKnight?: number;
  BowOfTheEagle?: number;
  DefaultMaleCrossbow?: number;
  previousWeaponHunter?: number;
  DefaultMaleAxe?: number;
}

export interface Medum {
  webm: boolean;
  type: string;
  thumbnail: Thumbnail;
  video: Video;
  __typename: string;
}

export interface Thumbnail {
  name: string;
  contentType: string;
  url: string;
  __typename: string;
}

export interface Video {
  name: string;
  contentType: string;
  url: string;
  __typename: string;
}