import React from "react";

import createDataContext from "../createDataContext";

//Reducer
const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//Actions

//Authentication Context and Provider

export const { Context, Provider } = createDataContext(authReducer, {}, [
  { name: "chibueze", isSignedIn: true },
]);
