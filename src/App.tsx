import store from "@/redux/store";
import { lazy } from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";

const Dashboard = lazy(() => import("@/app/dashboard/Dashboard"));
const DashboardProjects = lazy(
  () => import("@/app/dashboard/projects/DashboardProjects")
);
import DashboardLayout from "@/app/dashboard/DashboardLayout";
const Home = lazy(() => import("@/app/Home"));
import JoinLayout from "@/app/join/JoinLayout";
const JoinEmail = lazy(() => import("@/app/join/JoinEmail"));
const JoinWallet = lazy(() => import("@/app/join/JoinWallet"));
const OnboardAgency = lazy(() => import("@/app/onboard/OnboardAgency"));
const OnboardIndividual = lazy(() => import("@/app/onboard/OnboardIndividual"));
import OnboardLayout from "@/app/onboard/OnboardLayout";
const TemplateFeatured = lazy(() => import("@/app/template/TemplateFeatured"));
import TemplateLayout from "@/app/template/TemplateLayout";
const TemplateMore = lazy(() => import("@/app/template/TemplateMore"));

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="" element={<Home />} />

        <Route path="/join" element={<JoinLayout />}>
          <Route path="" element={<JoinEmail />} />
          <Route path="wallet" element={<JoinWallet />} />
        </Route>

        <Route path="/onboard" element={<OnboardLayout />}>
          <Route path="" element={<OnboardIndividual />} />
          <Route path="agency" element={<OnboardAgency />} />
        </Route>

        <Route path="/template" element={<TemplateLayout />}>
          <Route path="" element={<TemplateMore />} />
          <Route path="featured" element={<TemplateFeatured />} />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="projects" element={<DashboardProjects />} />
          <Route path="*" element={null} />
        </Route>

        <Route path="*" element={null} />
      </Routes>
    </Provider>
  );
}

export default App;
