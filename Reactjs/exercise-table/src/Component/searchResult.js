import React, { Component } from 'react'
import User from './user';

export default class SearchResult extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            users: [
                { id: 1000, name: "Daniel Lewis", email: "dan@dci.com" },
                { id: 2000, name: "Abi Lewis", email: "abi@dci.com" },
                { id: 3000, name: "Neil Lewis", email: "neil@dci.com" },
                { id: 4000, name: "Justin Lewis", email: "justin@dci.com" }
            ],
            lastSearchTerm: ''
        }
    }

    shouldComponentUpdate(nextProps){
        if(this.nextProps.searchTerm === this.State.lastSearchTerm){
        return true;
        }
    }

    render() {

        const searchingFor = this.props.searchFor.toLocaleLowerCase();

        const filter = this.state.users.filter((user) =>
            (user.name.toLocaleLowerCase().includes(searchingFor) ||

                user.email.toLocaleLowerCase().includes(searchingFor) ||

                user.id.toFixed().includes(searchingFor))).map((userName) => {

                    return <User key={userName.id} id={userName.id} name={userName.name} email={userName.email} />
                })

        return (
            <table className='table'>
                <tbody>
                    {filter}
                </tbody>

                {/* <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>email</td>
                    </tr>
                </thead> */}

            </table>
        )
    }
}
