import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TrainingUpdateInput = {
  application?: ApplicationWhereUniqueInput | null;
  certificateNumber?: string | null;
  completionDate?: Date | null;
  provider?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
