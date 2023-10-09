import React, { useState,useEffect } from 'react'
import axios from 'axios'
import "./home.css"

const URL = "https://www.themealdb.com/api/json/v1/1/random.php"

function refreshPage() {
  window.location.reload(false)
}

export default function Home() {
  const [meal, setMeal] = useState('') 
  const [category, setCategory] = useState('')
  const [area, setArea] = useState('')
  const [tags, setTags] = useState('')
  const [youtube, setYoutube] = useState('')


  useEffect(() => {
    axios.get(URL)
    .then((response) => {
      console.log(response.data)
      setMeal(response.data.meals[0].strMeal)
      setCategory(response.data.meals[0].strCategory)
      setArea(response.data.meals[0].strArea)
      setTags(response.data.meals[0].strTags)
      setYoutube(response.data.meals[0].strYoutube)
    }).catch((error) => {
      alert(error)
    })
  }, [])
  

  return (
    <div>
      <h3>RANDOM MENU</h3>
      <p>Meal: {meal}</p>
      <p>Meal category: {category}</p>
      <p>Meal is from: {area}</p>
      <p>Tags for meal: {tags}</p>
      <button id="button"><a href={youtube} id="link">Youtube link</a></button>
      <button id="button" onClick={refreshPage}>New meal</button>
    </div>
  )
}