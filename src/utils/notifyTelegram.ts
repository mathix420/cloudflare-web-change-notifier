export async function notifyTelegram(message: string) {
    return fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: process.env.TELEGRAM_CHAT_ID,
            text: message
        })
    });
}