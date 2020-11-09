import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faNewspaper, faPlusCircle, faEdit } from '@fortawesome/free-solid-svg-icons';

function Footer({navigation, active}){

	const activeStyle = nameScreen => (
		active == nameScreen ? styles.active : null
	)

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => navigation.navigate('News')}
				style={styles.groupButon}>
				<FontAwesomeIcon 
					icon={ faNewspaper } 
					style={[
						styles.icon,
						activeStyle('news')
					]}
					size={23}/>
				<Text style={[
					styles.text,
					activeStyle('news')
					]}
				>Notícias</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => navigation.navigate('RegisterNews')}
				style={styles.groupButon}>
				<FontAwesomeIcon 
					icon={ faPlusCircle } 
					style={[
						styles.icon,
						activeStyle('register')
					]}
					size={23}/>
				<Text style={[
					styles.text,
					activeStyle('register')
					]}
				>Cadastrar</Text>
			</TouchableOpacity><TouchableOpacity
				onPress={() => navigation.navigate('ManageNews')}
				style={styles.groupButon}>
				<FontAwesomeIcon 
					icon={ faEdit } 
					style={[
						styles.icon,
						activeStyle('manage')
					]}
					size={23}/>
				<Text
					style={[
						styles.text,
						activeStyle('manage')
					]}>Gerenciar</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginBottom: 5,
		borderTopWidth: 1,
		borderColor: '#656565',
		width: Dimensions.get('window').width,
		marginLeft: -20,
		paddingTop: 7
	},
	groupButon: {
		alignItems: 'center',
	},
	text: {
		fontSize: 11,
		color: '#656565'
	},
	icon: {
		color: '#656565',
	},
	active: {
		color: '#151a4e'
	}
});

export default Footer;