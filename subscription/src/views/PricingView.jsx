import React from 'react'
import PricingCard from '../components/pricing/PricingCard'


const PricingView = () => {
    return (
        <div className='Pricing-View'>
            <PricingCard
                title="Gold"
            />
            <PricingCard
                title="Silver"
            />
            <PricingCard
                title="Bronze"
            />
        </div>
    )
}

export default PricingView