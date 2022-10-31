import React from "react";
import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => {
  return {
    warpper: {
      width: "90%",
      margin: "200px auto",
      textAlign: "center",
    },
  };
});

const Error: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.warpper}>
      <h3>Error Page</h3>
    </div>
  );
};

export default Error;
