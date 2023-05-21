import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const history = useNavigate();

    const header = { "Access-Control-Allow-Origin": "*" };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("clicked");
        axios.post("https://64521432bce0b0a0f73c0cee.mockapi.io/youtube", {

            name: name,
            email: email,
            header,
        })
        
        // history("/read");
        .then(() =>{
            history("/read");
        });
    };

    return (
        <>
            <h2>Create</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default Create
