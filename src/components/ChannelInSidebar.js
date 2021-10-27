function ChannelInSidebar({ name, id }) {
    return (
        <div className="sidebarChannel">
            <h4>
                <span className="sidebarChannel__hash">#</span>
                {name}
            </h4>
        </div>
    )
}

export default ChannelInSidebar
