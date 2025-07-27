import { ApplicationCreateNestedManyWithoutUsersInput } from "./ApplicationCreateNestedManyWithoutUsersInput";
import { DocumentCreateNestedManyWithoutUsersInput } from "./DocumentCreateNestedManyWithoutUsersInput";
import { EducationCreateNestedManyWithoutUsersInput } from "./EducationCreateNestedManyWithoutUsersInput";
import { InstitutionCreateNestedManyWithoutUsersInput } from "./InstitutionCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TrainingCreateNestedManyWithoutUsersInput } from "./TrainingCreateNestedManyWithoutUsersInput";
import { WorkExperienceCreateNestedManyWithoutUsersInput } from "./WorkExperienceCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  applications?: ApplicationCreateNestedManyWithoutUsersInput;
  documents?: DocumentCreateNestedManyWithoutUsersInput;
  educations?: EducationCreateNestedManyWithoutUsersInput;
  email?: string | null;
  emailVerified?: boolean | null;
  firstName?: string | null;
  institutions?: InstitutionCreateNestedManyWithoutUsersInput;
  isActive?: boolean | null;
  lastLoginAt?: Date | null;
  lastName?: string | null;
  password: string;
  phone?: string | null;
  role?: "Option1" | null;
  roles: InputJsonValue;
  trainings?: TrainingCreateNestedManyWithoutUsersInput;
  username: string;
  workExperiences?: WorkExperienceCreateNestedManyWithoutUsersInput;
};
