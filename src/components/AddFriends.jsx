import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, redirect } from 'react-router-dom'

const AddFriends = () => {
  const [username, setusername] = useState('')
  const [error, seterror] = useState('')
  const navigate = useNavigate()
  function submitform(e) {
    e.preventDefault()
    axios.post('http://127.0.0.1:3000/friends/create', {
      username: username
    }).then((response) => {
      navigate('/Friends')
    }).catch((error) => {
      seterror(error.response.data.error)
    })
  }
  return (
    <>
      <div className='flex justify-center mt-10'>
        <h1 className='text-center'>Add Friends</h1>
      </div>
      <div className='flex justify-center  mt-8'>
        <div className="w-full max-w-xs">
          <form className="bg-dark rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e) => submitform(e)}>
            <div className="mb-4">
              <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                onChange={(e) => { setusername(e.target.value) }}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddFriends
