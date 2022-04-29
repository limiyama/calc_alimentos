
import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default function Tabuada(props){
    let texto = [];
    let refri = 600;    
    let agua = 200;
    let bolo = 100;
    let doce = 3;
    let salgadinho = 10;

    texto.push(
            <Text style = {styles.texto}>
                Refrigerante: {(refri * parseFloat(props.num))/1000} L {'\n'}
                Água: {(agua * parseFloat(props.num))/1000} L {'\n'}
                Bolo: {(bolo * parseFloat(props.num))/1000} Kg {'\n'}
                Doces: {doce * parseFloat(props.num)} unidades {'\n'}
                Salgadinhos: {salgadinho * parseFloat(props.num)} unidades {'\n'}
            </Text>
        );
    
    return(
        <>
            <View style = {styles.container}>
                {texto}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        fontFamily: 'Helvetica',
        width: '30%',
        padding: 18,
        borderRadius: 15,  
        backgroundColor: '#E9D2FC',
    },
    texto: {
        fontSize: 26,
    }
});