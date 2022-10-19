import React from "react";
import { Row, Text } from "../../../components/elements";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { InputField } from "../../../components/FormControl/index";
import { Button } from "@mui/material";

const HeaderForgotPassword = () => {
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

  return (
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
  );
};

export default HeaderForgotPassword;
