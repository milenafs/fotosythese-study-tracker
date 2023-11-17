import './style.scss'
import { setupCounter } from './components/counter.ts'
import menu from './components/menu.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="background bg-night-mode">
    <div class="ground ground-night-mode">
    </div>
    <div class="sky sky-night-mode">
        <h1 id="timer">00:00:00</h1>
        <div class="buttons">
            <button id="start-button">
                <span class="material-symbols-outlined">play_arrow</span>
            </button>
            <button id="reset-button">
                <span class="material-symbols-outlined">stop</span>
            </button>
        </div>
    </div>
    <nav class="menu-container"></div>
    <div class="modal-container"></div>
</div>
`
const btnStart = document.querySelector<HTMLButtonElement>('#start-button')!;
const btnReset = document.querySelector<HTMLButtonElement>('#reset-button')!;
const timer = document.querySelector<HTMLHeadingElement>('#timer')!;
const ground = document.querySelector<HTMLDivElement>('.ground')!;

setupCounter(btnStart,btnReset,timer,ground);
menu();

