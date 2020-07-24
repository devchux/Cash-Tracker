import rootReducer from './redux/reducers/index';
import { createStore } from 'redux';

function configureStore(initialState) {
    return createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}

export default configureStore