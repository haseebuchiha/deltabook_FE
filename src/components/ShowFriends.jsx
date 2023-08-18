import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'

const ShowFriends = () => {
  const [value,setvalue]=useState([])
  useEffect(() => {
    axios.get('http://127.0.0.1:3000/friends/show?username=Ali')
      .then((response) => {
        setvalue(response.data)
      });
  },[]);
  return (
    <ul role="list" className="flex justify-center flex-col items-center">
    {value?.map((person) => (
      <li key={person.email} className="flex gap-x-6 py-5">
        <div className="flex gap-x-4">
          <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'} alt="" />
          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-white-900">{person.username}</p>
            <p className="text-sm font-semibold leading-6 text-white-500">{person.email}</p>
          </div>
        </div>
      </li>
    ))}
  </ul>
  )
}

export default ShowFriends
