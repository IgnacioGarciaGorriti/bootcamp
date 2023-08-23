import {Loader} from "../services/Loader";

document.addEventListener('DOMContentLoaded', () => {
    const loader_btn = document.getElementById('loader_btn');
    loader_btn.addEventListener('click', () => {
       const loader = new Loader();
       loader.start('Cargando página');
        setTimeout(() => {
            loader.stop();
        }, 6000);
    });
});