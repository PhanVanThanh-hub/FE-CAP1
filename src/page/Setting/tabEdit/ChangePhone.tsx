import React, { useState } from "react";
import { Divider } from "@mui/material";
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
import { InputField } from "../../../components/FormControl";
import { phoneRegExp } from "../../../constants";

interface Props {
  backMainTab: () => void;
}

interface ModalProps {
  open: boolean;
  handleClose: any;
}

const ModalDeletePhoneNumber = ({ open, handleClose }: ModalProps) => {
  return (
    <div>
      <UiModal
        open={open}
        onClose={handleClose}
        width="30%"
        padding="30px 20px"
      >
        <Text fontSize="subtitle2" sx={{ fontWeight: "bold" }}>
          Delete Phone Number
        </Text>
        <Text>
          This will remove the number from your account and you will no longer
          be able to receive notifications or login codes to that number.
        </Text>
        <Col sx={{ alignItems: "center" }}>
          <UiButton
            variant="contained"
            width="50%"
            backgroundColor="rgba(234, 67, 53, 0.6)"
            color="rgba(255, 0, 0, 1)"
          >
            Delete
          </UiButton>
          <UiButton
            onClick={handleClose}
            variant="contained"
            width="50%"
            backgroundColor="transparent"
            color="black"
          >
            Cancel
          </UiButton>
        </Col>
      </UiModal>
    </div>
  );
};

const ModalUpdatePhoneNumber = ({ open, handleClose }: ModalProps) => {
  const initalValues: any = {
    phone_number: "",
  } as any;
  const schema = yup
    .object({
      phone_number: yup
        .string()
        .matches(phoneRegExp, "Phone number is not valid"),
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
        width="30%"
        padding="30px 50px"
      >
        <Text fontSize="subtitle2" sx={{ fontWeight: "bold" }}>
          Change Phone Number
        </Text>
        <Text sx={{ margin: "10px 0px" }}>
          Your current phone number is +84931864689. Want to update your phone
          number to that number?
        </Text>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Col
            sx={{
              width: "100%",
              margin: "10px 0px",
              alignItems: "center",
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
            <InputField
              name="phone_number"
              control={control}
              label="Your Phone Number"
              placeholder=""
            />
            <UiButton
              variant="contained"
              type="submit"
              backgroundColor="rgba(145, 199, 136, 0.4)"
              color="rgba(82, 115, 77, 1)"
              backgroundColorHover="rgba(82, 115, 77, 1)"
              colorHover="white"
              width="50%"
            >
              Save
            </UiButton>
          </Col>
        </form>
      </UiModal>
    </div>
  );
};

const ChangePhone = ({ backMainTab }: Props) => {
  const [isOpenModalDelete, setIsOpenModelDelete] = useState<boolean>(false);
  const [isOpenModalUpdate, setIsOpenModelUpdate] = useState<boolean>(false);

  const handleCloseDelete = () => {
    setIsOpenModelDelete(false);
  };

  const handleCloseUpdate = () => {
    setIsOpenModelUpdate(false);
  };

  return (
    <Col class="animate__animated animate__slideInRight">
      <Row sx={{ alignItems: "center" }}>
        <UiIcon icon="bytesize:arrow-left" onClick={backMainTab} />
        <Text fontSize="body1" sx={{ marginLeft: "10px", fontWeight: "bold" }}>
          Change Phone Number
        </Text>
      </Row>
      <Divider sx={{ margin: "20px 0px", borderColor: "divider" }} />
      <Col sx={{ width: "40%" }}>
        <Row
          sx={{
            margin: "10px 0px",
            border: "1px solid #52734D",
            borderRadius: "12px",
            padding: "10px 20px",
          }}
        >
          <Text>Present: +09321828328</Text>
        </Row>
        <Col>
          <UiButton
            type="submit"
            onClick={() => setIsOpenModelUpdate(true)}
            backgroundColor="transparent"
            backgroundColorHover="rgba(145, 199, 136, 0.4)"
            color="#52734D"
          >
            Update Telephone Number
          </UiButton>
          <UiButton
            type="submit"
            onClick={() => setIsOpenModelDelete(true)}
            backgroundColor="transparent"
            color="rgba(234, 67, 53, 1)"
            backgroundColorHover="rgba(234, 67, 53, 0.4)"
          >
            Delete Telephone Number
          </UiButton>
        </Col>
      </Col>
      <ModalDeletePhoneNumber
        open={isOpenModalDelete}
        handleClose={handleCloseDelete}
      />
      <ModalUpdatePhoneNumber
        open={isOpenModalUpdate}
        handleClose={handleCloseUpdate}
      />
    </Col>
  );
};

export default ChangePhone;
