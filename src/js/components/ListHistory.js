import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { tellStatus, pauseAction } from '../store/actions/taskActions'



function ListHistory({ u }) {
    const dispatch = useDispatch()

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(tellStatus())
        }, 300);
    }, [])
    
    
    const handlePause = ()=>{
        if(u.status !== "complete"){
            // console.log("dispatch for pause")
            dispatch(pauseAction(u.id, u.gid))
        }
    }
    const handleResume = ()=>{
        if(u.status !== "complete"){
            // console.log("dispatch for resume")
            // dispatch
        }
    }

    return (
        <React.Fragment>
            <tr>
                <th scope="row">{u.gid}</th>
                <td>{u.status}</td>
                <td className="text-center">{u.progress}</td>
                <td>{u.path}</td>
                {/* This can be in one Button */}
                <td><button className="btn btn-light" onClick={handlePause}>||</button></td>
                <td><button className="btn btn-light" onClick={handleResume}>&#9656;</button></td>
            </tr>
        </React.Fragment>
    )
}

export default ListHistory
