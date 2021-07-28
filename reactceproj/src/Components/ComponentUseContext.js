import React,{useContext} from 'react'
import ComponentAContext from './ComponentAContext'
import { UserContext,ChannelContext } from '../App'

function ComponentUseContext() {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <div>
            {user}{channel}
        </div>
    )
}

export default ComponentUseContext
