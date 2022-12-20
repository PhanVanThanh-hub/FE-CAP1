import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { history } from "../until/saga/history";
import rootSaga from "./rootSaga";
import authReducer from "../redux/auth/authSlice";
import projectReducer from "../redux/projects/projectSlice";
import uiReducer from "../redux/uiSlice";
import groupReducer from "../redux/group/groupSlice";
import chatReducer from "../redux/chat/chatSlice";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  projects: projectReducer,
  ui: uiReducer,
  groups: groupReducer,
  chat: chatReducer,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(sagaMiddleware)
      .concat(routerMiddleware(history)), //thêm saga middleware và routerMiddleware
});

sagaMiddleware.run(rootSaga); //saga middleware chạy rootSaga

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
