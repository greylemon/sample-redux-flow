import { combineReducers } from "@reduxjs/toolkit";
import { HelloWorldStore } from "./HelloWorldStore/store";

export const rootReducer = combineReducers(
  {
    HelloWorldStore: HelloWorldStore.reducer
  }
)

export default rootReducer