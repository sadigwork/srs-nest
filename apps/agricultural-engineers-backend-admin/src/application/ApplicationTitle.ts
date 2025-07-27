import { Application as TApplication } from "../api/application/Application";

export const APPLICATION_TITLE_FIELD = "applicationNumber";

export const ApplicationTitle = (record: TApplication): string => {
  return record.applicationNumber?.toString() || String(record.id);
};
