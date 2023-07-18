import React from 'react';
import Main from './constants/Main';
import Fullinfo from './constants/Fullinfo';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

export default function Navigate() {
return <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
            name='Main'
            component={Main}
            options={
                {
                    title: 'Главная',
                    headerStyle: {backgroundColor: '#eb5d3d', height: 80},
                    headerTitleStyle: {fontWeight: '400'}            
                }}
            />
        <Stack.Screen
            name='Fullinfo'
            component={Fullinfo}
            options={{title: 'Контакты'}}
            />
    </Stack.Navigator>
</NavigationContainer>;
}