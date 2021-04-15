import React from 'react'

const nasPhoto = (props) => {
    const {nasDataURL } = props;
    console.log(nasDataURL)
    
    return (
        <div>
        {nasDataURL && <img src={nasDataURL} />}
        </div>
    )}

    export default nasPhoto;