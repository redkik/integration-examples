import axios from "axios";
import {
  AccessToken,
  SetupResponse,
  QuoteResponse,
  Booking,
} from "./types/types";

require("dotenv").config({ path: "../.env" });
const { REDKIK_HOST, CLIENT_ID, CLIENT_SECRET } = process.env;

async function apiCalls() {
  try {
    /*
      Access Token
      Create an Access Token. You will need this to make any of the other API calls
    */

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
    console.log(`Recieved an AccessToken ${data.access_token}`);

    /*
      Setup
      Get all the necessary information to make a quote
    */

    const { data: setup } = await axios.get<SetupResponse>(
      `${REDKIK_HOST}/api/v2/quote/quotes/setup`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.access_token}`,
        },
      }
    );
    console.log(`Recieved a setup data`);

    /*
      Quote
      These properties are mandatory. Optional properties can be found in QuoteResponse interface
      Make sure that used policy allows the quote
    */

    const { data: quote } = await axios.post<QuoteResponse>(
      `${REDKIK_HOST}/api/v2/quote/quotes/quote`,
      {
        isPublic: false,
        commodities: [
          {
            commodityId: setup.commodities[0].id,
            insuredValue: 100,
            currencyId: setup.currencyId,
          },
        ],
        insuredValue: 1000,
        originFormatted: "Länsikatu 15, FI-80110 JOENSUU, FINLAND",
        destinationFormatted: "Länsikatu 15, FI-70820 KUOPIO, FINLAND",
        startDate: "2023-02-23T03:00:00.000+03:00",
        endDate: "2023-02-24T03:00:00.000+03:00",
        transportType: 1,
        customerType: 1,
        customerOrganization: "Redkik Inc.",
        customerTaxId: "XXXXXXXX",
        customerForename: "Redkik",
        customerSurname: "Example",
        customerEmail: "example@redkik.com",
        customerPhone: "+14432980790",
        customerFormatted: "202 Bank St, Oxford, MD 21654, USA",

        /* 
          Optional properties and their types:
        */

        /*
          OPTIONAL: Additional details about the shipment
        */
        // commodityDescription: string
        // trackingCode: string,
        // courierId: string,
        // exitPortId: string,
        // entryPortId: string,
        // vesselId: string,
        // exitPort: string,
        // entryPort: string,
        // vessel: string,
        // bookingFee: number,
        // bookingFeeType: number,
        // captcha: string,

        /*
          OPTIONAL: Origin address information, alternative to originFormatted
        */
        // originStreet: string,
        // originState: string,
        // originPostcode: string,
        // originCity: string,
        // originCountry: string,

        /*
          OPTIONAL: Destination address information, alternative to destinationFormatted
        */
        // destinationStreet: string,
        // destinationState: string,
        // destinationPostcode: string,
        // destinationCity: string,
        // destinationCountry: string,

        /*
          OPTIONAL: Alternative to customer details, will use existing customer
        */
        //customerId: string,

        /*
          OPTIONAL: Customer address information, alternative to customerFormatted
        */
        // customerStreet: string,
        // customerCity: string,
        // customerState: string,
        // customerPostcode: string,
        // customerCountry: string,
        // customerReference: string,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${data.access_token}`,
        },
      }
    );
    console.log(`Recieved a quote with uuid ${quote[0].id}`);

    /*
      Purchase
      Purchase can only be made with a valid quote offer
    */

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
    console.log(
      `Booked an insurance with uuid ${purchase.id} and reference ${purchase.reference}`
    );

    /*
      Cancel
      Booking cannot be cancelled if it's under way
    */

    await axios.patch<boolean>(
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
    console.log(`Canceled an insurance with uuid ${purchase.id}`);
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

apiCalls();
