import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Update() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [error, setError] = useState("");


    const getSingleUser = async () => {
        try {
            const response = await fetch(`http://localhost:4000/${id}`);
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Something went wrong");
            }

            
            setName(result.name);
            setEmail(result.email);
            setAge(result.age);
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        if (id) getSingleUser(); 
    }, [id]);

    
    const handleUpdate = async (e) => {
        e.preventDefault(); 

        const updatedUser = { name, email, age };

        try {
            const response = await fetch(`http://localhost:4000/${id}`, {
                method: "PUT",
                body: JSON.stringify(updatedUser),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Failed to update user.");
            }

            alert("User updated successfully!");
            navigate("/All"); // 
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="container">
            {error && <div className="alert alert-danger">{error}</div>}

            <h2 className="text-center">Edit The Data</h2>

            <form onSubmit={handleUpdate}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input
                        type="number"
                        className="form-control"
                        value={age}
                        onChange={(e) => setAge(Number(e.target.value))}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Update
                </button>
            </form>
        </div>
    );
}
