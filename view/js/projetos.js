import { trocarBanner } from "../../controller/banner.js";
import { initializeProducts  } from "../../controller/carregarCards.js";

window.trocarBanner = trocarBanner;
window.initializeProducts = initializeProducts;

document.addEventListener('DOMContentLoaded', () => {
    initializeProducts();
});