import { WorkExperienceWhereInput } from "./WorkExperienceWhereInput";
import { WorkExperienceOrderByInput } from "./WorkExperienceOrderByInput";

export type WorkExperienceFindManyArgs = {
  where?: WorkExperienceWhereInput;
  orderBy?: Array<WorkExperienceOrderByInput>;
  skip?: number;
  take?: number;
};
