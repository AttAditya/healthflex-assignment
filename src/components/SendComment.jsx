import "./SendComment.css";

export function SendComment() {
    return (
        <div className="send-comment box">
            <h1 className="send-comment-title">
                Comment
            </h1>

            <input type="text" name="name" id="new-comment-name" placeholder="Name" className="comment-input" />
            <textarea name="comment" id="new-comment-text" rows="3" placeholder="Comment" className="comment-input"></textarea>

            <div className="new-comment-actions">
                <button className="comment-action-button">
                    Post
                </button>
            </div>
        </div>
    );
}