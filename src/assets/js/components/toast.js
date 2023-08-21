import {Toast} from '../services/Toast.js';

document.addEventListener('DOMContentLoaded', () => {
    const toast_btn = document.getElementById('create_toast');
    toast_btn.addEventListener('click', () => {
        const toast = new Toast();
        toast.display({
            title: 'Hola mundo',
            message: 'Buenos días ¿Qué quieres que haga?',
            position: 'top',
            duration: 3000
        });
    });
});