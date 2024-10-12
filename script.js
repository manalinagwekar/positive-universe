const messages = [
    "You are exactly where you need to be.",
    "The universe has your back.",
    "Great things are coming your way.",
    "You are loved, more than you know.",
    "Trust the timing of your life.",
    "You are capable of amazing things.",
    "Positive energy is flowing to you.",
    "The universe is guiding you to your highest good."
];

document.getElementById('message-button').addEventListener('click', () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('message-box').innerText = randomMessage;
});
