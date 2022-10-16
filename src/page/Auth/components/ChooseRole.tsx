import { SxProps } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { ButtonDefault, Col, Row, Text } from "../../../components/elements";
import { fetchRole, selectRole } from "../../../redux/auth/authSlice";

const RowStyle: SxProps = {
  border: "1px solid #D06666",
  borderRadius: "16px",
  minHeight: "44px",
  alignItems: "center",
  cursor: "pointer",
  marginBottom: "20px",
};

interface Props {
  chooseRole: (role: number) => void;
}

const ChooseRole = ({ chooseRole }: Props) => {
  const dispatch = useAppDispatch();
  const [selectedRole, setSelectedRole] = useState<number>(-1);

  useEffect(() => {
    async function fetchDate() {
      await dispatch(fetchRole());
    }
    fetchDate();
  }, [dispatch]);

  const handleChooseRole = (role: number) => {
    setSelectedRole(role);
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
        What’s the role <br />
        you want to be?
      </Text>
      <Col
        sx={{
          marginTop: "40px",
          width: "50%",
          padding: "0px 20px",
        }}
      >
        <Row
          sx={{
            ...RowStyle,
            backgroundColor:
              selectedRole === 0 ? "rgba(208, 102, 102, 1)" : "transparent",
            color: selectedRole === 0 ? "white" : "black",
          }}
          onClick={() => handleChooseRole(0)}
        >
          <Text sx={{ marginLeft: "20px" }}>Investor</Text>
        </Row>

        <Row
          sx={{
            ...RowStyle,
            backgroundColor:
              selectedRole === 1 ? "rgba(208, 102, 102, 1)" : "transparent",
            color: selectedRole === 1 ? "white" : "black",
          }}
          onClick={() => handleChooseRole(1)}
        >
          <Text sx={{ marginLeft: "20px" }}>Start-up</Text>
        </Row>
        <Row
          sx={{
            ...RowStyle,
            backgroundColor:
              selectedRole === 2 ? "rgba(208, 102, 102, 1)" : "transparent",
            color: selectedRole === 2 ? "white" : "black",
          }}
          onClick={() => handleChooseRole(2)}
        >
          <Text sx={{ marginLeft: "20px" }}>User</Text>
        </Row>
        <Row sx={{ justifyContent: "center" }}>
          <ButtonDefault onClick={() => chooseRole(selectedRole)}>
            Confirm
          </ButtonDefault>
        </Row>
        <Text sx={{ marginTop: "20px" }}>
          Change your role in settings if you want to
        </Text>
      </Col>
    </Col>
  );
};

export default ChooseRole;
