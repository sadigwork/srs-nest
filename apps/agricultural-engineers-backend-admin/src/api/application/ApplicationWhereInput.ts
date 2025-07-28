import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DocumentListRelationFilter } from "../document/DocumentListRelationFilter";
import { EducationListRelationFilter } from "../education/EducationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { InstitutionWhereUniqueInput } from "../institution/InstitutionWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TrainingListRelationFilter } from "../training/TrainingListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WorkExperienceListRelationFilter } from "../workExperience/WorkExperienceListRelationFilter";

export type ApplicationWhereInput = {
  applicationNumber?: StringNullableFilter;
  comments?: StringNullableFilter;
  documents?: DocumentListRelationFilter;
  educations?: EducationListRelationFilter;
  id?: StringFilter;
  institution?: InstitutionWhereUniqueInput;
  status?: "Option1";
  submissionDate?: DateTimeNullableFilter;
  trainings?: TrainingListRelationFilter;
  user?: UserWhereUniqueInput;
  workExperiences?: WorkExperienceListRelationFilter;
};
