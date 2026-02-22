import React from 'react'
import Pricing from '../components/Pricing'
import Banner from '../components/Banner'

export default function Plans() {
  return (
    <div>
      <Banner title="Plans" desc="Chose fron any of our plans" />
      <div className='mt-10'>
        <Pricing />
      </div>
    </div>
  )
}
