import { imgs } from "./../../../model/imgs.js"

export function criarImg() {
    const images = document.getElementById('images')
    const mainImg = document.querySelector('#main_img img')
    mainImg.src = imgs[0]
    for (let i=0; i<=5; i++) {
        let divImg = document.createElement('div')
        divImg.className = 'img_secondary'
        let img = document.createElement('img')
        img.addEventListener('click', () => {
            mainImg.src = imgs[i]
        })
        img.src = imgs[i]

        divImg.appendChild(img)
        images.appendChild(divImg)
    }
}