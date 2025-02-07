const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "Q0IQ2Z7S#T7hi_MrPRnTbSftp1vqblPVTER9mCrN-if5HY751Qew",
  MONGODB: process.env.MONGODB || "mongodb://mongo:TsujJhsGdxTaOgvIYZgbnYQIoxltXamn@roundhouse.proxy.rlwy.net:48091",
  OWNER_NUM: process.env.OWNER_NUM || "94718108364",
};
