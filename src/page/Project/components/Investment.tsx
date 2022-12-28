import {
  Avatar,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { Col, Row, Text, UiButton } from "../../../components/elements";
import { COLOR, USER_ROLE } from "../../../constants";
import { InvestorProjectApiItem } from "../../../types/models/projects";
import { InvestorApiItem } from "../../../types/models/user";
import { formatMoney } from "../../../until/helpers/functions";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { formatShortDateTime } from "../../../until/helpers";
import { useSelector } from "react-redux";
import { selectUserRole } from "../../../redux/auth/authSlice";
import { getUserRoleFromStorage } from "../../../services/auth";

interface Props {
  investment: number;
  investor_project: InvestorProjectApiItem[];
  percent: number;
}

const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    width: 600,
    backgroundColor: "transparent",
  },
});

const ContactText = ({ type, content }: { type: string; content: string }) => {
  return (
    <Row
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "5px",
      }}
    >
      <Text>{type}:</Text>
      <Text sx={{ color: COLOR.icon.primary }}>{content}</Text>
    </Row>
  );
};

const InformationCard = ({ investor }: { investor: InvestorApiItem }) => {
  const avatar = `http://127.0.0.1:8000${investor.profile.avatar}`;

  return (
    <Col>
      <Col
        sx={{
          padding: "10px 20px",
          border: "1px solid white",
          borderRadius: "12px",
        }}
      >
        <Row sx={{ alignItems: "center" }}>
          <Avatar src={avatar} />
          <Col sx={{ marginLeft: "10px" }}>
            <Text sx={{ fontWeight: "bold" }}>{investor.profile.name}</Text>
            <Text sx={{ color: "text.disabled" }}>{investor.company}</Text>
          </Col>
        </Row>
        <Row sx={{ margin: "5px 0px" }} />
        {investor.profile.name && (
          <ContactText type="Investor’s Name" content={investor.profile.name} />
        )}
        {investor.profile.name && (
          <ContactText
            type="Telephone"
            content={investor.profile.phone_number}
          />
        )}

        <ContactText type="Position" content={investor.position || "Null"} />
        <ContactText type="Company’s Name" content={investor.company} />
        <ContactText type="Email" content={investor.profile.user.email} />
      </Col>
    </Col>
  );
};

const InvestorCard = ({ investor }: { investor: InvestorProjectApiItem }) => {
  const avatar = `http://127.0.0.1:8000${investor.investor.profile.avatar}`;

  return (
    <CustomWidthTooltip
      title={
        <Col
          sx={{
            backgroundColor: "background.paper",
            borderRadius: "12px",
          }}
        >
          <InformationCard investor={investor.investor} />
        </Col>
      }
    >
      <div>
        <Col sx={{ cursor: "pointer" }}>
          <Col
            sx={{
              padding: "10px 20px",
              border: "1px solid white",
              borderRadius: "12px",
            }}
          >
            <Row sx={{ alignItems: "center" }}>
              <Avatar src={avatar} />
              <Col sx={{ marginLeft: "10px" }}>
                <Text sx={{ fontWeight: "bold" }}>
                  {investor.investor.profile.name}
                </Text>
                <Text sx={{ color: "text.disabled" }}>
                  {investor.investor.company}
                </Text>
              </Col>
            </Row>
            <Row
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
                margin: "5px 0px",
              }}
            >
              <Text>
                Amount of
                <br /> Investment :{" "}
              </Text>
              <Text sx={{ color: COLOR.icon.primary, fontWeight: "bold" }}>
                {formatMoney(Number(investor.investment_money))}
              </Text>
            </Row>
            <Row sx={{ alignItems: "center", justifyContent: "space-between" }}>
              <Text>
                Percent of
                <br /> Company Shares: :{" "}
              </Text>
              <Text sx={{ color: COLOR.icon.primary, fontWeight: "bold" }}>
                {investor.investment_percent}%
              </Text>
            </Row>
          </Col>
        </Col>
      </div>
    </CustomWidthTooltip>
  );
};

const Investment = ({ investment, investor_project, percent }: Props) => {
  const userRole = useSelector(selectUserRole) || getUserRoleFromStorage();

  const totalAmountReceived = investor_project.reduce(
    (totalAmount, investor) => totalAmount + Number(investor.investment_money),
    0
  );

  const percentReceived = (totalAmountReceived / investment) * 100;

  return (
    <Col sx={{ margin: "20px 0px" }}>
      <Text fontSize="subtitle1" sx={{ fontWeight: "bold" }}>
        Investment
      </Text>
      <Row
        sx={{
          alginItems: "center",
          width: "100%",
          margin: "20px 0px",
        }}
      >
        <Row
          sx={{
            height: "50px",
            width: "70%",
            backgroundColor: "#0A0F23",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Row
            sx={{
              height: "100%",
              width: `${percentReceived}%`,
              backgroundColor: "#0F4C75",
            }}
          />
          <Text sx={{ position: "absolute", top: "25%", right: "5%" }}>
            {formatMoney(totalAmountReceived)}/{formatMoney(investment)}
          </Text>
        </Row>
      </Row>
      <Col sx={{ padding: "20px 0px", overflow: "hidden" }}>
        <TableContainer component={Paper}>
          <Table sx={{}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Time</TableCell>
                <TableCell>Investor</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {investor_project.map(
                (investor_project: InvestorProjectApiItem) => {
                  const { date_create, investor, investment_money } =
                    investor_project;
                  return (
                    <TableRow
                      key={investor_project.id}
                      hover
                      sx={{
                        cursor: "pointer",
                        "& .MuiTableCell-root": {
                          fontSize: "0.875rem",
                          color: "rgb(213, 217, 233)",
                          borderColor: "rgba(213, 217, 233, 0.082)",
                          borderBottom: "1px solid rgba(213, 217, 233, 0.082)",
                          maxWidth: 100,
                        },
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell>{formatShortDateTime(date_create)}</TableCell>
                      <TableCell component="th" scope="row">
                        {investor.profile.name}
                      </TableCell>
                      <TableCell>{formatMoney(investment_money)}</TableCell>
                    </TableRow>
                  );
                }
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Col>

      {userRole === USER_ROLE.INVESTOR && (
        <Row sx={{ margin: "10px 0px", justifyContent: "center" }}>
          <Row sx={{ width: "50%", justifyContent: "space-around" }}>
            <UiButton>Deal with startup</UiButton>
          </Row>
        </Row>
      )}
    </Col>
  );
};

export default Investment;
