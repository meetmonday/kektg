const { post } = require('axios').default;

const tgAPI = `https://api.telegram.org/bot${process.env.BOT_TOKEN}`;

function sendMessage(text, m, { disablePreview } = {}) {
  post(`${tgAPI}/sendMessage`, {
    text,
    chat_id: m.chat.id,
    parse_mode: 'Markdown',
    disable_web_page_preview: disablePreview || false,
  }).catch((err) => { throw err.data; });
}

function deleteMessage(m) {
  post(`${tgAPI}/deleteMessage`, {
    chat_id: m.chat.id,
    message_id: m.message_id,
  }).catch((err) => { throw err; });
}

module.exports = {
  sendMessage, deleteMessage,
};
