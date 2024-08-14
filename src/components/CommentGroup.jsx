import "./CommentGroup.css";

import { Comment } from "./Comment";
import { SendComment } from "./SendComment";

export function CommentGroup({ data, parent }) {
    let comments = Object.keys(data).filter((key) => {
        return data[key].parent === parent;
    });

    return (
        <div className="comment-group">
            <div className="comment-add">
                <SendComment />
            </div>
            
            <ul className="comment-list">
                {
                    comments.map((key) => {
                        return (
                            <li key={key}>
                                <Comment
                                    data={data}
                                    id={key}
                                />
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}