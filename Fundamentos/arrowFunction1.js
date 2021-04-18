let dobro1 = function (a) {
    return 2 * a
}

dobro2 = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

let ola1 = function () {
    return 'Olá'
}

ola2 = () => 'Olá'
ola3 = _ => 'Olá'
console.log(ola2())