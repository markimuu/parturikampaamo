import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import EtusivuMUI from "./EtusivuMUI";

const url = "http://localhost:8080";

function HaeUutiset() {
  const [uutiset, setUutiset] = useState([]);
  const [virhe, setVirhe] = useState("Haetaan");

  useEffect(() => {
    async function haeKaikkiUutiset() {
      try {
        const response = await fetch(url + "/uutinen/all");
        const json = await response.json();
        setUutiset(json);
        setVirhe("");
      } catch (error) {
        setUutiset([]);
        setVirhe("Tietojen haku ei onnistunut");
      }
    }

    haeKaikkiUutiset();
  }, []);

  if (virhe.length > 0) {
    return <Typography>{virhe}</Typography>;
  }
  if (uutiset.length > 0) {
    return <EtusivuMUI uutiset={uutiset} />;
  }
  return <Typography>Yhtään uutista ei löytynyt</Typography>;
}

export default HaeUutiset;
