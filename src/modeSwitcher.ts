export default function switchMode(isSunny: boolean)
{
    const bg = document.querySelector<HTMLDivElement>('.background')!;
    const sky = document.querySelector<HTMLDivElement>('.sky')!;
    const ground = document.querySelector<HTMLDivElement>('.ground')!;

    const changeClass = (element: HTMLElement, name:string) => {
        
        const oldClass = isSunny ? name + '-day-mode' : name + '-night-mode';
        const newClass = isSunny ? name + '-night-mode' : name + '-day-mode';
        
        element.classList.remove(oldClass);
        element.classList.add(newClass);
    }

    changeClass(bg,'bg',);
    changeClass(sky,'sky');
    changeClass(ground,'ground');

    document.querySelectorAll<HTMLDivElement>('.flower').forEach(element => {
        changeClass(element,'flower');
    });
}