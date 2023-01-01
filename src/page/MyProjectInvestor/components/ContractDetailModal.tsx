import React from "react";
import {
  Col,
  UiModal,
  Text,
  Row,
  UiButton,
} from "../../../components/elements";
import UiScrollBar from "../../../components/elements/UiScrollBar";
import { COLOR } from "../../../constants";
import { ContractApiItems } from "../../../types/models/contract";
import { formatMoney } from "../../../until/helpers/functions";
import { formatShortDateTime } from "../../../until/helpers";
import { Link } from "@mui/material";

interface Props {
  open: boolean;
  handleClose: () => void;
  contract: ContractApiItems;
}

const RowInformation = ({
  field,
  content,
}: {
  field: string;
  content: string;
}) => {
  return (
    <Row sx={{ marginTop: "10px" }}>
      <Text sx={{ minWidth: "30%", fontWeight: "bold" }}>{field} :</Text>
      <Text sx={{ color: COLOR.icon.primary, fontWeight: "bold" }}>
        {content}
      </Text>
    </Row>
  );
};

const ContractDetailModal = ({ open, handleClose, contract }: Props) => {
  const projectLink = `http://localhost:3000/projects/${contract?.project.id}`;

  return (
    <UiModal open={open} onClose={handleClose} width="60%">
      <UiScrollBar>
        <Col sx={{ padding: "0px 20px" }}>
          <Text fontSize="subtitle1" sx={{ fontWeight: "bold" }}>
            The Contract of{" "}
            <span style={{ color: COLOR.icon.primary }}>
              {contract.project.project_name}
            </span>{" "}
            Project
          </Text>
          <Col>
            <RowInformation
              field="Startup Name"
              content={contract.startup.company}
            />
            <RowInformation
              field="Investment Money"
              content={formatMoney(Number(contract.investment_money))}
            />
            <RowInformation
              field="Investment Percent"
              content={contract.investment_percent}
            />
            <Row sx={{ alignItems: "center" }}>
              <Text sx={{ fontWeight: "bold" }}>
                Project:{" "}
                <span style={{ color: COLOR.icon.primary }}>
                  {contract.project.project_name}
                </span>
              </Text>
              <UiButton sx={{ marginLeft: "10px" }}>
                <Link
                  target="_black"
                  href={projectLink}
                  underline="none"
                  sx={{ color: "white" }}
                >
                  Learn More
                </Link>
              </UiButton>
            </Row>
            <Text fontSize="subtitle2" sx={{ fontWeight: "bold" }}>
              Description
            </Text>
            <Text>{contract.description}</Text>
            <Text fontSize="caption" sx={{ marginTop: "10px" }}>
              {formatShortDateTime(contract.close_deal_at)}
            </Text>
          </Col>
        </Col>
      </UiScrollBar>
    </UiModal>
  );
};

export default ContractDetailModal;
