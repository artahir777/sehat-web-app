import * as ActionList from "./ActionsList";
import { Urdu, English } from "../../constants/language";

export const LANGUAGE = (payload) => ({
  type: ActionList.LANGUAGE,
  payload,
});


export const LANGUAGE_STATUS = (payload) => ({
  type: ActionList.LANGUAGE_STATUS,
});

export const ISENGLISH = (payload) => ({
  type: ActionList.IS_ENGLISH,
  payload,
});

export const SET_LANGUAGE = (type) => {
  return async (dispatch) => {
    await window.localStorage.setItem("Language", type);
    dispatch(GET_LANGUAGE());
  };
};

export const DEL_LANGUAGE = () => {
  return async (dispatch) => {
    await window.localStorage.removeItem("Language");
  };
};

export const GET_LANGUAGE = () => {
  return async (dispatch) => {
    const lang = await window.localStorage.getItem("Language");
    if (lang) {
      dispatch(LANGUAGE_STATUS());
      lang === "Urdu" ? dispatch(LANGUAGE(Urdu)) : dispatch(LANGUAGE(English));
      lang === "Urdu" ? dispatch(ISENGLISH(false)) : dispatch(ISENGLISH(true));
    }
  };
};
