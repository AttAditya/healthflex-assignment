import { useState } from 'react';
import './App.css';
import { CommentGroup } from './components/CommentGroup';

function App() {
    let dummyData = {
        "comment1": { "id": "comment1", "name": "user1", "comment": "Hi", "date": "August 15, 2024 04:01:20", "parent": "#HEAD" },
        "comment2": { "id": "comment2", "name": "user2", "comment": "Hello", "date": "August 15, 2024 04:01:33", "parent": "comment1" },
        "comment3": { "id": "comment3", "name": "user3", "comment": "Hey", "date": "August 15, 2024 04:01:46", "parent": "comment2" },
        "comment4": { "id": "comment4", "name": "user4", "comment": "Hola", "date": "August 15, 2024 04:01:57", "parent": "comment3" },
        "comment5": { "id": "comment5", "name": "user5", "comment": "Greetings", "date": "August 15, 2024 04:02:11", "parent": "comment4" },
    };

    let [data, setData] = useState(localStorage.getItem("healthflex-comments") ? JSON.parse(localStorage.getItem("healthflex-comments")) : dummyData);

    function addComment(name, comment, parent="#HEAD") {
        let id = "comment" + Math.floor(Math.random() * 1000000);
        let liveTime = new Date();

        let day = liveTime.getDate();
        let month = liveTime.toLocaleString('default', { month: 'long' });
        let year = liveTime.getFullYear();

        let hour = liveTime.getHours();
        let minute = liveTime.getMinutes();
        let second = liveTime.getSeconds();

        if (hour < 10) {
            hour = "0" + hour;
        }

        if (minute < 10) {
            minute = "0" + minute;
        }

        if (second < 10) {
            second = "0" + second;
        }
        
        let date = `${month} ${day}, ${year} ${hour}:${minute}:${second}`;
        
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
