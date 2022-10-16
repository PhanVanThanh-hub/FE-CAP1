import React from "react";
import ToggleColorMode from "./theme/theme";
import { Route, Switch } from "react-router-dom";
import SignInForm from "./page/Auth/components/SignInForm";
import SignUpForm from "./page/Auth/components/SignUpForm";
import InvestorForm from "./page/Auth/components/InvestorForm";
import StartupForm from "./page/Auth/components/StartupForm";
import ForgotPassword from "./page/Auth/components/ForgotPassword";
import SignUpPage from "./page/Auth/pages/SignUpPage";

function App() {
  return (
    <ToggleColorMode>
      <Switch>
        <Route path="/sign-in" exact>
          <SignInForm />
        </Route>
        <Route path="/sign-up" exact>
          <SignUpPage />
        </Route>

        <Route path="/forgot-password" exact>
          <ForgotPassword />
        </Route>
      </Switch>
    </ToggleColorMode>
  );
}

export default App;
