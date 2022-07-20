import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UsersForm = ({getUser, userSelected, deselectUser}) => {
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [birthday, setBirthday] = useState()

    useEffect(() =>{
        if(userSelected !== null){
            setFirst(userSelected.first_name)
            setLast(userSelected.last_name)
            setEmail(userSelected.email)
            setPassword(userSelected.password)
            setBirthday(userSelected.birthday)
        }
    },[userSelected])

    const submit = e =>{
        e.preventDefault();
        const newUser={
            first_name: first, last_name: last, email, password, birthday: birthday
        }
        if(userSelected !== null){
            alert("Actualizando");
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, newUser)
            .then(()=>getUser)
            reset();
            deselectUser()
        }
        else{
            // Añadir usuario nuevo
        alert("Añadiste un usuario")
        axios.post('https://users-crud1.herokuapp.com/users/', newUser)
        .then(() => getUser())
        .catch(error => console.log(error.response))
        reset();
        }
    }

    const reset = () =>{
        setFirst("")
        setLast("")
        setEmail("")
        setPassword("")
        setBirthday("")
    }
    const clear = () =>{
        reset();
        deselectUser()
    }
   
    return (
       <form className='Form' onSubmit={submit}>
            <h1>Sign up</h1> <p>In this form, you can participe with another users on our public API, from Academlo.</p>
            <div className='input-container'>
                <label className='Label' htmlFor="first"><i class="fa-solid fa-user"></i></label>
                <input type="text" id='first' placeholder='First name...' onChange={e=>setFirst(e.target.value)} value={first}/>
                <input type="text" id='last' placeholder='Last name...' onChange={e=>setLast(e.target.value)} value={last}/>
            </div>
            <div className='input-container'>
                <label className='Label' htmlFor="email"><i class="fa-solid fa-envelope"></i></label>
                <input type="text" id='email' placeholder='Your email' onChange={e=>setEmail(e.target.value)} value={email}/>

            </div>
            <div className='input-container'>
                <label className='Label' htmlFor="password"><i class="fa-solid fa-key"></i></label>
                <input type='password' id='password' placeholder='Your password' onChange={e=>setPassword(e.target.value)} value={password}/>
            </div>
            <div className='input-container'>
                <label className='Label' htmlFor="birthday"><i class="fa-solid fa-cake-candles"></i></label>
                <input type='date' id='birthday' value={birthday} onChange={(e) => setBirthday(e.target.value)}/>
            </div>
            <button className='register' type='submit'>Upload</button>
            <button className='clear' type='button' onClick={clear}>Clear</button>
        </form>
    );
};

export default UsersForm;