import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ border: '3px solid black' }}>
            {props.children}
        </div>
    )
}
export default Scroll;