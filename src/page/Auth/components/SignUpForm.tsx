import React from "react";
import { Button, Grid } from "@mui/material";
import { Col, Row, Text } from "../../../components/elements";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { InputField, PasswordField } from "../../../components/FormControl";
import parse from "date-fns/parse";
import { RegisterApiItem } from "../../../types/models/auth";
import { useHistory } from "react-router-dom";
import { phoneRegExp } from "../../../constants";

interface Props {
  changeStep: () => void;
  handleUserForm: (form: RegisterApiItem) => void;
}

const SignUpForm = ({ changeStep, handleUserForm }: Props) => {
  const history = useHistory();
  const initalValues: RegisterApiItem = {
    username: "",
    email: "",
    password: "",
    rePassword: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    birthday: "",
  } as RegisterApiItem;
  const schema = yup
    .object({
      username: yup.string().required("Please enter username"),
      email: yup.string().required("Please enter email"),
      password: yup
        .string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
      rePassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match"),
      first_name: yup.string().required("Please enter first name"),
      last_name: yup.string().required("Please enter last name"),
      phone_number: yup
        .string()
        .matches(phoneRegExp, "Phone number is not valid"),
      birthday: yup
        .date()
        .transform(function (value, originalValue) {
          if (this.isType(value)) {
            return value;
          }
          const result = parse(originalValue, "dd.MM.yyyy", new Date());
          return result;
        })
        .typeError("please enter a valid date")
        .required()
        .min("1969-11-13", "Date is too early"),
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
    changeStep();
    handleUserForm(formValue);
  };

  return (
    <Col
      sx={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Col
        sx={{
          height: "100%",
          width: "50%",
          padding: "0px 20px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text fontSize="h5">Sign Up</Text>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Col
            sx={{
              alignItems: "center",
              "& .MuiInputBase-input": {
                height: "0.75em",
              },
              "& .MuiFormControl-root": {
                width: "100%",
              },
            }}
          >
            <Grid
              container
              columns={13}
              sx={{
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Grid item xs={6}>
                <InputField
                  name="username"
                  control={control}
                  label="Username"
                  placeholder="Enter your username"
                />
              </Grid>
              <Grid item xs={6}>
                <InputField
                  name="email"
                  control={control}
                  label="Email"
                  placeholder="Enter Email"
                />
              </Grid>
            </Grid>

            <PasswordField name="password" control={control} label="Password" />
            <PasswordField
              name="rePassword"
              control={control}
              label="Re-Password"
            />
            <Grid
              container
              sx={{
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Grid item xs={4}>
                <InputField
                  name="first_name"
                  control={control}
                  label="First Name"
                  placeholder="First Name"
                />
              </Grid>
              <Grid item xs={4}>
                <InputField
                  name="last_name"
                  control={control}
                  label="Last Name"
                  placeholder="Last Name"
                />
              </Grid>
            </Grid>
            <InputField
              name="phone_number"
              control={control}
              label="Telephone Number"
              placeholder="Telephone Number"
            />
            <InputField
              name="birthday"
              control={control}
              label="Date of Birth"
              placeholder=" YYYY/mm/dd"
            />
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
              Sign Up Now
            </Button>
          </Col>
        </form>
        <Row
          sx={{ margin: "20px 0px", cursor: "pointer" }}
          onClick={() => history.push("/sign-in")}
        >
          <Text>I am already a member</Text>
        </Row>
      </Col>
    </Col>
  );
};

export default SignUpForm;
