import { Profile } from './profile.entity.js';

export class Project {
  id: number;
  name: string;
  url: string;
  profileId: number;
  profile?: Profile;
}
