import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Componente from './components/Componente';

export default function App() {
  const [num, setNum]= useState(0);
  return (
    <View style={styles.container}>

        <View style={styles.row}>
          <Text style={styles.texto}>Número de convidados</Text>
          <TextInput style={styles.input} value={num} onChangeText={(value) => setNum(value)} />  
        </View>
        <Componente num={num}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row:{
    width: '100%'
  },
  input:{
    textAlign: 'center',
    width: '30%',
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 30,
    marginLeft: '35%',
    padding: 15,
    fontSize: 20,
    borderRadius: 6,
  },
  texto: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});