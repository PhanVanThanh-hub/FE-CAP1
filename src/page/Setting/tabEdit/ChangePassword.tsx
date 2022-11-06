import React from "react";
import { Divider } from "@mui/material";
import { Col, Row, Text, UiButton, UiIcon } from "../../../components/elements";
import "animate.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PasswordField } from "../../../components/FormControl";

interface Props {
  backMainTab: () => void;
}

const ChangePassword = ({ backMainTab }: Props) => {
  const initalValues: any = {
    currentPassword: "",
    newPassword: "",
    rePassword: "",
  } as any;
  const schema = yup
    .object({
      currentPassword: yup
        .string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
      newPassword: yup
        .string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
      rePassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match"),
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
    console.log("form value:", formValue);
  };

  return (
    <Col class="animate__animated animate__slideInRight">
      <Row sx={{ alignItems: "center" }}>
        <UiIcon icon="bytesize:arrow-left" onClick={backMainTab} />
        <Text fontSize="body1" sx={{ marginLeft: "10px", fontWeight: "bold" }}>
          Change Password
        </Text>
      </Row>
      <Divider sx={{ margin: "20px 0px", borderColor: "divider" }} />
      <form onSubmit={handleSubmit(handleFormSubmit)} style={{ width: "100%" }}>
        <Col
          sx={{
            width: "60%",
            "& .MuiFormControl-root": {
              margin: "2px 0px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                fontSize: "16px",
              },
              input: {
                padding: "7px 10px",
              },
            },
          }}
        >
          <PasswordField
            placeholder="Current Password"
            name="currentPassword"
            control={control}
            label="Current Password"
          />
          <PasswordField
            placeholder="A New Password"
            name="newPassword"
            control={control}
            label="New Password"
          />
          <PasswordField
            placeholder="Confirm Password"
            name="rePassword"
            control={control}
            label="Confirm Password"
          />
          <Text>
            Changing your password will log you out of all active CSW sessions
            except the one you're using at the moment.
          </Text>
          <Row sx={{ justifyContent: "flex-end" }}>
            <UiButton type="submit">
              <Text>Save</Text>
            </UiButton>
          </Row>
        </Col>
      </form>
    </Col>
  );
};

export default ChangePassword;
