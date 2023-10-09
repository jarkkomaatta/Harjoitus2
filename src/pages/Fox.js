import React, { useState,useEffect } from 'react'
import axios from 'axios'
import './about.css'

const URL = "https://randomfox.ca/floof/?ref=apilist.fun"

function refreshPage() {
  window.location.reload(false);
}

export default function About() {
  const [image, setImage] = useState(0)

  useEffect(() => {
    axios.get(URL)
    .then((response) => {
      setImage(response.data.image)
    }).catch((error) => {
      alert(error)
    })
  }, [])
  

  return (
    <div id="container">
      <img src={image} alt="" id="img" />
      <button id="button" onClick={refreshPage}>Refresh picture</button>
    </div>
  )
}
