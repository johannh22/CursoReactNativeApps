import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Estilo from '../estilo'

import produtos from './produtos'

export default props => {
    function obterLista() {
        return (
            produtos.map(p => {
                return (
                    <Text key={p.id} style={style.txtM}>
                        {p.id}) {p.nome} tem preço R$ {p.preco}
                    </Text>
                )
            })
        )
    }
    return (
        <>
            <Text style={Estilo.txtG}>
                Lista de Produtos
            </Text>
            {obterLista()}
        </>
    )
}

const style = StyleSheet.create({
    txtM: {
        fontSize: 18,
        textAlign: "center"
    }
})