export default defineTask({
  meta: {
    name: "crous",
    description: "Send today's crous menu",
  },
  async run() {
    const doc = await fetch('https://www.crous-lorraine.fr/restaurant/resto-u-verlaine-2/').then(res => res.text());

    const [section] = doc.match(/(?:<li>Plat du jour<ul>).*(?:<\/li>)/gm)
    const menu = section
      .split('Information')[0]
      .replace(/(<li>|<\/ul>)/gm, '')
      .replace(/<\/li>/gm, '\n')
      .replace(/<ul>/gm, ':\n')
      .trim();

    const withBoldTitles = menu.replace(/^(.*):$/gm, '__*$1:*__');

    notifyTelegram(withBoldTitles, process.env.TELEGRAM_CHAT_ID_ANAIS);

    return { result: "Success" };
  },
});