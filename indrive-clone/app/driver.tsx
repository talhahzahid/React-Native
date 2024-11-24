import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const Driver = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [car, setCar] = useState("");

  const handleSubmit = () => {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Car:", car);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Driver Form</Text>

      <Text>Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />

      <Text>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Text>Enter your car (e.g., Suzuki Alto, Cultus, Mira, Corolla):</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter car name"
        value={car}
        onChangeText={setCar}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
  },
});

export default Driver;
