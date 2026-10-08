import { useState } from "react";
import {
  Button,
  Text,
  TextInput,
  View,
} from "react-native";

import {
  checkBackend,
  requestDownload,
} from "../services/api";

export default function HomeScreen() {
  const [status, setStatus] = useState("Sin comprobar");
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");

  async function testConnection() {
    try {
      const data = await checkBackend();

      setStatus(`Servidor: ${data.status}`);
    } catch (error) {
      console.error(error);
      setStatus("No se pudo conectar");
    }
  }

  async function testDownload() {
    try {
      setResult("Enviando...");

      const data = await requestDownload(url);

      setResult(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(error);

      setResult(
        error instanceof Error
          ? error.message
          : "Error desconocido"
      );
    }
  }

  return (
    <View
      style={{
        flex: 1,
        padding: 24,
        justifyContent: "center",
        gap: 16,
        backgroundColor:"white"
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Music Downloader
      </Text>

      <Button
        title="Comprobar servidor"
        onPress={testConnection}
      />

      <Text>{status}</Text>

      <TextInput
        value={url}
        onChangeText={setUrl}
        placeholder="Pega una URL"
        autoCapitalize="none"
        style={{
          borderWidth: 1,
          borderRadius: 8,
          padding: 12,
        }}
      />

      <Button
        title="Enviar solicitud"
        onPress={testDownload}
      />

      <Text>{result}</Text>
    </View>
  );
}