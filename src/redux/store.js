import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import authReducer from "./auth/authSlice";
import articlesReducer from "./articles/articlesSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const reducers = combineReducers({
  auth: persistedAuthReducer,
  articles: articlesReducer
});


const store = configureStore({
  reducer: reducers,
  middleware: [thunk]
});

export default store;
