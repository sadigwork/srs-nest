import { Application } from "../application/Application";
import { User } from "../user/User";

export type WorkExperience = {
  application?: Application | null;
  createdAt: Date;
  employerName: string | null;
  endDate: Date | null;
  id: string;
  position: string | null;
  startDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
