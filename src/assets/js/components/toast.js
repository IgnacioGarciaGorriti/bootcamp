import {Toast} from '../services/Toast.js';

document.addEventListener('DOMContentLoaded', () => {
    const toast_success = document.getElementById('toast_success');
    const toast_warning = document.getElementById('toast_warning');
    const toast_error = document.getElementById('toast_error');
    const toast_info = document.getElementById('toast_info');

    toast_success.addEventListener('click', () => {
       createToast('success', '../src/assets/icons/bell.svg');
    });
    toast_info.addEventListener('click', () => {
        createToast('info', '../src/assets/icons/bell-blue.svg');
    });
    toast_error.addEventListener('click', () => {
        createToast('error', '../src/assets/icons/bell-red.svg');
    });
    toast_warning.addEventListener('click', () => {
        createToast('warning', '../src/assets/icons/bell-warning.svg');
    });
});

function createToast(type, icon) {
    const title = document.getElementById('title');
    const message = document.getElementById('message');
    const toast = new Toast();
    toast.display({
        title: title.value,
        message: message.value,
        type: type,
        icon: icon,
        position: 'bottom'
    });
}