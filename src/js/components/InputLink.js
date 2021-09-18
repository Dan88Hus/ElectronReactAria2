import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addUriAction } from '../store/actions/taskActions'

function InputLink() {
    const [link, setLink] = useState('')
    const dispatch = useDispatch()
    const uri = useSelector((state)=> state.uri)

    const handleSubmit = (e) => {
        e.preventDefault()
        // dispatch edilecek
        dispatch(addUriAction(link))
        
    }

    return (
        <div>
            <pre>{JSON.stringify(uri)}</pre>
            <form className="row m-1" onSubmit={handleSubmit}>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Link" onChange={(e) => setLink(e.target.value)} />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-success mb-3">Start Download</button>
                </div>
            </form>
        </div>
    )
}

export default InputLink
