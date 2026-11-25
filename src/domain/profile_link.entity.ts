import { Profile } from './profile.entity.js';

export class ProfileLink {
  id: number;
  label: string;
  url: string;
  profileId: number;
  profile?: Profile;
}
