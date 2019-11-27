import React, { useState } from "react";

function Tapahtumalomake() {
  const [nimi, setNimi] = useState("");
  const [puh, setPuh] = useState("");
  const [paikka, setPaikka] = useState("");
  const [aika, setAika] = useState("");

  /* const [tapahtuma, setValues] = useState( { objekti
        nimi: "",
        puh: "",
        paikka: "",
        aika: ""
  } );

    const lisaaTapahtuma = (e) => { yksi
        setValues({nimi: "", puh: "", paikka: "", aika: ""});
    }

  objekti:

    const muuta = e => {
      setValues( {
        ...tapahtuma, [e.target.name]: e.target.value
      });
    };
  */

  const lisaaTapahtuma = e => {
    e.preventDefault();
    setNimi("");
    setPuh("");
    setPaikka("");
    setAika("");
  };

  const muutaNimi = e => {
    setNimi(e.target.value.toUpperCase());
  };

  return (
    <form>
      <label htmlFor="nimi">Nimi </label>
      <input
        style={styles.formStyle}
        type="text"
        name="nimi"
        value={nimi}
        onChange={e => muutaNimi(e)}
      />
      <br />

      <label htmlFor="puh">Puh </label>
      <input
        style={styles.formStyle}
        type="text"
        name="puh"
        value={puh}
        onChange={e => setPuh(e.target.value)}
      />
      <br />

      <label htmlFor="paikka">Paikka </label>
      <input
        style={styles.formStyle}
        type="text"
        name="paikka"
        value={paikka}
        onChange={e => setPaikka(e.target.value)}
      />
      <br />

      <label htmlFor="aika">Aika </label>
      <input
        style={styles.formStyle}
        type="text"
        name="aika"
        value={aika}
        onChange={e => setAika(e.target.value)}
      />
      <br />

      <input type="submit" value="Lähetä" onClick={e => lisaaTapahtuma(e)} />
      <input type="submit" value="Tyhjennä" onClick={e => lisaaTapahtuma(e)} />
    </form>
  );
}

const styles = {
  formStyle: {
    borderColor: "red",
    borderRadius: 4
  }
};

export default Tapahtumalomake;
