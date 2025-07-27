import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WorkExperienceWhereInput = {
  application?: ApplicationWhereUniqueInput;
  employerName?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  position?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
