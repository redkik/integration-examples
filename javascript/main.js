import axios from "axios";

import * as dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const { REDKIK_HOST, CLIENT_ID, CLIENT_SECRET } = process.env;

async function apiCalls() {
  try {
    /*
      Access Token
      Create an Access Token. You will need this to make any of the other API calls
    */

    const { data } = await axios.post(
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

    /*
      Setup
      Get all the necessary information to make a quote
    */

    const { data: setup } = await axios.get(
      `${REDKIK_HOST}/api/v2/quote/quotes/setup`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.access_token}`,
        },
      }
    );

    /*
      Quote
      Make sure that used policy allows the quote
    */

    const { data: quote } = await axios.post(
      `${REDKIK_HOST}/api/v2/quote/quotes/quote`,
      {
        /*
          Mandatory properties:
        */
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
        customerId: setup.customers[0].id,

        /* 
          Optional properties and their types:
        */

        /*
          OPTIONAL: Additional details for organization. PolicyId is required if organization has multiple policies
        */
        // policyId: setup.policies[0].id,
        // organizationId: string;

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
          OPTIONAL: Customer details, alternative to customerId, will create a new customer
        */
        // customerType: number,
        // customerOrganization: string,
        // customerTaxId: string,
        // customerForename: string,
        // customerSurname: string,
        // customerEmail: string,
        // customerPhone: string,
        // customerFormatted: string,
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

    /*
      Purchase
      Purchase can only be made with a valid quote offer
    */

    const { data: purchase } = await axios.post(
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

    /*
      Cancel
      Booking cannot be cancelled if it's under way
    */

    await axios.patch(
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
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

apiCalls();
