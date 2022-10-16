import React from "react";
import { Box, Button, Grid } from "@mui/material";
import { Col, Row, Text } from "../../../components/elements";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { InputField, SelectField } from "../../../components/FormControl/index";
import signUp from "../../../assets/image/auth/sign-up.png";
import { InvestorApiItem } from "../../../types/models/auth";

const categories = [
  { label: "AI", value: "1" },
  { label: "Blockchain", value: "2" },
  { label: "Data Analyst", value: "3" },
  { label: "Cryptocurrency", value: "4" },
  { label: "Logistic", value: "5" },
  { label: "Other", value: "6" },
];

interface Props {
  handleInvestorForm: (form: InvestorApiItem) => void;
}

const InvestorForm = ({ handleInvestorForm }: Props) => {
  const initalValues: InvestorApiItem = {
    company: "",
    position: "",
    min_investment: 0,
    max_investment: 0,
    categories: [],
  } as InvestorApiItem;
  const schema = yup
    .object({
      company: yup.string().required("Please enter company"),
      position: yup.string().required("Please enter position"),
      min_investment: yup
        .number()
        .min(1)
        .required("Please enter investment min"),
      max_investment: yup
        .number()
        .min(1)
        .required("Please enter investment max"),
      categories: yup.array().min(1, "Please choose at least 1 category"),
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
    handleInvestorForm(formValue);
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
          Investor
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
              label="Company"
              placeholder="Company's Name"
            />
            <InputField
              name="position"
              control={control}
              label="Position"
              placeholder="Your Position"
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
                  name="min_investment"
                  control={control}
                  label="Investment Min"
                  placeholder="Min"
                />
              </Grid>
              <Grid item xs={4}>
                <InputField
                  name="max_investment"
                  control={control}
                  label="Investment Max"
                  placeholder="Max"
                />
              </Grid>
            </Grid>
            <SelectField
              name="categories"
              control={control}
              label="Role"
              options={categories}
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

export default InvestorForm;
