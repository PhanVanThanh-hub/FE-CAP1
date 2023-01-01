import React, { useEffect, useState } from "react";
import { Col, Row, Text, UiIcon, UiModal } from "../../../components/elements";
import UiScrollBar from "../../../components/elements/UiScrollBar";
import { useAppDispatch } from "../../../app/hooks";
import {
  Avatar,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  tooltipClasses,
  TooltipProps,
} from "@mui/material";
import { formatMoney } from "../../../until/helpers/functions";
import { COLOR } from "../../../constants";
import { InvestorApiItem } from "../../../types/models/user";
import { useParams } from "react-router-dom";
import { ParamsProps } from "../../../types/models/app";
import {
  fetchInvestorProject,
  selectInvestorProject,
} from "../../../redux/projects/projectSlice";
import { useSelector } from "react-redux";
import { formatShortDateTime } from "../../../until/helpers";
import {
  InvestorProjectApiItem,
  ProjectApiItem,
} from "../../../types/models/projects";

interface Props {
  isOpenModal: boolean;
  handleCloseModal: () => void;
  project: ProjectApiItem;
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

const InvestmentDetail = ({
  isOpenModal,
  handleCloseModal,
  project,
}: Props) => {
  const dispatch = useAppDispatch();
  const params = useParams<ParamsProps>();
  const { id } = params;
  const investorProject = useSelector(selectInvestorProject);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchInvestorProject({ id }));
    };
    fetchData();
  }, [dispatch, id]);

  const total = Object.values(investorProject).reduce(
    (t, investor) => t + Number(investor.investment_money),
    0
  );
  const percent = Object.values(investorProject).reduce(
    (t, investor) => t + Number(investor.investment_percent),
    0
  );

  return (
    <UiModal open={isOpenModal} onClose={handleCloseModal} width="60%">
      <UiScrollBar>
        <Col>
          <Text
            fontSize="subtitle2"
            sx={{ margin: "10px 0px", fontWeight: "bold" }}
          >
            {project.project_name}
          </Text>
          {investorProject.length ? (
            <Row sx={{ alignItems: "center" }}>
              <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Time</TableCell>
                      <TableCell>Investors</TableCell>
                      <TableCell>Value</TableCell>
                      <TableCell>The company’s shares</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {investorProject.map((investor: InvestorProjectApiItem) => {
                      return (
                        <CustomWidthTooltip
                          key={investor.id}
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
                          <TableRow
                            hover
                            sx={{
                              cursor: "pointer",
                              "& .MuiTableCell-root": {
                                fontSize: "0.875rem",
                                color: "rgb(213, 217, 233)",
                                borderColor: "rgba(213, 217, 233, 0.082)",
                                borderBottom:
                                  "1px solid rgba(213, 217, 233, 0.082)",
                                maxWidth: 100,
                              },
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell>
                              {formatShortDateTime(investor.date_create)}
                            </TableCell>
                            <TableCell>{investor.investor.company}</TableCell>
                            <TableCell>
                              {formatMoney(Number(investor.investment_money))}
                            </TableCell>
                            <TableCell align="center">
                              {investor.investment_percent}%
                            </TableCell>
                          </TableRow>
                        </CustomWidthTooltip>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              <Col
                sx={{
                  padding: "10px 20px",
                  alignItems: "center",
                  textAlign: "center",
                  width: "50%",
                  justifyContent: "space-around",
                  height: "100%",
                }}
              >
                <Text>Total call for funds</Text>
                <Text sx={{ color: COLOR.icon.primary }}>
                  {formatMoney(total)}
                </Text>
                <Text>For:</Text>
                <Text sx={{ color: COLOR.icon.primary }}>{percent}%</Text>
                <Text sx={{ color: COLOR.icon.primary }}>
                  The company’s shares
                </Text>
              </Col>
            </Row>
          ) : (
            <Col
              sx={{
                padding: "20px 20px ",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text fontSize="subtitle2">The project has no investors</Text>
              <UiIcon icon="charm:plant-pot" size="200" />
            </Col>
          )}
        </Col>
      </UiScrollBar>
    </UiModal>
  );
};

export default InvestmentDetail;
