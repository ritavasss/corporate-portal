import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Layout } from "../layouts/Layout";
import { ProjectPage } from "../pages/CompanyProjectsPage/ProjectPage/ProjectPage";
import { 
  AdaptationProgramPage,
  CompanyInfoPage,
  CompanyProjectsPage,
  CorporateCulturePage,
  EmiasProgectsPage,
  EmployeesPage,
  EquipmentRemovalPage,
  MainPage,
  PersonnelIssuesPage,
  RedmineLaborPage,
  ReferalProgramPage
} from "../pages";

const AppRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="company-info" element={<CompanyInfoPage />} />
          <Route path="adaptation-program" element={<AdaptationProgramPage />} />
          <Route path="company-projects" element={<CompanyProjectsPage />} />
          <Route path="personal-issues" element={<PersonnelIssuesPage />} />
          <Route path="referral-program" element={<ReferalProgramPage />} />
          <Route path="equipment" element={<EquipmentRemovalPage />} />
          <Route path="redmine" element={<RedmineLaborPage />} />
          <Route path="corporate-culture" element={<CorporateCulturePage />} />
          <Route path="company-projects/:projectId" element={<ProjectPage />} />
          <Route path="company-projects/emi" element={<EmiasProgectsPage />} />
          <Route path="company-projects/emi/:projectId" element={<ProjectPage />} />
          <Route path="company-info/employees" element={<EmployeesPage />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export { AppRoutes };