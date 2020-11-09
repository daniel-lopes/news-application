import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Alert,
	Image,
	TouchableOpacity,
	Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import { addNews, upadateNews } from '../actions';
import Footer from './Footer';

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
  			Alert.alert('Alteração de notícia realizada com sucesso!');
	  		props.navigation.navigate('News');
  		} else {
	  		props.dispatchAddNews({
	  			title,
	  			author,
	  			comment,
	  			id
	  		})
	  		setTitle('');
	    	setAuthor('');
	    	setComment('');
	    	setTrySubmit(false);
  			Alert.alert('Notícia publicada com sucesso!');
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
		<View>
			<View style={styles.container}>
				<Image
					style={styles.logo} 
					source={require('../../assets/code7Logo.png')}/>
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
					maxLength={300}
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
			</View>
			<View style={styles.footer}>
				<Footer
					active={props.active}
					navigation={props.navigation}/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    minHeight: (Dimensions.get('window').height - 60),
    maxWidth: '100%'
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
	},
	footer: {
		marginLeft: 20
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