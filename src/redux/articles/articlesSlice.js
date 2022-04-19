import { createSlice } from "@reduxjs/toolkit";
import { getArticles } from "../actions/articlesActions";

export const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    q: "",
    page: 0,
    loadingArticles: false,
    error: "",
    articles: [],
    filteredArticles: []
  },
  reducers:{
    
    changeSearch: (state, action)=>{
      state.q = action.payload;
      state.filteredArticles = state.articles?.filter(article=>
        article?.abstract.toLowerCase().includes(state.q.toLowerCase()) ||
        article?.lead_paragraph.toLowerCase().includes(state.q.toLowerCase())
      )
    },
    incrementPage: (state) =>{
      state.page += 1;
    }
  },
  extraReducers: {
    [getArticles.pending]: (state, action)=>{
      console.log("pending")
      state.loadingArticles = true;
    },
    [getArticles.fulfilled]: (state, action) => {
      state.loadingArticles = false;
      state.error = ""
      console.log("PAGE: ", state.page)
      state.page === 0 ? 
        state.articles = action.payload :
        state.articles = [...state.articles, ...action.payload]
    },
    [getArticles.rejected]: (state, action) => {
      console.log(action);
      state.loadingArticles = false;
      state.error = action.error.message;
    },
  }
});

// Action creators are generated for each case reducer function
 export const { changeSearch, incrementPage } = articlesSlice.actions
export default articlesSlice.reducer;
