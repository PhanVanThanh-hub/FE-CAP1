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
  const contract = useSelector(selectContractDetail);
  const initalValues: any = {
    description: contract?.description || "",
    amount: contract?.investment_money || "",
    percent: contract?.investment_percent || "",
  } as any;
  const schema = yup
    .object({
      description: yup.string().required("Please enter description"),
      amount: yup.number().typeError("Please enter a valid number"),
      percent: yup
        .number()
        .typeError("Please enter a valid number")
        .required("Dilute % is required")
        .min(0, "Minimum atleast 0")
        .max(100, "Allowed maximum is 100"),
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
  const params = useParams<ParamsProps>();
  const { id } = params;
  const projectLink = `http://localhost:3000/projects/${contract?.project.id}`;

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchContractDetail({ id }));
    };
    fetchData();
  }, [dispatch, id]);

  const handleFormSubmit = async (formValue: any) => {
    const params = {
      ...formValue,
      project: contract?.project.id,
      startup: contract?.startup.id,
      investor: contract?.investor.id,
    };
    dispatch(fetchCreateContract(params));
  };

  const informationContract = {
    project: contract?.project.id,
    investor: contract?.investor.id,
    startup: contract?.startup.id,
  };

  const handleDeleteContract = async () => {
    await dispatch(
      fetchContractDecision({
        ...informationContract,
        close_the_deal: true,
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
              Company B (Investor)
            </Text>
            {contract && (
              <Col>
                <RowInformation
                  field="Investor Name"
                  content={contract.investor.company}
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
            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <Col
                sx={{
                  "& .MuiInputBase-input": {
                    height: "0.75em",
                  },
                  "& .MuiFormControl-root": {
                    width: "100%",
                  },
                }}
              >
                <Row sx={{ alignItems: "center" }}>
                  <Text sx={{ width: "25%" }}>Description:</Text>
                  <InputField name="description" control={control} />
                </Row>
                <Row sx={{ alignItems: "center" }}>
                  <Text sx={{ width: "25%" }}>Amount of Investment:</Text>
                  <InputField name="amount" control={control} />
                </Row>
                <Row sx={{ alignItems: "center" }}>
                  <Text sx={{ width: "25%" }}>Percent of Company Shares:</Text>
                  <InputField name="percent" control={control} />
                </Row>
              </Col>
              <Row
                sx={{
                  alignItems: "center",
                  justifyContent: "end",
                  marginTop: "10px",
                }}
              >
                <UiButton type="submit">Update and Resend</UiButton>
                <Row sx={{ margin: "5px" }} />
                <UiButton onClick={handleDeleteContract}>Delete</UiButton>
              </Row>
            </form>
          </Col>
        </Col>
      </UiScrollBar>
    </UiModal>
  );
};

export default Contract;
