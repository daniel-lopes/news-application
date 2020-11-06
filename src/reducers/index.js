import { combineReducers } from 'redux';

import newsListReducer from './newsListReducer';

const rootReducer = combineReducers({
	news: newsListReducer
})

export default rootReducer;