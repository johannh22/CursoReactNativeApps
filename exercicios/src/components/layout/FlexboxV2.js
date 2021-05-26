import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'


// Quadrados são os flex items. A View é o flex container
export default props => {
    return (
        <View style={style.FlexV2}>
            <Quadrado cor='#ff801a' />
            <Quadrado cor='#50d1f6' />
            <Quadrado cor='#dd22c1' />
            <Quadrado cor='#8312ed' />
            <Quadrado cor='#36c9a7' />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        flexGrow: 1,
        width: '100%',
        justifyContent: 'space-evenly', // eixo principal (coluna)
        alignItems: 'center', // eixo cruzado (linha)
        backgroundColor: '#000'
    }
})