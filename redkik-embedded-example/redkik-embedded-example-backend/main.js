import express from "express";
import axios from "axios";
import proxy from "express-http-proxy";
import * as dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const { REDKIK_HOST, CLIENT_ID, CLIENT_SECRET } = process.env;

const app = express();
const port = 3000;

app.use(
  "/",
  proxy(REDKIK_HOST, {
    proxyReqOptDecorator: async function (proxyReqOpts, srcReq) {
      console.log({ REDKIK_HOST, CLIENT_ID, CLIENT_SECRET });
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
      console.log({ data });
      proxyReqOpts.headers["Authorization"] = `Bearer ${data.access_token}`;
      return proxyReqOpts;
    },
  })
);

app.listen(port, () => {
  console.log(`Redkik-embedded-example-backend running in ${port}`);
});
