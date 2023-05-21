import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";


const Read = () => {
    const [data, setData] = useState([])

    function getData() {
        axios
            .get("https://64521432bce0b0a0f73c0cee.mockapi.io/youtube")
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            });
    }
    function handeleDelete(id){
        axios.delete(`https://64521432bce0b0a0f73c0cee.mockapi.io/youtube/${id}`
        ).then(()=>{
            getData()
        })
    }
    const setToLocalStorage=(id,name,email) =>{
        localStorage.setItem("id",id)
        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
    }
    useEffect(() => {
        getData()

    }, [])



    return (
        <>
            <h2 className='text-center' style={{ color: 'blue' }}>Read operation</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                {
                    data.map((eachData) => {
                        return (
                            <>
                                <tbody>
                                    <tr>
                                        <td>{eachData.id}</td>
                                        <td>{eachData.name}</td>
                                        <td>{eachData.email}</td>
                                        <td>
                                            <Link to="/update">
                                                <button className='btn btn-success'
                                                 onClick= {() => setToLocalStorage(eachData.id, eachData.name, eachData.email)}
                                                > Edit</button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button className='btn btn-warning'
                                                 onClick={() => handeleDelete(eachData.id)}
                                                >
                                                Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </>
                        )
                    })

                }
            </table>
        </>
    )
}

export default Read
