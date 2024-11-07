import { banners } from "../../../../model/banners.js"

const container_banner = document.querySelector('#banners')
container_banner.style.width = `${banners.length}00vw`

export function criarBanner() {
    for (let i=0; i<banners.length; i++) {
        let banner = document.createElement('div')
        banner.className = "banner"
        
        let img = document.createElement('img')
        img.src = banners[i].images
        banner.appendChild(img)
        container_banner.appendChild(banner)
    }
}