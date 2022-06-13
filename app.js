const fact = document.querySelector('#showFact')
const button = document.querySelector('#getFact')

const getCatFact = async () => {
    const config = { headers: { Accept: 'application/json' } }
    const res = await axios.get("https://catfact.ninja/fact", config)
    fact.innerHTML = res.data.fact
}

button.addEventListener('click', getCatFact)