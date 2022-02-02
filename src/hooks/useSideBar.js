import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMarkerInfo } from "../state/Selectors/mapSelectors";
import { selectSideBarType } from "../state/Selectors/sidebarSelectors";
export const useSideBar = () => {
  const markerInfo = useSelector(selectMarkerInfo);
  const sideBarType = useSelector(selectSideBarType);
  return {type: sideBarType,content: markerInfo };
};
