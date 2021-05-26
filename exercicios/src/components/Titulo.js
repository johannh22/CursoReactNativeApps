import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Estilo from './estilo'

export default props => {

    return (
        //<React.Fragment></React.Fragment>
        <SafeAreaView>
            <Text style={Estilo.txtG}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </SafeAreaView>
    )
}