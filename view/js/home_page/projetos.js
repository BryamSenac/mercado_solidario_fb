import { trocarBanner } from "./../../../controller/home/change_image.js";
import { initializeProducts  } from "./initialize_products.js";
import { criarDestaques } from "./criar_destaques.js";
import { criarBanner } from "./criar_banner.js";

window.trocarBanner = trocarBanner;

document.addEventListener('DOMContentLoaded', () => {
    criarDestaques();
    criarBanner();
    initializeProducts();
});