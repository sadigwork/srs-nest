import { Application } from "../application/Application";
import { Document } from "../document/Document";
import { Education } from "../education/Education";
import { Institution } from "../institution/Institution";
import { JsonValue } from "type-fest";
import { Training } from "../training/Training";
import { WorkExperience } from "../workExperience/WorkExperience";

export type User = {
  applications?: Array<Application>;
  createdAt: Date;
  documents?: Array<Document>;
  educations?: Array<Education>;
  email: string | null;
  emailVerified: boolean | null;
  firstName: string | null;
  id: string;
  institutions?: Array<Institution>;
  isActive: boolean | null;
  lastLoginAt: Date | null;
  lastName: string | null;
  phone: string | null;
  role?: "Option1" | null;
  roles: JsonValue;
  trainings?: Array<Training>;
  updatedAt: Date;
  username: string;
  workExperiences?: Array<WorkExperience>;
};
