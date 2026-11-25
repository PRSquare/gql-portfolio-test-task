import { Inject } from '@nestjs/common';
import { Resolver, Query, ResolveField, Parent, Args, Int } from '@nestjs/graphql';
import { ProfileRepository } from './profile.repository.js';
import {
  Profile,
  ProfileLink,
  WorkExperience,
  Project,
} from './profile.domain.js';

@Resolver(() => Profile)
export class AppResolver {
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
