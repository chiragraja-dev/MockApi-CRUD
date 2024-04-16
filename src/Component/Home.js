import React, { Fragment } from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ getEditData, firstName }) => {

    const [data, setData] = useState([]);


    function getData() {
        axios.get(`https://63e0cca859bb472a74291308.mockapi.io/crud`).then((res) => {
            setData(res.data)
        })
    }

    function handleDelete(id) {
        axios.delete(`https://63e0cca859bb472a74291308.mockapi.io/crud/${id}`).then((res) => {
            getData();
        })
    }

    const setIntoLocal = (id) => {

        // function call
        getEditData(data)


    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <>
            <div className="container">
                <Link to="/Edit">Create</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th>Update</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    {
                        data.map((d, index) => {
                            return (
                                <>
                                    <tbody>
                                        <tr>
                                            <th scope="row">{d.id}</th>
                                            <td>{d.name}</td>
                                            <td>{d.email}</td>
                                            <Link to={`/Edit/${d.id}`}>
                                                <td><button className='btn btn-success btn-sm' onClick={() => setIntoLocal(d.id)}>Edit</button></td>
                                            </Link>
                                            <td><button className='btn btn-danger btn-sm' onClick={() => handleDelete(d.id)}>Delete</button></td>
                                        </tr>

                                    </tbody>
                                </>
                            )
                        })
                    }


                </table>
            </div>
        </>
    )
}

export default Home