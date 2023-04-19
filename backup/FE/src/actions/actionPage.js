import * as types from '../constants'

export function getPaginaterRequest(payload){
    return{
        type: types.GET_PAGINATE_REQUEST,
        payload
    }
}

export function getPaginaterSuccess(payload){
    return{
        type: types.GET_PAGINATE_SUCCESS,
        payload
    }
}

export function getPaginaterFailure(payload){
    return{
        type: types.GET_PAGINATE_FAILURE,
        payload
    }
}

export function searchPaginaterRequest(payload){
    return{
        type: types.SEARCH_PAGINATE_REQUEST,
        payload
    }
}

export function searchPaginaterSuccess(payload){
    return{
        type: types.SEARCH_PAGINATE_SUCCESS,
        payload
    }
}

export function searchPaginaterFailure(payload){
    return{
        type: types.SEARCH_PAGINATE_FAILURE,
        payload
    }
}

export function addRequest(payload){
    return{
        type: types.ADD_REQUEST,
        payload
    }
}

export function addSuccess(payload){
    return{
        type: types.ADD_SUCCESS,
        payload
    }
}

export function addFailure(payload){
    return{
        type: types.ADD_FAILURE,
        payload
    }
}

export function updateRequest(payload){
    return{
        type: types.UPDATE_REQUEST,
        payload
    }
}

export function updateSuccess(payload){
    return{
        type: types.UPDATE_SUCCESS,
        payload
    }
}

export function updateFailure(payload){
    return{
        type: types.UPDATE_FAILURE,
        payload
    }
}

export function deleteRequest(payload){
    return{
        type: types.DELETE_REQUEST,
        payload
    }
}

export function deleteSuccess(payload){
    return{
        type: types.DELETE_SUCCESS,
        payload
    }
}

export function deleteFailure(payload){
    return{
        type: types.DELETE_FAILURE,
        payload
    }
}
