import React,{useState} from "react";
import {useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
const navigate=useNavigate();
    const dispatch = useDispatch();
    const [info, setInfo] = useState({
        name:'',
        phone:'',
        email:''
    })
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(info);
        const newInfo={
            id:Math.floor(Math.random()*9999),
            name:info.name,
            email:info.email,
            phone:info.phone,
        }
        dispatch({type:"ADD",payload:newInfo})
        navigate('/list')
    }
  return (
    <div className="container mt-5">
      <div className="card shadow p-5 w-50 mx-auto">
      <form action="" onSubmit={submitHandler}>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Email"
            value ={info.email} onChange={(e)=>setInfo({...info,email:e.target.value})}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter Name"
            value ={info.name} onChange={(e)=>setInfo({...info,name:e.target.value})}
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            id="phone"
            placeholder="Enter Phone Number"
            value ={info.phone} onChange={(e)=>setInfo({...info,phone:e.target.value})}
          />
        </div>
        <div className="container px-0">
            <button className="btn btn-dark w-100"> submit</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default AddContact;
