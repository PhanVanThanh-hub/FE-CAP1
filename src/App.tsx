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
  selectTitle,
} from "./redux/uiSlice";
import { STATUS_AXIOS, USER_ROLE } from "./constants";
import Swal from "sweetalert2";
import {
  getAccessTokenFromStorage,
  getUserRoleFromStorage,
} from "./services/auth";
import { selectTokenUser, selectUserRole } from "./redux/auth/authSlice";
import ProfilePage from "./page/Profile/page";
import SearchPage from "./page/Search";
import GroupListPage from "./page/Groups/page";
import GroupPage from "./page/Group/page";
import CreateGroupPage from "./page/CreateGroup/page";
import MyProjectInvestorPage from "./page/MyProjectInvestor/page";

function App() {
  const loading = useSelector(selectLoading);
  const mess = useSelector(selectMess);
  const status = useSelector(selectStatus);
  const finishedCallApi = useSelector(selectFinishedCallApi);
  const isAuth = getAccessTokenFromStorage();
  const tokenUser = useSelector(selectTokenUser);
  const userRole = useSelector(selectUserRole) || getUserRoleFromStorage();
  const title = useSelector(selectTitle);

  useEffect(() => {
    if (finishedCallApi) {
      if (status === STATUS_AXIOS.OK) {
        Swal.fire({
          title: title,
          text: mess,
          icon: "success",
        });
      } else {
        Swal.fire({
          title: title,
          text: mess,
          icon: "error",
        });
      }
    }
  }, [finishedCallApi, mess, status, title]);

  return (
    <ToggleColorMode>
      {isAuth || tokenUser ? (
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/post/:id">
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
            {userRole === USER_ROLE.STARTUP && <MyProjectPage />}
            {userRole === USER_ROLE.INVESTOR && <MyProjectInvestorPage />}
          </Route>
          <Route path="/me">
            <ProfilePage />
          </Route>
          <Route path="/profile/:id">
            <ProfilePage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/groups" exact>
            <GroupListPage />
          </Route>
          <Route path="/group/:id" exact>
            <GroupPage />
          </Route>
          <Route path="/groups/create">
            <CreateGroupPage />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route path="/" exact>
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
        </Switch>
      )}
    </ToggleColorMode>
  );
}

export default App;
