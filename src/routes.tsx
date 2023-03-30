import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import UsersPage from "./pages/UsersPage/UsersPage";

const Routes = () => {
  const pageRenderer = (page: JSX.Element) => <MainLayout>{page}</MainLayout>;

  return (
    <Router>
      <Switch>
        <Route path="*" element={pageRenderer(<HomePage />)} />
        <Route path="/settings" element={pageRenderer(<SettingsPage />)} />
        <Route path="/users" element={pageRenderer(<UsersPage />)} />
      </Switch>
    </Router>
  );
};

export default Routes;
