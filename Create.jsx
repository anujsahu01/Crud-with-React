import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export default function Create() {
    const [name , setName] = useState(" ");
    const [email , setEmail] = useState(" ");
    const [age , setAge] = useState( );
    // console.log(name , email , age);

    const[error , setError] = useState(" ");
    
    const navigate = useNavigate(" ");

    const handleSubmit = async (e) =>
    {
        e.preventDefault();

        const addUser= { name , email ,age}
        const response = await fetch("http://localhost:4000/" , {
            method:"post",
            body: JSON.stringify(addUser),
            headers:{
                "content-type":"application/json",
            },
        });
        const result = await response.json();
        if(!response.ok){
            console.log(result.error);
            setError(result.error);
        }
        if(response.ok){
            console.log(result);
            setError(" ");
            setName(" ");
            setEmail(" ");
            setAge( 0);
            navigate()
        }
    }
  return (
   <>
<div className='container col-6 offset-4 '>
{error && <div className='alert alert-danger col-6 mt-4 '>{error}</div>}
   <h2 className='text-center col-6'>
    Enter The Data
   </h2>
   
   <form className='mt-5' onSubmit={handleSubmit}>
    
  <div className="mb-3 col-6 ">
    <label  className="form-label">Name</label>
    <input type="text" className="form-control" value= {name} 
    onChange={(e) =>
        setName(e.target.value)
    }/> 
  </div>
  <div className="mb-3 col-6 ">
    <label className="form-label">Email</label>
    <input type="email" className="form-control"
     value= {email} 
     onChange={(e) =>
         setEmail(e.target.value)} />
  </div>
  <div className="mb-3 col-6 ">
    
    <label className="form-check-label" >Age</label>
    <input type="number" className="form-control" 
     value= {age} 
     onChange={(e) =>
         setAge(Number(e.target.value))}
          />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
   
</div>

  
   </>
  )
}
