export class Loader {
    start(mensaje) {
        const background = document.createElement('div');
        const loader_container = document.createElement('div');
        const loader_spinner = document.createElement('span');
        const loader_message = document.createElement('span');
        loader_message.textContent = mensaje;
        loader_message.classList.add('loader__message');
        loader_spinner.classList.add('loader__spinner');
        loader_container.appendChild(loader_spinner);
        loader_container.appendChild(loader_message);
        loader_container.classList.add('loader__container');
        background.appendChild(loader_container);
        background.classList.add('loader-background');
        background.id = 'loader_background';

        document.body.appendChild(background);
    }

    stop() {
        const background = document.getElementById('loader_background');
        if(background) {
            background.remove();
        }
    }
}