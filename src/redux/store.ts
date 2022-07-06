import { legacy_createStore as createStore, applyMiddleware } from 'redux';
// legacy_createStore это такой же createStore, только без ошибки об устаревании

import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

export const store = createStore(rootReducer, applyMiddleware(thunk));
