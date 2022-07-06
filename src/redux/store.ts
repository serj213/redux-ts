import { legacy_createStore as createStore, applyMiddleware } from 'redux';
// legacy_createStore это такой же createStore, только без ошибки об устаревании
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import { composeWithDevTools } from '@redux-devtools/extension';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
