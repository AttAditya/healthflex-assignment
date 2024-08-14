import { FaTrash } from "react-icons/fa";
import "./Comment.css";

export function Comment({ id, name, comment, date, replies, CommentGroup }) {
    return (
        <div className="comment-araea">
            <div className="comment box">
                <div className="comment-header">
                    <span className="comment-author">
                        {name}
                    </span>

                    <span className="comment-date">
                        {date}
                    </span>
                </div>
                
                <div className="comment-data">
                    {comment}
                </div>

                <div className="comment-actions">
                    <span className="comment-action">Reply</span>
                    <span className="comment-action">Edit</span>
                </div>

                <button className="comment-delete">
                    <FaTrash />
                </button>
            </div>

            {
                !replies ? "" : (
                    <CommentGroup data={replies} />
                )
            }
        </div>
    );
}