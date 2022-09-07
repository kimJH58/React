import React from 'react';
import BlogForm from "../components/BlogForm";
import { useLocation, useHistory } from 'react-router-dom';

import axios from 'axios';
import { useState, useEffect } from "react";

const EditPage = () =>{
    const history = useHistory();
    const location = useLocation();
    const [data, setData] = useState({});
    const getData = () =>{
        axios.get('http://localhost:3002/api/getPost/'+location.state.id).then((res) =>{
            setData(res.data.data[0])
        })
    }
    useEffect(()=>{
        getData();
    }, []);

    const deletePost = (id)=>{
        try{
            axios.get('http://localhost:3002/api/deletePost?id='+id);
            history.push('/blogs');
        }catch(err){
            console.log(id)
            console.log(err);
        }
    
    }

    if(data.id){
        return (
            <div>
                <h2>Edit</h2>
                <BlogForm
                    id = {data.id}
                    title = {data.title}
                    body = {data.body}
                    submit = 'edit'
                >
                <button
                    className="btn btn-danger"
                    onClick={() => deletePost(data.id)}
                >
                    delete
                </button>
                </BlogForm>
            </div>
        )
    }


};
export default EditPage;