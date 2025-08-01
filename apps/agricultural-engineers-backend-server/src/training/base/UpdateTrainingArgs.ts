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
import { TrainingWhereUniqueInput } from "./TrainingWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TrainingUpdateInput } from "./TrainingUpdateInput";

@ArgsType()
class UpdateTrainingArgs {
  @ApiProperty({
    required: true,
    type: () => TrainingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TrainingWhereUniqueInput)
  @Field(() => TrainingWhereUniqueInput, { nullable: false })
  where!: TrainingWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TrainingUpdateInput,
  })
  @ValidateNested()
  @Type(() => TrainingUpdateInput)
  @Field(() => TrainingUpdateInput, { nullable: false })
  data!: TrainingUpdateInput;
}

export { UpdateTrainingArgs as UpdateTrainingArgs };
