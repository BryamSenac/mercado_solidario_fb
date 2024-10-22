const specsDB = [
    'Informações 1',
    'Informações 2',
    'Informações 3'
] 

export async function criarSpecs() {
    const allSpecs = await document.querySelectorAll('.especifications')
    let i = 0
    allSpecs.forEach(spec => {
        let p = document.createElement('p')
        p.textContent = `${specsDB[i]}`
        spec.appendChild(p)
        i++
    })
}