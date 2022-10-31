import { Dispatch } from "@reduxjs/toolkit";
import { authSlice } from "../store/auth.store";
import axios from "../../axios/axios";

export const userLogin = (email: string, name: string, password: string) => {
  return async (dispatch: Dispatch) => {
    const userAuth = async () => {
      const response = await axios.post("api/v1/auth/password-signup", {
        email,
        name,
        password,
      });
      return response.data;
    };
    try {
      const { data } = await userAuth();

      dispatch(
        authSlice.actions.setAuthState({ isAdmin: false, token: data.token })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
