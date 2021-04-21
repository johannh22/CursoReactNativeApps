const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

console.log('\n')

aprovados.forEach(nome => console.log(nome))

console.log('\n')

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

