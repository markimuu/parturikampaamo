import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import HenkilokuntaMUI from "./HenkilokuntaMUI";

const url = "http://localhost:8080";

function HaeTyontekijat() {
  const [tyontekijat, setTyontekijat] = useState([]);
  const [virhe, setVirhe] = useState("Haetaan");

  useEffect(() => {
    async function haeKaikkiTyontekijat() {
      try {
        const response = await fetch(url + "/tyontekija/all");
        const json = await response.json();
        setTyontekijat(json);
        setVirhe("");
      } catch (error) {
        setTyontekijat([]);
        setVirhe("Tietojen haku ei onnistunut");
      }
    }

    haeKaikkiTyontekijat();
  }, []);

  if (virhe.length > 0) {
    return <Typography>{virhe}</Typography>;
  }
  if (tyontekijat.length > 0) {
    return <HenkilokuntaMUI henkilokunta={tyontekijat} />;
  }
  return <Typography>Yhtään työntekijää ei löytynyt</Typography>;
}

export default HaeTyontekijat;
