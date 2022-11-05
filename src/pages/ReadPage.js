import React from "react";
import { useLocation } from 'react-router-dom';

const ReadPage = () =>{
    const location = useLocation();
    const post = location.state.post;
    return (
        <div className="d-flex justify-content-between">
            <div className="card wd_100">
                <div className="card-body">
                    <h5 className="card-title">
                        {post.title}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        {post.created_at}
                    </h6>
                    <br/>
                    <p className="card-text">
                        {post.body}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ReadPage;