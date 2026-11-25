import { Profile } from './profile.entity.js';

export class WorkExperience {
  id: number;
  company: string;
  title: string;
  beginTime: Date;
  endTime?: Date;
  achivements: string;
  profileId: number;
  profile?: Profile;
}
