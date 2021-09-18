import React from 'react'
import entry from '../../entry'
import TaskButtons from './components/TaskButtons'


function App() {
    const title = "title from app.js UPDATED1"
    return (
        <div className="container">

            <div className="row">
                <h3 className="text-center mt-2">Download Manager</h3>
            </div>
            <div className="card">
                <TaskButtons />
                <div className="card m-3">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default App
