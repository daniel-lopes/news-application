import React from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity  } from 'react-native';
import NewsList from '../components/NewsList';

function News({navigation}){
	return (
		<NewsList navigation={navigation}/>
	)
}

export default News;