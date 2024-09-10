import Dashboard from "@/app/dashboard/Dashboard";
import DashboardLayout from "@/app/dashboard/DashboardLayout";
import Home from "@/app/Home";
import JoinEmail from "@/app/join/JoinEmail";
import JoinLayout from "@/app/join/JoinLayout";
import JoinWallet from "@/app/join/JoinWallet";
import OnboardAgency from "@/app/onboard/OnboardAgency";
import OnboardIndividual from "@/app/onboard/OnboardIndividual";
import OnboardLayout from "@/app/onboard/OnboardLayout";
import TemplateFeatured from "@/app/template/TemplateFeatured";
import TemplateLayout from "@/app/template/TemplateLayout";
import TemplateMore from "@/app/template/TemplateMore";
import store from "@/redux/store";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";

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
          <Route path="*" element={null} />
        </Route>

        <Route path="*" element={null} />
      </Routes>
    </Provider>
  );
}

export default App;
