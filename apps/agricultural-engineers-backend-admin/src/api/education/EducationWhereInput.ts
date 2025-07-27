import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EducationWhereInput = {
  application?: ApplicationWhereUniqueInput;
  degree?: StringNullableFilter;
  fieldOfStudy?: StringNullableFilter;
  graduationYear?: IntNullableFilter;
  id?: StringFilter;
  institutionName?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
