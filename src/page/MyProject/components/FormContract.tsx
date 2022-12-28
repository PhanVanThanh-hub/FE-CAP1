import React, { useEffect, useState } from "react";
import { Avatar, Grid } from "@mui/material";
import {
  Col,
  UiModal,
  Text,
  Row,
  UiButton,
  UiInputField,
} from "../../../components/elements";
import UiScrollBar from "../../../components/elements/UiScrollBar";
import { useAppDispatch } from "../../../app/hooks";
import { useSelector } from "react-redux";
import {
  fetchProfile,
  fetchProfileInvestor,
  fetchSearch,
  selectListUser,
  selectProfile,
  selectProfileInvestor,
} from "../../../redux/auth/authSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { InputField } from "../../../components/FormControl";
import { COLOR, SEARCH_BY } from "../../../constants";
import { ProfileApiItem } from "../../../types/models/user";
import { fetchCreateContract } from "../../../redux/contract/contactSlice";

interface ModalProps {
  open: boolean;
  handleClose: any;
  project: {
    id: number;
    name: string;
  };
}

const InvestorCard = ({ profile }: { profile: ProfileApiItem }) => {
  return (
    <Col
      sx={{
        padding: "10px 20px",
        border: "1px solid white",
        borderRadius: "12px",
      }}
    >
      <Row sx={{ alignItems: "center" }}>
        <Avatar src={profile.avatar} />
        <Col sx={{ marginLeft: "10px" }}>
          <Text sx={{ fontWeight: "bold" }}>{profile.name}</Text>
          <Text sx={{ color: "text.disabled" }}>{profile.user.email}</Text>
        </Col>
      </Row>
    </Col>
  );
};

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

const FormContractModal = ({ open, handleClose, project }: ModalProps) => {
  const dispatch = useAppDispatch();
  const profileStartUp = useSelector(selectProfile);
  const profileInvestor = useSelector(selectProfileInvestor);
  const initalValues: any = {
    description: "",
    amount: "",
    percent: "",
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

  const [name, setName] = useState<string>("");
  const [chooseInvestor, setChooseInvestor] = useState<number>();
  const listUser = useSelector(selectListUser);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchSearch({ name: name, role: SEARCH_BY.INVESTOR }));
    };
    fetchData();
  }, [dispatch, name]);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchProfile({}));
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchProfileInvestor({ id_investor: chooseInvestor }));
    };
    fetchData();
  }, [chooseInvestor, dispatch]);

  const handleFormSubmit = async (formValue: any) => {
    const params = {
      ...formValue,
      project: project.id,
      startup: profileStartUp?.id,
      investor: profileInvestor?.information.id,
    };
    dispatch(fetchCreateContract(params));
  };

  const handleFilterSearch = (name: string) => {
    setName(name);
  };

  return (
    <UiModal open={open} onClose={handleClose} width="60%">
      <UiScrollBar>
        <Col sx={{ padding: "10px 20px" }}>
          <Text
            fontSize="subtitle1"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            The Start-up Contract
          </Text>
          <Col>
            <Text
              fontSize="body1"
              sx={{ fontWeight: "bold", color: COLOR.icon.primary }}
            >
              Company A (Start-up)
            </Text>
            {profileStartUp && (
              <Col>
                <RowInformation
                  field="Start-up's Name"
                  content={profileStartUp.name}
                />
                <RowInformation
                  field="Telephone"
                  content={profileStartUp.phone_number}
                />
                <RowInformation
                  field="Email"
                  content={profileStartUp.user.email}
                />
                <RowInformation
                  field="Company's Name"
                  content={profileStartUp.information.company}
                />
              </Col>
            )}
          </Col>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <Col>
              <Text
                fontSize="body1"
                sx={{
                  fontWeight: "bold",
                  marginTop: "20px",
                  color: COLOR.icon.primary,
                }}
              >
                Company B (Investor)
              </Text>
              <Col>
                <Row
                  sx={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "10px",
                  }}
                >
                  <Text>Search Name:</Text>
                  {chooseInvestor ? (
                    <Text
                      sx={{
                        cursor: "pointer",
                        textDecorationLine: "underline",
                      }}
                      onClick={() => {
                        setName("");
                        setChooseInvestor(undefined);
                      }}
                    >
                      Change Investor
                    </Text>
                  ) : (
                    <UiInputField
                      placeholder="Search"
                      icon="material-symbols:search"
                      onChange={handleFilterSearch}
                    />
                  )}
                </Row>
                {chooseInvestor ? (
                  profileInvestor && (
                    <Col>
                      <RowInformation
                        field="Investor's Name"
                        content={profileInvestor.name}
                      />
                      <RowInformation
                        field="Telephone"
                        content={profileInvestor.phone_number}
                      />
                      <RowInformation
                        field="Email"
                        content={profileInvestor.user.email}
                      />
                      <RowInformation
                        field="Company's Name"
                        content={profileInvestor.information.company}
                      />
                      <RowInformation
                        field="Position"
                        content={profileInvestor.information.position}
                      />
                    </Col>
                  )
                ) : listUser.length ? (
                  <Grid container spacing={3}>
                    {listUser.map((profile: any) => {
                      return (
                        <Grid
                          item
                          xs={4}
                          onClick={() => setChooseInvestor(profile.id)}
                          sx={{ cursor: "pointer" }}
                        >
                          <InvestorCard profile={profile} />
                        </Grid>
                      );
                    })}
                  </Grid>
                ) : (
                  <Row
                    sx={{
                      margin: "10px 0px",
                      alignItems: "center",
                      width: "100%",
                      justifyContent: "center",
                    }}
                  >
                    <Text fontSize="body1" sx={{ fontWeight: "bold" }}>
                      Choose Investor
                    </Text>
                  </Row>
                )}
              </Col>
            </Col>
            <Col>
              <Text
                fontSize="body1"
                sx={{
                  fontWeight: "bold",
                  marginTop: "20px",
                  color: COLOR.icon.primary,
                }}
              >
                Article: Project Name, Description, Amount of Investment,
                Percent of Company Shares
              </Text>
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
                  <RowInformation field="Project Name" content={project.name} />
                </Row>
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
            </Col>
            <Row sx={{ alignItems: "center", justifyContent: "end" }}>
              {chooseInvestor ? (
                <UiButton type="submit">Confirm and send</UiButton>
              ) : (
                <Text>Please Choose Investor</Text>
              )}
            </Row>
          </form>
        </Col>
      </UiScrollBar>
    </UiModal>
  );
};

export default FormContractModal;
