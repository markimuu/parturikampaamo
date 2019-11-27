import React from "react";
import AlaOtsikkoMUI from "./AlaOtsikkoMUI";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

function AjanvarausOkMUI(props) {
  const alaotsikko = "Ajanvaraus onnistui. Alla varauksesi tiedot!";

  return (
    <div>
      <AlaOtsikkoMUI alaotsikko={alaotsikko} />
      <Paper style={{ margin: "auto", marginTop: 20, maxWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nimi</TableCell>
              <TableCell>Puh</TableCell>
              <TableCell>Työntekijä</TableCell>
              <TableCell>Palvelu</TableCell>
              <TableCell>Pvm</TableCell>
              <TableCell>Aika</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.location.state.varaukset.map((varaus, index) => (
              <TableRow key={index}>
                <TableCell>{varaus.nimi}</TableCell>
                <TableCell>{varaus.puh}</TableCell>
                <TableCell>{varaus.tekija}</TableCell>
                <TableCell>{varaus.palvelu}</TableCell>
                <TableCell>{varaus.paiva.toLocaleDateString()}</TableCell>
                <TableCell>
                  {varaus.kello.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit"
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

export default AjanvarausOkMUI;
