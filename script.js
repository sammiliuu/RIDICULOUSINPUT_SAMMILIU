
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('movingButton');
    const countDisplay = document.getElementById('count-display');
    const missMessage = document.getElementById('combo-miss');
    const TIMEOUT_MS = 1300;
    const box = document.getElementById('color-box');
    const colors = ['#d83e77ff', '#f2a365', '#f7da56ff', '#88eb60ff', '#6abba4ff', '#60c3e1ff', '#8097e8ff', '#ae6fe2ff', '#e277d4ff']; // colors to cycle through
    let currentIndex = 0;
    let count = 0;
    let timeoutId; //empty container in order to cancel later 
    

    function moveButton() {
      const vh = window.innerHeight - button.offsetHeight; //height of visible browser window minus height of button. calculates the space where the button can move 
      const vw = window.innerWidth - button.offsetWidth; 

      const newTop = Math.random() * vh; //gives random position/pixel value where on the screen the button will be placed 
      const newLeft = Math.random() * vw;

      button.style.top = newTop + 'px'; //move button down from top 
      button.style.left = newLeft + 'px'; //move button right from left 
    }

    moveButton(); //initial position

    setInterval(moveButton, 1000); //move every x seconds

    button.addEventListener('click', () => { //run this code when button is clicked
      count++;
      countDisplay.textContent = count; //displays # of times button has been clicked through "countDisplay"
      missMessage.textContent = ''; //clears the miss combo text when button is clicked
      handleClick(); //stuff is happening in this function 

      currentIndex = (currentIndex + 1) % colors.length; //changes currentIndex value to the next colour. % sets it back to first colour after all the colours cycle through 
     
      box.style.backgroundColor = colors[currentIndex]; //change background color of box to the next one on the list 
    });

    function resetCounter() {
    console.log("MISS! Your combo has been restarted."); 
    count = 0; 
    countDisplay.textContent = count; //when button clicking count is 0, display the number 0
    missMessage.textContent = "MISS! Your combo has been restarted."; //when the button clicking count is 0, display this message 
    }

    function handleClick() {
    clearTimeout(timeoutId); //stop timer for button clicking inactivity 
    timeoutId = setTimeout(resetCounter, TIMEOUT_MS); //resets counter that waits for timeout_ms miliseconds (1300) 
    }

    function generateRandom() {
     // min and max values of random number generator 
      const min = 1;
      const max = 350;
            
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min; //math.random() gives number between 0 and 1. multiply it to make it fit my range. math.floor() rounds it to a whole number
            
        document.getElementById('number-display').innerText = randomNum;
        } //update html
    
        generateRandom(); //first number shows immediately upon opening page 

        setInterval(generateRandom, 7000); //generate every 7 seconds
  
  });











