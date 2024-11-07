import { specs } from "./../../../model/specs.js"

export function criarSpecs() {
    const allSpecs = document.querySelectorAll('.especifications')
    let i = 0
    allSpecs.forEach(spec => {
        let p = document.createElement('p')
        p.textContent = `${specs[i]}`
        spec.appendChild(p)
        i++
    })
}