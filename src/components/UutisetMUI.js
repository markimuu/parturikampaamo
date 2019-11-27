import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
    margin: "auto",
    marginTop: 30
  },
  inline: {
    display: "inline"
  }
}));

function UutisetMUI(props) {
  const classes = useStyles();

  return (
    <div>
      <List className={classes.root}>
        <Typography align="center" variant="h4">
          Ajankohtaista
        </Typography>
        <Divider />
        {props.uutiset.map(uutinen => {
          return (
            <ListItem key={uutinen.id} alignItems="flex-start">
              <ListItemText
                primary={
                  <Typography variant="h6" className={classes.inline}>
                    {uutinen.otsikko}
                    <Typography variant="body2">
                      Julkaistu: {uutinen.julkaistu}
                    </Typography>
                  </Typography>
                }
                secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    <Typography variant="body1">{uutinen.teksti}</Typography>
                    <Button
                      component={Link}
                      to={
                        "/uutinen/" +
                        uutinen.id +
                        "/" +
                        uutinen.otsikko +
                        "/" +
                        uutinen.julkaistu
                      }
                    >
                      Lue lisää...
                    </Button>
                    <Divider />
                  </Typography>
                }
              />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

export default UutisetMUI;
