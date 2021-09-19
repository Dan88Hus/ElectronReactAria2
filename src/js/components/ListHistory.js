import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { tellStatus } from '../store/actions/taskActions'



function ListHistory({ u }) {
    const dispatch = useDispatch()

    useEffect(()=>{
        const interval = setInterval(() => {
            dispatch(tellStatus())
          }, 3000);
    },[])

    return (
        <React.Fragment>
            <div className="row">
                <div className="col">
                    <li style={{ listStyleType: "none" }}>GID: {u.gid}</li>
                </div>
                <div className="col">
                    <li style={{ listStyleType: "none" }}>Progress: {u.status}</li>
                </div>
                <div className="col">
                    <li style={{ listStyleType: "none" }}>Path: {u.path}</li>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ListHistory
