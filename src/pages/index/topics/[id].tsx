import React from 'react'
import { useParams } from 'react-router-dom'


function Topic() {
  //@ts-ignore
  let { id } = useParams();

  return (
    <div>
      <h3>{id}</h3>
    </div>
  );
}

export default Topic;