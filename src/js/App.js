import React from 'react'
import entry from '../../entry'
import { useSelector } from 'react-redux'

import TaskButtons from './components/TaskButtons'
import InputLink from './components/InputLink'
import ListHistory from './components/ListHistory'


function App() {
    const uri = useSelector(state => state.uri)

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
                <div className="card m-3" >
                    {uri.map((u) => (
                        <ListHistory u={u} key={u.id}/>
                    ))}
                </div>

                <pre>{JSON.stringify(uri)}</pre>
            </div>
        </div>
    )
}

export default App
