import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import AlaOtsikkoMUI from "./AlaOtsikkoMUI";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  card: {
    width: 300
  },
  media: {
    height: 200
  },
  grid: {
    marginTop: 20,
    margin: "auto"
  },
  root: {
    flexGrow: 1
  }
});

function HenkilokuntaMUI(props) {
  let alaotsikko = "Henkilökunta";
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AlaOtsikkoMUI alaotsikko={alaotsikko} />
      <Grid
        container
        spacing={4}
        justify="center"
        alignItems="center"
        xs={8}
        className={classes.grid}
      >
        {props.henkilokunta.map(henkilo => {
          return (
            <Grid item key={henkilo.id}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={henkilo.kuva}
                    title={henkilo.nimi}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h4">
                      {henkilo.nimi}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {henkilo.rooli}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default HenkilokuntaMUI;
