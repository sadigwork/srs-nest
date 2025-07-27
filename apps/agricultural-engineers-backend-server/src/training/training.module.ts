import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TrainingModuleBase } from "./base/training.module.base";
import { TrainingService } from "./training.service";
import { TrainingController } from "./training.controller";
import { TrainingResolver } from "./training.resolver";

@Module({
  imports: [TrainingModuleBase, forwardRef(() => AuthModule)],
  controllers: [TrainingController],
  providers: [TrainingService, TrainingResolver],
  exports: [TrainingService],
})
export class TrainingModule {}
