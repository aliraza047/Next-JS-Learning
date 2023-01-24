import React from 'react'

function UserCard({user}) {
  return (
    <>
     <h2>{user.name}</h2>
     <h3>{user.email}</h3>
    </>
  )
}
export default UserCard
