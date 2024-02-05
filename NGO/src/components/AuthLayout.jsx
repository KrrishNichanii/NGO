import React from 'react'

function Protected({children , authentication = true}) {
    const authStatus = true 
  
    return <>{children}</>
}

export default Protected