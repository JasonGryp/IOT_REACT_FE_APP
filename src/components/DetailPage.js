import React from "react";
import Typography from "@mui/material/Typography";
import * as Styled from "./DetailPage.style";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import { LocationOn, Schedule, Wc, EvStation } from "@mui/icons-material";

const DetailPage = ({ info }) => {
  return (
    <Styled.FlexColumnContainer>
      <List>
        <ListItem>
          <Styled.Heading>{info.name}</Styled.Heading>
        </ListItem>
        <Divider />
        <ListItem>
          <LocationOn />
          <Styled.Coords>{`(${info.latitude} , ${info.longitude})`}</Styled.Coords>
        </ListItem>
        <Divider />
        <ListItem>
          <Schedule />
          <Typography variant="body1">{`Schedule: ${info.schedule}`}</Typography>
        </ListItem>
        <Divider />
        {info.nearby_restrooms && (
          <>
            <ListItem>
              <Wc />
              <Typography variant="body1">{`Nearby restrooms: ${info.nearby_restrooms}`}</Typography>
            </ListItem>
            <Divider />
          </>
        )}
        {info.chargers.map((charger) => {
          return (
            <>
              <Styled.SectionContainer>
                <EvStation fontSize="large" />
                <ListItem>
                  <Styled.SectionContainerColumn>
                    <Typography variant="body1">{`Charger Type: ${charger.type}  ${charger.kW}kW`}</Typography>
                    <Typography variant="body1">{`Availability: ${charger.available}/ ${charger.quantity}`}</Typography>
                    <Typography variant="body1">{`Cost: ${charger.cost}`}</Typography>
                  </Styled.SectionContainerColumn>
                </ListItem>
                <Divider />
              </Styled.SectionContainer>
            </>
          );
        })}
      </List>
    </Styled.FlexColumnContainer>
  );
};

export default DetailPage;
