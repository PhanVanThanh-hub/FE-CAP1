import React, { useState } from "react";
import { Divider, SxProps } from "@mui/material";
import {
  Col,
  Row,
  Text,
  UiButton,
  UiIcon,
  UiModal,
} from "../../../components/elements";
import "animate.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PasswordField } from "../../../components/FormControl";
import { CHOOSE_ROLES } from "../../../constants";

interface Props {
  backMainTab: () => void;
}

interface ModalProps {
  open: boolean;
  handleClose: any;
}

const RowStyle: SxProps = {
  border: "1px solid rgba(145, 199, 136, 0.4)",
  borderRadius: "16px",
  minHeight: "44px",
  alignItems: "center",
  cursor: "pointer",
  marginBottom: "20px",
};

const ModalChangeRole = ({ open, handleClose }: ModalProps) => {
  const [selectedRole, setSelectedRole] = useState<number>();
  const initalValues: any = {
    password: "",
  } as any;
  const schema = yup
    .object({
      password: yup.string().required("No password provided."),
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
    <div>
      <UiModal
        open={open}
        onClose={handleClose}
        padding="10px 50px"
        width="25%"
      >
        <Text
          fontSize="subtitle1"
          sx={{ textAlign: "center", width: "100%", fontWeight: "bold" }}
        >
          CSW
        </Text>
        <Text sx={{ marginTop: "20px" }}>
          Your current role is “Startups”. Want to be change? Confirm password.
        </Text>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Col
            sx={{
              margin: "10px 0px",
              alignItems: "center",
              "& .MuiFormControl-root": {
                margin: "2px 0px",
                width: "100%",
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
              name="password"
              control={control}
              label="Password"
              placeholder=""
            />
            <Text
              fontSize="body1"
              sx={{ margin: "10px 0px", fontWeight: "bold" }}
            >
              Choose Role
            </Text>
            <Col sx={{ width: "100%" }}>
              {CHOOSE_ROLES.map((role) => {
                const backgroundColor =
                  selectedRole === role.value
                    ? "button.primary"
                    : "transparent";
                return (
                  <Row
                    onClick={() => setSelectedRole(role.value)}
                    sx={{
                      ...RowStyle,
                      backgroundColor: backgroundColor,
                      color: "black",
                      textAlign: "center",
                      "&:hover": {
                        backgroundColor: "button.primary",
                      },
                    }}
                  >
                    <Text
                      sx={{
                        textAlign: "center",
                        width: "100%",
                      }}
                    >
                      {role.name}
                    </Text>
                  </Row>
                );
              })}
            </Col>
            <UiButton
              variant="contained"
              type="submit"
              backgroundColor="button.primary"
              backgroundColorHover="button.hover"
              width="50%"
            >
              Confirm
            </UiButton>
          </Col>
        </form>
      </UiModal>
    </div>
  );
};

const ChangeRole = ({ backMainTab }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <Col class="animate__animated animate__slideInRight">
      <Row sx={{ alignItems: "center" }}>
        <UiIcon icon="bytesize:arrow-left" onClick={backMainTab} />
        <Text fontSize="body1" sx={{ marginLeft: "10px", fontWeight: "bold" }}>
          Change Role
        </Text>
      </Row>
      <Divider sx={{ margin: "20px 0px", borderColor: "divider" }} />
      <Col sx={{ width: "40%" }}>
        <Row
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <Text sx={{ fontWeight: "bold" }}>Present :</Text>
          <Row
            sx={{
              backgroundColor: "button.primary",
              borderRadius: "12px",
              padding: "5px 40px",
            }}
          >
            <Text>Startups</Text>
          </Row>
        </Row>
        <UiButton
          type="submit"
          onClick={() => setIsOpenModal(true)}
          backgroundColorHover="button.hover"
          backgroundColor="button.primary"
          borderColor="#52734D"
          borderColorHover="#52734D"
        >
          Change Role
        </UiButton>
      </Col>
      <ModalChangeRole open={isOpenModal} handleClose={handleCloseModal} />
    </Col>
  );
};

export default ChangeRole;
