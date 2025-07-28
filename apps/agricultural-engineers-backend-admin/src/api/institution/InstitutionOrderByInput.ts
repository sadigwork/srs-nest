import { SortOrder } from "../../util/SortOrder";

export type InstitutionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  registrationNumber?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  verified?: SortOrder;
};
