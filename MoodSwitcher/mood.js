//Mandisa Harris-King 11-21-25
// Mood Changer using event delegation

//Step 1 : Select the Display Element from the DOM
const moodDisplay = document.getElementById('moodDisplay');

// Step 2: Define an object with configurations for each mood
// This object holds the background color, text color, and message for each mood
const moods = {
  happy:     { bg: '#ee69d8ff', text: '#3e2723', message: 'Pumpkin spice everything!' }, //bg is background color, text is the text color, message is the text to display
  calm:      { bg: '#bce3ecda', text: '#141313ff', message: 'Just breathe and relax.' },
  excited:   { bg: '#f36320ff', text: '#141414ff', message: 'Let the excitement flow!' },
  chill:     { bg: '#4b74a3de', text: '#ffffff', message: 'Chill vibes only.' },
  mysterious:{ bg: '#23143bff', text: '#e7e5e9b2', message: 'Unravel the mystery within.' },
  reset:     { bg: '#ffffff',   text: '#0a0a0aff', message: 'Choose a mood...'}
};

//Step 3: Add a single click event listener to the document (event delegation)
// This listens for clicks anywhere on the page and checks if it's a mood button
document.addEventListener('click', function (event) {
  // Check if the clicked element has the class 'mood-btn'
  if (event.target.classList.contains('mood-btn')) {
    // step 4 get the mood for the button's data-mood attribute
    const mood = event.target.getAttribute('data-mood');
    //get the configuration for this mood from the moods object
    console.log(mood);
    const config = moods[mood]; // in order for config to work, assign the config variable to the moods object then we can display the properties of the object
    console.log(config);

    //step 5: update the page styles and message
      document.body.style.backgroundColor = config.bg;
      document.body.style.color = config.text;
    // Update the display message
      moodDisplay.textContent = config.message;
  }
});



