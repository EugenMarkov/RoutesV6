import { all } from "redux-saga/effects";
import { watchUserAuth } from "./loginSaga";

export default function* rootSaga() {
  yield all([watchUserAuth()]);
}
