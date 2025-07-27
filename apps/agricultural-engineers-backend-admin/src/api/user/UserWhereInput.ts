import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";
import { DocumentListRelationFilter } from "../document/DocumentListRelationFilter";
import { EducationListRelationFilter } from "../education/EducationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InstitutionListRelationFilter } from "../institution/InstitutionListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TrainingListRelationFilter } from "../training/TrainingListRelationFilter";
import { WorkExperienceListRelationFilter } from "../workExperience/WorkExperienceListRelationFilter";

export type UserWhereInput = {
  applications?: ApplicationListRelationFilter;
  documents?: DocumentListRelationFilter;
  educations?: EducationListRelationFilter;
  email?: StringNullableFilter;
  emailVerified?: BooleanNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  institutions?: InstitutionListRelationFilter;
  isActive?: BooleanNullableFilter;
  lastLoginAt?: DateTimeNullableFilter;
  lastName?: StringNullableFilter;
  phone?: StringNullableFilter;
  role?: "Option1";
  trainings?: TrainingListRelationFilter;
  username?: StringFilter;
  workExperiences?: WorkExperienceListRelationFilter;
};
