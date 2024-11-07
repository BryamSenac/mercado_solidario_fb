import { products } from "./../../../model/products.js";
import { changeImage } from "./../../../controller/home/change_image.js";

export function initializeProducts() {
    const campanhas = document.getElementById("campanhas")
    for (let j=0; j<=products.length -1; j++) {
        let product = document.createElement('div')
        product.className = 'product'
        product.setAttribute('data-index', `${j}`);
        campanhas.appendChild(product)
        product.addEventListener('click', ()=>{
            window.location.href = './produto.html'
        });
    }

    const productElements = document.querySelectorAll('.product');

    productElements.forEach((productElement, index) => {
        criarCartao(productElement, index, products);
    });
}

export function criarCartao(element, index, db) {
    const { title, description, images } = db[index];
        
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
    element.appendChild(img);
    element.appendChild(titleElement);
    element.appendChild(descriptionElement);
    element.appendChild(navButtons);
    element.appendChild(contactButton);

}