import { products } from "../model/modelsProducts.js";

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