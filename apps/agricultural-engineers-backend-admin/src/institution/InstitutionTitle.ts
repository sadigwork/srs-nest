import { Institution as TInstitution } from "../api/institution/Institution";

export const INSTITUTION_TITLE_FIELD = "name";

export const InstitutionTitle = (record: TInstitution): string => {
  return record.name?.toString() || String(record.id);
};
