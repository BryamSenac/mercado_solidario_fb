import { trocarBanner } from "../../controller/trocarBanner.js";
import { initializeProducts  } from "./initializeProducts.js";
import { criarDestaques } from "./criarDestaques.js";
import { criarBanner } from "./criarBanner.js";

window.trocarBanner = trocarBanner;

document.addEventListener('DOMContentLoaded', () => {
    criarDestaques();
    criarBanner();
    initializeProducts();
});