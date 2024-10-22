export function criarCard() {
    const containerCards = document.getElementById('similar_products')
    for (let i=0; i<4; i++) {
        let card = document.createElement('div')
        card.className = 'similiar_product'

        containerCards.appendChild(card)
    }
}