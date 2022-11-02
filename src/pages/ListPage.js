import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router';
import LoadingSpinner from '../components/LoadingSpinner';

const ListPage = () =>{
    const history = useHistory();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const getPosts = () => {
        axios.get('http://localhost:3002/api/getPostList').then((res) =>{
            setPosts(res.data);
            setLoading(false);
        })
    }

    useEffect(() => {
        getPosts();
    }, []);

    const renderBlogList = () =>{
        if(loading){
            return(
                <LoadingSpinner />
            );
        }

        if(posts.length === 0){
            return(
                <div>
                    'No blog posts found'
                </div>
            )
        }

        return posts.map(post =>{
            return (
                <Card 
                    key = {post.id} 
                    title={post.title}
                    onClick={()=>{history.push({
                        pathname : `/blogs/${post.id}`
                        // pathname : '/blogs/read',
                        // state : {
                        //     post:post
                        // }
                    })}}
                >
                    <button 
                        className='btn btn-success btn-sm'
                        onClick={(event) => {
                            event.stopPropagation();
                            history.push({
                                pathname : '/blogs/edit',
                                state : {
                                    id : post.id
                                }
                            })
                        }}
                    >
                        edit
                    </button>
                    {/* 한개의 element만 가능 */}
                    {/* <button>
                        delete
                    </button> */}
                </Card>
            )
        })
    }

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
            {renderBlogList()}
        </div>
    );
};
export default ListPage;