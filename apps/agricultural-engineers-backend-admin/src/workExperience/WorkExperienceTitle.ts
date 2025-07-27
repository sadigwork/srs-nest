import { WorkExperience as TWorkExperience } from "../api/workExperience/WorkExperience";

export const WORKEXPERIENCE_TITLE_FIELD = "employerName";

export const WorkExperienceTitle = (record: TWorkExperience): string => {
  return record.employerName?.toString() || String(record.id);
};
