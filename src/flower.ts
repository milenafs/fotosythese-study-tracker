export default function createFlowers (hours:number, minutes: number, seconds: number, farm: HTMLDivElement) {
    const Flower = (img:string, txt:string) => {
        return(`
            <div class="flower flower-day-mode grow-flower">
                <h3>${txt}</h3>
                <img src="${img}"/>
            </div>
        `);
    };
    
    const generateRandomFlower = () => {
        let randomNum = Math.floor(Math.random()*19 + 1);
        document.querySelector<HTMLDivElement>('.grow-flower')?.classList.remove('grow-flower');
        farm.innerHTML += Flower(`./src/assets/images/flowers/${randomNum}.png`,'+ O2');
    }
    
    if(minutes % 15 === 0.0){
        generateRandomFlower();
    }
    if(hours === 0 && minutes === 0 && seconds === 0){
        farm.innerHTML = '';
    }
}

