import { ApplicationUpdateManyWithoutInstitutionsInput } from "./ApplicationUpdateManyWithoutInstitutionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InstitutionUpdateInput = {
  applications?: ApplicationUpdateManyWithoutInstitutionsInput;
  name?: string | null;
  registrationNumber?: string | null;
  typeField?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
  verified?: boolean | null;
};
