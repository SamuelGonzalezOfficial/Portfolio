import React from 'react'

function Button({ href, children}){
    return(
        <button className="button"><a href={href && href || "#"} className="button-link">{ children }</a></button>
    )
}

export { Button }