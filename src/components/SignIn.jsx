/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
// import React from 'react'
// import {Navigate, useNavigate } from 'react-router-dom'

export default function SignIn({user, setUser, handleSubmit}) {






  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="" id="" value={user.name} onChange={(e)  => setUser(e.target.value)} />
        <button>submit</button>
      </form>
    </div>
  )
}
