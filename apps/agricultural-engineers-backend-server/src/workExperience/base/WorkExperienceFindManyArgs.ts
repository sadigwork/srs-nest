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
import { WorkExperienceWhereInput } from "./WorkExperienceWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { WorkExperienceOrderByInput } from "./WorkExperienceOrderByInput";

@ArgsType()
class WorkExperienceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => WorkExperienceWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => WorkExperienceWhereInput, { nullable: true })
  @Type(() => WorkExperienceWhereInput)
  where?: WorkExperienceWhereInput;

  @ApiProperty({
    required: false,
    type: [WorkExperienceOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [WorkExperienceOrderByInput], { nullable: true })
  @Type(() => WorkExperienceOrderByInput)
  orderBy?: Array<WorkExperienceOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { WorkExperienceFindManyArgs as WorkExperienceFindManyArgs };
