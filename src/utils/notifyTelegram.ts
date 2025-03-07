export async function notifyTelegram(message: string, chat_id: string, markdown = false) {
    const { telegram: { botToken } } = useRuntimeConfig();

    return fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id,
            text: message,
            parse_mode: markdown ? 'MarkdownV2' : undefined
        })
    }).catch(console.error);
}