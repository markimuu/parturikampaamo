import React from "react";

function Lista(props) {
  return (
    <div>
      {props.tapahtumat.map(tapahtuma => {
        return (
          <p key={tapahtuma.id}>
            Nimi: {tapahtuma.nimi}
            <br />
            Puh: {tapahtuma.puh}
            <br />
            Paikka: {tapahtuma.paikka}
            <br />
            Aika: {tapahtuma.aika}
          </p>
        );
      })}
    </div>
  );
}

export default Lista;
