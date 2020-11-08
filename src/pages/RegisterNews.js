import React from 'react';
import { View } from 'react-native';
import Form from '../components/Form';

function RegisterNews({navigation}){
	return (
		<Form
			navigation={navigation}
			nameButton="Publicar"
		/>
	)
}

export default RegisterNews;