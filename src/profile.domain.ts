export class Profile {
  id: number;
  name: string;
  description: string;
  links: ProfileLink;
  skills: string;
  experience: WorkExperience;
  projects: Project;
}

export class ProfileLink {
  id: number;
  label: string;
  url: string;
  profileId: number;
  profile?: Profile;
}

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

export class Project {
  id: number;
  name: string;
  url: string;
  profileId: number;
  profile?: Profile;
}
