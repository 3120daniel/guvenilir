import { Database, Server } from 'lucide-react'
import React from 'react'
import Buttons from './Buttons'

export default function Pricing() {

    let pricing = [
        {
            title: "Plan A",
            details: {
                min: "25",
                max: "499",
                dailyProfit: "15",
                duration: "After 24 Hours",
                referalBonus: "10%"
            },
            // category: "Crypto currency trading"
        },
        {
            title: "Plan B",
            details: {
                min: "500",
                max: "999",
                dailyProfit: "20",
                duration: "After 48 Hours",
                referalBonus: "15%"
            },
            // category: "Stock trading"
        },
        {
            title: "Plan C",
            details: {
                min: "500",
                max: "999",
                dailyProfit: "20",
                duration: "After 48 Hours",
                referalBonus: "15%"
            },
            // category: "Stock trading"
        },
        {
            title: "Plan D",
            details: {
                min: "500",
                max: "999",
                dailyProfit: "20",
                duration: "After 48 Hours",
                referalBonus: "15%"
            },
            // category: "Stock trading"
        },
        {
            title: "Plan D",
            details: {
                min: "500",
                max: "999",
                dailyProfit: "20",
                duration: "After 48 Hours",
                referalBonus: "15%"
            },
            // category: "Stock trading"
        }
    ]
    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                Invest in
                <span className="relative inline-block">
                    Crypto currency trading
                    <span className="absolute left-0 -bottom-2 w-full h-1 bg-yellow-500"></span>
                </span>
            </h2>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2 lg:gap-4 px-4'>
                {pricing.map((plan, index) => (
                    <div key={index} className='bg-black text-white p-8 rounded-lg'>
                        <div className='flex gap-4 mb-4'>
                            <div className='rounded-full bg-red-400 flex justify-center items-center h-6 w-6'>
                                <Database size={15} />
                            </div>
                            <p className='text-2xl font-semibold'>{plan.title}</p>
                        </div>
                        {/* List */}
                        <ul className='list-disc list-inside pl-4 mb-4'>
                            <li>Minimum: ${plan.details.min}</li>
                            <li>Maximum: ${plan.details.max}</li>
                            <li>Daily Profit: {plan.details.dailyProfit}%</li>
                            <li>Duration: {plan.details.duration}</li>
                            <li>Referral Bonus: {plan.details.referalBonus}</li>
                            <li>Category: <span className='bg-red-400 whitespace-nowrap px-1 py-0.5 text-xs rounded-lg'>Crypto currency trading</span></li>
                        </ul>

                        <div className='flex justify-end'>
                            <Buttons btnTitle="Get Started" btnStyles="text-amber-400" withArrow={true} />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
