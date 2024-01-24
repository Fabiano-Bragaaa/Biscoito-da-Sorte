import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

function App() {
  const [textoFrase, setTextoFrase] = useState('');
  const [img, setImg] = useState(require('./src/biscoito.png'));

  let frases = [
    'Siga os bons e aprenda com eles',
    'O bom-senso vale mais do que muito conhecimento',
    'O riso é a menor distancia entre duas pessoas',
    'deixe de lado  as preocupações e seja feliz',
    'Realize o obvio, pense no improvavel e conquiste o impossivel',
    'Acredite em milagres, mas não dependa deles',
    'A maior barreira para o sucesso é o medo do fracasso',
  ];

  function sorteador() {
    let fraseAleatoria = Math.floor(Math.random() * frases.length);
    setTextoFrase(frases[fraseAleatoria]);
    setImg(require('./src/biscoitoAberto.png'));
  }

  function reiniciar() {
    setTextoFrase('');
    setImg(require('./src/biscoito.png'));
  }

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={img} />
      <Text style={styles.textoFrase}>{textoFrase}</Text>
      <TouchableOpacity style={styles.btn} onPress={sorteador}>
        <View style={styles.btnView}>
          <Text style={styles.bntText}>Abrir Biscoito</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btn, {marginTop: 15, borderColor: '#121212'}]}
        onPress={reiniciar}>
        <View style={styles.btnView}>
          <Text style={[styles.bntText, {color: '#121212'}]}>
            Reiniciar Biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 240,
    height: 240,
  },
  textoFrase: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#dd7b22',
    textAlign: 'center',
    margin: 30,
  },
  btn: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 20,
  },
  btnView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bntText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
});

export default App;
