export class Tab {
    container = null;
    extra_classes = [];
    tabs = [];

    #setParams(params) {
        for(let [key, value] of Object.entries(params)) {
            this[key] = value;
        }
    }

    display(params) {
        this.#setParams(params);
        const tab_header = document.createElement('div');
        const tab_content = document.createElement('div');
        for(let tab of params.tabs) {
            const tab_header_item = document.createElement('div');
            const tab_content_item = document.createElement('div');
            const label = document.createElement('span');
            const activate_indicator = document.createElement('span');
            if(tab.header.icon) {
                tab_header_item.appendChild(this.setImageIcon(tab));
            }
            label.textContent = tab.header.label;
            tab_header_item.appendChild(label);
            tab_header_item.appendChild(activate_indicator);
            tab_header_item.classList.add('tab__header__item');
            tab_header_item.id = tab.header.id;
            tab_header_item.addEventListener('click', () => {
                const tab_headers = [...tab_header.getElementsByClassName('tab__header__item')]; 
                tab_headers.forEach((element) => {
                    element.classList.remove('active');
                });
                tab_header_item.classList.add('active');
                const tab_contents = tab_content.getElementsByClassName('tab__content__item');
                [...tab_contents].forEach((element) => {
                    element.classList.remove('active');
                });
                tab_content_item.classList.add('active');
            });
            tab_header.appendChild(tab_header_item);
            tab_header.classList.add('tab__header');
            if(typeof tab_header.content === Object){
                tab_content_item.appendChild(tab.content);
            } else {
                tab_content_item.innerHTML= tab.content;
            }
            tab_content_item.classList.add('tab__content__item');
            tab_content.appendChild(tab_content_item);
            tab_content.classList.add('tab__content', ...this.extra_classes);
            if(this.container instanceof HTMLElement) {
                this.container.appendChild(tab_header);
                this.container.appendChild(tab_content);
            } else if(typeof this.container === 'string') {
                const container = document.getElementById(this.container);
                container.appendChild(tab_header);
                container.appendChild(tab_content);
            } else {
                throw new Error('Invalid container');
            }
        }
        tab_header.children[0].classList.add('active');
        tab_content.children[0].classList.add('active');
    }

    setImageIcon(tab) {
        if(tab.header.icon instanceof SVGElement || tab.header.icon instanceof HTMLImageElement || tab.header.icon instanceof HTMLObjectElement) {
            const image = tab.header.icon;
            return image;
        } else if(typeof tab.icon === 'string') {
            const img = document.createElement('img');
            img.src = tab.header.icon.path;
            return img;
        } 

        throw new Error('Invalid image');
    }
}