import React from 'react'
import configureStore from '../store/store'
const { persistor } = configureStore();
import {useDispatch} from 'react-redux'
import {purgeLocalStorage} from '../store/actions/taskActions'



function TaskButtons() {
    const dispatch = useDispatch()

    const handleClickClear = async () =>{
        console.log("clear history clicked")
        dispatch(purgeLocalStorage())
        //no need to purge if redux return [] state
        await persistor.purge()

    }

    return (
        <div className="m-2 text-center">

            <li className="btn btn-secondary m-1">Pasuse All</li>
            <li className="btn btn-secondary m-1">Resume All</li>
            <li className="btn btn-secondary m-1">Remove Task</li>
            <li className="btn btn-secondary m-1" onClick={handleClickClear}>Clear History</li>
        </div>
    )
}

export default TaskButtons
