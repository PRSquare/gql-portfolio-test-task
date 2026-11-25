/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Profile {
  name: string;
  description: string;
  links: ProfileLik[];
  skills: string[];
  experience: WorkExperience[];
  projects?: Nullable<Project[]>;
}

export interface ProfileLik {
  label: string;
  url: string;
}

export interface WorkExperience {
  company: string;
  title: string;
  beginTime: DateTime;
  endTime?: Nullable<DateTime>;
  achivements?: Nullable<string>;
}

export interface Project {
  name: string;
  url: string;
}

export interface IQuery {
  profile(): Profile | Promise<Profile>;
}

export type DateTime = any;
type Nullable<T> = T | null;
