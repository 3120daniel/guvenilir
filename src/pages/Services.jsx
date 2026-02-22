import React from 'react'
import Banner from '../components/Banner'
import OurServices from '../components/OurServices'

export default function Services() {
    return (
        <div>
            <Banner title="Our Services" desc="Chose fron any of our plans" />
            <div className='mt-10'>
                <OurServices />
            </div>
        </div>
    )
}
