import express from "express";
import axios from "axios";
import proxy from "express-http-proxy";
import * as dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const { REDKIK_HOST, CLIENT_ID, CLIENT_SECRET } = process.env;

const app = express();
const port = 4000;

// app.use(
//   "/",
//   proxy(REDKIK_HOST, {
//     proxyReqOptDecorator: async function (proxyReqOpts, srcReq) {
//       const { data } = await axios.post(
//         `${REDKIK_HOST}/api/v2/user/oauth/token`,
//         {
//           grant_type: "client_credentials",
//           client_id: CLIENT_ID,
//           client_secret: CLIENT_SECRET,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//           },
//         }
//       );

//       proxyReqOpts.headers["Authorization"] = `Bearer ${data.access_token}`;
//       return proxyReqOpts;
//     },
//   })
// );

app.get("/test", function (req, res) {
  res.send({ hello: "Hello" });
});

app.listen(port, () => {
  console.log(`Redkik-embedded-example-backend running in ${port}`);
});
