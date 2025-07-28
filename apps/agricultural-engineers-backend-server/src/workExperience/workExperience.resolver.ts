import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WorkExperienceResolverBase } from "./base/workExperience.resolver.base";
import { WorkExperience } from "./base/WorkExperience";
import { WorkExperienceService } from "./workExperience.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WorkExperience)
export class WorkExperienceResolver extends WorkExperienceResolverBase {
  constructor(
    protected readonly service: WorkExperienceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
