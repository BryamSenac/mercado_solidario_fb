import { products } from "../../controller/carregarCards.js";
import { changeImage } from "../../controller/carregarCards.js";

export async function initializeProducts() {
    const productElements = await document.querySelectorAll('.product');

    productElements.forEach((productElement, index) => {
        const { title, description, images } = products[index];
        
        // Criar elementos apenas uma vez
        const img = document.createElement('img');
        img.src = images[0]; // Imagem inicial
        img.alt = title;
        img.className = 'product-image';

        const titleElement = document.createElement('h2');
        titleElement.className = 'product-title';
        titleElement.textContent = title;

        const descriptionElement = document.createElement('p');
        descriptionElement.className = 'product-description';
        descriptionElement.textContent = description;

        const navButtons = document.createElement('div');
        navButtons.className = 'nav-buttons';

        const prevButton = document.createElement('button');
        prevButton.className = 'prev';
        prevButton.innerHTML = '&#10094;';
        prevButton.onclick = () => changeImage(-1, index);

        const nextButton = document.createElement('button');
        nextButton.className = 'next';
        nextButton.innerHTML = '&#10095;';
        nextButton.onclick = () => changeImage(1, index);

        const contactButton = document.createElement('button');
        contactButton.className = 'contact-button';
        contactButton.textContent = 'Contato';
        contactButton.onclick = () => alert(`Entrar em contato sobre ${title}`); // Exemplo de ação
        
        // Montar a estrutura
        navButtons.appendChild(prevButton);
        navButtons.appendChild(nextButton);
        productElement.appendChild(img);
        productElement.appendChild(titleElement);
        productElement.appendChild(descriptionElement);
        productElement.appendChild(navButtons);
        productElement.appendChild(contactButton);
    });
}