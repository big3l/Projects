import React from 'react';

const TableBody = (props) => {

    const body = props.list.map(item =>
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.email}</td>
        </tr>
    )
    console.log(body)
    return (body)
}

export default TableBody;