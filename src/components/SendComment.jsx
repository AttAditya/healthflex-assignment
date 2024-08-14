import { useRef, useState } from "react";
import "./SendComment.css";

export function SendComment({ parent, addComment }) {
    let nameRef = useRef();
    let commentRef = useRef();

    let [name, setName] = useState("");
    let [comment, setComment] = useState("");

    function updateName() {
        setName(nameRef.current.value);
    }

    function updateComment() {
        setComment(commentRef.current.value);
    }

    return (
        <div className="send-comment box">
            <h1 className="send-comment-title">
                Comment
            </h1>

            <input type="text" name="name" id="new-comment-name" placeholder="Name" className="comment-input" ref={nameRef} onChange={updateName} />
            <textarea name="comment" id="new-comment-text" rows="3" placeholder="Comment" className="comment-input" ref={commentRef} onChange={updateComment} />

            <div className="new-comment-actions">
                <button
                    className="comment-action-button"
                    disabled={name === "" || comment === ""}
                    onClick={() => {
                        addComment(name, comment, parent);
                        nameRef.current.value = "";
                        commentRef.current.value = "";
                        setName("");
                        setComment("");
                    }}
                >
                    Post
                </button>
            </div>
        </div>
    );
}