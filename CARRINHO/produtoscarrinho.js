const productImages = [
    [
        "https://via.placeholder.com/150/FF5733", // Produto 1, imagem 1
        "https://via.placeholder.com/150/C70039"  // Produto 1, imagem 2
    ],
    [
        "https://via.placeholder.com/150/FFC300", // Produto 2, imagem 1
        "https://via.placeholder.com/150/DAF7A6"  // Produto 2, imagem 2
    ],
    [
        "https://via.placeholder.com/150/581845", // Produto 3, imagem 1
        "https://via.placeholder.com/150/900C3F"  // Produto 3, imagem 2
    ],
    [
        "https://via.placeholder.com/150/FF5733", // Produto 4, imagem 1
        "https://via.placeholder.com/150/C70039"  // Produto 4, imagem 2
    ],
    [
        "https://via.placeholder.com/150/FFC300", // Produto 5, imagem 1
        "https://via.placeholder.com/150/DAF7A6"  // Produto 5, imagem 2
    ],
    [
        "https://via.placeholder.com/150/581845", // Produto 6, imagem 1
        "https://via.placeholder.com/150/900C3F"  // Produto 6, imagem 2
    ],
    [
        "https://via.placeholder.com/150/FF5733", // Produto 7, imagem 1
        "https://via.placeholder.com/150/C70039"  // Produto 7, imagem 2
    ],
    [
        "https://via.placeholder.com/150/FFC300", // Produto 8, imagem 1
        "https://via.placeholder.com/150/DAF7A6"  // Produto 8, imagem 2
    ],
    [
        "https://via.placeholder.com/150/581845", // Produto 9, imagem 1
        "https://via.placeholder.com/150/900C3F"  // Produto 9, imagem 2
    ]
];

function initializeProducts() {
    const productElements = document.querySelectorAll('.product');

    productElements.forEach((productElement, index) => {
        const productImage = productImages[index][0]; // Imagem inicial

        productElement.innerHTML = `
            <img src="${productImage}" alt="Produto ${index + 1}" class="product-image">
            <h2 class="product-title">Produto ${index + 1}</h2>
            <p class="product-description">Descrição breve do produto ${index + 1}.</p>
            <div class="nav-buttons">
                <button class="prev" onclick="changeImage(-1, ${index})">&#10094;</button>
                <button class="next" onclick="changeImage(1, ${index})">&#10095;</button>
            </div>
        `;
    });
}

function changeImage(direction, productIndex) {
    const productImage = document.querySelectorAll('.product-image')[productIndex];
    const currentImageSrc = productImage.src;

    const images = productImages[productIndex];
    let newIndex = images.indexOf(currentImageSrc) + direction;

    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;

    productImage.src = images[newIndex];
}

// Inicializa os produtos ao carregar a página
initializeProducts();
