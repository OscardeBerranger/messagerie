import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Fetch} from "./component/Fetch";
import {useState} from "react";
import axios from "axios";
export default function App() {

  const [message, setMessage] = useState("not working")

  axios.get("http://localhost:8000/home")
      .then(res=> setMessage(res.data))

  return (
    <View style={styles.container}>
      <Fetch />
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
});
