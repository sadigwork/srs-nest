import { Education as TEducation } from "../api/education/Education";

export const EDUCATION_TITLE_FIELD = "institutionName";

export const EducationTitle = (record: TEducation): string => {
  return record.institutionName?.toString() || String(record.id);
};
