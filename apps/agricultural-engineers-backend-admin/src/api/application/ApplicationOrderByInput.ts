import { SortOrder } from "../../util/SortOrder";

export type ApplicationOrderByInput = {
  applicationNumber?: SortOrder;
  comments?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  institutionId?: SortOrder;
  status?: SortOrder;
  submissionDate?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
