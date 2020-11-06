import React, { useState} from 'react';
import { StyleSheet, View, FlatList, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import NewsListItem from '../components/NewsListItem';
import { deleteNews } from '../actions';
import { deepClone } from '../utils'

function NewsList({news, deleteNews}){

	const [textSearch, setSearch] = useState('');
	const [searchNews, setSearchNews] = useState('');
	const search = value => {
		let result = news.filter( item => {
	    return (
	    	item.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
	    );
	  });
	  setSearchNews(result);
	}

	const automaticSearch = value => {
		setSearch(value);
		search(textSearch);
	}

	const dataNews = () => {
		return searchNews && textSearch ? searchNews : news;
	}

	return (
		<View style={styles.container}>
			<View style={styles.containerSearch}>
				<TextInput
					style={styles.input}
					onChangeText={value => automaticSearch(value)}
				/>
				<Button
					style={styles.button}
					title={"Pesquisar"}
					onPress={()=> search(textSearch)}
				/>
			</View>
			<FlatList
				data={dataNews()}
				renderItem={({item}) => (
					<NewsListItem
						id={item.id}
						title={item.title}
						author={item.author}
						comment={item.comment}
						onPressDelete={() => deleteNews(item.id)}
					/>
				)}
				keyExtractor={ item => item.id.toString() }
			/>						
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 20,
		marginBottom: 80
	},
	containerSearch: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		marginTop: 20 
	},
	input: {
		borderStyle: 'solid', 
		borderColor: '#000',
		borderWidth: 1,
		borderRadius: 3,
		width: 300,
		minHeight: 40,
		paddingLeft: 10,
		marginBottom: 20,
		flex: 3,
		marginRight: 5,
		backgroundColor: '#fff'
	},
	button: {
		flex: 1
	}
})

const mapStateToProps = state => {
	// console.log(state)
	const { news } = state;
	return { news };
}

export default connect(mapStateToProps, {
	deleteNews
})(NewsList);