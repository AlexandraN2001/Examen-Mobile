import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

export default function IA() {
  const [pregunta, setPregunta] = useState(''); // Lo que escribe el usuario
  const [respuesta, setRespuesta] = useState(''); // Respuesta del backend
  const [tokens, setTokens] = useState<number | null>(null); // Tokens usados
  const [loading, setLoading] = useState(false); // Loading
  const BACKEND_URL = 'http://192.168.1.100:3000/pregunta';

  const handleEnviar = async () => {
    if (!pregunta.trim()) {
      Alert.alert('Error', 'Debes escribir una pregunta');
      return;
    }

    setLoading(true);
    setRespuesta('');
    setTokens(null);

    try {
      const res = await axios.post(BACKEND_URL, { pregunta }); 
      // En Android emulator, 10.0.2.2 apunta a localhost del PC
      // Si es iOS simulator usa 'http://localhost:3000/pregunta'

      const { respuesta, tokens } = res.data;
      setRespuesta(respuesta);
      setTokens(tokens);
    } catch (error: any) {
      console.error(error);
      Alert.alert('Error', 'No se pudo consultar al agente');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="Escribe tu pregunta sobre React Native"
        value={pregunta}
        onChangeText={text => setPregunta(text)}
      />
      <Button title={loading ? 'Cargando...' : 'Enviar'} onPress={handleEnviar} disabled={loading} />

      {respuesta !== '' && (
        <View style={{ marginTop: 20 }}>
          <Text style={styles.respuesta}>Respuesta: {respuesta}</Text>
          <Text style={styles.tokens}>Tokens usados: {tokens}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  input: {
    borderWidth: 1,
    borderColor: '#9d2991',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  respuesta: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  tokens: {
    marginTop: 5,
    color: '#555',
  },
});
