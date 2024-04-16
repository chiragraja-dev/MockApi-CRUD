import axios from 'axios';
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';


const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const history = useNavigate();

    const header = { "Access-Control-Allow-Origin": "*" }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://63e0cca859bb472a74291308.mockapi.io/crud",
            {
                name: name,
                email: email,
                header,
            }).then(() => {
                history('/Home')
            });

    };
    return (
        <>

            <div className="container">
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Name</label>
                        <input className="form-control" id="name" placeholder="Name" onChange={(event) => setName(event.target.value)} />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </form>
            </div>

        </>
    )
}

export default Create