import * as types from '../constants/ActionTypes';
import { assign } from 'lodash';

const initialState = {
  selected: null,
  isFetching: false
};

export default function (state = initialState, action) {
  switch (action.type) {
      case types.DASHBOARDS_SUCCESS:
          const {
            dashboards
          } = action.response.entities;
          return {
            ...state,
            isFetching: false,
            selected: Object.keys(dashboards)[0]
          };
          /*
    case types.SELECT_DASHBOARD:
          return {
            ...state,
            selected: action.dashboardId
          };
          */
      default:
        return state;
    }
}
