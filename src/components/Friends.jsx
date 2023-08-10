// eslint-disable-next-line no-unused-vars
import React from 'react'
import ShowFriends from './ShowFriends'
const Friends = () => {
  return (
  <>
    <h1 className="text-center">Friends List</h1>
    <div className="flex flex-col items-center justify-center">
      <div className="container mx-auto my-4 px-4">
        <div className="container mx-auto">
          <ShowFriends/>
        </div>
      </div>
    </div>
  </>
  )
}

export default Friends
