import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>First text</Text>
      <Text style={ {margin:16, borderWidth: 2, borderColor: '#85ff73', padding: 16, borderRadius: 8, backgroundColor: '#4cff30', fontWeight: "600"}}>Second text</Text>
      <StatusBar style="auto" />
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
  textStyle: {margin:16, borderWidth: 2, borderColor: '#85ff73', padding: 16, borderRadius: 8, fontWeight: "600"}
});
