import React , {useState, useEffect} from 'react'
import PricingView from '../views/PricingView'
import Navbar from '../components/heading/NavBar'

const PricingPage = () => {
    const [priceData, setPriceData] = useState({})

    return (
        <>
        <Navbar/>
        <PricingView/>
        </>
    )
}

export default PricingPage