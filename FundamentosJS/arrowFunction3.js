let comparaComThis = function (param) {
    console.log(this == param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this == param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
// module.exports é o contexto em que a função foi escrita!

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)