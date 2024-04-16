import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = ({ editData }) => {
    const [ids, setId] = useState();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();


    useEffect(() => {

        let data = editData.filter((data) => data.id === id);
        setName(data[0]?.name)
        setEmail(data[0]?.email)
        setId(data[0]?.id)
    }, [id])

    const handleEdit = (e) => {

        e.preventDefault();
        axios.put(`https://63e0cca859bb472a74291308.mockapi.io/crud/${id}`,
            {
                name: name,
                email: email,
            }).then(() => {
                navigate('/')
            });

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://63e0cca859bb472a74291308.mockapi.io/crud",
            {
                name: name,
                email: email,
                // header,
            }).then(() => {
                navigate("/")
            });

    };
    return (
        <>
            <div className="container">
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email" defaultValue={email} placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Name</label>
                        <input className="form-control" id="name" placeholder="Name" defaultValue={name} onChange={(event) => setName(event.target.value)} />
                    </div>
                    <br />
                    {
                        id ?
                            <button type="submit" className="btn btn-primary" onClick={handleEdit}>Update</button> :
                            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Create</button>
                    }

                </form>
            </div>

        </>


    )
}
export default Edit