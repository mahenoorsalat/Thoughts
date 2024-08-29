const thought = document.querySelector('.thought');
const button = document.querySelector('button');
const arr = [
    "Keep your face always toward the sunshine—and shadows will fall behind you.” —Walt Whitman",
    "Extraordinary things are always hiding in places people never think to look.” —Jodi Picoul",
    "Setting goals is the first step in turning the invisible into the visible.” —Tony Robbins",
    "You can have it all. Just not all at once.” —Oprah Winfrey", "Say something positive, and you’ll see something positive.” —Jim Thompson", "“All you need is the plan, the road map, and the courage to press on to your destination.” —Earl Nightingale", '"Train your mind to see the good in every situation." —Unknown', ' "If you can stay positive in a negative situation, you win." —Unknown', '"Stay positive. Better days are on their way." —Unknown'
];

button.addEventListener('click', () => {
    // Randomly select an index
    const randomIndex = Math.floor(Math.random() * arr.length);


    switch (randomIndex) {
        case 0:
            thought.textContent = arr[0];
            break;
        case 1:
            thought.textContent = arr[1];
            break;
        case 2:
            thought.textContent = arr[2];
            break;
        case 3:
            thought.textContent = arr[3];
            break;
        case 4:
            thought.textContent = arr[4];
            break;
        case 5:
            thought.textContent = arr[5];
            break;
        case 6:
            thought.textContent = arr[6];
            break;
        case 7:
            thought.textContent = arr[7];
            break;
        case 8:
            thought.textContent = arr[8];
            break;
        default:
            thought.textContent = "No quote found.";
            break;
    }
});
