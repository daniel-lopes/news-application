import React from 'react';
import NewsList from '../components/NewsList';
// import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

function ManageNews({navigation}){
	return (
		<NewsList 
			navigation={navigation}
			edit={true}
			active={'manage'}/>
	)
}

export default ManageNews;