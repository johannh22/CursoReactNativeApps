import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import estilo from './components/estilo'

import Mega from './components/mega/Mega'
// import FlexboxV4 from './components/layout/FlexboxV4'
// import FlexboxV3 from './components/layout/FlexboxV3'
// import FlexboxV2 from './components/layout/FlexboxV2'
// import FlexboxV1 from './components/layout/FlexboxV1'
// import DigiteSeuNome from './components/DigiteSeuNome'
//import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
//import ListaProdutos from './components/produtos/ListaProdutos'
//import UsuarioLogado from './components/UsuarioLogado'
// import Familia from './components/relacao/Familia'
// import Membro from './components/relacao/Membro'
//import ParImpar from './components/ParImpar'
//import Diferenciar from './components/Diferenciar'
//import ContadorV2 from './components/contador/ContadorV2'
//import Pai from './components/indireta/Pai'
//import Pai from './components/direta/Pai'
//import Contador from './components/Contador'
//import Botao from './components/Botao'
//import Titulo from './components/Titulo'
//import CompPadrao, { Comp1, Comp2 } from './components/Multi';
//import Primeiro from './components/Primeiro';
//import MinMax from './components/MinMax';
//import Aleatorio from './components/Aleatorio'

export default () => (
    <SafeAreaView style={style.App}>
        <Mega qtdeNumeros={12} />
        {/* 
        <FlexboxV4 />
        <FlexboxV3 />
        <FlexboxV2 />
        <FlexboxV1 />
        <DigiteSeuNome />
        <ListaProdutosV2 />
        <ListaProdutos />
        <UsuarioLogado usuario={{ nome: 'Gui', email: 'gui@gui.com' }}/>
        <UsuarioLogado usuario={{ nome: 'Zeca' }}/>
        <UsuarioLogado usuario={{ email: 'carlos@empresa.com' }}/>
        <UsuarioLogado usuario={null} />
        <UsuarioLogado usuario={{}} />
        <Familia>
            <Membro nome="Bia" sobrenome="Campos" />
            <Membro nome="Natanael" sobrenome="Furtunato" />
            <Membro nome="Filipe" sobrenome="Bittencourt" />
        </Familia>
        <Familia>
            <Membro nome="Anna" sobrenome="Moura" />
            <Membro nome="Johann" sobrenome="Homonnai" />
        </Familia>
        <ParImpar num={3}/>
        <Diferenciar />
        <ContadorV2 />
        <Pai />
        <Pai />
        <Contador inicial={100} passo={22} />
        <Contador />
        <Botao />
        <Titulo principal = "Cadastro Produto"
                secundario="Tela de Cadastro do Produto" />
        <Aleatorio min={1} max={1000} />
        <Aleatorio min={1} max={1000} />
        <Aleatorio min={1} max={1000} />
        <Aleatorio min={1} max={1000} />
        <Aleatorio min={1} max={1000} />
        <MinMax min={3} max={20} />
        <MinMax min={1} max={94} />
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
    </SafeAreaView>
);

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    }
});