import { put, takeEvery } from "redux-saga/effects"
import * as actions from "../actions/actionPage"
import * as types from "../constants"
import * as API from '../fetchAPIs/API'

function* handleGET(data) {
    try {
        const res = yield API.getPaginateAPI(data.payload)
        yield put(actions.getPaginaterSuccess(
            {
                activePage: res.activePage,
                totalPage: res.totalPage,
                listData: res.listData
            }))
    } catch (error) {
        yield put(actions.getPaginaterFailure(error))
    }
}

function* handleDELETE(data) {
    console.log(data,"jjjj")
    try {
        yield API.DeleteUserAPI(data.payload.id)
        yield put(actions.deleteSuccess())
        yield put(actions.getPaginaterRequest(1))
    } catch (error) {
        yield put(actions.addFailure(data.payload))
    }
 }

function* handleSEARCH(data) {
    try {
        const res = yield API.searchPaginateAPI(data.payload)
        yield put(actions.searchPaginaterSuccess(
            {
                activePage: res.activePage,
                totalPage: res.totalPage,
                textSearch: res.textSearch,
                listData: res.listData
            }))
    } catch (error) {
        yield put(actions.searchPaginaterFailure(data.payload))
    }
}

function* handleADD(data) {
    try {
        yield API.addUserAPI(data.payload)
        yield put(actions.addSuccess())
        yield put(actions.getPaginaterRequest(1))
    } catch (error) {
        yield put(actions.addFailure(data.payload))
    }
}

function* handleUPDATE(data) {
    try {
        yield API.updateUserAPI(data.payload)
        console.log(data.payload,"SAGGAAA")
        yield put(actions.updateSuccess())
        yield put(actions.getPaginaterRequest(1))
    } catch (error) {
        yield put(actions.updateFailure(data.payload))
    }
}

export const userSaga = [
    takeEvery(types.GET_PAGINATE_REQUEST, handleGET),
    takeEvery(types.SEARCH_PAGINATE_REQUEST, handleSEARCH),
    takeEvery(types.ADD_REQUEST, handleADD),
    takeEvery(types.UPDATE_REQUEST, handleUPDATE),
    takeEvery(types.DELETE_REQUEST, handleDELETE),
]