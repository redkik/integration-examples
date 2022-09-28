import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//This should not be here or anywhere in UI
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NjAyNzk5NzYsIm5iZiI6MTY2MDI3OTM2NiwiaWF0IjoxNjYwMjc5MzY2LCJqdGkiOiJmM2I5NjE3NS1iNjMwLTRiN2ItYmI3Zi1lMzhiZjFmM2M5NTUiLCJjaWQiOiI3ZGU2Mzk3NC0yNDQyLTQzMGItYTQ3ZC0zMGU0Y2M3NTUzMWUifQ.tlsl0tqePFDH7KdsOUwXKqHbj5Og7HVgKx_Q2X2DToo";

export const redkikQuoteApi = createApi({
  reducerPath: "redkikQuoteApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/v1/quote" }),
  endpoints: (builder) => ({
    getOffer: builder.mutation({
      query: (data) => ({
        url: `/quotes/quote`,
        method: "POST",
        body: data,
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
      }),
      transformResponse: (response) => response.result[0],
    }),
    purchaseOffer: builder.mutation({
      query: (offerId) => ({
        url: `/quotes/purchase`,
        method: "POST",
        body: { offerId },
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
      }),
      transformResponse: (response) => response.result[0],
    }),
  }),
});

export const { useGetOfferMutation, usePurchaseOfferMutation } = redkikQuoteApi;
