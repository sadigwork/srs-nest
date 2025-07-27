import { Training as TTraining } from "../api/training/Training";

export const TRAINING_TITLE_FIELD = "title";

export const TrainingTitle = (record: TTraining): string => {
  return record.title?.toString() || String(record.id);
};
