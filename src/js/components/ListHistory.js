import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { tellStatus, pauseAction, unPauseAction, forceRemoveAction } from '../store/actions/taskActions'



function ListHistory({ u }) {
    const dispatch = useDispatch()

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(tellStatus())
        }, 300);
    }, [])
    
    
    const handlePause = (u)=>{
        if(u.status !== "complete" || 'paused'){
            dispatch(pauseAction(u.id, u.gid))
        }
    }
    const handleResume = (u)=>{
        if(u.status !== "complete"){
            dispatch(unPauseAction(u.id, u.gid))
        }
    }
    const handleStop = (u)=>{
        console.log(u.status)
        if(u.status !== "complete"){
            console.log("stop clicked")
            dispatch(forceRemoveAction(u.id, u.gid))
        }
    }

    return (
        <React.Fragment>
            <tr>
                <th scope="row">{u.gid}</th>
                <td>{u.status}</td>
                <td className="text-center">{u.progress}</td>
                <td>{u.path}</td>
                {/* This can be in one Button with Ternary operator*/}
                <td><button className="btn btn-light" onClick={(()=>handlePause(u))}>||</button></td>
                <td><button className="btn btn-light" onClick={(()=>handleResume(u))}>&#9656;</button></td>
                <td><button className="btn btn-light" onClick={(()=>handleStop(u))}>&#128721;</button></td>
            </tr>
        </React.Fragment>
    )
}

export default ListHistory
