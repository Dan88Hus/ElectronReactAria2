import React from 'react'
import {useSelector} from 'react-redux'

function TaskButtons() {

    return (
        <div className="m-2 text-center">

            <li className="btn btn-secondary m-1">Pasuse All</li>
            <li className="btn btn-secondary m-1">Resume All</li>
            <li className="btn btn-secondary m-1">Remove Task</li>
            <li className="btn btn-secondary m-1">Clear History</li>
        </div>
    )
}

export default TaskButtons
