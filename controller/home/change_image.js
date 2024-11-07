import { products } from "./../../model/products.js";

const banner = document.getElementById("banners");

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
    }, 20); // 20ms de atraso
}

export function trocarBanner(numeroBanner){
    banner.style.left =`-${numeroBanner}00vw`
}