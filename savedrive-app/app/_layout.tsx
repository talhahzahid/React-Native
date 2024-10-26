import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Materialicons from '@expo/vector-icons/MaterialIcons';
import FontAwesome1 from '@expo/vector-icons/FontAwesome';


// Import your global CSS file
import "../global.css"; 

const _layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Savedrive',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                    headerStyle: {
                        backgroundColor: '#114B5F',
                      },
                      headerTintColor: '#FFFFFF',
                    
                }}
            />
            <Tabs.Screen
                name="create"
                options={{
                    title: 'Location',
                    tabBarIcon: ({ color }) => <FontAwesome name="location-arrow" size={24} color="black" />,
                    headerStyle: {
                        backgroundColor: '#114B5F',
                      },
                      headerTintColor: '#FFFFFF',
                    
                    
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => <FontAwesome5 name="user-alt" size={24} color={color} />,
                    headerStyle: {
                        backgroundColor: '#114B5F',
                      },
                      headerTintColor: '#FFFFFF',
                }}
            />
            <Tabs.Screen
                name='explore'
                options={{
                    title: 'Explore',
                    tabBarIcon: ({ color }) => <MaterialIcons name="explore" size={24} color={color} />,
                    headerStyle: {
                        backgroundColor: '#114B5F',
                      },
                      headerTintColor: '#FFFFFF',
                }}
            />
        </Tabs>
    )
}

export default _layout
// export default Slot;