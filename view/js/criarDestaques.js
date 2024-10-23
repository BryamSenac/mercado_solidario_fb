import { criarCartao } from "./initializeProducts.js";
import { destaques } from "../../model/modelsDestaques.js";

export async function criarDestaques() {
    const container_destaques = await document.getElementById("destaques")
    for (let i=0; i<destaques.length; i++) {
        let product = document.createElement('div')
        product.classList.add('product', 'destaque')
        product.setAttribute('data-index', `${i}`);
        container_destaques.appendChild(product)
    }

    const destaqueElements = await document.querySelectorAll('.destaque')

    destaqueElements.forEach((destaqueElement, index) => {
        criarCartao(destaqueElement, index, destaques);
    })
}