import React from "react";
import { Button, Grid } from "@mui/material";
import { Col, Row, Text } from "../../../components/elements";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { InputField } from "../../../components/FormControl/index";
import { StartupApiItem } from "../../../types/models/auth";

interface Props {
  handleStartupForm: (form: StartupApiItem) => void;
}

const StartupForm = ({ handleStartupForm }: Props) => {
  const initalValues: StartupApiItem = {
    company: "",
    field: "",
    revenue: 0,
    total_assets: 0,
    expected_revenue: 0,
    desired_investment: 0,
  } as StartupApiItem;
  const schema = yup
    .object({
      company: yup.string().required("Please enter company"),
      field: yup.string().required("Please enter field"),
      revenue: yup.number().required("Please enter revenue"),
      total_assets: yup.number().required("Please enter total total assets"),
      expected_revenue: yup.number().required("Please enter expected revenue"),
      desired_investment: yup
        .number()
        .required("Please enter desired level of investment"),
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
    handleStartupForm(formValue);
  };

  return (
    <Col
      sx={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text fontSize="h5" sx={{ fontWeight: "bold" }}>
        Fill information -
        <Text
          as="span"
          fontSize="h5"
          sx={{ color: "rgba(208, 102, 102, 1)", fontWeight: "bold" }}
        >
          Startup
        </Text>
      </Text>
      <Col
        sx={{
          width: "50%",
          padding: "0px 20px",
        }}
      >
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
            <InputField
              name="company"
              control={control}
              label="Company/Store"
              placeholder="Name"
            />
            <InputField
              name="field"
              control={control}
              label="Field"
              placeholder="What field is your topic in?"
            />
            <InputField
              name="revenue"
              control={control}
              label="Revenue"
              placeholder="Ex: 10000 USD"
            />
            <InputField
              name="total_assets"
              control={control}
              label="Total Assets"
              placeholder="Ex: 10000 USD"
            />
            <InputField
              name="expected_revenue"
              control={control}
              label="Expected Revenue"
              placeholder="Next year/ Next 2 years.."
            />
            <InputField
              name="desired_investment"
              control={control}
              label="Desired level of investment"
              placeholder="Next year/ Next 2 years.."
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
                Confirm
              </Button>
            </Row>
          </Col>
        </form>
      </Col>
    </Col>
  );
};

export default StartupForm;
