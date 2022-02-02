import MenuAppBar from "./components/MenuAppBar";
import Map from "./components/Map";
import SideBar from "./components/SideBar";
import { useSelector } from "react-redux";
import "./style/index.css";
import Grid from "@mui/material/Grid";
import { selectZoom, selectCenter } from "./state/Selectors/mapSelectors";
import { selectSideBarToggle } from "./state/Selectors/sidebarSelectors";
import { useState } from "react";
import Session from "./components/Session";
import useSession from './hooks/useSession'
import { selectAuth } from "./state/Selectors/sessionSelectos";
function App() {
  const menu = useSelector(selectSideBarToggle);
  const zoom = useSelector(selectZoom);
  const center = useSelector(selectCenter);
  const state = useSelector((state) => state);
  const authentication=useSelector(selectAuth);

  console.log(state,authentication);
  useSession('setState');
  
  
 
  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="strech"
      // style={{ height: '100%' }}
    >
      {!authentication ? (
        <Grid item lg={12} xs={12}>
          <Session />
        </Grid>
      ) : (
        <>
          <Grid item lg={12} xs={12}>
            <MenuAppBar></MenuAppBar>
          </Grid>

          {/* <Grid item lg={2} xs={2}> */}
          {menu ? (
            <Grid item xs={3}>
              <SideBar></SideBar>
            </Grid>
          ) : (
            ""
          )}
          <Grid item xs={2}>
            <Map center={center} zoom={zoom} />
          </Grid>
        </>
      )}
    </Grid>
  );
}

export default App;
