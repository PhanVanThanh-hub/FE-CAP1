import { Link } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
  selectContractDetail,
} from "../../../redux/contract/contactSlice";
import { ParamsProps } from "../../../types/models/app";
import { formatMoney } from "../../../until/helpers/functions";

interface Props {
  open: boolean;
  handleClose: () => void;
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
      <Text>{content}</Text>
    </Row>
  );
};

const Contract = ({ open, handleClose }: Props) => {
  const dispatch = useAppDispatch();
  const params = useParams<ParamsProps>();
  const { id } = params;
  const contract = useSelector(selectContractDetail);
  const projectLink = `http://localhost:3000/projects/${contract?.project.id}`;

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchContractDetail({ id }));
    };
    fetchData();
  }, [dispatch, id]);

  const informationContract = {
    project: contract?.project.id,
    investor: contract?.investor.id,
    startup: contract?.startup.id,
  };

  const handleAgreeContract = async () => {
    await dispatch(
      fetchContractDecision({
        ...informationContract,
        close_the_deal: true,
      })
    );
  };

  const handleRefuseContract = async () => {
    await dispatch(
      fetchContractDecision({
        ...informationContract,
        close_the_deal: false,
      })
    );
  };

  return (
    <UiModal open={open} onClose={handleClose} width="60%">
      <UiScrollBar>
        <Col sx={{ padding: "10px 20px" }}>
          <Text
            fontSize="subtitle1"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            The Contract
          </Text>
          <Col>
            <Text
              fontSize="body1"
              sx={{ fontWeight: "bold", color: COLOR.icon.primary }}
            >
              Company A (Start-up)
            </Text>
            {contract && (
              <Col>
                <RowInformation
                  field="Start-up's Name"
                  content={contract.startup.company}
                />
              </Col>
            )}
          </Col>
          <Col sx={{ marginTop: "10px" }}>
            <Text
              fontSize="body1"
              sx={{ fontWeight: "bold", color: COLOR.icon.primary }}
            >
              Project
            </Text>
            {contract && (
              <Col>
                <RowInformation
                  field="Project Name"
                  content={contract.project.project_name}
                />
                <RowInformation
                  field="Abbreviations"
                  content={contract.project.abbreviations}
                />
                <RowInformation
                  field="Category"
                  content={contract.project.category.name}
                />
                <RowInformation
                  field="Introduce"
                  content={contract.project.introduce}
                />
              </Col>
            )}
          </Col>
          <Row
            sx={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: "5px",
            }}
          >
            <UiButton>
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
          <Col sx={{ marginTop: "10px" }}>
            <Text
              fontSize="body1"
              sx={{ fontWeight: "bold", color: COLOR.icon.primary }}
            >
              Contract
            </Text>
            {contract && (
              <Col>
                <RowInformation
                  field="Description"
                  content={contract.description}
                />
                <RowInformation
                  field="Investment Money"
                  content={formatMoney(Number(contract.investment_money))}
                />
                <RowInformation
                  field="Percent"
                  content={contract.investment_percent}
                />
              </Col>
            )}
          </Col>
          <Row
            sx={{
              alignItems: "center",
              justifyContent: "end",
              marginTop: "10px",
            }}
          >
            <UiButton onClick={handleAgreeContract}>Agree</UiButton>
            <Row sx={{ margin: "5px" }} />
            <UiButton onClick={handleRefuseContract}>Refuse</UiButton>
          </Row>
        </Col>
      </UiScrollBar>
    </UiModal>
  );
};

export default Contract;
