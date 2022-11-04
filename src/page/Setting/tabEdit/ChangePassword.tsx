import { Icon } from "@iconify/react";
import { Button, Divider, TextField } from "@mui/material";
import React from "react";
import { Col, Row, Text } from "../../../components/elements";
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
        <Icon
          icon="bytesize:arrow-left"
          height="24"
          width="24"
          color="#52734D"
          cursor="pointer"
          onClick={backMainTab}
        />
        <Text fontSize="body1" sx={{ marginLeft: "10px", fontWeight: "bold" }}>
          Change Password
        </Text>
      </Row>
      <Divider sx={{ margin: "20px 0px", borderColor: "#52734D" }} />
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
            <Button
              type="submit"
              sx={{
                margin: "10px 0px",
                backgroundColor: "#52734D",
                color: "white",
                borderRadius: "12px",
                padding: "5px 20px",
                textTransform: "capitalize",
                "&:hover": {
                  backgroundColor: "#52734D",
                },
              }}
            >
              Save
            </Button>
          </Row>
        </Col>
      </form>
    </Col>
  );
};

export default ChangePassword;
