const button = document.getElementById('clickButton');
const countDisplay = document.getElementById('count');

// Initialize the count variable

let count = 0;

// Add an Event listener to the button
button.addEventListener('click', () => {

    //  Increment the count
    count++;

    // Update the count display 

    countDisplay.textContent = count;

});