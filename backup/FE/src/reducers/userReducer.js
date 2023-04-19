import * as types from '../constants'

const initialState = {
    isFetching: false,
    dataFetched: false,
    error: false,
    errorMessage: null,
    listData: [],
    textSearch: [],
    activePage: [],
    totalPage: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {

        case types.GET_PAGINATE_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case types.GET_PAGINATE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                dataFetched: true,
                listData: action.payload.listData,
                activePage: action.payload.activePage,
                totalPage: action.payload.totalPage
            }

        case types.SEARCH_PAGINATE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                dataFetched: true,
                listData: action.payload.listData,
                activePage: action.payload.activePage,
                totalPage: action.payload.totalPage,
                textSearch: action.payload.textSearch
            }

        case types.UPDATE_SUCCESS:
        case types.DELETE_SUCCESS:
        case types.ADD_SUCCESS:
                return {
                ...state,
                isLoading: false,
                dataFetched: true,
            }
        case types.GET_PAGINATE_FAILURE:
        case types.SEARCH_PAGINATE_FAILURE:
        case types.ADD_FAILURE:
        case types.DELETE_FAILURE:
        case types.UPDATE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }
        default:
            return state
    }
}
