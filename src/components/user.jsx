import React from 'react'
import './../App.css'

const Users = props => {

    let btnF = e => {
        const id = e.target.parentElement.id
        props.remove(parseInt(id))
    }
  

    return (
        <table className="ui fixed table" >
            <thead>
                <tr>
                    <th>Users</th>
                    <th>Name</th>
                    <th>e-mail</th>
                    <th>City</th>
                    <th>Street</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
                {props.user.users.map(u => <tr key={u.id} id={u.id}>
                    <td>{u.username}</td>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.address.city}</td>
                    <td>{u.address.street}</td>
                    <td>{u.phone}</td>
                    <td>{u.website}</td>
                    <td>{u.company.name}</td>
                    <button id="btn" onClick={btnF}>Delete</button>

                </tr>)}

            </tbody>
        </table >)
}

export default Users;