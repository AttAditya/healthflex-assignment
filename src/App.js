import './App.css';
import { CommentGroup } from './components/CommentGroup';

function App() {
    let data = {
        "comment1" : {
            "id": "comm1",
            "name": "John Doe",
            "comment": "This is a comment.",
            "date": "2021-01-01",
            "replies": {
                "reply1" : {
                    "id": "rep1",
                    "name": "Jane Doe",
                    "comment": "This is a reply.",
                    "date": "2021-01-01"
                }
            }
        },
        "comment2" : {
            "id": "comm2",
            "name": "Jane Doe",
            "comment": "This is another comment.",
            "date": "2021-01-02"
        },
        "comment3" : {
            "id": "comm3",
            "name": "John Doe",
            "comment": "This is a reply.",
            "date": "2021-01-03"
        }
    };
    
    return (
        <div className="App">
            <CommentGroup data={data} />
        </div>
    );
}

export default App;
