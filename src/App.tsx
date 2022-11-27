import React, { useEffect } from "react";
import ToggleColorMode from "./theme/theme";
import { Route, Switch } from "react-router-dom";
import SignInForm from "./page/Auth/components/SignInForm";
import SignUpPage from "./page/Auth/pages/SignUpPage";
import FindYourAccountPage from "./page/Auth/pages/FindYourAccountPage";
import EnterOTPPage from "./page/Auth/pages/EnterOTPPage";
import ResetPasswordPage from "./page/Auth/pages/ResetPasswordPage";
import HomePage from "./page/Home/pages/index";
import PhotoViewer from "./page/Post/page";
import SettingPage from "./page/Setting/page";
import MessagePage from "./page/Mess/page";
import NotifyPage from "./page/Notify/page";
import ProjectsPage from "./page/Project/page";
import MyProjectPage from "./page/MyProject/page";
import { useSelector } from "react-redux";
import {
  selectFinishedCallApi,
  selectLoading,
  selectMess,
  selectStatus,
} from "./redux/uiSlice";
import { STATUS_AXIOS } from "./constants";
import Swal from "sweetalert2";

function App() {
  const loading = useSelector(selectLoading);
  const mess = useSelector(selectMess);
  const status = useSelector(selectStatus);
  const finishedCallApi = useSelector(selectFinishedCallApi);

  useEffect(() => {
    if (finishedCallApi) {
      if (status === STATUS_AXIOS.OK) {
        Swal.fire({
          title: mess,
          text: mess,
          icon: "success",
        });
      } else {
        Swal.fire({
          title: mess,
          text: mess,
          icon: "error",
        });
      }
    }
  }, [finishedCallApi, mess, status]);

  return (
    <ToggleColorMode>
      <Switch>
        <Route path="/sign-in" exact>
          <SignInForm />
        </Route>
        <Route path="/sign-up" exact>
          <SignUpPage />
        </Route>
        <Route path="/find-account" exact>
          <FindYourAccountPage />
        </Route>
        <Route path="/otp" exact>
          <EnterOTPPage />
        </Route>
        <Route path="/reset-password" exact>
          <ResetPasswordPage />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/post" exact>
          <PhotoViewer />
        </Route>
        <Route path="/settings">
          <SettingPage />
        </Route>
        <Route path="/message">
          <MessagePage />
        </Route>
        <Route path="/notify">
          <NotifyPage />
        </Route>
        <Route path="/projects">
          <ProjectsPage />
        </Route>
        <Route path="/my-projects">
          <MyProjectPage />
        </Route>
      </Switch>
    </ToggleColorMode>
  );
}

export default App;
