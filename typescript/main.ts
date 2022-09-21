import axios from "axios";
import {
  AccessToken,
  SetupResponse,
  QuoteResponse,
  Booking,
} from "./types/types";

require("dotenv").config({ path: "../.env" });
const { REDKIK_HOST, CLIENT_ID, CLIENT_SECRET } = process.env;

async function getCredentials() {
  try {
    // Access Token

    const { data } = await axios.post<AccessToken>(
      `${REDKIK_HOST}/api/v2/user/oauth/token`,
      {
        grant_type: "client_credentials",
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    console.log("Access Token:", data);

    // Setup

    const { data: setup } = await axios.get<SetupResponse>(
      `${REDKIK_HOST}/api/v2/quote/quotes/setup`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.access_token}`,
        },
      }
    );

    console.log("Setup:", setup);

    // Quote

    const { data: quote } = await axios.post<QuoteResponse>(
      `${REDKIK_HOST}/api/v2/quote/quotes/quote`,
      {
        isPublic: false,
        commodityId: setup.commodities[0].id,
        commodityDescription: "test",
        insuredValue: 50,
        trackingCode: "test",
        originFormatted: "Länsikatu 15, FI-80110 JOENSUU, FINLAND",
        originStreet: "test",
        originState: "test",
        originPostcode: "80100",
        originCity: "Joensuu",
        originCountry: setup.countries[0].id,
        destinationFormatted: "Länsikatu 15, FI-70820 KUOPIO, FINLAND",
        destinationStreet: "Länsikatu 15",
        destinationState: "test",
        destinationPostcode: "70820",
        destinationCity: "Kuopio",
        destinationCountry: setup.countries[0].id,
        startDate: "2022-09-22T03:00:00.000+03:00",
        endDate: "2022-09-23T03:00:00.000+03:00",
        transportType: 1,
        courierId: setup.couriers[0].id,
        bookingFee: 50,
        bookingFeeType: 1,
        customerId: setup.customers[0].id,
        customerType: 1,
        customerOrganization: "test",
        customerTaxId: "test",
        customerForename: "test",
        customerSurname: "test",
        customerEmail: "test",
        customerPhone: "test",
        customerFormatted: "test",
        customerStreet: "test",
        customerCity: "test",
        customerState: "test",
        customerPostcode: "test",
        customerCountry: setup.countries[0].id,
        customerReference: "test",
        captcha: "test",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${data.access_token}`,
        },
      }
    );

    console.log("Quote:", quote);

    // Purchase

    const { data: purchase } = await axios.post<Booking>(
      `${REDKIK_HOST}/api/v2/quote/bookings/purchase`,
      {
        offerId: quote[0].id,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${data.access_token}`,
        },
      }
    );

    console.log("Purchase:", purchase);

    // Cancel

    const { data: cancel } = await axios.patch<boolean>(
      `${REDKIK_HOST}/api/v2/quote/bookings/${purchase.id}/cancel`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${data.access_token}`,
        },
      }
    );

    console.log("Cancel:", cancel);

    return setup;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      // 👇️ error: AxiosError<any, any>
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

getCredentials();

console.log("When I grow up, I will be TypeScript integration example", {
  REDKIK_HOST,
  CLIENT_ID,
  CLIENT_SECRET,
});
