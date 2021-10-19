import { styled } from "@mui/material/styles";
import { Grid, FormControl } from "@mui/material";

export const ListContainer = styled("div")(({ theme }) => ({
  padding: "25px",
}));

export const Loading = styled("div")(({ theme }) => ({
  height: "600px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 120,
  marginBottom: "30px",
}));

export const StyledGrid = styled(Grid)(({ theme }) => ({
  height: "75vh",
  overflow: "auto",
}));
