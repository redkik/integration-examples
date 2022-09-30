# Redkik python integration example

## Get started

To be able to call the API, you will need a `CLIENT_ID` and a `CLIENT_SECRET`, which you can get from the Redkik web app. In the app, if your account has rights to access organizations, you can create API Tokens for the organization of your choice. When you are creating an API token, a pop-up will appear which contains the id and secret. Make sure to copy them somewhere, because this will be the last time you see them!

### How to run the examples

Once you have the `CLIENT_ID` and the `CLIENT_SECRET`, create an .env file to the root of the project based on the .envtemplate.

Navigate to the python folder:

```bash
cd python
```

Install packages:

```bash
pip install -r requirements.txt
```

Run the examples:

```bash
python3 main.py
```
