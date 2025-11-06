import React from 'react'

export default async function UserPage({params}: {params: {id: string}}) {
  const {id} = await params
  const res = id // simulate fetching user data based on id
  console.log("User ID:", res);

  return (
    <h1>userId: {id}</h1>
  )
}
