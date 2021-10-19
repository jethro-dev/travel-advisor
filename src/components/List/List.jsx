import React, { useState, useEffect, useRef, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import {
  ListContainer,
  Loading,
  StyledFormControl,
  StyledGrid,
} from "./styles";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({
  places,
  childClicked,
  loading,
  type,
  setType,
  rating,
  setRating,
}) => {
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    if (places) {
      const refs = Array(places?.length)
        .fill()
        .map((place, i) => elRefs[i] || createRef());
      setElRefs(refs);
    }
  }, [places]);

  return (
    <ListContainer>
      <Typography variant="h4">
        Restaurants, Hotels & Attractions around you
      </Typography>
      {loading ? (
        <Loading>
          <CircularProgress size="5rem" />
        </Loading>
      ) : (
        <>
          <StyledFormControl variant="standard">
            <InputLabel id="type">Type</InputLabel>
            <Select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </StyledFormControl>
          <StyledFormControl variant="standard">
            <InputLabel id="rating">Rating</InputLabel>
            <Select
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value={2}>Above 2.0</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
            </Select>
          </StyledFormControl>

          <StyledGrid container spacing={3}>
            {places?.map((place, i) => (
              <Grid item key={i} xs={12}>
                <PlaceDetails
                  place={place}
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                />
              </Grid>
            ))}
          </StyledGrid>
        </>
      )}
    </ListContainer>
  );
};

export default List;
