import { Document } from "../document/Document";
import { Education } from "../education/Education";
import { Institution } from "../institution/Institution";
import { Training } from "../training/Training";
import { User } from "../user/User";
import { WorkExperience } from "../workExperience/WorkExperience";

export type Application = {
  applicationNumber: string | null;
  comments: string | null;
  createdAt: Date;
  documents?: Array<Document>;
  educations?: Array<Education>;
  id: string;
  institution?: Institution | null;
  status?: "Option1" | null;
  submissionDate: Date | null;
  trainings?: Array<Training>;
  updatedAt: Date;
  user?: User | null;
  workExperiences?: Array<WorkExperience>;
};
