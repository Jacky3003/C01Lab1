import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddTask from './components/AddTask';
import ToDoList from './components/ToDoList';

export default function App() {
  return (
    <View style={styles.container}>
      <ToDoList ListOfTitles={["a", "b", "c"]}/>
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
});