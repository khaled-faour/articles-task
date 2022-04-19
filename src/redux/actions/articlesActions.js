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



export const getArticles = createAsyncThunk(
  "articles/getArticles",
  async (params, { getState }) => {
    const token = "Bearer " + getState().auth.user.token;
    console.log("TOKENN: ", token);
    const options = {
      method: 'GET',
      url: 'http://34.245.213.76:3000/articles',
      params: {...params},
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'Authorization': token
      }
    };
    const result = await axios.request(options);
    // const result = await axios.response(options)
    return result.data.response.docs;
  }
);

