// ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨
// Demo using Shifter Static
// and WordPress Application Passwords
// ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨

require('dotenv').config();
const axios = require("axios");
const siteID = process.env.STATIC_SITE_ID;
const staticURL = `static.getshifter.net`;
const baseURL = `https://${siteID}.${staticURL}`;
const restURL = `${baseURL}/wp-json/wp/v2`;

let username = process.env.STATIC_USERNAME;
let password = process.env.STATIC_PASSWORD;
let username_password = `${username}:${password}`;
let buffer = new Buffer.from(username_password);
let token = buffer.toString("base64");

async function getSettings({ url }) {
  try {
    const settings = await axios({
      headers: {
        Authorization: `Basic ${token}`,
      },
      method: "get",
      url: `${url}/settings`,
    });

    console.log(settings.data);
  } catch (error) {
    console.log(error);
  }
}

async function createPost({ url }) {
  try {
    const settings = await axios({
      headers: {
        Authorization: `Basic ${token}`,
      },
      method: "post",
      url: `${url}/posts`,
      data: {
        title: new Date().toLocaleString(),
        status: "publish",
      },
    });

    console.log(`\n`);
    console.log(`Title: ${settings.data.title.rendered}`);
    console.log(
      `View Post: ${baseURL}/wp-admin/post.php?action=edit&post=${settings.data.id}`
    );
  } catch (error) {
    console.log(error);
  }
}

getSettings({ url: restURL });
createPost({ url: restURL });
