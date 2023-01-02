import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import {
  Col,
  UiModal,
  Text,
  UiDivider,
  Row,
  UiButton,
} from "../../../components/elements";
import UiScrollBar from "../../../components/elements/UiScrollBar";
import Introduce from "./Introduce";
import Investment from "./Investment";
import Member from "./Member";
import Video from "./Video";
import { useParams } from "react-router-dom";
import { ParamsProps } from "../../../types/models/app";
import { useAppDispatch } from "../../../app/hooks";
import {
  fetchProjectByID,
  selectProjectDetail,
} from "../../../redux/projects/projectSlice";
import { useSelector } from "react-redux";
import { fetchCheckBoxChat } from "../../../redux/chat/chatSlice";
import { USER_ROLE } from "../../../constants";
import { selectUserRole } from "../../../redux/auth/authSlice";
import { getUserRoleFromStorage } from "../../../services/auth";

interface ModalProps {
  open: boolean;
  handleClose: any;
}

const ProjectDetailModal = ({ open, handleClose }: ModalProps) => {
  const dispatch = useAppDispatch();
  const params = useParams<ParamsProps>();
  const { id } = params;
  const projectDetail = useSelector(selectProjectDetail);
  const userRole = useSelector(selectUserRole) || getUserRoleFromStorage();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchProjectByID({ id: id }));
    };
    fetchData();
  }, [dispatch, id]);

  const handleDeal = async () => {
    dispatch(fetchCheckBoxChat({ startup_id: projectDetail?.startup.id }));
  };

  return (
    <UiModal open={true} onClose={handleClose} width="70%">
      <Grid container>
        <Grid item xs={12} sx={{ height: "100%" }}>
          <Col>
            <Col>
              <Text fontSize="h6">
                {projectDetail?.abbreviations} - {projectDetail?.project_name}
              </Text>
              <Text sx={{ marginTop: "20px" }}>
                Website for the startup community that aids in introducing and
                promoting startup ideas. To help the Start-up that want to
                efficiently and quickly raise capital
              </Text>
              <UiDivider />
              <UiScrollBar>
                {projectDetail && (
                  <Col sx={{ maxHeight: "60vh" }}>
                    <Introduce project={projectDetail} />
                    <Video
                      video={projectDetail.video}
                      image={projectDetail.image}
                    />
                    {projectDetail.members && (
                      <Member members={projectDetail.members} />
                    )}
                    <Investment
                      investment={projectDetail.investment}
                      percent={projectDetail.percent}
                      investor_project={projectDetail.investor_project}
                    />
                  </Col>
                )}
                {userRole === USER_ROLE.INVESTOR && (
                  <Row sx={{ margin: "10px 0px", justifyContent: "center" }}>
                    <Row sx={{ width: "50%", justifyContent: "space-around" }}>
                      <UiButton onClick={handleDeal}>
                        Deal with startup
                      </UiButton>
                    </Row>
                  </Row>
                )}
              </UiScrollBar>
            </Col>
          </Col>
        </Grid>
      </Grid>
    </UiModal>
  );
};

export default ProjectDetailModal;
