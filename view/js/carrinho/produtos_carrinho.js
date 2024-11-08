import { products_carrinho } from "../../../model/products_carrinho.js";

export function initializeProducts() {
    const productElements = document.querySelectorAll('.product');

    productElements.forEach((productElement, index) => {

        const { title, description, images } = products_carrinho[index];

        // Limpa o conteúdo anterior
        productElement.innerHTML = '';

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
        contactButton.onclick = () => alert(`Entrar em contato sobre ${title}`);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = 'Excluir';
        deleteButton.onclick = () => removeProduct(productElement, index);

        


        productElement.onclick = "window.location.href = './produto.html'"

        // Montar a estrutura
        navButtons.appendChild(prevButton);
        navButtons.appendChild(nextButton);
        productElement.appendChild(img);
        productElement.appendChild(titleElement);
        productElement.appendChild(descriptionElement);
        productElement.appendChild(navButtons);
        productElement.appendChild(contactButton);
        productElement.appendChild(deleteButton);  
    });
}

function removeProduct(productElement, index) {
    productElement.remove();
    products.splice(index, 1);

    initializeProducts();
}

function changeImage(direction, productIndex) {
    const productImage = document.querySelectorAll('.product-image')[productIndex];
    const currentImageSrc = productImage.src;
    const images = products_carrinho[productIndex].images;
    let newIndex = images.indexOf(currentImageSrc) + direction;

    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;

    // Troca a imagem
    setTimeout(() => {
        productImage.src = images[newIndex];
    }, 0); // 0ms de atraso
}


document.addEventListener('DOMContentLoaded', initializeProducts);
// Inicializa os produtos ao carregar a página
initializeProducts();