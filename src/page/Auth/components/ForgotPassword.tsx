import React, { useState } from "react";
import { Col, Row, Text } from "../../../components/elements";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { InputField } from "../../../components/FormControl/index";
import { Button, SxProps } from "@mui/material";
import forgotPassword from "../../../assets/image/auth/forgot-password.png";
import { ComponentProps } from "../../../types/models/app";

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

const RenderFindYourAccount = (nextStep: () => void) => {
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

  const handleFormSubmit = async (formValue: any) => {
    console.log("formValue:", formValue);
    nextStep();
  };

  return (
    <Col>
      <Text fontSize="body1" sx={{ fontWeight: "bold" }}>
        Find your account
      </Text>
      <Text>
        Reset your password by filling in your e-mail address. You will then
        receive an email with an otp that will let you enter a new password.
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
            onSubmit={handleSubmit(handleFormSubmit)}
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
              <Row sx={{ width: "100%", justifyContent: "space-between" }}>
                <ButtonStyle>Back to Sign in</ButtonStyle>
                <ButtonStyle type="submit">Reset Password</ButtonStyle>
              </Row>
            </Col>
          </form>
        </Row>
      </Col>
    </Col>
  );
};

const RenderOTP = (nextStep: () => void) => {
  const initalValues: any = {
    otp: "",
  } as any;
  const schema = yup
    .object({
      otp: yup.string().required("Please enter otp"),
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

  const handleSubmitOTP = async (formValue: any) => {
    console.log("formValue:", formValue);
  };

  return (
    <Col sx={{ width: "100%" }}>
      <Text fontSize="body1" sx={{ fontWeight: "bold" }}>
        Find your account
      </Text>
      <Text>Enter your OTP</Text>
      <Col
        sx={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginTop: "20px",
        }}
      >
        <Row sx={{ width: "100%" }}>
          <form
            onSubmit={handleSubmit(handleSubmitOTP)}
            style={{ width: "100%" }}
          >
            <Col
              sx={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Col
                sx={{
                  width: "60%",
                  ...InputFieldStyle,
                }}
              >
                <InputField
                  name="otp"
                  control={control}
                  placeholder="Your OTP"
                />
                <Row sx={{ width: "100%", justifyContent: "center" }}>
                  <ButtonStyle type="submit">Confirm</ButtonStyle>
                </Row>
              </Col>
            </Col>
          </form>
        </Row>
      </Col>
    </Col>
  );
};

const RenderResetPassword = () => {
  const initalValues: any = {
    new_password: "",
    re_password: "",
  } as any;
  const schema = yup
    .object({
      new_password: yup.string().required("Please enter new password"),
      re_password: yup.string().required("Please enter Re-password"),
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

  const handleSubmitNewPassword = async (formValue: any) => {
    console.log("formValue:", formValue);
  };

  return (
    <Col sx={{ width: "100%" }}>
      <Text fontSize="body1" sx={{ fontWeight: "bold" }}>
        Find your account
      </Text>
      <Text>Reset your password</Text>
      <Col
        sx={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginTop: "20px",
        }}
      >
        <Row sx={{ width: "100%" }}>
          <form
            onSubmit={handleSubmit(handleSubmitNewPassword)}
            style={{ width: "100%" }}
          >
            <Col
              sx={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Col
                sx={{
                  width: "60%",
                  ...InputFieldStyle,
                }}
              >
                <InputField
                  name="new_password"
                  control={control}
                  placeholder="New Password"
                />
                <InputField
                  name="re_password"
                  control={control}
                  placeholder="Re Password"
                />

                <Row sx={{ width: "100%", justifyContent: "center" }}>
                  <ButtonStyle type="submit">Reset Password</ButtonStyle>
                </Row>
              </Col>
            </Col>
          </form>
        </Row>
      </Col>
    </Col>
  );
};

const ForgotPassword = () => {
  const [step, setStep] = useState<number>(0);
  const initalValues: any = {
    username: "",
    password: "",
  } as any;
  const schema = yup
    .object({
      username: yup.string().required("Please enter username"),
      password: yup.string().required("Please enter password"),
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

  const handleFormSubmit = async (formValue: any) => {
    console.log("formValue:", formValue);
  };

  const nextStep = () => {
    setStep(step + 1);
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
      <Row
        sx={{
          width: "100%",
          padding: "10px 0px",
          position: "absolute",
          backgroundColor: "white",
        }}
      >
        <Row sx={{ width: "95%", justifyContent: "space-between" }}>
          <Text></Text>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <Row
              sx={{
                alignItems: "center",
                "& .MuiInputBase-input": {
                  height: "0.3em",
                },
                "& .MuiFormControl-root": {
                  width: "90%",
                },
              }}
            >
              <InputField
                name="username"
                control={control}
                placeholder="User name"
              />
              <InputField
                name="password"
                control={control}
                placeholder="Password"
              />
              <Row sx={{ width: "50%" }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  sx={{
                    backgroundColor: "rgba(208, 102, 102, 1)",
                    padding: "10px 20px",
                    textTransform: "none",
                    margin: "10px 0px",
                    width: "100%",
                    borderRadius: "20px",
                  }}
                >
                  Sign In
                </Button>
              </Row>
            </Row>
          </form>
        </Row>
      </Row>
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
          {step === 0 && RenderFindYourAccount(nextStep)}
          {step === 1 && RenderOTP(nextStep)}
          {step === 2 && RenderResetPassword()}
        </Row>
      </Row>
    </Col>
  );
};

export default ForgotPassword;
