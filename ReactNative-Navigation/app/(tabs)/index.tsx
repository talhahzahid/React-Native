// 

import { View, Text, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

// Define the User type
interface User {
  id: number;
  name: string;
  email: string; // Add other fields as necessary
  // Include any other properties you need
}

const Index: React.FC = () => {
  const [data, setData] = useState<User[]>([]); // State is an array of User

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data: User[]) => { // Specify the type of data being fetched
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}>Hello</Text>
      </View>
      <View>
        {data.length > 0 ? (
          data.map((item) => (
            <Text key={item.id} style={styles.itemText}>
              {item.name}
            </Text>
          ))
        ) : (
          <Text style={styles.itemText}>Loading...</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 24,
  },
  itemText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Index;
