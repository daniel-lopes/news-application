import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import NewsListItem from '../components/NewsListItem';
import { deleteNews } from '../actions';

function NewsList({news, deleteNews}){

	return (
		<View style={styles.container}>
			<FlatList
				data={news}
				renderItem={({item}) => (
					<NewsListItem
						id={item.id}
						title={item.title}
						author={item.author}
						comment={item.comment}
						onPressDelete={() => deleteNews(item.id)}
					/>
				)}
				keyExtractor={ item => item.id.toString()}
			/>						
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		
	}
})

const mapStateToProps = state => {
	const { news } = state;
	return { news };
}

export default connect(mapStateToProps, {
	deleteNews
})(NewsList);