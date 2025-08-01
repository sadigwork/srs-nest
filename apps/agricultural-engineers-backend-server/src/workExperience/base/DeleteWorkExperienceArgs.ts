/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WorkExperienceWhereUniqueInput } from "./WorkExperienceWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteWorkExperienceArgs {
  @ApiProperty({
    required: true,
    type: () => WorkExperienceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WorkExperienceWhereUniqueInput)
  @Field(() => WorkExperienceWhereUniqueInput, { nullable: false })
  where!: WorkExperienceWhereUniqueInput;
}

export { DeleteWorkExperienceArgs as DeleteWorkExperienceArgs };
