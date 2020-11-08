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

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#030842" barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="news"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#151a4e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              // fontWeight: 'bold',
            },
        }}>
          <Stack.Screen
            name="news"
            component={News}
            options={{
              title: 'Code7 News',
              // headerTintColor: 'white',
              // headerStyle: {
              //     backgroundColor: '#6ca2f7',
              //     borderBottomWidth: 1,
              //     borderBottomColor: '#C5C5C5'
              // },
              // headerTitleStyle: {
              //     color: 'white',
              //     fontSize: 30
              // },
            }}/>
          <Stack.Screen
            name="form"
            component={RegisterNews} 
            options={{
              title: 'Cadastro de Notícias'
            }}/>
          <Stack.Screen name="edit" component={EditNews} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}