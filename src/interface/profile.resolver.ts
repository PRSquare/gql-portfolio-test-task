import { Inject } from '@nestjs/common';
import { Resolver, Query, ResolveField, Parent, Args, Int } from '@nestjs/graphql';
import { ProfileRepository } from '../infra/profile.repository.js';
import { Profile } from '../domain/profile.entity.js';
import { ProfileLink } from '../domain/profile_link.entity.js';
import { Project } from '../domain/project.entity.js';
import { WorkExperience } from '../domain/work_experience.entity.js';


@Resolver(() => Profile)
export class ProfileResolver {
  constructor (
    @Inject()
    public profileRepository: ProfileRepository,
  ){}
  
  @Query()
  async profile() {
    const profile = await this.profileRepository.profile.findFirst();
    return profile;
  }

  @ResolveField()
  async links(@Parent() profile: Profile) {
    const {id} = profile;
    const links = await this.profileRepository.profileLink.findMany({ where: { profileId: id } });
    return links;
  }
  
  @ResolveField()
  async experience(@Parent() profile: Profile) {
    const {id} = profile;
    const works = await this.profileRepository.workExperience.findMany({ where: { profileId: id } });
    return works;
  }

  @ResolveField()
  async projects(@Parent() profile: Profile) {
    const {id} = profile;
    const projects = await this.profileRepository.project.findMany({ where: { profileId: id } });
    return projects;
  }
}
