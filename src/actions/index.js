export const ADD_NEWS = 'ADD_NEWS';
export const addNews = data => ({
	type: ADD_NEWS,
	data
})

export const DELETE_NEWS = 'DELETE_NEWS';
export const deleteNews = id => ({
	type: DELETE_NEWS,
	id
})

export const UPDATE_NEWS = 'UPDATE_NEWS';
export const upadateNews = data => ({
	type: UPDATE_NEWS,
	data
})