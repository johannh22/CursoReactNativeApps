import React, { useState } from 'react'
import { Text } from 'react-native'
import estilo from '../estilo'
import Filho from './Filho'

export default props => {
    const [texto, setTexto] = useState('')
    const [num, setNum] = useState(0)

    function exibirValor(numero, texto) {
        setTexto(texto)
        setNum(numero)
    }

    return (
        <>
            <Text style={estilo.txtG}>
                {texto}{num}
                </Text>
            <Filho
                min={1}
                max={60}
                funcao={exibirValor}
            />
        </>
    )
}