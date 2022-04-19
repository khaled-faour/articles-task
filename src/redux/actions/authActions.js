import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const options = {
//   method: "GET",
//   url: "https://crypto-news-live3.p.rapidapi.com/news",
//   headers: {
//     "X-RapidAPI-Host": "crypto-news-live3.p.rapidapi.com",
//     "X-RapidAPI-Key": "c9c35b18b5msh31a353da7a72fe6p13e70djsn61f4cf39c8c9"
//   }
// };



export const login = createAsyncThunk(
  "auth/login",
  async (params, { getState }) => {
    const options = {
      method: 'POST',
      url: 'http://34.245.213.76:3000/auth/signin',
      data: {...params, username: params?.username?.toLowerCase(), password: params?.password},
      
    };
    const result = await axios.request(options)
    return result.data;
  }
);

