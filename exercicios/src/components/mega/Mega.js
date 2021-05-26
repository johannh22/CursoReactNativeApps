// Componente baseado em classe
import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import Estilo from '../estilo'

import MegaNumero from './MegaNumero'

export default class Mega extends Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }

    // pior opção, mas faz com que o this sempre aponte para este objeto
    // constructor(props) {
    //     super(props)
    //     this.alterarQtdeNumero = this.alterarQtdeNumero.bind(this)
    // }

    // Na arrow function, o this está associado ao local em que a função
    // foi definida, e não a quem invocou
    alterarQtdeNumero = (qtde) => {
        this.setState({ qtdeNumeros: +qtde })
    }

    gerarNumeroNaoContido = nums => {
        // Gera um valor entre 1 e 60 de forma "aleatória"
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    // Versão paradigma funcional
    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
            .sort((a, b) => a - b)
        this.setState({ numeros })
    }
    
    // Versão procedural
    // gerarNumeros = () => {
    //     const { qtdeNumeros } = this.state
    //     const numeros = [
    //
    //     for(let i = 0; i < qtdeNumeros; i++) {
    //         const n = this.gerarNumeroNaoContido(numeros)
    //         numeros.push(n)
    //     }
    //
    //     numeros.sort((a, b) => a - b)
    // }
    
    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero key={num} num={num} />
        })
    }

    render() {
        return (
            <>
                <Text style={Estilo.txtG}>
                    Gerador de Mega-Sena
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{ borderBottomWidth: 1}}
                    placeholder="Qtde de Números"
                    value={`${this.state.qtdeNumeros}`}
                    onChangeText={this.alterarQtdeNumero}
                />
                <Button
                    title='Gerar'
                    onPress={this.gerarNumeros}
                />
                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }

}