const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "cwYVCLDD#KFqWF2_vy3CDIQNEBoJ_8AKEXUayuBoY2UYXsMfWDKo",
  OWNER_NUM: process.env.OWNER_NUM || "94762858448",
  PREFIX: process.env.PREFIX || ".",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://raw.githubusercontent.com/kaviduRs/MD-HELP/refs/heads/main/img/IMG-20250205-WA0002.jpg",
  ALIVE_MSG: process.env.ALIVE_MSG || "*Yes I'm Alive noW!!* 🙈\n\n\n🎗️ *JOIN OUR MV GROUP ➜* https://chat.whatsapp.com/Lp91cySvXueFChmygbmdCF\n\n🎗️ *CARTOON GROUP ➜* https://chat.whatsapp.com/CurZjvmwN735el7Wdomqsl\n\n\n> 𝐌𝐚𝐝𝐞 𝐛𝐲 *𝐊𝐀𝐕𝐈𝐃𝐔 𝐑𝐀𝐒𝐀𝐍𝐆𝐀*  🎗️",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
  MODE: process.env.MODE || "inbox",
  AUTO_VOICE: process.env.AUTO_VOICE || "true",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",
  AUTO_REPLY: process.env.AUTO_REPLY || "true",
};
