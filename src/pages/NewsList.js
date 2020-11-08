import React, { useState} from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import NewsListItem from '../components/NewsListItem';
import { deleteNews } from '../actions';
import Welcome from '../components/Welcome';

function NewsList({news, deleteNews, navigation}){

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

	const showSearch = () => {
		if(news.length){
			return (
				<View style={styles.containerSearch}>
					<TextInput
						style={styles.input}
						onChangeText={value => automaticSearch(value)}
					/>
					<Text
						style={styles.button}
						onPress={()=> search(textSearch)}
					>Pesquisar</Text>
				</View>
			)
		}
	}

	return (
		<View style={styles.container}>
			{ showSearch() }
			<FlatList
				data={dataNews()}
				renderItem={({item}) => (
					<NewsListItem
						id={item.id}
						title={item.title}
						author={item.author}
						comment={item.comment}
						onPressDelete={() => deleteNews(item.id)}
						onPressUpdate={() => navigation.navigate('edit', {id: item.id})}
					/>
				)}
				keyExtractor={ item => item.id.toString() }
			/>
			<Welcome 
				data={news}
				navigation={navigation}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		marginBottom: 80,
		backgroundColor: '#fff',
		height: '100%'
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
		minHeight: 45,
		paddingLeft: 10,
		marginBottom: 20,
		flex: 3,
		marginRight: 5,
	},
	button: {
		flex: 1,
		backgroundColor: '#151a4e',
		color: '#fff',
		textAlign: 'center',
		paddingVertical: 13,
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