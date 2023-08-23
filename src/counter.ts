// export function setupCounter(element: HTMLButtonElement) {
//   let counter = 0
//   const setCounter = (count: number) => {
//     counter = count
//     element.innerHTML = `count is ${counter}`
//   }
//   element.addEventListener('click', () => setCounter(counter + 1))
//   setCounter(0)
// }

import createFlowers from "./flower";
import switchMode from "./modeSwitcher";

export function setupCounter(startButton: HTMLButtonElement, resetButton: HTMLButtonElement, display: HTMLHeadingElement, ground: HTMLDivElement) {
  
  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  let isRunning = false;
  let interval:any;

  const updateTimer = () => {
    seconds++;
    if(seconds === 60){
      minutes++;
      createFlowers(hours, minutes, seconds, ground);
      seconds = 0;
    }
    if(minutes === 60){
      hours++;
      minutes = 0;
    }
    updateDisplay(hours,minutes,seconds);
  }

  const start = () => {
    if (!isRunning) {
      switchMode(false);
      interval = setInterval(updateTimer, 20);
      startButton.innerHTML = '<span class="material-symbols-outlined">pause</span>';
      isRunning = true;
    }else{
      switchMode(true);
      clearInterval(interval);
      startButton.innerHTML = '<span class="material-symbols-outlined">play_arrow</span>';
      isRunning = false;
    }
  }

  const reset = () => {
    hours = 0;
    minutes = 0;
    seconds = 0;
    switchMode(true);
    clearInterval(interval);
    createFlowers(hours, minutes, seconds, ground);
    updateDisplay(hours,minutes,seconds);
    startButton.innerHTML = '<span class="material-symbols-outlined">play_arrow</span>';
    isRunning = false;
  }

  const updateDisplay = (h:number, m:number, s:number) => {
    const hoursFormated = h < 10 ? '0'+ h : h; 
    const minutesFormated = m < 10 ? '0'+ m : m; 
    const secondsFormated = s < 10 ? '0'+ s : s; 
    display.innerHTML = `${hoursFormated}:${minutesFormated}:${secondsFormated}`;
  }

  startButton.addEventListener('click', () => start());
  resetButton.addEventListener('click', () => reset());
}