import { useState } from 'react';
import './App.css';
import { CommentGroup } from './components/CommentGroup';

function App() {
    let dummyData = {
        "comment1" : {
            "id": "comment1",
            "name": "John Doe",
            "comment": "This is a comment.",
            "date": "2021-01-01",
            "parent": "#HEAD"
        },
        "comment2" : {
            "id": "comment2",
            "name": "Jane Doe",
            "comment": "This is another comment.",
            "date": "2021-01-02",
            "parent": "#HEAD"
        },
        "comment3" : {
            "id": "comment3",
            "name": "John Doe",
            "comment": "This is also a comment.",
            "date": "2021-01-03",
            "parent": "#HEAD"
        },
        "reply1" : {
            "id": "reply1",
            "name": "Jane Doe",
            "comment": "This is a reply.",
            "date": "2021-01-01",
            "parent": "comment1"
        }
    };

    let [data, setData] = useState(localStorage.getItem("healthflex-comments") ? JSON.parse(localStorage.getItem("healthflex-comments")) : dummyData);

    function addComment(name, comment, parent="#HEAD") {
        let id = "comment" + (Object.keys(data).length + 1);
        let liveTime = new Date();

        let day = liveTime.getDate();
        let month = liveTime.toLocaleString('default', { month: 'long' });
        let year = liveTime.getFullYear();
        let date = `${month} ${day}, ${year}`;
        
        data[id] = {
            "id": id,
            "name": name,
            "comment": comment,
            "date": date,
            "parent": parent
        };

        localStorage.setItem("healthflex-comments", JSON.stringify(data));
        setData({...data});
    }
    
    function deleteComment(id) {
        delete data[id];

        localStorage.setItem("healthflex-comments", JSON.stringify(data));
        setData({...data});
    }
    
    return (
        <div className="app">
            <CommentGroup data={data} parent="#HEAD" addComment={addComment} deleteComment={deleteComment} />
        </div>
    );
}

export default App;
