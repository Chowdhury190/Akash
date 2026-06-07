module.exports = {
  config: {
      name: "ＡｋａｓｈMamun",
          version: "1.0.4",
              author: "〲Ａｋａｓｈツ࿐ T.T　o.O",
                  role: 0,
                      shortDescription: Akash" Profile ",
                          category: "Information",
                              guide: {
                                    en: "type Akash"
                                        }
                                          },
  onStart: async function () {},
  onChat: async function ({ api, event }) {
      const msg = event.body?.toLowerCase();
          if (!msg || msg !== "Akash") return;
    const profileText = 
    `⏤͟͟͞͞♛ Ａｋａｓｈ Ｉｎｆｏ ♛ ☺︎
 ⏤͟͟͞͞☺︎ ┏━━━━━━━━━━━━━━━
 ⏤͟͟͞͞𝐍𝐚𝐦𝐞 ➯   ⏤͟͟͞͞ ᜊＡｋａｓｈ
 
⏤͟͟͞͞𝐍𝐢𝐜𝐤𝐧𝐚𝐦𝐞 ➯⏤͟͟͞͞ 𝐕𝐎𝐍𝐃𝐎 😜

⏤͟͟͞͞𝐂𝐨𝐮𝐧𝐭𝐫𝐲 ➯⏤͟͟͞͞𝐁𝐚𝐧𝐠𝐥𝐚𝐝𝐞𝐬𝐡 🇧🇩

🏤⏤͟͟͞͞𝐇𝐨𝐦𝐞 ➯⏤͟͟͞͞  𝘿𝙝𝙖𝙠𝙖(⸝⸝๑﹏๑⸝⸝)  ☠️

🏛️⏤͟͟͞͞𝐃𝐢𝐬𝐭𝐫𝐢𝐜𝐭 ➯⏤͟͟͞͞ 💀𝘿𝙝𝙖𝙠𝙖

⛪⏤͟͟͞͞𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 ➯ 𝐈𝐧𝐭𝐞𝐫 2𝐧𝐝 𝐘𝐞𝐚𝐫 ✍︎❤️‍🩹

⏤͟͟͞͞𝐀𝐠𝐞 ➯ 20  😊❤️‍🩹

🕌⏤͟͟͞͞𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧 ➯ 𝐈𝐬𝐥𝐚𝐦 ❤️♡♡

⏤͟͟͞͞𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 ➯ 𝑺i𝐧𝐠𝐥𝐞 ‍♡

⏤͟͟͞͞𝐁𝐞𝐬𝐭 𝐅𝐧𝐝➯ 𝑨𝑺𝑬 ,,🙃

⏤͟͟͞͞𝐅𝐯𝐭 𝐂𝐨𝐥𝐨𝐮𝐫➯ ⏤͟͟͞͞𝐁𝐥𝐚𝐜𝐤 😺🖤


 ⏤͟͟͞͞ ☻ 𝗬𝗢𝗨𝗥 𝗕𝗕𝗭 
 ⏤͟͟͞͞𝑂𝑊𝑁𝐸𝑅⏤☺︎ `;
    api.sendMessage(profileText, event.threadID, event.messageID);
      }
      };
