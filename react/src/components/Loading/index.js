import React from 'react'
import Delay from 'react-delay'

const Loading = ({ error, retry }) => {
    if (error) {
        console.log(error)
        return (
            <div>
                Error! <button onClick={retry}>Retry</button>
            </div>
        )
    } else {
        return (
            <Delay wait={300}>
                <div>Loading...</div>
            </Delay>
        )
    }
}

export default Loading
