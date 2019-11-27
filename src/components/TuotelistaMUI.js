import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles(theme => ({
  gridList: {
    width: 500,
    height: 250
  },
  icon: {
    color: "black"
  },
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: 20
  }
}));

function TuoteListaMUI(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile cols={2} style={{ height: "auto" }}>
          <ListSubheader style={{ color: "black", backgroundColor: "grey" }}>
            Hiuslakat
          </ListSubheader>
        </GridListTile>
        {props.tuotteet.map(tuote => {
          return (
            <GridListTile key={tuote.id}>
              <img src={tuote.kuva} alt={tuote.nimi} />
              <GridListTileBar
                title={tuote.nimi}
                subtitle={tuote.hinta}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          );
        })}
      </GridList>
    </div>
  );
}

export default TuoteListaMUI;
