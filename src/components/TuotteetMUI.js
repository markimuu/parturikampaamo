import React from "react";
import TuoteListaMUI from "./TuotelistaMUI";
import AlaOtsikkoMUI from "./AlaOtsikkoMUI";

function TuotteetMUI(props) {
  let alaotsikko = "Tuotevalikoima";

  return (
    <div>
      <AlaOtsikkoMUI alaotsikko={alaotsikko} />
      <TuoteListaMUI tuotteet={props.tuotteet} />
    </div>
  );
}

export default TuotteetMUI;
