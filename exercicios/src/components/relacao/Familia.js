import React from 'react'
import Membro from './Membro'
import { Text } from 'react-native'
import Estilo from '../estilo'

export default props => {
    return (
        <>
            {/* <Text style={Estilo.txtG}>Membros da Família:</Text> */}
            {props.children}
        </>
    )
}