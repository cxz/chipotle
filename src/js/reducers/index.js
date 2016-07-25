import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux'

import navigator from './navigator';
import entities from './entities';
import dashboards from './dashboards';

const rootReducer = combineReducers({
  entities,
  dashboards,
  navigator,
  routing
});

export default rootReducer;
