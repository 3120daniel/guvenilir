import React from 'react'
// npm install embla-carousel-autoplay --save

export default function Faqs() {
    return (
        <div>
            <div className='max-w-7xl mx-auto py-20'>
                <p className='text-center'>
                    FAQ's <br />
                    <span className='text-4xl font-semibold'>Frequently Asked Questions</span>
                    </p>
                    
                <div className='grid md:grid-cols-2 gap-x-6 gap-y-2 py-10 px-4'>
                    {[
                        { title: "How long does it take to process my withdrawl?", desc: "Once we receive your withdrawal request we process immediately and send to your provided wallet address" },
                        { title: "How many times can I make deposit?", desc: "You are allowed to make a deposit as much as you want on all our investment plans." },
                        { title: "How do I make a withdrawal", desc: "To make a withdrawal request click the WITHDRAW button at the top center of your account dashboard and input the required details to withdraw." },
                        { title: "How long does my deposit take before it can reflect on my account dashboard?", desc: "Your deposit will be reflected immediately once it is confirmed on the blockchain network." },
                        { title: "Can I have more than two accounts", desc: "We do not allow multiple accounts." },
                        { title: "How do I deposit funds?", desc: "To deposit funds in your trading account is quick and simple For your convenience you may choose one of the several available deposit methods To make a successful deposit please follow the steps below Login to your account Click on the DEPOSITS button in the DASHBOARD section Choose the deposit option And follow the steps to complete your transaction." }].map((item, i) => (
                            <div className="collapse collapse-arrow bg-gray-100">
                                <input type="radio" name="my-accordion-2" defaultChecked />
                                <div className="collapse-title font-semibold text-lg md:text-xl">{item.title}</div>
                                <div className="collapse-content text-sm">{item.desc}</div>
                            </div>

                        ))}
                </div>
            </div>
        </div>
    )
}
