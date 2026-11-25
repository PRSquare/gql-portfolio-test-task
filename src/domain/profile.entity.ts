import {ProfileLink} from './profile_link.entity.js';
import {WorkExperience} from './work_experience.entity.js';
import {Project} from './project.entity.js';

export class Profile {
  id: number;
  name: string;
  description: string;
  links: ProfileLink;
  skills: string;
  experience: WorkExperience;
  projects: Project;
}
