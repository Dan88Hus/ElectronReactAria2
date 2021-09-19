import React,{useEffect} from 'react'
import { useDispatch } from "react-redux";
import { tellStatus } from '../store/actions/taskActions'


function ListHistory({u}) {
    const dispatch = useDispatch()

    // useEffect(()=>{
    //     dispatch(tellStatus())
    // },[dispatch])

    return (
        <React.Fragment>
                <li className="list-group-item">GID: {u.gid}</li>
        </React.Fragment>
    )
}

export default ListHistory
