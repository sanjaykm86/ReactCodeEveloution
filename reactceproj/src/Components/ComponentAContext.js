import React from 'react'
import {ChannelContext, UserContext} from '../App'


function ComponentAContext() {
    return (
        <div>
            
            <UserContext.Consumer>
                {
                    user=>{return(
                        <ChannelContext.Consumer>
                {
                    e=>{return <div>{user}{e}</div>}
                }
            </ChannelContext.Consumer>

                    )}
                }
            
            </UserContext.Consumer>
            
        </div>
    )
}

export default ComponentAContext
