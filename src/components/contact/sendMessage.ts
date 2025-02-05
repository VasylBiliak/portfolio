export const sendMessage = async (
    message: string,
    botToken: string = '7531409596:AAGqTVXDMmc_7Okns0YINdbtHxLGtrbcFXE', //free boot default
    chatId: number = 5528055309
) => {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML',
        }),
    });

    if (!response.ok) throw new Error('Failed to send message');
    return await response.json();
};
