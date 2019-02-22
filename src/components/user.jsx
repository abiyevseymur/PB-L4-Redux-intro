import React from 'react'

const Users = props => {

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
                {props.user.users.map(u => <tr key = {u.id}>
                    <td>{u.username}</td>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.address.city}</td>
                    <td>{u.address.street}</td>
                    <td>{u.phone}</td>
                    <td>{u.website}</td>
                    <td>{u.company.name}</td>
                </tr>)}

            </tbody>
        </table >)
}

export default Users;