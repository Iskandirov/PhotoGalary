import AnimalService from "./animalService";
import update from '../../helpers/update';


export const GET_LIST_DATA_STARTED = "animal/GET_LIST_DATA_STARTED";
export const GET_LIST_DATA_SUCCESS = "animal/GET_LIST_DATA_SUCCESS";
export const GET_LIST_DATA_FAILED = "animal/GET_LIST_DATA_FAILED";

const initialState = {
    list: {
        data: [],
        error: false,
        loading: false
    },
}

export const animalReducer = (state = initialState, action) => {
    let newState = state;

    switch (action.type) {
        case GET_LIST_DATA_STARTED: {
            newState = update.set(state, 'list.loading', true);
            //newState = Object.assign({}, state, {list: {data: state.list.data, loading: true, error: state.list.error } } ); //update.set(state, 'list.loading', true);
            break;
        }
        case GET_LIST_DATA_SUCCESS: {
            newState = update.set(state, 'list.loading', false);
            newState = update.set(newState, 'list.data', action.payload.data);
            break;
        }
        default: {
            return newState;
        }
    }

    return newState;
}

export const getListData = () => {
    return (dispatch) => {
        dispatch(getListActions.started());

        AnimalService.getListData()
            .then((response) => {
                dispatch(getListActions.success(response));
            })
            .catch(() => {
                dispatch(getListActions.failed());
            });
    }
}

export const getListActions = {
    started: () => {
        return {
            type: GET_LIST_DATA_STARTED
        }
    },

    success: (data) => {
        return {
            type: GET_LIST_DATA_SUCCESS,
            payload: data
        }
    },

    failed: (error) => {
        return {
            type: GET_LIST_DATA_FAILED
        }
    }
}