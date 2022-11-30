import React from "react";
import { CardMedia, Grid } from "@mui/material";
import {
  Col,
  UiModal,
  Text,
  UiDivider,
  Row,
} from "../../../components/elements";
import UiScrollBar from "../../../components/elements/UiScrollBar";
import Introduce from "./Introduce";
import Investment from "./Investment";
import Member from "./Member";
import Video from "./Video";
import image from "../../../assets/image/auth/sign-up.png";
import * as Scroll from "react-scroll";
import { useParams } from "react-router-dom";
import { ParamsProps } from "../../../types/models/app";

interface ModalProps {
  open: boolean;
  handleClose: any;
}
let Link = Scroll.Link;

const ProjectDetailModal = ({ open, handleClose }: ModalProps) => {
  const params = useParams<ParamsProps>();
  const { id } = params;

  return (
    <UiModal open={true} onClose={handleClose} width="80%">
      <Grid container>
        <Grid item xs={3}>
          <Col sx={{ padding: "0px 20px" }}>
            <CardMedia
              component="img"
              height="194"
              image={image}
              alt="Paella dish"
            />
            <Col
              sx={{
                height: "20vh",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <Link
                to="introduce_project"
                smooth={true}
                offset={50}
                duration={500}
              >
                <Row
                  sx={{
                    backgroundColor: "button.primary",
                    width: "50%",
                    padding: "10px 5px",
                    borderRadius: "12px",
                  }}
                >
                  <Text>Introduce</Text>
                </Row>
              </Link>
              <Link to="video_project">
                <Text>Video</Text>
              </Link>
              <Link
                to="memberProject"
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={800}
              >
                <Text>Member</Text>
              </Link>
              <Link to="invest_project">
                <Text>Invest</Text>
              </Link>
            </Col>
          </Col>
        </Grid>
        <Grid item xs={9} sx={{ height: "100%" }}>
          <Col>
            <Col>
              <Text fontSize="h6">CSW - The community startups website</Text>
              <Text sx={{ marginTop: "20px" }}>
                Website for the startup community that aids in introducing and
                promoting startup ideas. To help the Start-up that want to
                efficiently and quickly raise capital
              </Text>
              <UiDivider />
              <UiScrollBar>
                <Col sx={{ maxHeight: "60vh" }}>
                  <Introduce />
                  <Video />
                  <Member />
                  <Investment />
                </Col>
              </UiScrollBar>
            </Col>
          </Col>
        </Grid>
      </Grid>
    </UiModal>
  );
};

export default ProjectDetailModal;
