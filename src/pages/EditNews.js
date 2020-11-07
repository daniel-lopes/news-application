import React from 'react';
import { StyleSheet, View } from 'react-native';
import Form from '../components/Form';

function EditNews(props){
	return (
		<View style={styles.container}>
			<Form 
				id={props.route.params.id}
				nameButton={"Salvar Alterações"}/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
	}
});

export default EditNews;