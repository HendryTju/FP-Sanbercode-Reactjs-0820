import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
}));

const Home = (props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      spacing={2}
      direction="column"
      justify="center"
      alignItems="left"
    >
      <Grid item className="animate__animated animate__fadeInUp animate__slow">
        <Typography variant="h2" align="left">
          Tugas Final Project Sanbercode
        </Typography>
      </Grid>
      <Grid item className="animate__animated animate__fadeInUp animate__slow">
        <Typography variant="h5" color="textSecondary" align="left">
          Special thanks to other participants
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
