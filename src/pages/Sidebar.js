import { useState, useEffect } from 'react'
import { Avatar } from '@material-ui/core'
import { ExpandMore, Add, Mic, Settings, Headset } from '@material-ui/icons'

function Sidebar({ user }) {
    return (
        <div className="sidebar">

            {/* Sidebar Top */}
            <div className="sidebar__top">
                <h3>Mata's server</h3>
                <ExpandMore />
            </div>

            {/* Channels */}
            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMore />
                        <h4>Text Channels</h4>
                    </div>
                    <div>
                        <Add className="sidebar__addChannel" onClick={console.log('channel added')} />
                    </div>
                </div>

                {/*  Channels List */}
                <div className="sidebar__channelsList">
                    {/* {Map channels in the future} */}
                </div>
            </div>

            {/* Profile */}
            <div className="sidebar__profile">
                <Avatar src={user.photoURL} />
                <div className="sidebar__profileInfo">
                    <h3>{user.displayName}</h3>
                    <p>{user.uid.substring(0, 4)}</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
