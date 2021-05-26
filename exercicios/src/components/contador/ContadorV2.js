import React, { useState } from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'

import ContadorBotoes from './ContadorBotoes'
import ContadorDisplay from './ContadorDisplay'

export default props => {
    // num é um valor com estado e setNum é a função que o atualiza
    const [num, setNum] = useState(0)

    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)

    return (
        <>
            <Text style={Estilo.txtG}>
                Contador
            </Text>
            {/* Comunicação direta: dado */}
            <ContadorDisplay num={num} /> 
            {/* Comunicação indireta: funções e eventos */}
            <ContadorBotoes inc={inc} dec={dec} />
        </>
    )
}