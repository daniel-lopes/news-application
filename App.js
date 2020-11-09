import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './src/reducers';
import devToolsEnhancer from 'remote-redux-devtools';
import RegisterNews from './src/pages/RegisterNews';
import News from './src/pages/News';
import EditNews from './src/pages/EditNews';
import ManageNews from './src/pages/ManageNews';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#030842" barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="News"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#151a4e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              // fontWeight: 'bold',
            }
        }}>
          <Stack.Screen
            name="News"
            component={News}
            options={{
              title: 'Code7 News'
            }}/>
          <Stack.Screen
            name="RegisterNews"
            component={RegisterNews} 
            options={{
              title: 'Cadastro de Notícias'
            }}/>
          <Stack.Screen
            name="EditNews"
            component={EditNews} 
            options={{
              title: 'Editar Notícias'
            }}/>
          <Stack.Screen
            name="ManageNews"
            component={ManageNews} 
            options={{
              title: 'Gerenciar Notícias'
            }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}