import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity  } from 'react-native';

const Welcome = (props) => {

	if(!props.data.length){
		return (
			<View style={styles.container}>
				<Text style={styles.title}>Bem-vindo ao</Text>
				<Image style={styles.logo} source={require('../../assets/code7Logo.png')}/>
				<Text style={styles.line}></Text>
				<Text style={styles.text}>
					Este é o app de notícias da Code7! No momento não
					temos nenhuma notícia cadastrada no sistema, 
					click no botão abaixo para começar a criar notícias
				</Text>
				<TouchableOpacity
					onPress={() => props.navigation.navigate('form')}
				>
					<Text style={styles.button}>Cadastrar Notícias</Text>
				</TouchableOpacity>
			</View>
		)
	}
	return null;
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: '#fff',
		// paddingHorizontal: 20,
		paddingVertical: 30,
		justifyContent: 'center',
		height: '100%'
	},
	title: {
		fontSize: 30,
		width: 300,
	},
	logo: {
		width:231,
		height: 40,
		resizeMode: 'stretch',
		marginBottom: 25,
	},
	line: {
		borderTopWidth: 1,
		paddingTop: 10,
		marginTop: 10,
		width: 150,
		borderColor: '#151a4e'
	},
	text: {
		fontSize: 15,
		lineHeight: 25,
	},
	button: {
		fontSize: 20,
		backgroundColor: '#151a4e',
		color: '#fff',
		minWidth: '100%',
		textAlign: 'center',
		paddingVertical: 15,
		textTransform: 'uppercase',
		marginTop: 40
	}
});

export default Welcome;