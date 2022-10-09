function Comments({data}) {
    return (
        <div className="container">
            {data.comments.map(comment => (
                <div key={comment.id} className="comment">
                    <div className="title">
                        <img src="/images/avatars/image-amyrobson.png" alt="Amy" />
                        <span className="username"><b>{comment.username}</b></span>
                        <span className="publication-date">{comment.createdAt}</span>
                    </div>
                    <p className="content">{comment.content}</p>
                    <ul className="votes">
                        <li>+</li>
                        <li>{comment.score}</li>
                        <li>-</li>
                    </ul>
                    <div className="actions">
                        <img src="/images/icon-reply.svg" alt="Reply Icon" />
                        <span>Reply</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Comments;