import os
import asyncio
from aiohttp import ClientSession
from dotenv import load_dotenv

load_dotenv()

REDKIK_HOST = os.environ.get("REDKIK_HOST")
CLIENT_ID = os.environ.get("CLIENT_ID")
CLIENT_SECRET = os.environ.get("CLIENT_SECRET")

async def main():

    async with ClientSession() as session:
        # Access Token
        # Create an Access Token. You will need this to make any of the other API calls

        data = {
            'grant_type': 'client_credentials',
            'client_id': CLIENT_ID,
            'client_secret': CLIENT_SECRET,
        }

        async with session.post(url = REDKIK_HOST + '/api/v2/user/oauth/token', data = data) as tokenResponse:
            tokenResponseAsJson = await tokenResponse.json()
            header = {'Authorization': 'Bearer ' + tokenResponseAsJson['access_token']}

        # Setup
        # Get all the necessary information to make a quote

        async with session.get(url = REDKIK_HOST + '/api/v2/quote/quotes/setup', headers = header) as setupResponse:
            setupResponseAsJson = await setupResponse.json()

        # Quote
        # Make sure that used policy allows the quote

        data = {
            # Mandatory properties:
            'isPublic': 'false',
            'commodities': [{'commodityId': setupResponseAsJson['commodities'][0]['id'], 'insuredValue': 100}],
            'originFormatted': 'Kirkkokatu 1, FI-00170 HELSINKI, FINLAND',
            'destinationFormatted': 'Kirkkokatu 2, FI-00170 HELSINKI, FINLAND',
            'startDate': '2022-10-23T03:00:00.000+03:00',
            'endDate': '2022-10-24T03:00:00.000+03:00',
            'transportType': 1,
            'customerId': setupResponseAsJson['customers'][0]['id'],
            # Optional properties and their types:
            #
            # OPTIONAL: Additional details about the shipment
            #
            # 'commodityDescription': 'string'
            # 'trackingCode': 'string',
            # 'courierId': 'string',
            # 'exitPortId': 'string',
            # 'entryPortId': 'string',
            # 'vesselId': 'string',
            # 'exitPort': 'string',
            # 'entryPort': 'string',
            # 'vessel': 'string',
            # 'bookingFee': number,
            # 'bookingFeeType': number,
            # 'captcha': 'string',
            #
            # OPTIONAL: Origin address information, alternative to originFormatted
            #
            # 'originStreet': 'string',
            # 'originState': 'string',
            # 'originPostcode': 'string',
            # 'originCity': 'string',
            # 'originCountry': 'string',
            #
            # OPTIONAL: Destination address information, alternative to destinationFormatted
            #
            # 'destinationStreet': 'string',
            # 'destinationState': 'string',
            # 'destinationPostcode': 'string',
            # 'destinationCity': 'string',
            # 'destinationCountry': 'string',
            #
            # OPTIONAL: Customer details, alternative to customerId, will create a new customer
            #
            # 'customerType': number,
            # 'customerOrganization': 'string',
            # 'customerTaxId': 'string',
            # 'customerForename': 'string',
            # 'customerSurname': 'string',
            # 'customerEmail': 'string',
            # 'customerPhone': 'string',
            # 'customerFormatted': 'string',
            # 'customerStreet': 'string',
            # 'customerCity': 'string',
            # 'customerState': 'string',
            # 'customerPostcode': 'string',
            # 'customerCountry': 'string',
            # 'customerReference': 'string',
        }
    
        async with session.post(url = REDKIK_HOST + '/api/v2/quote/quotes/quote', json = data, headers = header) as quoteResponse:
            quoteResponseAsJson = await quoteResponse.json()

        # Purchase
        # Purchase can only be made with a valid quote offer
        async with session.post(url = REDKIK_HOST + '/api/v2/quote/bookings/purchase', data = {'offerId': quoteResponseAsJson[0]['id']}, headers = header) as purchaseResponse:
            purchaseResponseAsJson = await purchaseResponse.json()

        # Cancel
        # Booking cannot be cancelled if it's under way

        async with session.patch(url = REDKIK_HOST + '/api/v2/quote/bookings/' + purchaseResponseAsJson['id'] + '/cancel', headers = header) as cancelResponse:
            cancelResponse = await cancelResponse.json()

asyncio.run(main())
