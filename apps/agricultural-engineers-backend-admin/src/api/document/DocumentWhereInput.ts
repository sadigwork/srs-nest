import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type DocumentWhereInput = {
  application?: ApplicationWhereUniqueInput;
  fileUrl?: JsonFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
  typeField?: "Option1";
  user?: UserWhereUniqueInput;
  verified?: BooleanNullableFilter;
};
