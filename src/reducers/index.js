import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import SpidermanReducer from './reducer_spiderman';
import CarReducer from './reducer_cars';

const rootReducer = combineReducers({
  books: BooksReducer,
  spidermanFamily: SpidermanReducer,
  cars: CarReducer
});

export default rootReducer;
