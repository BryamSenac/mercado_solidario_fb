import { trocarBanner } from "../../controller/banner.js";
import { initializeProducts  } from "./initializeProducts.js";

window.trocarBanner = trocarBanner;

document.addEventListener('DOMContentLoaded', () => {
    initializeProducts();
});