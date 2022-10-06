import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//This should not be here or anywhere in UI
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NjQ4NzY3MDMsIm5iZiI6MTY2NDc5MDI5MywiaWF0IjoxNjY0NzkwMjkzLCJqdGkiOiJmOTFkMjY3NS1kMTE2LTQ2YWUtODUyYi01ZmUwM2ExNTQwNjYiLCJjaWQiOiIwNTQ0OThjMy02YzhjLTQ0MDQtOWY4My1mNmJmZWZkYzhjMGEifQ.IZggtaZUGKTzK0CHIerQUKxgSlPtipLQw04rieGBViE";

export const redkikQuoteApi = createApi({
  reducerPath: "redkikQuoteApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v2/quote" }),
  endpoints: (builder) => ({
    getOffer: builder.mutation({
      query: (data) => ({
        url: `/quotes/quote`,
        method: "POST",
        body: data,
      }),
      transformResponse: (response) => response,
    }),
    purchaseOffer: builder.mutation({
      query: (offerId) => ({
        url: `/bookings/purchase`,
        method: "POST",
        body: { offerId },
      }),
      transformResponse: (response) => response,
    }),
  }),
});

export const { useGetOfferMutation, usePurchaseOfferMutation } = redkikQuoteApi;
