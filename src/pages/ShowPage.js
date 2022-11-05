import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

const ShowPage = () =>{
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    // const history = useHistory();

    const getPost = (id) =>{
        axios.get(`http://localhost:3002/api/getPost/${id}`).then((res)=>{
            setPost(res.data.data[0]);
            setLoading(false);
        })
    };

    useEffect(() =>{
        getPost(id);
    },[id])

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <small className='text-muted'>{post.created_at}</small>
            <br/>
            <p>{post.body}</p>

            {/* <button onClick={()=>history.push('/blogs/3')} className="btn btn-primary">Click</button> */}
        </div>
    )
}

export default ShowPage;