import { Application } from "../application/Application";
import { User } from "../user/User";

export type Education = {
  application?: Application | null;
  createdAt: Date;
  degree: string | null;
  fieldOfStudy: string | null;
  graduationYear: number | null;
  id: string;
  institutionName: string | null;
  updatedAt: Date;
  user?: User | null;
};
