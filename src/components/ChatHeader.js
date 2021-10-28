import { Notifications, Room, PeopleAlt, Search, Send, Help } from '@material-ui/icons'

function ChatHeader({ channelName }) {
    return (
        <div className="chatHeader">
            {/* Left */}
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">#</span>
                    {channelName}
                </h3>
            </div>
            {/* Right */}
            <div className="chatHeader__right">
                <Notifications />
                <Room />
                <PeopleAlt />

                <div className="chatHeader__search">
                    <input placeholder="search" />
                    <Search />
                </div>
                <Send />
                <Help />
            </div>
        </div>
    )
}

export default ChatHeader
