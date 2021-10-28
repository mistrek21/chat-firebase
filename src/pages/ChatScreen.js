import { useState, useEffect, useRef } from 'react'
import { AddCircle, CreditCard, Gif, EmojiEmotions } from '@material-ui/icons'
import ChatHeader from '../components/ChatHeader'

function ChatScreen({ currentChannel }) {
    const [inputMessage, setInputMessage] = useState('')

    return (
        <div className="chat">
            <ChatHeader channelName={currentChannel} />

            <div className="chat__messages">
                {/* MAP messages from firestore */}
            </div>
            <div className="chat__input">
                <AddCircle fontSize="large" />
                <form>
                    <input type="text"
                        disabled
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder={`Send messages # ${currentChannel || ""}`}
                    />
                    <button disabled className="chat__inputButton" type="submit">
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
