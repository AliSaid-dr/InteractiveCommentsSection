function AddComment() {
    return (
        <div className="container">
            <div className="add-comment-container">
                <form action="" className="comment-form">
                    <textarea name="comment" id="comment" rows="6" className="comment" placeholder = "Add a comment..."></textarea>
                    <img src="/images/avatars/image-juliusomo.png" className="avatar-image" alt="Avatar" />
                    <input className="send" type="submit" value="send"/>
                </form>
            </div>
        </div>
    )
}

export default AddComment;