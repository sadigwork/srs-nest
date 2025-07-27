import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { DocumentTitle } from "../document/DocumentTitle";
import { EducationTitle } from "../education/EducationTitle";
import { InstitutionTitle } from "../institution/InstitutionTitle";
import { TrainingTitle } from "../training/TrainingTitle";
import { UserTitle } from "../user/UserTitle";
import { WorkExperienceTitle } from "../workExperience/WorkExperienceTitle";

export const ApplicationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="applicationNumber" source="applicationNumber" />
        <TextInput label="comments" multiline source="comments" />
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
        <ReferenceInput
          source="institution.id"
          reference="Institution"
          label="Institution"
        >
          <SelectInput optionText={InstitutionTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="submissionDate" source="submissionDate" />
        <ReferenceArrayInput source="trainings" reference="Training">
          <SelectArrayInput
            optionText={TrainingTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
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
