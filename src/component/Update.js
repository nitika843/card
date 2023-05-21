import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Update = () => {
    const[id, setId]=useState(0);
    const[name, setName]=useState("");
    const[email, setEmail]=useState("");
    
const navigate =useNavigate();

    useEffect(()=>{
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    },[])

     const handleUpdate=(e) =>{
        e.preventDefault();
        console.log("id...",id);
        axios
        .put(`https://64521432bce0b0a0f73c0cee.mockapi.io/youtube/${id}`,
       {
        name: name,
        email: email,
       }
       
        ).then(()=>{
            navigate("/read");
        });
     };


    return (
        <>
            <h2>Update</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" value={name}
                    onChange={(e) => setName(e.target.value)} 
                    className="form-control" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary"
                 onClick={handleUpdate}
                >Update</button>
            </form>
        </>
    )
}
// kfkhfdkllkdlddnk,d,
export default Update
