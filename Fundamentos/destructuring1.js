// novo recurso de ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa

console.log( nome , idade )

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

/*
O abaixo dá erro! Você precisa que no máximo o último (somente) esteja indefinido. Como 'conta' está indefinido, dá erro
const { conta: { ag, num } } = pessoa
console.log(ag, num)
*/