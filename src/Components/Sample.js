import React from 'react'

function Sample({message}) {
    if(typeof(message) !=='string' || !message){
        throw new Error('Message must be string ')
    }
  return (
    <>
       <h1>{message}</h1>
    </>

)
}

export default Sample