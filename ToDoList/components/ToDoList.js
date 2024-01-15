import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {v4 as uuidv4} from 'uuid';
import AddTask from './AddTask';

const ToDoList = ({ListOfTitles}) =>{
    const [toDos, setToDos] = useState(ListOfTitles.map((value) => ({ id: uuidv4(), title: value })));

    const addToDo = (newTitle) =>{
      const newToDo = { id: uuidv4(), title: newTitle};
      setToDos((prevToDos) => [...prevToDos, newToDo]);
    };
    
    const removeToDo = (id) =>{
      var newlst = toDos.filter((toDoToDel) => toDoToDel.id != id)
      setToDos(newlst);
    };

    return (
        <View style={styles.todoListContainer}>
            {toDos.map((ToDoName) => (
                <View style={styles.todoItem} key={ToDoName.id}>
                  <Text>{ToDoName.title}</Text>
                  <Button title="Delete" onPress={() => removeToDo(ToDoName.id)}/>
                </View>
            ))}
            <AddTask onAddTask={addToDo}/>
        </View>
    );
};

ToDoList.defaultProps = {
  initialValues: [],
};

const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});

export default ToDoList;
