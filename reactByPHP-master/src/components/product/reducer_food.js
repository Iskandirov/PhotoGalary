import productService from "./productService";
import update from '../../helpers/update';


export const GET_LIST_DATA_STARTED = "product/GET_LIST_DATA_STARTED";
export const GET_LIST_DATA_SUCCESS = "product/GET_LIST_DATA_SUCCESS";
export const GET_LIST_DATA_FAILED = "product/GET_LIST_DATA_FAILED";

const initialState = {
    list: {
        data: [],
        error: false,
        loading: false
    },
}

export const productReducer = (state = initialState, action) => {
    let newState = state;

    switch (action.type) {

        case GET_LIST_DATA_STARTED: {
            newState = update.set(state,'list.loading',true);
            //newState = Object.assign({}, state,{list:{data: state.list.data, loading: true, error: state.list.error}});
            break;
        }
        case GET_LIST_DATA_SUCCESS:{
            newState = update.set(state,'list.loading',false);
            newState = update.set(newState,'list.data',action.payload.data);    
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

        productService.getListData()
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