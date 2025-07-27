import { DocumentUpdateManyWithoutApplicationsInput } from "./DocumentUpdateManyWithoutApplicationsInput";
import { EducationUpdateManyWithoutApplicationsInput } from "./EducationUpdateManyWithoutApplicationsInput";
import { InstitutionWhereUniqueInput } from "../institution/InstitutionWhereUniqueInput";
import { TrainingUpdateManyWithoutApplicationsInput } from "./TrainingUpdateManyWithoutApplicationsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WorkExperienceUpdateManyWithoutApplicationsInput } from "./WorkExperienceUpdateManyWithoutApplicationsInput";

export type ApplicationUpdateInput = {
  applicationNumber?: string | null;
  comments?: string | null;
  documents?: DocumentUpdateManyWithoutApplicationsInput;
  educations?: EducationUpdateManyWithoutApplicationsInput;
  institution?: InstitutionWhereUniqueInput | null;
  status?: "Option1" | null;
  submissionDate?: Date | null;
  trainings?: TrainingUpdateManyWithoutApplicationsInput;
  user?: UserWhereUniqueInput | null;
  workExperiences?: WorkExperienceUpdateManyWithoutApplicationsInput;
};
