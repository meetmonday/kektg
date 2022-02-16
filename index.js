const { post } = require('axios').default;

const tgAPI = `https://api.telegram.org/bot${process.env.token}`;

function sendMessage(text, m, ...params) {
  post(`${tgAPI}/sendMessage`, {
    text,
    chat_id: m.chat.id,
    parse_mode: 'Markdown',
    disable_web_page_preview: params.preview || true,
  }).catch((err) => { throw err; });
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
