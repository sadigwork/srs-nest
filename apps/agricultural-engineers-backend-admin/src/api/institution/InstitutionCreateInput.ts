import { ApplicationCreateNestedManyWithoutInstitutionsInput } from "./ApplicationCreateNestedManyWithoutInstitutionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InstitutionCreateInput = {
  applications?: ApplicationCreateNestedManyWithoutInstitutionsInput;
  name?: string | null;
  registrationNumber?: string | null;
  typeField?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
  verified?: boolean | null;
};
