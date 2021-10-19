import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery, Box, Rating } from "@mui/material";
import { LocationOnOutlined } from "@mui/icons-material";
import { MapContainer } from "./styles";

const Map = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
}) => {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => {
          setChildClicked(child);
        }}
      >
        {places?.map((place, i) => (
          <Box
            sx={{
              position: "absolute",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
              "&:hover": { zIndex: 2 },
            }}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!isDesktop ? (
              <LocationOnOutlined color="primary" fontSize="large" />
            ) : (
              <Paper
                elevation={3}
                sx={{
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: "100px",
                }}
              >
                <Typography variant="subtitle2" gutterBottom>
                  {place.name}
                </Typography>
                <img
                  style={{ cursor: "pointer" }}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                  }
                  alt={place.name}
                />
                <Rating size="small" value={Number(place.rating)} readOnly />
              </Paper>
            )}
          </Box>
        ))}
      </GoogleMapReact>
    </MapContainer>
  );
};

export default Map;
