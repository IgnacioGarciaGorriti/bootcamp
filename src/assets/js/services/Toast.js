export class Toast {
    title = null;
    message = null;
    icon = null;
    close = true;
    duration = null;
    alignment = 'right';
    position = 'top';
    type = 'success';
    classes = [];

    #setParams(params) {
        for(let [key, value] of Object.entries(params)) {
            this[key] = value;
        }
    }

    display(params) {
        this.#setParams(params);
        const toast = document.createElement('div');
        if(this.icon && (this.icon instanceof HTMLElement || typeof this.icon === 'string')) {
            if(typeof this.icon === 'string') {
                const img = document.createElement('img');
                img.src = this.icon;
                img.alt = 'icon';
                img.classList.add('toast__icon');
                toast.appendChild(img);
            } else {
                toast.appendChild(this.icon);
            }
        }
        if(this.title && (this.title instanceof HTMLElement || typeof this.title === 'string')) {
            if(typeof this.title === 'string') {
                const toast_title = document.createElement('span');
                toast_title.textContent = this.title;
                toast_title.classList.add('toast__title');
                toast.appendChild(toast_title);
            } else {
                toast.appendChild(this.title);
            }
        }
        if(this.message && (this.message instanceof HTMLElement || typeof this.message === 'string')) {
            if(typeof this.message === 'string') {
                const toast_message = document.createElement('span');
                toast_message.textContent = this.message;
                toast_message.classList.add('toast__message');
                toast.appendChild(toast_message);
            } else {
                toast.appendChild(this.message);
            }
        }
        if(this.close) {
            const toast_close = document.createElement('span');
            toast_close.classList.add('toast-close');
            toast_close.addEventListener('click', () => {
                toast.remove();
            });
            toast.appendChild(toast_close);
        }
        if(typeof this.duration === 'number') {
            setTimeout(() => {
                toast.remove();
            }, this.duration);
        }
        toast.classList.add('toast__alignment');
        if(this.alignment === 'center' || this.alignment === 'right' || this.alignment === 'left') {
            toast.classList.add('toast__alignment--' + this.alignment);
        }
        toast.classList.add('toast__position');
        if(this.position === 'top' || this.position === 'bottom' ) {
            toast.classList.add('toast__position--' + this.position);
        }
        toast.classList.add('toast', 'toast--' + this.type, ...this.classes);

        document.body.appendChild(toast);
    }

}