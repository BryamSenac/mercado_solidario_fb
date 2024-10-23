import { trocarBanner } from "../../controller/trocarBanner.js"
import { bannersDB } from "../../model/modelsBanner.js"

const container_banner = document.querySelector('#banners')
container_banner.style.width = `${bannersDB.length}00vw`

export function criarBanner() {
    for (let i=0; i<bannersDB.length; i++) {
        let banner = document.createElement('div')
        banner.className = "banner"
        
        let img = document.createElement('img')
        img.src = bannersDB[i].images
        banner.appendChild(img)
        container_banner.appendChild(banner)
    }
}