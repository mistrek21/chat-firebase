import { useState, useEffect, useRef } from 'react'
import { AddCircle, CreditCard, Gif, EmojiEmotions } from '@material-ui/icons'
import ChatHeader from '../components/ChatHeader'
import Message from '../components/Message'

import firebaseApp from '../firebase/credentials'
import { getFirestore, doc, setDoc, collection, getDocs } from 'firebase/firestore'
const firestore = getFirestore(firebaseApp)

function ChatScreen({ currentChannel, user }) {
    const [inputMessage, setInputMessage] = useState('')
    const [messageList, setMessageList] = useState([])

    const anchor = useRef()

    function sendMessage(e) {
        e.preventDefault()

        const docRef = doc(firestore, `channels/${currentChannel}/messages/${new Date().getTime()}`)

        const messageFamilyFriendly = filterMessage(inputMessage)

        setDoc(docRef, {
            photo: user.photoURL,
            user: user.displayName,
            message: messageFamilyFriendly,
            id: new Date().getTime()
        })

        setInputMessage("")
        getMessageList()
        anchor.current.scrollIntoView({ behavior: "smooth" })
    }

    function filterMessage(originalText) {
        const badboy = ["stupid", "nigga", "motherfucker", "bitch"]

        const array = originalText.split("")
        array.forEach((word, index) => {
            if (badboy.includes(word)) {
                array[index] = "**** i am gonna tell to your mum ****"
            }
        })

        return array
    }

    async function getMessageList() {
        const messagesArr = []

        const collectionRef = collection(firestore, `channels/${currentChannel}/messages`)

        const messagesC = await getDocs(collectionRef)
        messagesC.forEach(message => {
            messagesArr.push(message.data())
        })

        setMessageList([...messagesArr])
    }

    useEffect(() => {
        getMessageList()
    }, [currentChannel])

    return (
        <div className="chat">
            <ChatHeader channelName={currentChannel} />

            <div className="chat__messages">
                {/* MAP messages from firestore */}
                {messageList ? messageList.map(message => {
                    return <Message firebaseMessage={message} />
                }) : null
                }
                <div ref={anchor} style={{ marginBottom: "75px" }}></div>
            </div>
            <div className="chat__input">
                <AddCircle fontSize="large" />
                <form onSubmit={sendMessage}>
                    <input type="text"
                        disabled={currentChannel ? false : true}
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder={`Send messages # ${currentChannel || ""}`}
                    />
                    <button
                        disabled={currentChannel ? false : true}
                        className="chat__inputButton"
                        type="submit"
                    >
                        Send Message
                    </button>
                </form>

                <div className="chat__inputIcons">
                    <CreditCard fontSize="large" />
                    <Gif fontSize="large" />
                    <EmojiEmotions fontSize="large" />
                </div>
            </div>
        </div>
    )
}

export default ChatScreen
