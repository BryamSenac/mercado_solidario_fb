import { criarCartao } from "./initialize_products.js";
import { destaques } from "../../../../model/destaques.js";

export function criarDestaques() {
    const container_destaques = document.getElementById("destaques")
    for (let i=0; i<destaques.length; i++) {
        let product = document.createElement('div')
        product.classList.add('product', 'destaque')
        product.setAttribute('data-index', `${i}`);
        container_destaques.appendChild(product)
    }

    const destaqueElements = document.querySelectorAll('.destaque')

    destaqueElements.forEach((destaqueElement, index) => {
        criarCartao(destaqueElement, index, destaques);
    })
}