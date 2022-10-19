import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  fetchGmailAuth,
  resetFetchForgotPassword,
  selectFinishedCallApiAuth,
  selectLoadingAuth,
  selectMessAuth,
  selectStatusAuth,
} from "../../../redux/auth/authSlice";
import { STATUS_AXIOS } from "../../../constants";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Col, Row, Text } from "../../../components/elements";
import { InputField } from "../../../components/FormControl";
import { ComponentProps } from "../../../types/models/app";
import { Button, CircularProgress, SxProps } from "@mui/material";
import HeaderForgotPassword from "../components/HeaderForgotPassword";
import forgotPassword from "../../../assets/image/auth/forgot-password.png";
import { useHistory } from "react-router-dom";

const ButtonStyle = (p: ComponentProps) => (
  <Button
    variant="contained"
    color="primary"
    sx={{
      backgroundColor: "rgba(208, 102, 102, 1)",
      padding: "10px 20px",
      textTransform: "none",
      margin: "10px 0px",
      width: "40%",
      borderRadius: "20px",
    }}
    {...p}
  />
);

const InputFieldStyle: SxProps = {
  alignItems: "center",
  "& .MuiInputBase-input": {
    height: "0.6em",
  },
  "& .MuiFormControl-root": {
    width: "100%",
  },
};

const FindYourAccountPage = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const statusResponse = useAppSelector(selectStatusAuth);
  const messResponse = useAppSelector(selectMessAuth);
  const isLoading = useAppSelector(selectLoadingAuth);
  const finishedCallApi = useAppSelector(selectFinishedCallApiAuth);

  const initalValues: any = {
    email: "",
  } as any;
  const schema = yup
    .object({
      email: yup.string().required("Please enter email"),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<any>({
    defaultValues: initalValues,
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (finishedCallApi) {
      if (statusResponse === STATUS_AXIOS.OK) {
        Swal.fire({
          title: "Account Verification Successful",
          text: messResponse,
          icon: "success",
        }).then((result) => {
          if (result) {
            dispatch(resetFetchForgotPassword());
            history.push("/otp");
          }
        });
      } else {
        Swal.fire({
          title: "Gmail Authentication failed!",
          text: messResponse,
          icon: "error",
        });
      }
    }
  }, [dispatch, finishedCallApi, history, messResponse, statusResponse]);

  const handleGmailAuth = async (formValue: any) => {
    await dispatch(fetchGmailAuth(formValue));
  };

  return (
    <Col
      sx={{
        height: "100vh",
        alignItems: "center",
        backgroundImage: `url(${forgotPassword})`,
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat ",
        backgroundSize: "cover",
      }}
    >
      {isLoading && (
        <CircularProgress
          color="secondary"
          sx={{ position: "absolute", top: "50%" }}
        />
      )}

      <HeaderForgotPassword />
      <Row
        sx={{
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Row
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            borderRadius: "20px",
            width: "700px",
            height: "290px",
            padding: "30px 20px",
          }}
        >
          <Col>
            <Text fontSize="body1" sx={{ fontWeight: "bold" }}>
              Find your account
            </Text>
            <Text>
              Reset your password by filling in your e-mail address. You will
              then receive an email with an otp that will let you enter a new
              password.
            </Text>
            <Col
              sx={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                marginTop: "20px",
              }}
            >
              <Row sx={{ width: "70%" }}>
                <form
                  onSubmit={handleSubmit(handleGmailAuth)}
                  style={{ width: "100%" }}
                >
                  <Col
                    sx={{
                      ...InputFieldStyle,
                    }}
                  >
                    <InputField
                      name="email"
                      control={control}
                      label="Email"
                      placeholder="Enter email"
                    />
                    <Row
                      sx={{ width: "100%", justifyContent: "space-between" }}
                    >
                      <ButtonStyle>Back to Sign in</ButtonStyle>
                      <ButtonStyle type="submit">Reset Password</ButtonStyle>
                    </Row>
                  </Col>
                </form>
              </Row>
            </Col>
          </Col>
        </Row>
      </Row>
    </Col>
  );
};

export default FindYourAccountPage;
