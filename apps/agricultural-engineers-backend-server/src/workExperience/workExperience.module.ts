import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WorkExperienceModuleBase } from "./base/workExperience.module.base";
import { WorkExperienceService } from "./workExperience.service";
import { WorkExperienceController } from "./workExperience.controller";
import { WorkExperienceResolver } from "./workExperience.resolver";

@Module({
  imports: [WorkExperienceModuleBase, forwardRef(() => AuthModule)],
  controllers: [WorkExperienceController],
  providers: [WorkExperienceService, WorkExperienceResolver],
  exports: [WorkExperienceService],
})
export class WorkExperienceModule {}
