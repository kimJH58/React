import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router';

const BlogForm = (props)=>{
  const history = useHistory();
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  const [id] = useState(props.id);

  const onSubmit = () =>{
    try{
      axios.post('http://localhost:3002/api/post', 
      {title, body, id}
      ).then(() =>{
        history.push('/blogs')
      });
      // history.push({
      //   pathname : '/blogs'
      // })
    }catch(err){
      console.log(title, body)
      console.log(err);
    }
  }

  return (
      <div>
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
              {props.submit}
          </button>
          {props.children}
      </div>
  )

}

BlogForm.defaultProps = {
  id:0,
  title:'',
  body:'',
  children:null,
  onClick: () => {},
  submit : 'post'
}

export default BlogForm;