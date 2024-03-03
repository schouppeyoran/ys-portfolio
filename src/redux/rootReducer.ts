import { combineReducers } from "@reduxjs/toolkit";
import webUtilsReducer from "./webUtils/webUtilsReducer";

export const rootReducer = combineReducers({
  webUtils: webUtilsReducer,
});
