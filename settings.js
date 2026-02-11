// ✅ MegaTron Bot Stylish Configuration – by ROYAL KATSIC ❦ ✓

const ownerNumber = require('./Owner/owner'); // 🔗 Example: ['256770359400']

const config = {
  // 👑 Owner Info
  ownerNumber,                          // 🔹 Array of Owner Numbers
  ownerName: '𓆩 ROYAL KATSIC ❦︎𓆪',              // 🔹 Displayed in Greetings
  botName: '🤖 ROYAL KATSIC BOT ⚡',           // 🔹 Bot Display Name
  signature: '> ROYAL KATSIC ❦ ✓',               // 🔹 Footer on Bot Replies
  youtube: 'https://www.youtube.com/@am.royalkatsic', // 🔹 Optional YouTube

  // ⚙️ Feature Toggles
  autoTyping: false,        // ⌨️ Fake Typing
  autoReact: false,         // 💖 Auto Emoji Reaction
  autoStatusView: false,    // 👁️ Auto-View Status
  public: true,             // 🌍 Public or Private Mode
  antiLink: false,          // 🚫 Delete Links in Groups
  antiBug: false,           // 🛡️ Prevent Malicious Crashes
  greetings: true,          // 🙋 Welcome/Farewell Messages
  readmore: false,          // 📜 Readmore in Long Replies
  ANTIDELETE: true          // 🗑️ Anti-Delete Messages
};

// ✅ Register owner(s) globally in WhatsApp JID format
global.owner = (
  Array.isArray(ownerNumber) ? ownerNumber : [ownerNumber]
).map(num => num.replace(/\D/g, '') + '@s.whatsapp.net');

// ⚙️ Export Settings Loader
function loadSettings() {
  return config;
}

module.exports = { loadSettings };
