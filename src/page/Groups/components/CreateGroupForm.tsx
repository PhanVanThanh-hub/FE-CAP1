import { Avatar, Button } from "@mui/material";
import React from "react";
import {
  Col,
  Row,
  Text,
  UiButton,
  UiModal,
} from "../../../components/elements";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { InputField, SelectField } from "../../../components/FormControl/index";

interface Props {
  open: any;
  handleClose: any;
}

const privacy = [
  { label: "Public", value: "1" },
  { label: "Private", value: "2" },
];
const CreateGroupForm = ({ open, handleClose }: Props) => {
  const initalValues: any = {
    group_name: "",
    privacy: "",
    introduce: "",
  };
  const schema = yup
    .object({
      group_name: yup.string().required("Please enter group name"),
      introduce: yup.string().required("Please enter introduce for group"),
      privacy: yup.string().required("Please choose at least 1 category"),
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
    console.log("dsadsa:", formValue);
  };

  return (
    <UiModal open={open} onClose={handleClose} padding="20px 30px">
      <Col
        sx={{
          backgroundColor: "background.paper",
          height: "100vh",
        }}
      >
        <Col sx={{ padding: "10px 20px" }}>
          <Text fontSize="subtitle1" sx={{ fontWeight: "bold" }}>
            Create Group
          </Text>
          <Row sx={{ margin: "10px 0px" }}>
            <Avatar />
            <Col sx={{ marginLeft: "10px" }}>
              <Text>Phan Van Thanh</Text>
              <Text fontSize="caption" sx={{ color: "text.disabled" }}>
                Admin
              </Text>
            </Col>
          </Row>
          <Col>
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
                  name="group_name"
                  control={control}
                  label="Group Name"
                  placeholder="Group Name"
                />
                <InputField
                  name="introduce"
                  control={control}
                  label="Introduce"
                  placeholder="Introduce"
                  multiline={true}
                />
                <SelectField
                  name="privacy"
                  control={control}
                  label="Choose Privacy"
                  options={privacy}
                  isMultipleSelection={false}
                />
              </Col>
              <Row
                sx={{
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <UiButton type="submit">Create Group</UiButton>
              </Row>
            </form>
          </Col>
        </Col>
      </Col>
    </UiModal>
  );
};

export default CreateGroupForm;
