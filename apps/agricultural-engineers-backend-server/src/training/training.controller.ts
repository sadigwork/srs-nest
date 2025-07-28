import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TrainingService } from "./training.service";
import { TrainingControllerBase } from "./base/training.controller.base";

@swagger.ApiTags("trainings")
@common.Controller("trainings")
export class TrainingController extends TrainingControllerBase {
  constructor(
    protected readonly service: TrainingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
