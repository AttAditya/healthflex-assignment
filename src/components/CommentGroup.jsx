import "./CommentGroup.css";

import { Comment } from "./Comment";
import { SendComment } from "./SendComment";

export function CommentGroup({ data }) {
    return (
        <div className="comment-group">
            <div className="comment-add">
                <SendComment />
            </div>
            
            <ul className="comment-list">
                {
                    Object.keys(data).map((key) => {
                        return (
                            <li key={key}>
                                <Comment
                                    id={data[key].id}
                                    name={data[key].name}
                                    comment={data[key].comment}
                                    date={data[key].date}
                                    replies={data[key].replies}
                                    CommentGroup={CommentGroup}
                                />
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}