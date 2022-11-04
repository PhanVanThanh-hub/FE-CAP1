import { Icon } from "@iconify/react";
import { Button, Divider, Modal, SxProps, TextField } from "@mui/material";
import React, { useState } from "react";
import { Col, Row, Text } from "../../../components/elements";
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

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "1px solid white",
  borderRadius: "12px",
};

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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Col sx={{ ...style, padding: "10px 50px", width: "25%" }}>
          <Text
            fontSize="subtitle1"
            sx={{ textAlign: "center", width: "100%", fontWeight: "bold" }}
          >
            CSW
          </Text>
          <Text sx={{ marginTop: "20px" }}>
            Your current role is “Startups”. Want to be change? Confirm
            password.
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
                      ? "rgba(145, 199, 136, 0.4)"
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
                          backgroundColor: "rgba(145, 199, 136, 0.4)",
                        },
                      }}
                    >
                      <Text
                        sx={{
                          marginLeft: "20px",
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
              <Button
                variant="contained"
                type="submit"
                sx={{
                  width: "50%",
                  margin: "10px 0px",
                  backgroundColor: "#52734D",
                  borderRadius: "12px",
                  padding: "5px 20px",
                  textTransform: "capitalize",
                  "&:hover": {
                    backgroundColor: "rgba(82, 115, 77, 1)",
                    color: "white",
                  },
                }}
              >
                Confirm
              </Button>
            </Col>
          </form>
        </Col>
      </Modal>
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
        <Icon
          icon="bytesize:arrow-left"
          height="24"
          width="24"
          color="#52734D"
          cursor="pointer"
          onClick={backMainTab}
        />
        <Text fontSize="body1" sx={{ marginLeft: "10px", fontWeight: "bold" }}>
          Change Role
        </Text>
      </Row>
      <Divider sx={{ margin: "20px 0px", borderColor: "#52734D" }} />
      <Col sx={{ width: "40%" }}>
        <Row sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Text sx={{ fontWeight: "bold" }}>Present :</Text>
          <Row
            sx={{
              backgroundColor: "rgba(145, 199, 136, 0.4)",
              borderRadius: "12px",
              padding: "5px 40px",
            }}
          >
            Startups
          </Row>
        </Row>
        <Button
          type="submit"
          variant="outlined"
          onClick={() => setIsOpenModal(true)}
          sx={{
            margin: "50px 0px",
            borderColor: "#52734D",
            color: "#52734D",
            borderRadius: "12px",
            padding: "5px 20px",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "rgba(145, 199, 136, 0.4)",
              borderColor: "#52734D",
            },
          }}
        >
          Change Role
        </Button>
      </Col>
      <ModalChangeRole open={isOpenModal} handleClose={handleCloseModal} />
    </Col>
  );
};

export default ChangeRole;
