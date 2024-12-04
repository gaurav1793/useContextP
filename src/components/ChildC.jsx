import React, { useContext } from 'react'
import { usercontext } from '../App'

const ChildC = () => {
    //consume contect

    const user= useContext(usercontext)
  return (
    <div>{user.name}</div>
  )
}

export default ChildC