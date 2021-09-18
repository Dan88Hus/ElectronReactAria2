import React from 'react'
import entry from '../../entry'

import TaskButtons from './components/TaskButtons'
import InputLink from './components/InputLink'
import ListHistory from './components/ListHistory'


function App() {
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
                <ListHistory />
            </div>
        </div>
    )
}

export default App
