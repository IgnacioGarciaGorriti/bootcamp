export class Modal {
    action_callback = null;
    action_btn_type = '';
    cancel_callback = null;
    cancel_btn_type = '';
    action_label = null;
    icon = null;
    description = null;
    only_accept = false;
    content = null;

    #setParams(title, params) {
        this.title = title;
        for(let [key, value] of Object.entries(params)) {
            this[key] = value;
        }
    }

    display(modal_title, params) {
        return new Promise((resolve, reject) => {
            try {
                this.#setParams(modal_title, params);
                const background = document.createElement('div');
                const modal = document.createElement('div');
                if(this.icon) {
                    const icon = document.createElement('img');
                    icon.src = this.icon;
                    icon.classList.add('modal__icon');
                    modal.appendChild(icon);
                }
                const title = document.createElement('h3');
                title.textContent = this.title;
                title.classList.add('modal__title');
                modal.appendChild(title);
                if(this.description) {
                    const description = document.createElement('span');
                    description.textContent = this.description;
                    description.classList.add('modal__description');
                    modal.appendChild(description);
                }
                if(this.content && this.content instanceof HTMLFormElement) {
                    const content = document.createElement('div');
                    content.appendChild(this.content);
                    content.classList.add('modal__content');
                    modal.appendChild(content);
                }
                const buttons = document.createElement('div');
                if(!this.only_accept) {
                    const decline_btn = document.createElement('button');
                    decline_btn.textContent = 'Cancelar';
                    decline_btn.classList.add('modal__btn')
                    decline_btn.addEventListener('click', async () => {
                        background.remove();
                        resolve({
                            status: false,
                            data: null
                        });
                    });
                    this.cancel_btn_type ? decline_btn.classList.add('modal__btn--' + this.cancel_btn_type) : '';
                    buttons.appendChild(decline_btn);
                }
                const accept_btn = document.createElement('button');
                accept_btn.textContent = this.action_label ?? 'Aceptar';
                accept_btn.classList.add('modal__btn');
                this.action_btn_type ? accept_btn.classList.add('modal__btn--' + this.action_btn_type) : '';
                accept_btn.addEventListener('click', async () => {
                    if(this.content) {
                        const formData = new FormData(this.content);
                        resolve({
                            status: true,
                            data: formData
                        });
                    } else {
                        resolve({
                            status: true,
                            data: null 
                        });
                    }
                   background.remove();
                });
                buttons.appendChild(accept_btn);
                buttons.classList.add('modal__buttons');
                modal.appendChild(buttons);
                modal.classList.add('modal');
                background.appendChild(modal);
                background.classList.add('modal-bg');
                document.body.insertBefore(background, document.body.firstElementChild);
            } catch (e) {
                reject(e);
            }
        });
        
    }
}