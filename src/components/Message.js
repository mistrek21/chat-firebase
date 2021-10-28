import { Avatar } from '@material-ui/core'

function Message({ firebaseMessage }) {
    return (
        <div className="message">
            <Avatar src={firebaseMessage.photo} />
            <div className="message__info">
                <h4>
                    {firebaseMessage.user}
                    <span className="message__timestamp">
                        {new Date(firebaseMessage.id).toLocaleString()}
                    </span>
                </h4>

                <p>{firebaseMessage.message}</p>
            </div>

        </div>
    )
}

export default Message
