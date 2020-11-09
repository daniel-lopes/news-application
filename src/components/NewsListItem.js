import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {  faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

function NewsListItem(props){
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>{props.title}</Text>
				<TouchableOpacity
					onPress={props.onPressDelete}>
						<FontAwesomeIcon 
							icon={ faTrashAlt } 
							size={18}
							color={ '#c22b2e' }
							style={[
								styles.delete,
								!props.edit ? styles.hideActions : null
							]}/>
				</TouchableOpacity>
			</View>
			<Text style={styles.comment}>{props.comment}</Text>
			<View style={styles.footer}>
				<Text style={styles.author}>Autor: {props.author}</Text>
				<TouchableOpacity
					onPress={props.onPressUpdate}>
					<FontAwesomeIcon 
						icon={ faPencilAlt } 
						size={18}
						color={ '#151a4e' }
						style={[
							styles.update,
							!props.edit ? styles.hideActions : null
						]}/>
					</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		marginBottom: 20,
		paddingVertical: 15,
		paddingHorizontal: 15,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: '#ccc'
	},
	title: {
		fontSize: 19,
		flex: 25,
		lineHeight: 25
	},
	delete: {
		flex: 1
	},
	header: {
		flexDirection: 'row' 
	},
	comment: {
		marginTop: 10,
		fontSize: 16,
		color: '#3f424a',
		lineHeight: 21
	},
	author: {
		color: '#3f424a',
		fontSize: 12,
		flex: 20,
		marginTop: 5
	},
	footer: {
		marginBottom: 8,
		flexDirection: 'row'
	},
	update: {
		flex: 1
	},
	hideActions:{
		display: 'none'
	}
})

export default NewsListItem;