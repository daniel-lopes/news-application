import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './src/reducers';
import devToolsEnhancer from 'remote-redux-devtools';
import Form from './src/components/Form';
import NewsList from './src/pages/NewsList';
import EditNews from './src/pages/EditNews';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Form">
          <Stack.Screen name="form" component={Form} />
          <Stack.Screen name="news" component={NewsList} />
          <Stack.Screen name="edit" component={EditNews} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
