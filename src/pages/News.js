import React from 'react';
import NewsList from '../components/NewsList';

function News({navigation}){
	return (
		<NewsList
			active={'news'}
			navigation={navigation}
		/>
	)
}

export default News;