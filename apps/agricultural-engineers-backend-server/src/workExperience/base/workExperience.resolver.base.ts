/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { WorkExperience } from "./WorkExperience";
import { WorkExperienceCountArgs } from "./WorkExperienceCountArgs";
import { WorkExperienceFindManyArgs } from "./WorkExperienceFindManyArgs";
import { WorkExperienceFindUniqueArgs } from "./WorkExperienceFindUniqueArgs";
import { CreateWorkExperienceArgs } from "./CreateWorkExperienceArgs";
import { UpdateWorkExperienceArgs } from "./UpdateWorkExperienceArgs";
import { DeleteWorkExperienceArgs } from "./DeleteWorkExperienceArgs";
import { Application } from "../../application/base/Application";
import { User } from "../../user/base/User";
import { WorkExperienceService } from "../workExperience.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WorkExperience)
export class WorkExperienceResolverBase {
  constructor(
    protected readonly service: WorkExperienceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "WorkExperience",
    action: "read",
    possession: "any",
  })
  async _workExperiencesMeta(
    @graphql.Args() args: WorkExperienceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [WorkExperience])
  @nestAccessControl.UseRoles({
    resource: "WorkExperience",
    action: "read",
    possession: "any",
  })
  async workExperiences(
    @graphql.Args() args: WorkExperienceFindManyArgs
  ): Promise<WorkExperience[]> {
    return this.service.workExperiences(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => WorkExperience, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "WorkExperience",
    action: "read",
    possession: "own",
  })
  async workExperience(
    @graphql.Args() args: WorkExperienceFindUniqueArgs
  ): Promise<WorkExperience | null> {
    const result = await this.service.workExperience(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WorkExperience)
  @nestAccessControl.UseRoles({
    resource: "WorkExperience",
    action: "create",
    possession: "any",
  })
  async createWorkExperience(
    @graphql.Args() args: CreateWorkExperienceArgs
  ): Promise<WorkExperience> {
    return await this.service.createWorkExperience({
      ...args,
      data: {
        ...args.data,

        application: args.data.application
          ? {
              connect: args.data.application,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WorkExperience)
  @nestAccessControl.UseRoles({
    resource: "WorkExperience",
    action: "update",
    possession: "any",
  })
  async updateWorkExperience(
    @graphql.Args() args: UpdateWorkExperienceArgs
  ): Promise<WorkExperience | null> {
    try {
      return await this.service.updateWorkExperience({
        ...args,
        data: {
          ...args.data,

          application: args.data.application
            ? {
                connect: args.data.application,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => WorkExperience)
  @nestAccessControl.UseRoles({
    resource: "WorkExperience",
    action: "delete",
    possession: "any",
  })
  async deleteWorkExperience(
    @graphql.Args() args: DeleteWorkExperienceArgs
  ): Promise<WorkExperience | null> {
    try {
      return await this.service.deleteWorkExperience(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Application, {
    nullable: true,
    name: "application",
  })
  @nestAccessControl.UseRoles({
    resource: "Application",
    action: "read",
    possession: "any",
  })
  async getApplication(
    @graphql.Parent() parent: WorkExperience
  ): Promise<Application | null> {
    const result = await this.service.getApplication(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(
    @graphql.Parent() parent: WorkExperience
  ): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
