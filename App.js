import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider'
import Clipboard from 'expo-clipboard';

export default function App() {

  let charset = 'abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUVXYWZ1234567890@#$%&'
  const [password, setPassword] = useState('')
  const [size, setSize] = useState(5)


  function generatePassword() {
    let pass = ''
    for (let i = 0, n = charset.length; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n))
    }
    setPassword(pass)
  }

  function copyToTranferArea() {
    Clipboard.setString(password)
    alert('Senha copiada!')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.tiltleH1}>Gerador de senhas fortes</Text>
      <Image
        source={require("./src/assets/lock.png")}
        style={styles.logo} />
      <Text style={styles.title}>{size} Caracteres</Text>
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.sliderButton}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor='#f39c12'
          maximumTrackTintColor="#000000"
          onValueChange={(value) => setSize(value.toFixed(0))}
          value={size}
        />
      </View>
      <TouchableOpacity
        onPress={generatePassword}
        style={styles.buttonContainer}>
        <Text style={styles.buttonTitle}>Gerar Senha</Text>
      </TouchableOpacity>
      {password !== '' && (
        <View style={styles.resultContainer}>
          <Text
            onPress={copyToTranferArea} 
            style={styles.resultPassword}  >{password}</Text>
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tiltleH1: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  logo: {
    margin: 10,
    borderRadius: 150,
  },
  title: {
    fontSize: 26,
  },
  sliderContainer: {
    marginTop: 10,
    marginBottom: 10,
    padding: 12,
    width: '80%',
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },
  buttonContainer: {
    backgroundColor: '#ffa200',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonTitle: {
    fontSize: 22,
    color: '#ffffff',
    fontWeight: '700'
  },
  resultContainer: {
    width: '80%',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultPassword: {
    padding: 10,
    fontSize: 18,
  },

});
