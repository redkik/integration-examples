import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const redkikQuoteApi = createApi({
  reducerPath: "redkikQuoteApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v2" }),
  endpoints: (builder) => ({
    getOffer: builder.mutation({
      query: (data) => ({
        url: `/quote/quotes/quote`,
        method: "POST",
        body: data,
      }),
      transformResponse: (response) => response,
    }),
    purchaseOffer: builder.mutation({
      query: (offerId) => ({
        url: `/quote/bookings/purchase`,
        method: "POST",
        body: { offerId },
      }),
      transformResponse: (response) => response,
    }),
    setup: builder.mutation({
      query: () => ({
        url: `/quote/quotes/setup`,
        method: "GET",
      }),
      transformResponse: (response) => response,
    }),
    getStates: builder.mutation({
      query: (countryId) => ({
        url: `/config/countries/${countryId}/states`,
        method: "GET",
      }),
      transformResponse: (response) => response,
    }),
  }),
});

export const {
  useGetOfferMutation,
  usePurchaseOfferMutation,
  useSetupMutation,
  useGetStatesMutation,
} = redkikQuoteApi;
