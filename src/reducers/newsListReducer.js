import { ADD_NEWS, DELETE_NEWS, UPDATE_NEWS } from '../actions';

let nextId = 1;

const newsListReducer = (state = [], action) => {
	switch(action.type){
		case ADD_NEWS:
			const newNews = {
				id: nextId++,
				title: action.data.title,
  			author: action.data.author,
  			comment: action.data.comment 
			}
			return [newNews, ...state];
		case DELETE_NEWS:
			return state.filter( news => {
        return news.id != action.id;
      })
    case UPDATE_NEWS:
    	return state.map( news => {
    		if(news.id == action.data.id)
    			return {
    				...news,
    				title: action.data.title,
    				author: action.data.author,
    				comment: action.data.comment
    			}
    		return news;
    	});
		default: 
			return state;
	}
}

export default newsListReducer;