import Unsplash from "unsplash-js";

const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY;
const CALLBACK_URL = process.env.REACT_APP_CALLBACK_URL;

let unsplash = new Unsplash({
  accessKey: ACCESS_KEY,
  secret: SECRET_KEY,
  callbackUrl: CALLBACK_URL,
});

export default unsplash;
