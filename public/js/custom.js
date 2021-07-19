// get the element
const text = document.querySelector('.typing-text');

// make a words array
const words = [
  "We believe the Bible to be the inspired, infallible and authoritative Word of God.",
  "We believe that there is one God.",
  "We believe in the deity of the Lord Jesus Christ, in His virgin birth, His sinless life, His miracles, His vicarious death through shed blood, His ascension and in His personal return to power and glory.",
  "We believe in repentance, water baptism in the name of Jesus Christ for the remission of sins and in the infilling of the Holy Spirit with the evidence of speaking in other tongues.",
  "We believe in the present ministry of the Holy Spirit by whose indwelling the Christian is enabled to live a godly life.",
  "We believe in the resurrection of both the saved and the lost: they that are saved unto the resurrection of life and they that are lost unto the resurrection of damnation.",
  "We believe in the spiritual unity of believers in our Lord Jesus Christ."
];

// start typing effect
setTyper(text, words);

function setTyper(element, words) {

  const LETTER_TYPE_DELAY = 50;
  const WORD_STAY_DELAY = 2000;

  const DIRECTION_FORWARDS = 0;
  const DIRECTION_BACKWARDS = 1;

  var direction = DIRECTION_FORWARDS;
  var wordIndex = 0;
  var letterIndex = 0;

  var wordTypeInterval;

  startTyping();

  function startTyping() {
    wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
  }

  function typeLetter() {
    const word = words[wordIndex];

    if (direction == DIRECTION_FORWARDS) {
      letterIndex++;

      if (letterIndex == word.length) {
        direction = DIRECTION_BACKWARDS;
        clearInterval(wordTypeInterval);
        setTimeout(startTyping, WORD_STAY_DELAY);
      }

    } else if (direction == DIRECTION_BACKWARDS) {
      nextWord();

      if (letterIndex == 0) {
        nextWord();
      }
    }

    const textToType = word.substring(0, letterIndex);

    element.textContent = textToType;
  }

  function nextWord() {

    letterIndex = 0;
    direction = DIRECTION_FORWARDS;
    wordIndex++;

    if (wordIndex == words.length) {
      wordIndex = 0;
    }

  }
}


/////MESSAGE FROM

//send private message popup
const $privateMessage = document.querySelector('#chat-button');

$privateMessage.addEventListener('click', ()=>
{
const form = document.querySelector(".private-message-box");
const background = document.querySelector(".private-message-bkg");

form.style.display = 'block';
background.style.display = 'block';


const closeForm = document.querySelector('#close-form');

closeForm.addEventListener('click', ()=>{
form.style.display = 'none';
background.style.display = 'none';
})
})

