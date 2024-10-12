const messages = [
    "You're a ray of sunshine in a cloudy world!",
    "Your smile can light up the darkest days!",
    "Believe in yourself; you're capable of incredible things.",
    "The universe is guiding you toward greatness!",
    "You're a beautiful soul, inside and out.",
    "Every day you become a better version of yourself.",
    "The world needs more of your kindness and warmth.",
    "You're stronger than you know.",
    "Your potential is limitless, keep reaching for the stars!",
    "You make the world a more magical place.",
    "You're doing great, even when it feels tough.",
    "You are destined for amazing things!",
    "Keep believing in the beauty of your dreams.",
    "You are loved beyond measure.",
    "Your presence brings joy to everyone around you.",
    "Today is the perfect day to chase your dreams.",
    "The universe has your back; trust the process.",
    "You are a force of positivity and light.",
    "You are brave, bold, and brilliant.",
    "Your uniqueness is what makes you so special!",
    "You are exactly where you need to be right now.",
    "Your kindness inspires others to be kind too.",
    "You are worthy of all the love and happiness in the world.",
    "Each day is a new opportunity for greatness.",
    "The universe is cheering you on!",
    "You are capable of creating a beautiful life.",
    "Your dreams are valid and within reach.",
    "You radiate positive energy and good vibes.",
    "You have the power to change the world.",
    "You are a blessing to those who know you.",
    "You are stronger than the challenges you face.",
    "You deserve all the good things coming your way.",
    "Every step forward is a step toward success.",
    "You make the world a better place just by being in it.",
    "Keep going; you're closer to your goals than you think.",
    "You are enough, just as you are.",
    "You inspire others with your strength and courage.",
    "You have the power to turn your dreams into reality.",
    "Your kindness has a ripple effect on the world.",
    "You are destined for great things.",
    "Your heart is as big as the universe.",
    "You are making a difference, even if you don’t see it yet.",
    "Keep chasing your dreams; they are closer than you think.",
    "You have the strength to overcome anything.",
    "You are worthy of all the wonderful things in life.",
    "You are a shining example of what’s possible.",
    "Your creativity knows no bounds.",
    "You are a light in the lives of those around you.",
    "The universe is sending you blessings and love.",
    "You have everything you need within you to succeed.",
    "You are a beautiful person, inside and out.",
    "Your presence makes the world brighter.",
    "You have a heart of gold.",
    "Your dreams are important, keep following them.",
    "You are unstoppable!",
    "Believe in the magic within you.",
    "Your hard work will pay off; keep going!",
    "You are creating a life full of happiness and love.",
    "You are more powerful than you know.",
    "You are a source of light and love in the world.",
    "You deserve to live the life of your dreams.",
    "You are capable of amazing things.",
    "The universe is working in your favor.",
    "You are exactly where you need to be on your journey.",
    "Keep spreading positivity wherever you go.",
    "You are worthy of all the good things life has to offer.",
    "You have the power to create your own happiness.",
    "You are loved more than you know.",
    "Your inner strength is your greatest asset.",
    "You are a beacon of hope and positivity.",
    "Your potential is as vast as the universe.",
    "You are surrounded by love and positivity.",
    "Your life is filled with endless possibilities.",
    "You are a masterpiece in progress.",
    "The world is a better place with you in it.",
    "You are growing stronger every day.",
    "You are capable of turning your dreams into reality.",
    "You bring light to everyone you meet.",
    "Your future is as bright as your heart.",
    "You are a gift to the world.",
    "You are the architect of your own happiness.",
    "You are worthy of living your best life.",
    "You are enough, just as you are right now.",
    "The universe is conspiring to bring you joy.",
    "You are unstoppable in your pursuit of greatness.",
    "You are a source of inspiration to others.",
    "The universe is opening doors for you.",
    "You are more than enough.",
    "You are on a journey to something amazing.",
    "You are full of endless possibilities.",
    "Your heart is filled with love and light.",
    "You are the creator of your own destiny.",
    "The world is waiting for your brilliance to shine.",
    "You are exactly where you are meant to be.",
    "You are a miracle in motion.",
    "You are destined for greatness.",
    "Your heart is a source of love and strength.",
    "You have the power to turn challenges into opportunities.",
    "Your positivity is contagious.",
    "You are a light that shines in the dark.",
    "Your uniqueness is your superpower.",
    "You are worthy of all the blessings coming your way.",
    "You are a beautiful work of art.",
    "You are resilient and powerful.",
    "You are loved, cherished, and valued.",
    "You are creating a life full of purpose and passion.",
    "Your kindness changes lives.",
    "You are capable of achieving anything you set your mind to.",
    "Your joy is infectious.",
    "You are a magnet for positivity and abundance.",
    "You are loved more than words can express.",
    "Your strength is an inspiration to others.",
    "You are a beacon of hope in this world.",
    "You are worthy of all the love and joy in the universe.",
    "You are a force for good in the world.",
    "Your dreams are within reach.",
    "You are the light in someone's life.",
    "You are worthy of all the beauty life has to offer.",
    "Your courage lights the way for others.",
    "You are a shining example of kindness and compassion.",
    "You have the power to make today amazing.",
    "You are an unstoppable force of positivity.",
    "You are a masterpiece in the making.",
    "You are the hero of your own story.",
    "Your potential is infinite.",
    "You are a bright light in a world that needs you.",
    "You have a heart of gold.",
    "You are a gift to the universe.",
    "Your light shines brighter than the stars."
    // Continue adding up to 365
];

const button = document.getElementById('hover-button');
const messageBox = document.getElementById('message-box');
const cuteImages = document.querySelectorAll('.cute-image');

// Function to display a random message
function displayRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    messageBox.innerText = messages[randomIndex];
}

// Function to trigger confetti
function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });
}

// Event listener for the button
button.addEventListener('mouseover', () => {
    displayRandomMessage();
    triggerConfetti(); // Trigger confetti on hover
    popImages();
});

// Function to pop images randomly around the container
function popImages() {
    cuteImages.forEach(image => {
        // Generate random position
        const randomX = Math.random() * 100 - 50; // X position
        const randomY = Math.random() * 100 - 50; // Y position
        image.style.transform = `translate(${randomX}vw, ${randomY}vh) rotate(${Math.random() * 360}deg)`;
    });
}

// Reset images back to original position after a short delay
button.addEventListener('mouseout', () => {
    cuteImages.forEach(image => {
        image.style.transform = 'translate(0, 0) rotate(0deg)';
    });
});

// Event listeners for each image
cuteImages.forEach(image => {
    image.addEventListener('mouseover', displayRandomMessage);
});
