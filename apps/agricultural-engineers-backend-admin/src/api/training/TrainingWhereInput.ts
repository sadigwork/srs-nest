import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TrainingWhereInput = {
  application?: ApplicationWhereUniqueInput;
  certificateNumber?: StringNullableFilter;
  completionDate?: DateTimeNullableFilter;
  id?: StringFilter;
  provider?: StringNullableFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
