import React from 'react'
import { Text, StyleSheet, FlatList } from 'react-native'
import Estilo from '../estilo'

import produtos from './produtos'

export default props => {
    const produtoRender = ({item: p}) => {
        return <Text style={style.txtM}>{p.id}) {p.nome} - R$ {p.preco}</Text>
    }
    return (
        <>
            <Text style={Estilo.txtG}>
                Lista de Produtos V2
            </Text>
            <FlatList 
                data={produtos}
                keyExtractor={i => i.id}
                renderItem={produtoRender}
            />
        </>
    )
}

const style = StyleSheet.create({
    txtM: {
        fontSize: 18,
        textAlign: "center"
    }
})