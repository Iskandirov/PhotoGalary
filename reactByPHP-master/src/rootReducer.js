import { combineReducers } from "redux";
import counter from './reducers/counter';
import { animalReducer } from './components/animal/reducer';
import { productReducer } from './components/product/reducer_food';

export default combineReducers({
    counter,
    animal: animalReducer,
    product: productReducer,
});