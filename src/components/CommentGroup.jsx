import "./CommentGroup.css";

import { Comment } from "./Comment";
import { SendComment } from "./SendComment";

export function CommentGroup({ data, parent, addComment, deleteComment }) {
    let comments = Object.keys(data).filter((key) => {
        return data[key].parent === parent;
    });

    return (
        <div className="comment-group">
            <div className="comment-add">
                <SendComment parent={parent} addComment={addComment} />
            </div>
            
            <ul className="comment-list">
                {
                    comments.map((key) => {
                        return (
                            <li key={key}>
                                <Comment
                                    data={data}
                                    id={key}
                                    addComment={addComment}
                                    deleteComment={deleteComment}
                                />
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}