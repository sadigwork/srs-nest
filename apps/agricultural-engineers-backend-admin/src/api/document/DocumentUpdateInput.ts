import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DocumentUpdateInput = {
  application?: ApplicationWhereUniqueInput | null;
  fileUrl?: InputJsonValue;
  title?: string | null;
  typeField?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
  verified?: boolean | null;
};
