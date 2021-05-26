// Usando destructuring em funções
// Tirar do objeto os atributos min e max
function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))
// Os abaixos são válidos, pois colocamos valores padrão
console.log(rand({ min: 955 }))
console.log(rand({}))
// Esse daria ruim, não tem o que desestruturar
//console.log(rand())