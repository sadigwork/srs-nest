import { DocumentCreateNestedManyWithoutApplicationsInput } from "./DocumentCreateNestedManyWithoutApplicationsInput";
import { EducationCreateNestedManyWithoutApplicationsInput } from "./EducationCreateNestedManyWithoutApplicationsInput";
import { InstitutionWhereUniqueInput } from "../institution/InstitutionWhereUniqueInput";
import { TrainingCreateNestedManyWithoutApplicationsInput } from "./TrainingCreateNestedManyWithoutApplicationsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WorkExperienceCreateNestedManyWithoutApplicationsInput } from "./WorkExperienceCreateNestedManyWithoutApplicationsInput";

export type ApplicationCreateInput = {
  applicationNumber?: string | null;
  comments?: string | null;
  documents?: DocumentCreateNestedManyWithoutApplicationsInput;
  educations?: EducationCreateNestedManyWithoutApplicationsInput;
  institution?: InstitutionWhereUniqueInput | null;
  status?: "Option1" | null;
  submissionDate?: Date | null;
  trainings?: TrainingCreateNestedManyWithoutApplicationsInput;
  user?: UserWhereUniqueInput | null;
  workExperiences?: WorkExperienceCreateNestedManyWithoutApplicationsInput;
};
