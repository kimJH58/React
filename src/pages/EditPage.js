import React from 'react';
import BlogForm from "../components/BlogForm";
import { useLocation } from 'react-router-dom';

import axios from 'axios';
import { useState, useEffect } from "react";

const EditPage = () =>{
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

    if(data.id){
        return (
            <div>
                <h2>Edit</h2>
                <BlogForm
                    id = {data.id}
                    title = {data.title}
                    body = {data.body}
                    submit = 'edit'
                />
            </div>
        )
    }


};
export default EditPage;