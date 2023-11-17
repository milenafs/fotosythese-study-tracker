export default function menu () {
    document.querySelector<HTMLDivElement>('#app')!.innerHTML += `
    <nav class="menu">
        <button id="playlist-button"><span class="material-symbols-outlined">
            queue_music
        </span></button>
        <button id="info-button"><span class="material-symbols-outlined">
            help
        </span></button>
    </nav>
    <div class="modal playlist-modal">
        <div class="youtube-iframe">
            <iframe src="https://www.youtube.com/embed/mg67iIFivDo?playlist=mg67iIFivDo&listType=playlist&autoplay=1&controls=0&loop=1&mute=1&cc_load_policy=0&iv_load_policy=3&disablekb=1&fs=0&modestbranding=1&playsinline=1&rel=0&hd=1&vq=hd1080" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" width="1920" height="1080" loading="lazy"></iframe>
        </div>
    </div>
    `;

    const createMenuOption = (icon: string,) => {
        document.querySelector<HTMLDivElement>('#menu')!.innerHTML += ``;
    }
};