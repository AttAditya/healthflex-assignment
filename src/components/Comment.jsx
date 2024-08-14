import "./Comment.css";
import { FaTrash } from "react-icons/fa";
import { CommentGroup } from "./CommentGroup";

export function Comment({ data, id }) {
    let name = data[id].name;
    let comment = data[id].comment;
    let date = data[id].date;

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

            <div className="comment-replies">
                <CommentGroup data={data} parent={id} />
            </div>
        </div>
    );
}