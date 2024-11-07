import { criarCard } from ".//criar_card.js";
import { criarImg } from "./criar_img.js"
import { criarSpecs } from "./criar_specs.js";

document.addEventListener('DOMContentLoaded', () => {
    criarImg();
    criarCard();
    criarSpecs();
})