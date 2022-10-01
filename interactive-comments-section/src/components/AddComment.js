function AddComment() {
    return (
        <div className="add-comment-container">
            <form action="">
                <div className="comment-text">
                    <textarea name="comment" id="comment" cols="41" rows="5" className="comment" placeholder = "Add a comment..."></textarea>
                </div>
                <div className="comment-item">
                    <img src="/images/avatars/image-juliusomo.png" className="avatar-image" alt="Avatar" />
                    <input className="send" type="submit" value="send"/>
                </div>
            </form>
        </div>
    )
}

export default AddComment;