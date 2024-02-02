import React from 'react'
import Popular from '../Components/Popular/Popular'
import Home from '../Components/Home/Home' 
import Offers from '../Components/Offers/Offers'
import NewCollection from '../Components/NewCollections/NewCollection'
import NewLetter from '../Components/NewsLetter/NewLetter'


export default function Shop() {
  return (
    <div>
      <Home/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <NewLetter/>
    </div>
  )
}
