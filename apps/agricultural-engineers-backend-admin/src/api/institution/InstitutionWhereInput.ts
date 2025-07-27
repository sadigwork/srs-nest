import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type InstitutionWhereInput = {
  applications?: ApplicationListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  registrationNumber?: StringNullableFilter;
  typeField?: "Option1";
  user?: UserWhereUniqueInput;
  verified?: BooleanNullableFilter;
};
