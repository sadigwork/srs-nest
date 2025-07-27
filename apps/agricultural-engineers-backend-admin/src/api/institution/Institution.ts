import { Application } from "../application/Application";
import { User } from "../user/User";

export type Institution = {
  applications?: Array<Application>;
  createdAt: Date;
  id: string;
  name: string | null;
  registrationNumber: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
  verified: boolean | null;
};
