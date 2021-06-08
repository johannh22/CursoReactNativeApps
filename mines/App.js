import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import params from './src/params';
import Field from './src/components/Field';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines!!!</Text>
        <Text style={styles.welcome}>Tamanho da grade:
           {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
        <Field />
        <Field open nearMines={1} />
        <Field open nearMines={2} />
        <Field open nearMines={3} />
        <Field open nearMines={6} />
        <Field mined />
        <Field mined open />
        <Field mined open exploded />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
})
