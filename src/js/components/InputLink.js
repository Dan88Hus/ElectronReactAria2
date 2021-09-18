import React, { useState } from 'react'

function InputLink() {
    const [link, setLink] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // dispatch edilecek
        console.log("link", e.target)
    }

    return (
        <div>
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
