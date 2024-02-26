import React from 'react'
import { Carousel } from './Carousel/Carousel'

export default function Attractions() {
  return (
    <div className='container-a'>
      <h2 id="attractions"> Attractions </h2>

      <p className='a-desc'> By Continent, I will show famous sites in a slideshow/carousel. </p>

      <Carousel />

    </div>
  )
}
