import {useState} from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

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
    <Router>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">Home</Link>
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/blogs">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route path="/" exact>
          Home Page
        </Route>
        <Route path="/blogs" exact>
          <div className="container">
            <h2>Create a blog post</h2>
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
        </Route>
      </Switch>
    </Router>
  )
}

export default App;