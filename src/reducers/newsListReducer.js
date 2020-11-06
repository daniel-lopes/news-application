import { ADD_NEWS, DELETE_NEWS } from '../actions';

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
			return [...state, newNews];
		case DELETE_NEWS:
			return state.filter( news => {
        return news.id != action.id;
      })
		// case TOGGLE_TODO:
		// 	return state.map(todo => {
		// 		if(todo.id === action.todoId)
		// 			return {
		// 				...todo,
		// 				done: !todo.done
		// 			};
		// 		return todo;
		// 	});
		default: 
			return state;
	}
}

export default newsListReducer;