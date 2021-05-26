// "this" não varia, vai ser o do contexto em que a função for definida
// quando é definido usando arrow
// const f3 = () => console.log(this == window)
// função arrow é mais enxuta na sintaxe
// "this" passa a ser associado ao local em que a palavra foi escrita,
// contexto léxico
const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OOP
// falar está em outro contexto, gera um problema no "this"

// "Amarra" falarDePessoa a esse contexto
// "Amarra" um determinado objeto para ele ser o dono da execução
// daquele método sempre que for chamado
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()