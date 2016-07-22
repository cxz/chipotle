import { combineReducers } from 'redux';
import navigator from './navigator';
import entities from './entities';
import dashboards from './dashboards';

const rootReducer = combineReducers({
  entities,
  dashboards,
  navigator
});

export default rootReducer;
