import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	TextInput,
	Button,
	Alert
} from 'react-native';

function form(){

	const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [comment, setComment] = useState('');
  const [trySubmit, setTrySubmit] = useState(false);

  const saveData = () => {
  	setTrySubmit(true);
  	if(validatesFormSubmit()){
  		console.log('Dados Ok!');
  	}
  	
  }

  const validatesForm = field => {
  	if(!field && trySubmit){
  		return styles.validatesForm;
  	}
  }

  const validatesFormSubmit = () => {
  	if(!title || !author || !comment){
  		Alert.alert('Por favor, preencha os campos obrigatórios!');
  		return false;
  	}
  	return true;
  }

	return (
		<View>
			<TextInput
				placeholder="Título da notícia"
				style={[
					styles.input,
					validatesForm(title)
				]}
				onChangeText={value => setTitle(value)} />
			<TextInput
				placeholder="Autor"
				style={[
					styles.input,
					validatesForm(author)
				]}
				onChangeText={value => setAuthor(value)} />
			<TextInput
				multiline={true}
				numberOfLines={7}
				maxLength={100}
				textAlignVertical = "top"
				placeholder="Texto da notícia"
				style={[
					styles.input,
					{paddingTop: 12},
					validatesForm(comment)
				]}
				onChangeText={value => setComment(value)} />
			<Button 
				title={"Publicar"}
				onPress={()=> saveData()}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	input: {
		borderStyle: 'solid', 
		borderColor: '#000',
		borderWidth: 1,
		borderRadius: 3,
		width: 300,
		minHeight: 40,
		paddingLeft: 10,
		marginBottom: 20,
	},
	validatesForm: {
		borderColor: 'red'
	}
})

export default form;

