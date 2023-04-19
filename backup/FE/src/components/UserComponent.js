import React, { Component } from 'react'

export default class UserComponent extends Component {

    state = {
        name: '',
        textSearch: '',
        id: ''
    }
    render() {

        let listData = []
        let pageArray = []
        for (let i = 1; i <= this.props.totalPage; i++) {
            pageArray.push(i)
        }

        if (this.props.Users) {
            listData = this.props.Users.map((user, key) => {
                return (
                    <tr key={key}>
                        <th>{user._id}</th>
                        <th onClick={() => {this.setState({id:user._id, name:user.name})}}>{user.name}</th>
                        <th><button onClick={() => {this.props.deleteUser({id:user._id})}}>DELETE</button></th>
                    </tr>)

            })
        }

        return (
            <div>
                <input placeholder='ADD' onChange={(e) => { this.setState({ name: e.target.value }) }}/>
                <button onClick={() => { this.props.addUser({ name: this.state.name }) }}>ADD</button>
                <br/>
                <input placeholder='UPDATE' onChange={(e) => { this.setState({ name: e.target.value }) }} value = {this.state.name}/>
                <button onClick={() => { this.props.updateUser({name: this.state.name, id:this.state.id})}}>UPDATE</button>
                <br/>
                <input placeholder='SEARCH' onChange={(e) => { this.setState({ textSearch: e.target.value }) }}/>
                <button onClick={() => { this.props.searchPaginate({textSearch: this.state.textSearch, activePage: 1})}}>SEARCH</button>
                <table>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                        {listData}
                    </tbody>
                </table>
                {
                    pageArray.map((page) => {
                        return (<button key={page} onClick={() => {
                            if (this.state.textSearch) {
                                this.props.searchPaginate({ textSearch: this.state.textSearch, activePage: page })
                                
                            } else {
                                this.props.getPaginate({ activePage: page })
                            }
                        }} style={{backgroundColor: this.props.activePage === page ? "red" : "white"}}>
                            {page}
                        </button>)

                    })
                }
            </div>
        )
    }
}
