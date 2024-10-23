export const products = [
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

export async function changeImage(direction, productIndex) {
    const productImage = await document.querySelectorAll('.product-image')[productIndex];
    const currentImageSrc = await productImage.src;

    const images = products[productIndex].images;
    let newIndex = images.indexOf(currentImageSrc) + direction;

    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;

    // Troca a imagem
    setTimeout(() => {
        productImage.src = images[newIndex];
    }, 20); // 20ms de atraso
}