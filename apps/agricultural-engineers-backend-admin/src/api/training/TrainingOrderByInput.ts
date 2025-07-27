import { SortOrder } from "../../util/SortOrder";

export type TrainingOrderByInput = {
  applicationId?: SortOrder;
  certificateNumber?: SortOrder;
  completionDate?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  provider?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
