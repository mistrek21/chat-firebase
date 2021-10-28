import { useState, useEffect } from 'react'
import { Avatar } from '@material-ui/core'
import { ExpandMore, Add, Mic, Settings, Headset } from '@material-ui/icons'

import firebaseApp from '../firebase/credentials'
import { getFirestore, doc, setDoc, collection, getDocs } from 'firebase/firestore'
import ChannelInSidebar from '../components/ChannelInSidebar'
import { signOut, getAuth } from 'firebase/auth'
const auth = getAuth(firebaseApp)
const firestore = getFirestore(firebaseApp)

function Sidebar({ user, setCurrentChannel }) {
    const [channelList, setChannelList] = useState([])

    function addChannel() {
        const channelName = prompt("Choose a channel name!")
        if (channelName) {
            const docRef = doc(firestore, `channels/${channelName}`)
            setDoc(docRef, {
                id: new Date().getTime(),
                name: channelName,
            })

            getChannels()
        }
    }

    async function getChannels() {
        const channelArr = []
        const collectionRef = collection(firestore, "channels")
        const channelsSecret = await getDocs(collectionRef)
        channelsSecret.forEach(channelSecret => {
            channelArr.push(channelSecret.data())
        })

        setChannelList(channelArr)
    }

    useEffect(() => {
        getChannels()
    }, [])

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
                        <Add className="sidebar__addChannel" onClick={addChannel} />
                    </div>
                </div>

                {/*  Channels List */}
                <div className="sidebar__channelsList">
                    {/* {Map channels */}
                    {channelList ? channelList.map((channel) => {
                        return (
                            <div onClick={() => setCurrentChannel(channel.name)}>
                                <ChannelInSidebar
                                    name={channel.name}
                                    id={channel.id}
                                />
                            </div>
                        )
                    })
                        :
                        null
                    }

                </div>
            </div>

            {/* Profile */}
            <div className="sidebar__profile">
                <Avatar src={user.photoURL} />
                <div className="sidebar__profileInfo">
                    <h3>{user.displayName}</h3>
                    <p>{user.uid.substring(0, 4)}</p>
                </div>
                <div className="sidebar__profileIcons">
                    <Mic />
                    <Headset />
                    <Settings onClick={() => signOut(auth)} />
                </div>
            </div>

        </div>
    )
}

export default Sidebar
