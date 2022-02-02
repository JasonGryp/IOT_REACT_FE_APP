import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCenter } from "../state/Actions/mapActions";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
import { useMapMarkers } from "../hooks/useMapMarkers";
import Markers from "./Markers";
import styled from "styled-components";
const MapContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
`;
const MapComponent = ({ center, zoom }) => {
  const dispatch = useDispatch();
  const _onClick = (e) => {
    console.log(e.latLng.lat());
    console.log(e.latLng.lng());
    dispatch(setCenter({ lat: e.latLng.lat(), lng: e.latLng.lng() }));
  };
  
  const Map = () => {
    const { markers, onClick } = useMapMarkers();
    const GoogleMapCompent = (
      <GoogleMap
        defaultCenter={center}
        defaultZoom={zoom}
        onDragEnd={() => {
          console.log(GoogleMapCompent);
        }}
        onClick={_onClick}
        
      >
        <Markers markers={markers} onClick={onClick} />
      </GoogleMap>
    );
    return GoogleMapCompent;
  };
  const WrappedMap = withScriptjs(withGoogleMap(Map));

  return (
    <MapContainer>
      <WrappedMap
        googleMapURL={
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyBr3I0dUpBD3Dox9-XJA5rbghNC1MuBOoE&v=3.exp&libraries=geometry,drawing,places"
        }
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </MapContainer>
  );
};
export default MapComponent;
