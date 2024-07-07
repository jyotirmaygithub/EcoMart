import React from 'react'
import Header from '../components/header/header'
import Carousel from '../components/Carousel/carousel'
import ProductList from '../components/products/products'

export default function landingPage() {
  return (
    <div>
      <Header/>
      <Carousel/>
      <ProductList/>
    </div>
  )
}
