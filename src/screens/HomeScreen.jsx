import React from 'react'
import About from '../components/About'
import Counter from '../components/Counter'
import Fotter from '../components/Fotter'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Product from '../components/Product'
import TimeTable from '../components/TimeTable'

export default function HomeScreen() {
  return (
    <div>
         <Header/>
 <Hero/>
 <Product/>
 <About/>
 <TimeTable/>
 <Counter/>
 <Fotter/>
    </div>
  )
}
