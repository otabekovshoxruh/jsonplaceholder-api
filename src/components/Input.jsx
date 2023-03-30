import React, { useState } from 'react'
import './style.css'


export default function Input({ CreateUser }) {
  // const [name, setName]=useState("")
  const submit = (e)=>{
    e.preventDefault()
    console.log(e.target.name.value)
    CreateUser(e.target.name.value,
               e.target.email.value,
               e.target.username.value,
               e.target.phone.value,
               e.target.website.value
      );
    e.target.name.value = "";
    e.target.email.value = ""
    e.target.username.value = ""
    e.target.phone.value = ""
    e.target.website.value = ""
    
    
  }

  return (
    <div className='wrapper'>
         <form  className="form__column" onSubmit={submit}> 
            <label>name</label>
            <input className='form__input' type="text" name='name'
            />
            <label> User name</label>
            <input className='form__input' type="text" name='username'/>
            <label>email</label>
            <input className='form__input' type="email" name='email' />
            <label>Phone</label>
            <input className='form__input' type="number" name='phone'/>
            <label>website</label>
            <input className='form__input' type="text" name='website'/>
         <button  onSubmit={submit}>submit</button>
      </form>
    </div>
  )
}
//  onChange={(e)=> CreateUser({ username:e.target.value}}