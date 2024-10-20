import index from "@/app-example/(tabs)";
import { useState } from "react";
import { LogBox, Text, View } from "react-native";
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, FlatList, Modal, Alert, Pressable } from 'react-native';


export default function Index() {
  const [input, setInput] = useState('')
  const [todo, setTodo] = useState<string[]>([])
  const [modalVisible, setModalVisible] = useState(false);
  const [updateInput, setUpdateInput] = useState('')
  const [index, setIndex] = useState(0)

  const addTodo = () => {
    // console.log(input);
    todo.push(input)
    setTodo([...todo])
    setInput('');
  }

  const deleteTodo = (index: number) => {
    console.log('delete ===>', index);
    todo.splice(index, 1)
    setTodo([...todo])
  }

  const editTodo = (index:number) =>{
    console.log('edit todo ===>' , index ,);
    todo.splice(index , 1 , updateInput)
    setTodo([...todo])
  }

  return (
    <SafeAreaView>
      <View
        style={{
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Todo App</Text>
        <TextInput
          style={styles.input}
          onChangeText={setInput}
          value={input}
        />
        <TouchableOpacity style={styles.button} onPress={addTodo}>
          <Text>Press Here</Text>
        </TouchableOpacity>
      </View>
      {
        todo.length > 0 ? <FlatList
          data={todo}
          renderItem={({ item, index }) => {
            return <View style={styles.item}>
              <Text style={styles.title}>{item}</Text>
              <TouchableOpacity style={styles.ListBtn} onPress={() => deleteTodo(index)}>
                <Text>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.ListBtn} onPress={() => {
                setIndex(index)
                setModalVisible(true)
              }}>
                <Text>edit</Text>
              </TouchableOpacity>
            </View>
          }}
          keyExtractor={(item, index) => index.toString()}
        /> : <Text style={{ textAlign: "center", margin: 20, fontSize: 20, fontWeight: '500', }}>No Todo Found</Text>}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                <TextInput
                  style={styles.input}
                  onChangeText={setUpdateInput}
                  value={updateInput}
                />
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => editTodo(index)}>
                <Text style={styles.textStyle} >Update Todo</Text>
              </Pressable>
              <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}












const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10,
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 4,
    width: 100,
    margin: 'auto',
    marginTop: 10,
  },
  item: {
    backgroundColor: '#e21b70',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 27,
    color: 'white',
  },
  ListBtn: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalBtn: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

});