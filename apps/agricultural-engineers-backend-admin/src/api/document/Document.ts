import { Application } from "../application/Application";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Document = {
  application?: Application | null;
  createdAt: Date;
  fileUrl: JsonValue;
  id: string;
  title: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
  verified: boolean | null;
};
