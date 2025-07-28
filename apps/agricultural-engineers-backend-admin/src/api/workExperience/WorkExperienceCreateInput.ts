import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WorkExperienceCreateInput = {
  application?: ApplicationWhereUniqueInput | null;
  employerName?: string | null;
  endDate?: Date | null;
  position?: string | null;
  startDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
