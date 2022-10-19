import React, { useEffect, useState } from "react";
import { Grid, CircularProgress } from "@mui/material";
import { Row } from "../../../components/elements";
import signUp from "../../../assets/image/auth/sign-up.png";
import StartupForm from "../components/StartupForm";
import InvestorForm from "../components/InvestorForm";
import SignUpForm from "../components/SignUpForm";
import ChooseRole from "../components/ChooseRole";
import {
  InvestorApiItem,
  RegisterApiItem,
  StartupApiItem,
} from "../../../types/models/auth";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  fetchRegister,
  resetFetchRegister,
  selectLoadingAuth,
  selectMessAuth,
  selectStatusAuth,
} from "../../../redux/auth/authSlice";
import Swal from "sweetalert2";
import { STATUS_AXIOS } from "../../../constants/index";
import { useHistory } from "react-router-dom";

const SignUpPage = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [step, setStep] = useState<number>(0);
  const [selectedRole, setSelectedRole] = useState<number>(-1);
  const [useForm, setUseForm] = useState<RegisterApiItem>();
  const messResponse = useAppSelector(selectMessAuth);
  const statusResponse = useAppSelector(selectStatusAuth);
  const loading = useAppSelector(selectLoadingAuth);

  const changeStep = () => {
    setStep(step + 1);
  };

  const chooseRole = (role: number) => {
    setSelectedRole(role);
    if (role === 2) {
      return handleRegisterAccount({});
    }
    setStep(step + 1);
  };

  const handleUserForm = (form: RegisterApiItem) => {
    setUseForm(form);
  };

  const handleStartupForm = (form: StartupApiItem) => {
    handleRegisterAccount(form);
  };

  const handleInvestorForm = (form: InvestorApiItem) => {
    handleRegisterAccount(form);
  };

  const handleRegisterAccount = async (form: any) => {
    const params = { ...useForm, ...form, role: selectedRole };
    await dispatch(fetchRegister(params));
  };

  useEffect(() => {
    if (messResponse) {
      if (statusResponse === STATUS_AXIOS.BAD_REQUEST) {
        Swal.fire({
          title: "Account registration failed!",
          text: messResponse,
          icon: "error",
        }).then((result) => {
          if (result) {
            dispatch(resetFetchRegister());
            window.location.reload();
          }
        });
      }
      if (statusResponse === STATUS_AXIOS.OK) {
        Swal.fire({
          title: "Sign Up Success",
          text: messResponse,
          icon: "success",
        }).then((result) => {
          if (result) {
            dispatch(resetFetchRegister());
            history.push("/sign-in");
          }
        });
      }
    }
  }, [dispatch, history, messResponse, statusResponse]);

  return (
    <Row sx={{ height: "100vh", justifyContent: "center" }}>
      <Grid container sx={{ width: "100%" }}>
        <Grid item lg={6}>
          {step === 0 && (
            <SignUpForm
              changeStep={changeStep}
              handleUserForm={handleUserForm}
            />
          )}
          {step === 1 && <ChooseRole chooseRole={chooseRole} />}
          {selectedRole === 0 && step === 2 && (
            <InvestorForm handleInvestorForm={handleInvestorForm} />
          )}
          {selectedRole === 1 && step === 2 && (
            <StartupForm handleStartupForm={handleStartupForm} />
          )}
        </Grid>
        <Grid item lg={6}>
          <Row
            sx={{
              height: "100%",
              width: "100%",
              backgroundImage: `url(${signUp})`,
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat ",
              backgroundSize: "cover",
            }}
          />
        </Grid>
      </Grid>
      {loading && <CircularProgress />}
    </Row>
  );
};

export default SignUpPage;
