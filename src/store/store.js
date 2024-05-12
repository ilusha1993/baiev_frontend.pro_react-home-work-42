import { createStore } from 'redux';
import todoReducer from './reducer'; // Імпортуємо todoReducer з './reducer'

const store = createStore(todoReducer);

export default store;
