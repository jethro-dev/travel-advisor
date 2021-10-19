import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Box } from "@mui/material";
import {
  StyledToolbar,
  StyledTitle,
  StyledInputBase,
  StyledSearch,
  StyledSearchIcon,
} from "./styles";

const Header = ({ setCoordinates }) => {
  const [autocomplete, setAutocomplete] = useState(null);
  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinates({ lat, lng });
  };
  return (
    <AppBar position="static">
      <StyledToolbar>
        <StyledTitle variant="h5">Travel Advisor</StyledTitle>
        <Box display="flex">
          <StyledTitle variant="h6">Explore new places</StyledTitle>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <StyledSearch>
              <StyledSearchIcon>
                <Search />
              </StyledSearchIcon>
              <StyledInputBase placeholder="Search..." />
            </StyledSearch>
          </Autocomplete>
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
