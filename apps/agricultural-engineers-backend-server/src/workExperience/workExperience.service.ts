import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorkExperienceServiceBase } from "./base/workExperience.service.base";

@Injectable()
export class WorkExperienceService extends WorkExperienceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
