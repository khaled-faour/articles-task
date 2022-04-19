import { createSlice } from '@reduxjs/toolkit';
import {login } from '../actions/authActions';
import { isExpired, decodeToken } from "react-jwt";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    isError: false,
    error: "",
    user: {
      username: "",
      iat: "",
      exp: "",
      token: ""
    }
  },
  reducers: {
    
    logout: (state) => {
      return {
        ...state,
        isLoggedIn: false,
        user:{
          sub: "",
          name: "",
          iat: "",
          exp: "",
          token: ""
        }
      }
    },
  },
  extraReducers: {
    [login.rejected]: (state, action)=>{
      state.isError = true;
      state.error= "Invalid Credentials";
      state.signingIn = false;
    },
    [login.fulfilled]: (state, action)=>{
      state.isError=false;
      state.error="";
      state.user = {...decodeToken(action.payload.accessToken), token: action.payload.accessToken};
      state.isLoggedIn = !isExpired(action.payload.accessToken);
      state.signingIn = false;
      console.log(action.payload.accessToken)
    },
    [login.pending]: (state, action)=>{
      state.signingIn = true;
    }
  }
})

// Action creators are generated for each case reducer function
export const { logout } = authSlice.actions

export default authSlice.reducer