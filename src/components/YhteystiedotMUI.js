import React, { useState } from "react";
import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AlaOtsikkoMUI from "./AlaOtsikkoMUI";

const useStyles = makeStyles(theme => ({
  kehys: {
    marginTop: 10,
    maxWidth: 520,
    maxHeight: 400,
    margin: "auto"
  },
  teksti: {
    marginTop: 20
  }
}));

function YhteystiedotMUI(props) {
  let alaotsikko = "Yhteystiedot";
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState("");
  //const [selectedPlace, setSelectedPlace] = useState("");
  const classes = useStyles();

  const onMarkerClick = (props, marker, e) => {
    //setSelectedPlace(props);
    setActiveMarker(marker);
    setShowingInfoWindow(true);
  };

  const onMapClick = props => {
    if (showingInfoWindow) {
      setShowingInfoWindow(false);
      setActiveMarker(null);
    }
  };

  return (
    <div>
      <AlaOtsikkoMUI alaotsikko={alaotsikko} />
      <Typography variant="h6" align="center" className={classes.teksti}>
        Parturi-kampaamo Mato
        <Typography>
          Ratapihantie 6<br />
          00520 Helsinki
          <br />
          Sähköposti: matokampaamo@mato.fi
          <br />
          <br />
          <strong>Toimitusjohtaja</strong>
          <br />
          a1600507
          <br />
          puh: 1600507
        </Typography>
      </Typography>
      <Paper className={classes.kehys}>
        <Map
          item
          className={classes.kehys}
          google={props.google}
          onClick={onMapClick}
          zoom={16}
          initialCenter={{ lat: 60.198746, lng: 24.933654 }}
        >
          <Marker
            onClick={onMarkerClick}
            title={"Parturi-Kampaamo Mato"}
            position={{ lat: 60.198746, lng: 24.933654 }}
            name={"Parturi-Kampaamo Mato"}
          />
          <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
            <Paper>
              <Typography variant="h4">Parturi-Kampaamo Mato</Typography>
              <Typography>
                Ratapihantie 6 <br />
                00520 Helsinki
              </Typography>
            </Paper>
          </InfoWindow>
        </Map>
      </Paper>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDRCHCMr2gbKu2YDKykBOPbW2isUsQKOAo"
})(YhteystiedotMUI);
