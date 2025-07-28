import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
  DateTimeInput,
  PasswordInput,
  SelectInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";
import { DocumentTitle } from "../document/DocumentTitle";
import { EducationTitle } from "../education/EducationTitle";
import { InstitutionTitle } from "../institution/InstitutionTitle";
import { TrainingTitle } from "../training/TrainingTitle";
import { WorkExperienceTitle } from "../workExperience/WorkExperienceTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="applications" reference="Application">
          <SelectArrayInput
            optionText={ApplicationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="documents" reference="Document">
          <SelectArrayInput
            optionText={DocumentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="educations" reference="Education">
          <SelectArrayInput
            optionText={EducationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" type="email" />
        <BooleanInput label="emailVerified" source="emailVerified" />
        <TextInput label="First Name" source="firstName" />
        <ReferenceArrayInput source="institutions" reference="Institution">
          <SelectArrayInput
            optionText={InstitutionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <BooleanInput label="isActive" source="isActive" />
        <DateTimeInput label="lastLoginAt" source="lastLoginAt" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <TextInput label="phone" source="phone" />
        <SelectInput
          source="role"
          label="role"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput source="trainings" reference="Training">
          <SelectArrayInput
            optionText={TrainingTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Username" source="username" />
        <ReferenceArrayInput
          source="workExperiences"
          reference="WorkExperience"
        >
          <SelectArrayInput
            optionText={WorkExperienceTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
