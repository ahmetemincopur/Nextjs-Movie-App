import React from 'react'

const page = ({params}) => {
  const id=params.movieId;
  console.log(id)
  return (
    <div>{id}</div>
  )
}

export default page