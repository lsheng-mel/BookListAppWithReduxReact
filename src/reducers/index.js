import { combineReducers } from 'redux';
import bookReducer from './book_reducer'
import activeBook from './active_book_reducer'

const rootReducer = combineReducers({
	books: bookReducer,
	book: activeBook
});

export default rootReducer;
