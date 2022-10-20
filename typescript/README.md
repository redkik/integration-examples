# Redkik integration examples

## Get started

To be able to call the API, you will need a `CLIENT_ID` and a `CLIENT_SECRET`, which you can get from the Redkik web app. In the app, if your account has rights to access organizations, you can create API Tokens for the organization of your choice. When you are creating an API token, a pop-up will appear which contains the id and secret. Make sure to copy them somewhere, because this will be the last time you see them!

Once you have the `CLIENT_ID` and the `CLIENT_SECRET`, create a .env file to the root of the project based on the .envtemplate. You need to also add `REDKIK_HOST`, which is the URL where you will be calling the API.

### How to run the examples

In the root, run:

```bash
docker-compose run typescript
```

Or alternatively:

Navigate to the typescript folder:

```bash
cd typescript
```

Install packages:

```bash
npm install
```

Run the examples:

```bash
npm start
```
