import { CALL_API, Schemas } from '../middleware/api'

import { navigateTo } from '../actions/navigator';
import * as types from '../constants/ActionTypes';


export function loadDashboards() {
    return (dispatch, getState) => {
        dispatch(fetchDashboards());
    }
}

function fetchDashboards() {
    return {
        [CALL_API]: {
            types: [ types.DASHBOARDS_REQUEST, types.DASHBOARDS_SUCCESS, types.DASHBOARDS_FAILURE ],
            endpoint: `dashboards`,
            schema: Schemas.DASHBOARD_ARRAY
        }
    }
}

export function selectDashboard(id) {
    return {
        type: types.SELECT_DASHBOARD,
        id
    }
}

/*
function receiveDashboard(id, json) {
    return dispatch => {
        //dispatch(fetchStream())
        dispatch(navigateTo({path: ['dashboard', dashboardId, 'stream']}))
    }
}
*/