/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TrainingWhereUniqueInput } from "../../training/base/TrainingWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TrainingUpdateManyWithoutUsersInput {
  @Field(() => [TrainingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TrainingWhereUniqueInput],
  })
  connect?: Array<TrainingWhereUniqueInput>;

  @Field(() => [TrainingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TrainingWhereUniqueInput],
  })
  disconnect?: Array<TrainingWhereUniqueInput>;

  @Field(() => [TrainingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TrainingWhereUniqueInput],
  })
  set?: Array<TrainingWhereUniqueInput>;
}

export { TrainingUpdateManyWithoutUsersInput as TrainingUpdateManyWithoutUsersInput };
