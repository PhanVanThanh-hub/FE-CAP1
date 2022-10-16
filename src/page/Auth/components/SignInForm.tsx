import React from "react";
import { Box, Button } from "@mui/material";
import { Col, Row, Text } from "../../../components/elements";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  InputField,
  PasswordField,
} from "../../../components/FormControl/index";
import { Icon } from "@iconify/react";
import signIn from "../../../assets/image/auth/sign-in.png";
import { useHistory } from "react-router-dom";

const SignInForm = () => {
  const history = useHistory();
  const initalValues: any = {
    username: "",
    password: "",
  } as any;
  const schema = yup
    .object({
      username: yup.string().required("Please enter name"),
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

  return (
    <Row sx={{ height: "100vh", justifyContent: "center" }}>
      <Row
        sx={{
          width: "80%",
          padding: "20px 0px",
        }}
      >
        <Col sx={{ width: "100%" }}>
          <Row sx={{ justifyContent: "end" }}>
            <Button
              sx={{
                backgroundColor: " #D06666",
                borderRadius: "20px",
                padding: "7px 15px",
                textTransform: "none",
                color: "white",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: " #D06666",
                  color: "white",
                },
              }}
            >
              Sign In
            </Button>
            <Button
              sx={{
                backgroundColor: " white",
                borderRadius: "20px",
                padding: "7px 15px",
                textTransform: "none",
                color: "black",
                fontWeight: "bold",
                marginLeft: "20px",
                boxShadow: "3px 3px 3px rgba(52, 76, 183, 0.25)",
              }}
              onClick={() => history.push("/sign-up")}
            >
              Sign Up
            </Button>
          </Row>
          <Row
            sx={{
              height: "100%",
              alignItems: "center",
              justifyContent: "space-around",
              position: "relative",
            }}
          >
            <Row
              sx={{
                height: "80%",
                width: "50%",
                borderRadius: "20px",
                backgroundImage: `url(${signIn})`,
                backgroundPosition: "center top",
                backgroundRepeat: "no-repeat ",
                backgroundSize: "cover",
              }}
            />
            <Col
              sx={{
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text fontSize="h5">Sign in to CSW</Text>
              <Text
                fontSize="body1"
                sx={{
                  textAlign: "center",
                  marginBottom: "20px",
                  color: "rgba(0, 0, 0, 0.6)",
                }}
              >
                Website for the startup community <br /> that aids in
                introducing and promoting startup ideas
              </Text>
              <form
                onSubmit={handleSubmit(handleFormSubmit)}
                style={{ width: "100%" }}
              >
                <Col
                  sx={{
                    alignItems: "center",
                    "& .MuiInputBase-input": {
                      height: "0.75em",
                    },
                    "& .MuiFormControl-root": {
                      width: "90%",
                    },
                  }}
                >
                  <InputField
                    name="username"
                    control={control}
                    label="Username"
                    placeholder="Username"
                  />

                  <PasswordField
                    name="password"
                    control={control}
                    label="Password"
                    placeholder="Password"
                  />

                  <Text
                    fontSize="caption"
                    sx={{
                      marginTop: "20px",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                    onClick={() => history.push("/forgot-password")}
                  >
                    Forgot Password?
                  </Text>
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
                        borderRadius: "12px",
                      }}
                    >
                      Sign In
                    </Button>
                  </Row>
                </Col>
              </form>
              <Row sx={{ margin: "20px 0px" }}>
                <Text>Or Continue With</Text>
              </Row>
              <Row
                sx={{
                  boxShadow: "3px 3px 3px rgba(52, 76, 183, 0.25)",
                  borderRadius: "20px",
                  padding: "10px 20px",
                  alignItems: "center",
                }}
              >
                <Icon icon="flat-color-icons:google" />
              </Row>
              <Text sx={{ color: "rgba(0, 0, 0, 0.6)", marginTop: "20px" }}>
                If you don’t have an acccount, you can
                <br />
                <Text as="span" sx={{ color: "rgba(208, 102, 102, 1)" }}>
                  Register Here!
                </Text>
              </Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </Row>
  );
};

export default SignInForm;
