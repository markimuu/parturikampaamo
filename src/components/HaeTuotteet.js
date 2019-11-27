import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import TuotteetMUI from "./TuotteetMUI";

const url = "http://localhost:8080";

function HaeTuotteet() {
  const [tuotteet, setTuotteet] = useState([]);
  const [virhe, setVirhe] = useState("Haetaan");

  useEffect(() => {
    async function haeKaikkiTuotteet() {
      try {
        const response = await fetch(url + "/tuote/all");
        const json = await response.json();
        setTuotteet(json);
        setVirhe("");
      } catch (error) {
        setTuotteet([]);
        setVirhe("Tietojen haku ei onnistunut");
      }
    }

    haeKaikkiTuotteet();
  }, []);

  if (virhe.length > 0) {
    return <Typography>{virhe}</Typography>;
  }
  if (tuotteet.length > 0) {
    return <TuotteetMUI tuotteet={tuotteet} />;
  }
  return <Typography>Yhtään tuotetta ei löytynyt</Typography>;
}

export default HaeTuotteet;
