import { Modal } from "../services/Modal.js";

document.addEventListener("DOMContentLoaded", () => {
    const simple_modal_button = document.getElementById("simple_modal");
    const service_modal_button = document.getElementById("service_modal");
    simple_modal_button.addEventListener("click", () => {
        create_modal();
    });
    service_modal_button.addEventListener("click", () => {
        const modal = new Modal();
        const form = document.createElement("form");
        for(let i = 0; i < 4; i++) {
            const input = document.createElement("input");
            input.name = "my_input_" + i;
            form.appendChild(input);
        }
        modal.display('Esto es un modal creado mediante un servicio', {
            description: "Cuando nos abstraemos lo suficiente podemos crear servicios que son realmente útiles!!",
            only_accept: true,
            action_label: "Entendido",
            icon: '../src/assets/icons/thumbs-up.svg',
            content: form
        }).then((data) => {
            console.log(data);
        });
    });
});

function create_modal() {
    const background = document.createElement("div");
    const modal = document.createElement("div");
    const icon = document.createElement("img");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const buttons = document.createElement("div");
    const decline = document.createElement("button");
    const action = document.createElement("button");
    description.textContent = "Los modales nos permiten una experiencia de usuario más interactiva, algo que en ocasiones puede marcar la diferencia.";
    icon.src = "../src/assets/icons/waving-hand-sign.svg";
    icon.classList.add("modal__icon");
    title.textContent = "Hola!! Esto es un modal";
    title.classList.add("modal__title");
    decline.textContent = "Cancelar";
    decline.addEventListener("click", () => {
        background.remove();
    });
    decline.classList.add("modal__btn", "modal__btn--secondary");
    action.textContent = "Acción";
    action.addEventListener("click", () => {
        alert("Luces, camara, ¡¡ACCIÓN!!");
    });
    action.classList.add("modal__btn");
    buttons.appendChild(decline);
    buttons.appendChild(action);
    buttons.classList.add("modal__buttons");
    modal.appendChild(icon);
    modal.appendChild(title);
    modal.appendChild(description);
    modal.appendChild(buttons);
    modal.classList.add('modal');
    background.appendChild(modal);
    background.classList.add('modal-bg');
    document.body.appendChild(background);
}