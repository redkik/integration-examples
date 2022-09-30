import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//This should not be here or anywhere in UI
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NjQ2MTE0MTMsIm5iZiI6MTY2NDUyNTAwMywiaWF0IjoxNjY0NTI1MDAzLCJqdGkiOiIzODYzZmExZS0xNGRiLTRhZTEtYjRlNy05MGU2Y2M3ZWNjMTkiLCJjaWQiOiIwNTQ0OThjMy02YzhjLTQ0MDQtOWY4My1mNmJmZWZkYzhjMGEifQ.R-Nu-vMx0JqyydHU0Ug256glZefxixB61JIdAzSk5sY";

export const redkikQuoteApi = createApi({
  reducerPath: "redkikQuoteApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v2/quote" }),
  endpoints: (builder) => ({
    getOffer: builder.mutation({
      query: (data) => ({
        url: `/quotes/quote`,
        method: "POST",
        body: data,
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
      }),
      transformResponse: (response) => response,
    }),
    purchaseOffer: builder.mutation({
      query: (offerId) => ({
        url: `/bookings/purchase`,
        method: "POST",
        body: { offerId },
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
      }),
      transformResponse: (response) => response,
    }),
  }),
});

export const { useGetOfferMutation, usePurchaseOfferMutation } = redkikQuoteApi;
