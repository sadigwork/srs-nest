import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ApplicationList } from "./application/ApplicationList";
import { ApplicationCreate } from "./application/ApplicationCreate";
import { ApplicationEdit } from "./application/ApplicationEdit";
import { ApplicationShow } from "./application/ApplicationShow";
import { EducationList } from "./education/EducationList";
import { EducationCreate } from "./education/EducationCreate";
import { EducationEdit } from "./education/EducationEdit";
import { EducationShow } from "./education/EducationShow";
import { TrainingList } from "./training/TrainingList";
import { TrainingCreate } from "./training/TrainingCreate";
import { TrainingEdit } from "./training/TrainingEdit";
import { TrainingShow } from "./training/TrainingShow";
import { WorkExperienceList } from "./workExperience/WorkExperienceList";
import { WorkExperienceCreate } from "./workExperience/WorkExperienceCreate";
import { WorkExperienceEdit } from "./workExperience/WorkExperienceEdit";
import { WorkExperienceShow } from "./workExperience/WorkExperienceShow";
import { InstitutionList } from "./institution/InstitutionList";
import { InstitutionCreate } from "./institution/InstitutionCreate";
import { InstitutionEdit } from "./institution/InstitutionEdit";
import { InstitutionShow } from "./institution/InstitutionShow";
import { DocumentList } from "./document/DocumentList";
import { DocumentCreate } from "./document/DocumentCreate";
import { DocumentEdit } from "./document/DocumentEdit";
import { DocumentShow } from "./document/DocumentShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"agricultural-engineers-backend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Application"
          list={ApplicationList}
          edit={ApplicationEdit}
          create={ApplicationCreate}
          show={ApplicationShow}
        />
        <Resource
          name="Education"
          list={EducationList}
          edit={EducationEdit}
          create={EducationCreate}
          show={EducationShow}
        />
        <Resource
          name="Training"
          list={TrainingList}
          edit={TrainingEdit}
          create={TrainingCreate}
          show={TrainingShow}
        />
        <Resource
          name="WorkExperience"
          list={WorkExperienceList}
          edit={WorkExperienceEdit}
          create={WorkExperienceCreate}
          show={WorkExperienceShow}
        />
        <Resource
          name="Institution"
          list={InstitutionList}
          edit={InstitutionEdit}
          create={InstitutionCreate}
          show={InstitutionShow}
        />
        <Resource
          name="Document"
          list={DocumentList}
          edit={DocumentEdit}
          create={DocumentCreate}
          show={DocumentShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
