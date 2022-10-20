import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { redkikQuoteApi } from "./redkikApi";

export const store = configureStore({
  reducer: {
    [redkikQuoteApi.reducerPath]: redkikQuoteApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(redkikQuoteApi.middleware),
});

setupListeners(store.dispatch);
