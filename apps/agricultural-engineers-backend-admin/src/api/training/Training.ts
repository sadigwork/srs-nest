import { Application } from "../application/Application";
import { User } from "../user/User";

export type Training = {
  application?: Application | null;
  certificateNumber: string | null;
  completionDate: Date | null;
  createdAt: Date;
  id: string;
  provider: string | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
