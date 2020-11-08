import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Alert,
	Image,
	TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { addNews, upadateNews } from '../actions';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Form(props){

  const [id, setId] = useState(props.id);
	const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [comment, setComment] = useState('');
  const [trySubmit, setTrySubmit] = useState(false);

  useEffect(() => {
	  props.news.map(item => {
	    if(item.id == props.id){
	    	setTitle(item.title);
	    	setAuthor(item.author);
	    	setComment(item.comment);
	    	setId(item.id);
	    }
	  });
	}, []);

  const saveData = () => {
  	setTrySubmit(true);
  	if(validatesFormSubmit()){
  		if(id){
  			props.dispatchUpdateNews({
	  			title,
	  			author,
	  			comment,
	  			id
  			})
  		} else {
	  		props.dispatchAddNews({
	  			title,
	  			author,
	  			comment,
	  			id
	  		})
  		}
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
		<View style={styles.container}>
			<Image style={styles.logo} source={require('../../assets/code7Logo.png')}/>
			<TextInput
				placeholder="Título da notícia"
				value={title}
				style={[
					styles.input,
					validatesForm(title)
				]}
				onChangeText={value => setTitle(value)} />
			<TextInput
				placeholder="Autor"
				value={author}
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
				value={comment}
				style={[
					styles.input,
					{paddingTop: 18},
					validatesForm(comment)
				]}
				onChangeText={value => setComment(value)} />
			<TouchableOpacity
				onPress={()=> saveData()}
			>
				<Text style={styles.button}>{props.nameButton}</Text>
			</TouchableOpacity>
{/*			<Button 
				title={"Ver Noticias"}
				onPress={()=> props.navigation.navigate('news')}
			/>*/}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
	},
	logo: {
		width:231,
		height: 40,
		resizeMode: 'stretch',
		marginBottom: '30%',
	},
	input: {
		borderStyle: 'solid', 
		borderColor: '#000',
		borderWidth: 1,
		borderRadius: 3,
		width: '100%',
		minHeight: 50,
		paddingLeft: 10,
		marginBottom: 20,
	},
	validatesForm: {
		borderColor: 'red'
	},
	button: {
		fontSize: 20,
		backgroundColor: '#151a4e',
		color: '#fff',
		minWidth: '100%',
		textAlign: 'center',
		paddingVertical: 15,
		textTransform: 'uppercase',
	}
})

const mapStateToProps = state => {
	const { news } = state;
	return { news };
}

export default connect(mapStateToProps, {
	dispatchAddNews: addNews,
	dispatchUpdateNews: upadateNews
})(Form);