const fs = require("fs-extra");
const request = require("request");
const path = require("path");

module.exports = {
  config: {
    name: "owner",
    version: "1.3.0",
    author: "〲MAMUNツ࿐",
    role: 0,
    shortDescription: "Owner information with image",
    category: "Information",
    guide: {
      en: "owner"
    }
  },

  onStart: async function ({ api, event }) {
    const ownerText =
`╭─ 👑 Oᴡɴᴇʀ Iɴғᴏ 👑 ─╮
│ 👤 Nᴀᴍᴇ       : 亗 AKASH ✿᭄
│ 🧸 Nɪᴄᴋ       : Vondo
│ 🎂 Aɢᴇ        : 19
│ 💘 Rᴇʟᴀᴛɪᴏɴ : Sɪɴɢʟᴇ
│ 🎓 Pʀᴏғᴇssɪᴏɴ : Sᴛᴜᴅᴇɴᴛ
│ 📚 Eᴅᴜᴄᴀᴛɪᴏɴ : Iɴᴛᴇʀ 2ɴᴅ Yᴇᴀʀ
│ 🏡 Lᴏᴄᴀᴛɪᴏɴ : Dhaka  
├─ 🔗 Cᴏɴᴛᴀᴄᴛ ─╮
│ 📘 Facebook  : https://www.facebook.com/share/171Y441F7H/
│ 💬 Messenger  : m.me/61558931578859
│ 📞 WhatsApp   : wa.me/01994046054
╰────────────────╯`;

    const cacheDir = path.join(__dirname, "cache");
    const imgPath = path.join(cacheDir, "owner.jpg");

    // cache folder safe create
    if (!fs.existsSync(cacheDir)) {
      fs.mkdirSync(cacheDir, { recursive: true });
    }

    const imgLink = "https://i.imgur.com/3fCioHa.jpeg";

    const send = () => {
      try {
        api.sendMessage(
          {
            body: ownerText,
            attachment: fs.createReadStream(imgPath)
          },
          event.threadID,
          () => fs.unlinkSync(imgPath),
          event.messageID
        );
      } catch (e) {
        api.sendMessage(ownerText, event.threadID);
      }
    };

    request(imgLink)
      .pipe(fs.createWriteStream(imgPath))
      .on("close", send)
      .on("error", () => {
        api.sendMessage(ownerText, event.threadID);
      });
  }
};
