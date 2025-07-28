import { ApplicationUpdateManyWithoutUsersInput } from "./ApplicationUpdateManyWithoutUsersInput";
import { DocumentUpdateManyWithoutUsersInput } from "./DocumentUpdateManyWithoutUsersInput";
import { EducationUpdateManyWithoutUsersInput } from "./EducationUpdateManyWithoutUsersInput";
import { InstitutionUpdateManyWithoutUsersInput } from "./InstitutionUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TrainingUpdateManyWithoutUsersInput } from "./TrainingUpdateManyWithoutUsersInput";
import { WorkExperienceUpdateManyWithoutUsersInput } from "./WorkExperienceUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  applications?: ApplicationUpdateManyWithoutUsersInput;
  documents?: DocumentUpdateManyWithoutUsersInput;
  educations?: EducationUpdateManyWithoutUsersInput;
  email?: string | null;
  emailVerified?: boolean | null;
  firstName?: string | null;
  institutions?: InstitutionUpdateManyWithoutUsersInput;
  isActive?: boolean | null;
  lastLoginAt?: Date | null;
  lastName?: string | null;
  password?: string;
  phone?: string | null;
  role?: "Option1" | null;
  roles?: InputJsonValue;
  trainings?: TrainingUpdateManyWithoutUsersInput;
  username?: string;
  workExperiences?: WorkExperienceUpdateManyWithoutUsersInput;
};
