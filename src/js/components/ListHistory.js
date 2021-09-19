import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { tellStatus } from '../store/actions/taskActions'



function ListHistory({ u }) {
    const dispatch = useDispatch()

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(tellStatus())
        }, 3000);
    }, [])
    let char = ">"
    return (
        <React.Fragment>
            <tr>
                <th scope="row">{u.gid}</th>
                <td>{u.status}</td>
                <td className="text-center">{u.progress}</td>
                <td>{u.path}</td>
                {/* This can be in one Button */}
                <td><button className="btn bt-light">||</button></td>
                <td><button className="btn btn-light">&#9656;</button></td>
            </tr>
        </React.Fragment>
    )
}

export default ListHistory
