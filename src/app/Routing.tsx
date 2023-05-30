import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'widgets/layout';
import { Mainpage } from 'pages/Mainpage';
import { Projects } from 'pages/projects/projects';
import SignIn from 'pages/account/loginPage';
import RegistrationType from 'pages/account/signup/registrationType';
import RegisterOrganization from 'pages/account/signup/organizationRegistration';
import RegisterVolunteer from 'pages/account/signup/volunteerRegistration';
import RegisterSimpleUser from 'pages/account/signup/userRegistration';
import AddProject from 'pages/projects/add-project';
import AddGoodDeed from 'pages/gooddeeds/add-gooddeed';
import { GoodDeeds } from 'pages/gooddeeds/goodDeeds';
import { Organizations } from 'pages/organizations/organizations';
import { Volunteers } from 'pages/volunteers/volunteers';
import { ProjectPage } from 'pages/projects/projectPage';
import { MyProjects } from 'pages/projects/organizationProjects';
import { ParticipantsList } from 'pages/projects/participantsList';
import { MyParticipations } from 'pages/projects/myParticipations';
import { ParticipantsManagement } from 'pages/organizations/participants-management';

function Routing() {

  return (
    <>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Mainpage />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectPage />} />
          <Route path="projects/:id/:nid" element={<ParticipantsList />} />
          <Route path="myprojects" element={<MyProjects />} />
          <Route path="myprojects/:id" element={<ProjectPage />} />
          <Route path="myprojects/:id/:nid" element={<ParticipantsManagement />} />
          <Route path="myparticipations" element={<MyParticipations />} />
          <Route path="gooddeeds" element={<GoodDeeds />} />
          <Route path="organizations" element={<Organizations />} />
          <Route path="volunteers" element={<Volunteers />} />
          <Route path="login" element={<SignIn />} />
          <Route path="signup" element={<RegistrationType />} />
          <Route path="signup/simple" element={<RegisterSimpleUser />} />
          <Route path="signup/volunteer" element={<RegisterVolunteer />} />
          <Route path="signup/organization" element={<RegisterOrganization />} />
          <Route path="addproject" element={<AddProject />} />
          <Route path="askforhelp" element={<AddGoodDeed />} />
          <Route path="*" element={<h1>ERROR 404</h1>} />
        </Route>
      </Routes>
    </>
  );
}


export default Routing;
