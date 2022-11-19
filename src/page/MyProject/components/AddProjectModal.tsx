import React, { useState } from "react";
import {
  Text,
  Col,
  UiModal,
  Row,
  UiButton,
  UiIcon,
} from "../../../components/elements";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { InputField, SelectField } from "../../../components/FormControl";
import { Avatar, Grid, Collapse, CardMedia } from "@mui/material";
import { UiInputFile } from "../../../components/elements/UiInputFile";
import { useBoolBag } from "../../../hooks";
import UiScrollBar from "../../../components/elements/UiScrollBar";
import { TransitionGroup } from "react-transition-group";
import parse from "date-fns/parse";
import { formatDate } from "../../../until/helpers";
import uuid from "react-uuid";
import { phoneRegExp } from "../../../constants";

const categories = [
  { label: "AI", value: "1" },
  { label: "Blockchain", value: "2" },
  { label: "Data Analyst", value: "3" },
  { label: "Cryptocurrency", value: "4" },
  { label: "Logistic", value: "5" },
  { label: "Other", value: "6" },
];

interface Props {
  isOpenModal: boolean;
  handleCloseModal: () => void;
}

interface MemberProps {
  key: string;
  name: string;
  position: string;
  joined_date: string;
  avatar: any;
}

interface AddMemberProps {
  handleAddMember: (information: MemberProps) => void;
}

const AddMemberForm = ({ handleAddMember }: AddMemberProps) => {
  const [avatar, setAvatar] = useState<any>();
  const initialValues: any = {
    name: "",
    position: "",
    joined_date: "",
  };
  const schema = yup
    .object({
      name: yup.string().required("Please enter name"),
      position: yup.string().required("Please enter position"),
      joined_date: yup
        .date()
        .transform(function (value, originalValue) {
          if (this.isType(value)) {
            return value;
          }
          const result = parse(originalValue, "dd.MM.yyyy", new Date());
          return result;
        })
        .typeError("please enter a valid date")
        .required()
        .min("1969-11-13", "Date is too early"),
    })
    .required();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<any>({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (formValue: any) => {
    const member: MemberProps = {
      avatar: avatar,
      ...formValue,
      joined_date: formatDate(formValue.joined_date),
      key: uuid(),
    };
    handleAddMember(member);
    setAvatar("");
    reset();
  };

  const onChooseFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setAvatar(event.target.files[0]);
    }
  };

  return (
    <Col sx={{ marginTop: "20px" }}>
      <form>
        <Row sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Col sx={{ height: "100%", position: "relative" }}>
            {avatar ? (
              <Col>
                <CardMedia
                  component="img"
                  sx={{ width: "100px", height: "100px", borderRadius: "12px" }}
                  image={URL.createObjectURL(avatar)}
                  alt="Paella dish"
                />
                <Text
                  sx={{
                    fontSize: "0.8rem",
                    marginTop: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => setAvatar("")}
                >
                  Remove
                </Text>
              </Col>
            ) : (
              <UiInputFile
                onChooseFile={onChooseFile}
                accept="application/pdf, image/gif, image/jpeg"
                sx={{
                  borderRadius: "12px",
                  height: "70px",
                }}
              />
            )}
          </Col>
          <Col>
            <Row>
              <InputField
                name="name"
                control={control}
                placeholder="Member Name"
              />
            </Row>
            <Row sx={{ width: "100%", justifyContent: "space-around" }}>
              <Row>
                <InputField
                  name="position"
                  control={control}
                  placeholder="Position"
                />
              </Row>
              <Row>
                <InputField
                  name="joined_date"
                  control={control}
                  placeholder="Date Joined"
                />
              </Row>
            </Row>
          </Col>
        </Row>
        <Row sx={{ justifyContent: "flex-end" }}>
          <UiButton onClick={handleSubmit(handleFormSubmit)}>Add</UiButton>
        </Row>
      </form>
    </Col>
  );
};

const Member = ({
  listMember,
  removeMember,
}: {
  listMember: MemberProps[];
  removeMember: (key: string) => void;
}) => {
  return (
    <Col>
      <Grid container rowSpacing={3}>
        <TransitionGroup style={{ width: "100%" }}>
          {listMember.map((member, index) => {
            const avatar = member.avatar
              ? URL.createObjectURL(member.avatar)
              : "";
            return (
              <Collapse key={member.key}>
                <Row
                  sx={{
                    width: "100%",
                    alignItems: "center",
                    margin: "10px 0px",
                  }}
                >
                  <Row sx={{ alignItems: "center" }}>
                    <Avatar src={avatar} />
                    <Col sx={{ marginLeft: "10px" }}>
                      <Text fontSize="body1" sx={{ fontWeight: "bold" }}>
                        {member.name}
                      </Text>
                      <Text fontSize="caption">
                        {member.position} - join {member.joined_date}
                      </Text>
                    </Col>
                  </Row>
                  <Row
                    sx={{ marginLeft: "20px" }}
                    onClick={() => removeMember(member.key)}
                  >
                    <UiIcon icon="ic:baseline-delete" />
                  </Row>
                </Row>
              </Collapse>
            );
          })}
        </TransitionGroup>
      </Grid>
    </Col>
  );
};

const AddProjectModal = ({ isOpenModal, handleCloseModal }: Props) => {
  const initialValues: any = {
    project_name: "",
    introduce: "",
    categories: [],
    email: "",
    phone_number: "",
    abbreviations: "",
    investment: "",
    percent: "",
    establish: "",
    project_owner: "",
    project_owner_position: "",
    website: "",
  };
  const schema = yup
    .object({
      project_name: yup.string().required("Please enter company"),
      introduce: yup.string().required("Please enter position"),
      categories: yup.array().min(1, "Please choose at least 1 category"),
      email: yup.string().email().required("Please enter email"),
      phone_number: yup
        .string()
        .matches(phoneRegExp, "Phone number is not valid"),
      abbreviations: yup.string().required("Please enter abbreviations"),
      website: yup
        .string()
        .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          "Enter correct url!"
        )
        .required("Please enter website"),
      project_owner: yup.string().required("Please enter company"),
      project_owner_position: yup.string().required("Please enter company"),
      establish: yup
        .date()
        .transform(function (value, originalValue) {
          if (this.isType(value)) {
            return value;
          }
          const result = parse(originalValue, "dd.MM.yyyy", new Date());
          return result;
        })
        .typeError("please enter a valid date")
        .required()
        .min("1969-11-13", "Date is too early"),
      investment: yup.number().required("Please enter investment"),
      percent: yup
        .number()
        .required("Please enter investment percent")
        .min(0, "Minimum atleast 0")
        .max(100, "Allowed maximum is 100"),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<any>({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });
  const [video, setVideo] = useState<any>();
  const [image, setImage] = useState<any>();
  const [listMember, setListMember] = useState<MemberProps[]>([]);
  const { boolBag, setBoolBag } = useBoolBag({ isAddMember: false });
  const { isAddMember } = boolBag;

  const handleFormSubmit = async (formValue: any) => {};

  const handleAddMember = (information: MemberProps) => {
    setListMember((prev) => [...prev, information]);
  };

  const removeMember = (key: string) => {
    setListMember(listMember.filter((member) => member.key !== key));
  };

  const onChooseImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(event.target.files[0]);
    }
  };

  const onChooseVideo = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setVideo(event.target.files[0]);
    }
  };

  return (
    <UiModal open={isOpenModal} onClose={handleCloseModal} width="80%">
      <UiScrollBar>
        <Col sx={{ padding: "0px 20px" }}>
          <Text fontSize="subtitle2" sx={{ fontWeight: "bold" }}>
            Create new project
          </Text>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <Col
              sx={{
                alignItems: "center",
                "& .MuiInputBase-input": {
                  height: "0.75em",
                },
                "& .MuiFormControl-root": {
                  width: "100%",
                },
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <InputField
                    name="project_name"
                    control={control}
                    label="Project Name"
                    placeholder="Project Name"
                  />
                  <InputField
                    name="introduce"
                    control={control}
                    label="Introduce"
                    placeholder="Tell something about project.."
                    multiline={true}
                  />
                  <Row sx={{ justifyContent: "space-between" }}>
                    <Row sx={{ width: "45%" }}>
                      <InputField
                        name="email"
                        control={control}
                        placeholder="Email"
                        icon="ic:round-email"
                      />
                    </Row>
                    <Row sx={{ width: "45%" }}>
                      <InputField
                        name="website"
                        control={control}
                        placeholder="Website"
                        icon="mdi:web"
                      />
                    </Row>
                  </Row>
                  <Row sx={{ justifyContent: "space-between" }}>
                    <Row sx={{ width: "45%" }}>
                      <InputField
                        name="abbreviations"
                        control={control}
                        placeholder="Abbreviations"
                        icon="charm:plant-pot"
                      />
                    </Row>
                    <Row sx={{ width: "45%" }}>
                      <InputField
                        name="phone_number"
                        control={control}
                        placeholder="Phone Number"
                        icon="ic:baseline-local-phone"
                      />
                    </Row>
                  </Row>
                  <Col>
                    <Row
                      sx={{
                        margin: "20px 0px",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text fontSize="body1" sx={{ fontWeight: "bold" }}>
                        Member
                      </Text>
                      <Row
                        onClick={() =>
                          setBoolBag({ isAddMember: !isAddMember })
                        }
                      >
                        <UiIcon icon="material-symbols:add-circle-outline" />
                        <Text sx={{ marginLeft: "5px" }}>Add Member</Text>
                      </Row>
                    </Row>
                    <Member
                      listMember={listMember}
                      removeMember={removeMember}
                    />
                  </Col>
                  {isAddMember && (
                    <AddMemberForm handleAddMember={handleAddMember} />
                  )}
                </Grid>
                <Grid item xs={6}>
                  <Row>
                    <Col>
                      <Col
                        sx={{
                          width: "100%",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          fontSize="subtitle2"
                          sx={{ fontWeight: "bold", marginBottom: "10px" }}
                        >
                          Image Project
                        </Text>
                        {image ? (
                          <Col>
                            <CardMedia
                              component="img"
                              sx={{
                                height: "150px",
                                width: "200px",
                                borderRadius: "12px",
                              }}
                              image={URL.createObjectURL(image)}
                              alt="Paella dish"
                            />
                            <Text
                              sx={{
                                fontSize: "0.8rem",
                                marginTop: "10px",
                                cursor: "pointer",
                              }}
                              onClick={() => setImage("")}
                            >
                              Remove
                            </Text>
                          </Col>
                        ) : (
                          <UiInputFile
                            onChooseFile={onChooseImage}
                            accept="application/pdf, image/gif, image/jpeg"
                            sx={{
                              height: "150px",
                              width: "200px",
                              borderRadius: "12px",
                            }}
                          />
                        )}
                      </Col>

                      <Col
                        sx={{
                          width: "100%",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          fontSize="subtitle2"
                          sx={{ fontWeight: "bold", marginBottom: "10px" }}
                        >
                          Video Introduce
                        </Text>
                        {video ? (
                          <Col>
                            <video width="200" height="150" controls>
                              <source src={URL.createObjectURL(video)} />
                            </video>
                            <Text
                              sx={{
                                fontSize: "0.8rem",
                                marginTop: "10px",
                                cursor: "pointer",
                              }}
                              onClick={() => setImage("")}
                            >
                              Remove
                            </Text>
                          </Col>
                        ) : (
                          <UiInputFile
                            onChooseFile={onChooseVideo}
                            accept="video/mp4,video/x-m4v,video/*"
                            sx={{
                              height: "150px",
                              width: "200px",
                              borderRadius: "12px",
                            }}
                          />
                        )}
                      </Col>
                    </Col>
                    <Col sx={{ width: "100%", paddingLeft: "20px" }}>
                      <Text>Representative :</Text>
                      <InputField
                        name="project_owner"
                        control={control}
                        placeholder="Product owner"
                      />

                      <InputField
                        name="project_owner_position"
                        control={control}
                        placeholder="Position Product Owner"
                      />
                      <SelectField
                        name="categories"
                        control={control}
                        label="Category Projects"
                        options={categories}
                        isMultipleSelection={false}
                      />
                      <InputField
                        name="establish"
                        control={control}
                        label="Establish"
                        placeholder="Establish: mm/yyyy"
                      />
                      <Row>
                        <InputField
                          name="investment"
                          control={control}
                          label="Investment"
                          placeholder="Amount received investment"
                        />
                        <InputField
                          name="percent"
                          control={control}
                          label="Percent"
                          placeholder="1-100%"
                        />
                      </Row>
                    </Col>
                  </Row>
                </Grid>
              </Grid>
            </Col>
            <Row
              sx={{
                width: "100%",
                justifyContent: "flex-end",
              }}
            >
              <UiButton type="submit"> Create Project</UiButton>
            </Row>
          </form>
        </Col>
      </UiScrollBar>
    </UiModal>
  );
};

export default AddProjectModal;
