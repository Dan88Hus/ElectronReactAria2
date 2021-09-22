import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {unPauseAllAction} from './store/actions/taskActions'

import TaskButtons from './components/TaskButtons'
import InputLink from './components/InputLink'
import ListHistory from './components/ListHistory'


function App() {
    const dispatch = useDispatch()
    const stateU = useSelector(state => state.uri)
    const uri = useSelector(state => state.uri)

    useEffect(()=>{
        // 0,0 is dummy data
        dispatch(unPauseAllAction(0,0))
    },[])

    return (
        <div className="container-fluid">
            <div className="row">
                <h3 className="text-center mt-2">Download Manager</h3>
            </div>
            <div className="card">
                <div className="row">
                    <TaskButtons />
                </div>
                <div className="row">
                    <InputLink />
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">GID</th>
                            <th scope="col">Status</th>
                            <th scope="col text-center">%Progress</th>
                            <th scope="col">Path</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {uri.map((u) => (
                            <ListHistory u={u} key={u.id} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default App
