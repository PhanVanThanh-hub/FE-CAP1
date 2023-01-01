import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useParams, useRouteMatch } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import {
  Col,
  UiModal,
  Text,
  Row,
  UiButton,
} from "../../../components/elements";
import UiScrollBar from "../../../components/elements/UiScrollBar";
import { COLOR } from "../../../constants";
import {
  fetchContractDecision,
  fetchContractDetail,
  fetchCreateContract,
  selectContractDetail,
} from "../../../redux/contract/contactSlice";
import { ParamsProps } from "../../../types/models/app";
import { ContractApiItems } from "../../../types/models/contract";
import { formatMoney } from "../../../until/helpers/functions";
import * as yup from "yup";
import { InputField } from "../../../components/FormControl";
import { selectFinishedCallApi } from "../../../redux/uiSlice";
import { formatDate, formatShortDateTime } from "../../../until/helpers";

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
              field="Investor Name"
              content={contract.investor.company}
            />
            <RowInformation
              field="Investment Money"
              content={formatMoney(Number(contract.investment_money))}
            />
            <RowInformation
              field="Investment Percent"
              content={contract.investment_percent}
            />
            <Row sx={{ margin: "10px 0px" }} />
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
