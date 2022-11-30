import React, { useState } from "react";
import axios from 'axios';

const LoginPage = () =>{
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');

    const onSubmit = () =>{
        try{
            axios.post('http://localhost:3002/user/login', {id, pwd}).then(()=>{
                /**다음 경로 */
            })
        }catch(err){
            console.log(err);
        }
    }
    return (
        <div>
            <h4 className="text-center">Login</h4>
            <form>
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3"/>
                    </div>
                </div>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button
                        type="submit" className="btn btn-primary"
                        onClick={onSubmit}
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage;