import { products } from "./../../../model/products.js";
import { criarCartao } from "../home_page/initialize_products.js";

export function criarCard() {
    const containerCards = document.getElementById('similar_products')
    for (let i=0; i < 4; i++) {
        let card = document.createElement('div')
        card.classList.add('product', 'similiar_product')
        containerCards.appendChild(card)
    }

    const cards = document.querySelectorAll('.similiar_product')
    console.log(cards)
    cards.forEach((card, index) => {
        criarCartao(card, index, products);
    })
}