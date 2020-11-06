import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function NewsListItem(props){
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>{props.title}</Text>
				<Text
					style={styles.delete}
					onPress={props.onPressDelete}>x
				</Text>
			</View>
			<Text>by {props.author}</Text>
			<Text style={styles.comment}>{props.comment}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		marginBottom: 20,
		paddingVertical: 20,
		marginHorizontal: 20,
		paddingLeft: 10 
	},
	title: {
		fontSize: 25,
		flex: 25
	},
	delete: {
		flex: 1
	},
	header: {
		flexDirection: 'row' 
	},
	comment: {
		marginTop: 15,
		fontSize: 15
	}
})

export default NewsListItem;