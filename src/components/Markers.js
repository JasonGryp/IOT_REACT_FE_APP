import React from "react";
import { Marker } from "react-google-maps";
const Markers = ({ markers, onClick }) => {
  return (
    <>
      {markers?.map((marker, index) => {
        //   console.log(marker);
        let url;
        if (marker.total === 0) {
          url = "https://imgur.com/8au9D6O";
        } else if (marker.av / marker.total <= 0.5) {
          url = "https://imgur.com/JXTMiIj";
        } else {
          url = "https://imgur.com/VWPQYe4";
        }
        console.log(url, marker);
        return (
          <Marker
            key={index}
            position={{ lat: marker.latitude, lng: marker.longitude }}
            onClick={(element) => {
              onClick(element);
            }}
            data={marker}
          />
        );
      })}
    </>
  );
};

export default Markers;
