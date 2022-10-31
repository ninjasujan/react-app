import React from "react";
import { makeStyles, Theme } from "@material-ui/core";
import { LOGIN_URL } from "../constant/app.constant";
import SignUp from "../component/signup";
import { userLogin } from "../redux/actions/auth.action";
import { useAppDispatch } from "../redux/redux.hook";

const useStyles = makeStyles((theme: Theme) => {
  return {
    warpper: {
      width: "90%",
      margin: "20px auto",
    },
  };
});

const Login: React.FC<{}> = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const onLoginHandler = () => {
    window.open(LOGIN_URL);
  };

  const onSignupHandler = (name: string, email: string, password: string) => {
    dispatch(userLogin(email, name, password));
  };

  return (
    <div className={classes.warpper}>
      <SignUp
        onLoginHandler={onLoginHandler}
        onSignupHandler={onSignupHandler}
      />
    </div>
  );
};

export default Login;
