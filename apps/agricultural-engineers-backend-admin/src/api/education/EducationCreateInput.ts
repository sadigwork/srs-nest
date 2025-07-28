import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EducationCreateInput = {
  application?: ApplicationWhereUniqueInput | null;
  degree?: string | null;
  fieldOfStudy?: string | null;
  graduationYear?: number | null;
  institutionName?: string | null;
  user?: UserWhereUniqueInput | null;
};
