const products = [
    {
        title: "Produto 1",
        description: "Descrição breve do produto 1.",
        images: [
            "https://via.placeholder.com/150/FF5733", // Imagem 1
            "https://via.placeholder.com/150/C70039"  // Imagem 2
        ],
    },
    {
        title: "Produto 2",
        description: "Descrição breve do produto 2.",
        images: [
            "https://via.placeholder.com/150/FFC300", // Imagem 1
            "https://via.placeholder.com/150/DAF7A6"  // Imagem 2
        ],
    },
    {
        title: "Produto 3",
        description: "Descrição breve do produto 3.",
        images: [
            "https://via.placeholder.com/150/581845", // Imagem 1
            "https://via.placeholder.com/150/900C3F"  // Imagem 2
        ],
    },
    {
        title: "Produto 4",
        description: "Descrição breve do produto 4.",
        images: [
            "https://via.placeholder.com/150/FF5733", // Imagem 1
            "https://via.placeholder.com/150/C70039"  // Imagem 2
        ],
    },
    {
        title: "Produto 5",
        description: "Descrição breve do produto 5.",
        images: [
            "https://via.placeholder.com/150/FFC300", // Imagem 1
            "https://via.placeholder.com/150/DAF7A6"  // Imagem 2
        ],
    },
    {
        title: "Produto 6",
        description: "Descrição breve do produto 6.",
        images: [
            "https://via.placeholder.com/150/581845", // Imagem 1
            "https://via.placeholder.com/150/900C3F"  // Imagem 2
        ],
    },
    {
        title: "Produto 7",
        description: "Descrição breve do produto 7.",
        images: [
            "https://via.placeholder.com/150/FF5733", // Imagem 1
            "https://via.placeholder.com/150/C70039"  // Imagem 2
        ],
    },
    {
        title: "Produto 8",
        description: "Descrição breve do produto 8.",
        images: [
            "https://via.placeholder.com/150/FFC300", // Imagem 1
            "https://via.placeholder.com/150/DAF7A6"  // Imagem 2
        ],
    },
    {
        title: "Produto 9",
        description: "Descrição breve do produto 9.",
        images: [
            "https://via.placeholder.com/150/581845", // Imagem 1
            "https://via.placeholder.com/150/900C3F", // Imagem 2
            "https://via.placeholder.com/150/FFC300"  // Imagem 3 
        ],
    }
];

export function initializeProducts() {
    const productElements = document.querySelectorAll('.product');

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

export function changeImage(direction, productIndex) {
    const productImage = document.querySelectorAll('.product-image')[productIndex];
    const currentImageSrc = productImage.src;

    const images = products[productIndex].images;
    let newIndex = images.indexOf(currentImageSrc) + direction;

    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;

    // Troca a imagem
    setTimeout(() => {
        productImage.src = images[newIndex];
    }, 0); // 0ms de atraso
}