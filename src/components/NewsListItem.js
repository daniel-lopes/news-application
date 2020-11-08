import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function NewsListItem(props){
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>{props.title}</Text>
				<Text
					style={[
						styles.delete,
						!props.edit ? styles.hideActions : null
					]}
					onPress={props.onPressDelete}>
					x
				</Text>
			</View>
			<View style={styles.body}>
				<Text style={styles.comment}>{props.comment}</Text>
				<Text
					style={!props.edit ? styles.hideActions : null}
					onPress={props.onPressUpdate}>(!)</Text>
			</View>
			<Text style={styles.author}>Autor: {props.author}</Text>
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
		flex: 25
	},
	delete: {
		flex: 1
	},
	header: {
		flexDirection: 'row' 
	},
	comment: {
		marginTop: 8,
		fontSize: 16,
		color: '#3f424a'
	},
	author: {
		color: '#3f424a',
		fontSize: 12
	},
	body: {
		marginBottom: 8
	},
	hideActions:{
		display: 'none'
	}
})

export default NewsListItem;