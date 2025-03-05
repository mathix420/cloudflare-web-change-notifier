export async function notifyTelegram(message: string, chat_id: string) {
    return fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id,
            text: message,
            parse_mode: 'MarkdownV2'
        })
    });
}