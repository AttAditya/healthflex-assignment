import './App.css';
import { CommentGroup } from './components/CommentGroup';

function App() {
    let data = {
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
            "comment": "This is a reply.",
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
    
    return (
        <div className="app">
            <CommentGroup data={data} parent="#HEAD" />
        </div>
    );
}

export default App;
