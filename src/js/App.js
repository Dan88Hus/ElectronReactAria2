import React, {useEffect} from 'react'
import entry from '../../entry'
import { useSelector, useDispatch } from 'react-redux'

import TaskButtons from './components/TaskButtons'
import InputLink from './components/InputLink'
import ListHistory from './components/ListHistory'
import { updateLocalSaction } from './store/actions/taskActions'


function App() {
    const dispatch = useDispatch()
    const stateU = useSelector(state => state.uri)
    const uri = useSelector(state => state.uri)

    useEffect(()=>{
        console.log("app useEffect")
        console.log("STATE", stateU)
        dispatch(updateLocalSaction())
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
                <pre>{JSON.stringify(uri)}</pre>
            </div>
        </div >
    )
}

export default App
