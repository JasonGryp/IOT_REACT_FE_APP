import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFetchMarkers,
  selectMarkers,
} from "../state/Selectors/mapSelectors";
import { selectZoom, selectCenter } from "../state/Selectors/mapSelectors";
import { getMarkers,fetchMarkers, getMarkerInfo, setCenter } from "../state/Actions/mapActions";

export const useMapMarkers = () => {
  const dispatch = useDispatch();
  const zoom = useSelector(selectZoom);
  const center = useSelector(selectCenter);
  const fetchMarkersBool = useSelector(selectFetchMarkers);
  
  
  useEffect(() => {
    if (fetchMarkersBool) {
      // console.log("Update", fetchMarkersBool);
      dispatch(fetchMarkers(false));
      dispatch(getMarkers(center, zoom));
      // const interval=setInterval(() => {
      //   dispatch(getMarkers(center, zoom));
      // },10000)
      // setTimeout(() => {
      //   dispatch(fetchMarkers(true));
      // }, 10000);
    }
  }, []);

  const markers = useSelector(selectMarkers);

  const onClick = (marker) => {
    console.log("Clicked marker ",marker.latLng.lat(),marker.latLng.lng());
    dispatch(setCenter({lat:marker.latLng.lat(),lng:marker.latLng.lng()}))
    markers.forEach((element) => {
      
      if (element.longitude === marker.latLng.lng() && element.latitude === marker.latLng.lat()) {
        dispatch(getMarkerInfo(element.station_id));
        console.log(element);
      }
    });
  };

  return { markers, onClick };
};
