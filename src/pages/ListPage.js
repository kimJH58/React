import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router';


const ListPage = () =>{
    const history = useHistory();
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        axios.get('http://localhost:3002/api/getPostList').then((res) =>{
            setPosts(res.data);
        })
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            <div className='d-flex justify-content-between'>
                <h1>Blogs</h1>
                <div>
                    <Link to="/blogs/create" className="btn btn-primary">
                        New
                    </Link>
                </div>
            </div>
            {posts.map(post =>{
                return (
                    <Card 
                        key = {post.id} 
                        title={post.title}
                        onClick={()=>{history.push({
                            pathname : '/blogs/read',
                            state : {
                                id: post.id,
                                title:post.title,
                                body:post.body
                            }
                        })}}
                        onClick_edit={(event) => {
                            event.stopPropagation();
                            history.push({
                                pathname : '/blogs/edit',
                                state : {
                                    id : post.id
                                }
                            })
                        }}
                    >
                        {/* 한개의 element만 가능 */}
                        {/* <button>
                            delete
                        </button> */}
                    </Card>
                )
            })}
        </div>
    );
};
export default ListPage;