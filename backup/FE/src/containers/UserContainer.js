import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserComponent from '../components/UserComponent'
import * as actions from '../actions/actionPage'

export class UserContainer extends Component {
    componentDidMount() {
        this.props.getPaginate({activePage : 1})
    }

  render() {
    return (
      <div><UserComponent {...this.props}/></div>
    )
  }
}

const mapStateToProps = (state) => ({
    Users: state.userReducer.listData,
    textSearch: state.userReducer.textSearch,
    activePage: state.userReducer.activePage,
    totalPage: state.userReducer.totalPage
})

const mapDispatchToProps = (dispatch) => {
    return({
        getPaginate: (data) => {
            dispatch(actions.getPaginaterRequest(data))
        },

        searchPaginate: (data) => {
            dispatch(actions.searchPaginaterRequest(data))
        },

        addUser: (data) => {
            dispatch(actions.addRequest(data))
        },

        deleteUser: (data) => {
            dispatch(actions.deleteRequest(data))
        },

        updateUser: (data) => {
            dispatch(actions.updateRequest(data))
        },
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)