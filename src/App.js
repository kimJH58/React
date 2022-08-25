import {useState} from 'react';
import axios from 'axios';

function App(){
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const onSubmit = () =>{
    console.log(title, body)
    axios.post('http://localhost:3001/posts', {
      title: title,
      body: body
    })
  }
  return (
    <div className="container">
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input 
          className="form-control" 
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Body</label>
        <textarea
          className="form-control" 
          value={body}
          rows="20"
          onChange={(e) => {
            setBody(e.target.value)
          }}
        />
      </div>
      <button
        onClick={onSubmit} 
        className="btn btn-primary"
        >
          Post
        </button>
    </div>
  )
}

export default App;