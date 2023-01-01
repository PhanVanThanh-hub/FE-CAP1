import {
  CardMedia,
  Chip,
  styled,
  Tooltip,
  tooltipClasses,
  TooltipProps,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../app/hooks";
import { Col, Row, UiInputField, Text } from "../../../components/elements";
import { fetchCategory, selectCategory } from "../../../redux/auth/authSlice";
import { CategoryApiItem } from "../../../types/models/auth";

interface Props {
  handleFilterCategory: (category: string) => void;
  handleFilterSearch: (projectName: string) => void;
}

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgba(12, 7, 10, 0.8)",
    color: "white",
    fontSize: "0.95rem",
    padding: "10px 15px",
  },
}));

const Filter = ({ handleFilterCategory, handleFilterSearch }: Props) => {
  const dispatch = useAppDispatch();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const categories = useSelector(selectCategory);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchCategory());
    };
    fetchData();
  }, [dispatch]);

  return (
    <Col>
      <Row>
        <Row
          sx={{
            backgroundColor: "background.paper",
            width: "100%",
            padding: "10px 20px",
            borderRadius: "12px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Row sx={{ alignItems: "center" }}>
            <Text>
              Filter by category :
              {selectedCategory && (
                <Chip
                  variant="outlined"
                  label={selectedCategory}
                  onDelete={() => {
                    handleFilterCategory("");
                    setSelectedCategory("");
                  }}
                />
              )}
            </Text>
            {categories &&
              categories.map((category: CategoryApiItem) => {
                return (
                  <StyledTooltip key={category.id} title={category.name}>
                    <div>
                      <Row
                        onClick={() => {
                          handleFilterCategory(category.name);
                          setSelectedCategory(category.name);
                        }}
                        sx={{
                          marginLeft: "10px",
                          cursor: "pointer",
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="30px"
                          image={category.logo}
                          style={{ width: "30px" }}
                        />
                      </Row>
                    </div>
                  </StyledTooltip>
                );
              })}
          </Row>
          <Row sx={{ margin: "0px 10px", alignItems: "center" }}>
            <UiInputField
              placeholder="Search"
              icon="material-symbols:search"
              onChange={handleFilterSearch}
            />
          </Row>
        </Row>
      </Row>
    </Col>
  );
};

export default Filter;
