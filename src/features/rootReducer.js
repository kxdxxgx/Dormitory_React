// features/rootReducer.js

import { combineReducers } from 'redux';
import setSearch from './Search/reducer';

const rootReducer = combineReducers({
    setSearch,
});

export default rootReducer;