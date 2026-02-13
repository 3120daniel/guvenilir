import React from 'react'

export default function Footer() {
    return (
        <div>
            <div className='max-w-7xl shadow mx-auto p-6 rounded-lg text-center'>
                    <p className='text-2xl font-semibold '>Fast and reliable withdrawal/deposit method</p>
                    <div className='flex justify-around gap-6 mt-12'>
                      {[btc, eth, usdt, xrp, ltc].map((item) => (
                        <img src={item} alt="" className='h-16 w-16 rounded-full' />
            
                      ))}
                    </div>
                  </div>

            <footer>
                <p>Logo</p>

                <nav>
                    <div>
                        <p>Our Company</p>
                        <ul>
                            <li>About Us</li>
                            <li>We We Offer</li>
                            <li>FAQ's</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <p>Our Company</p>
                        <ul>
                            <li>About Us</li>
                            <li>We We Offer</li>
                            <li>FAQ's</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <p>Our Company</p>
                        <ul>
                            <li>About Us</li>
                            <li>We We Offer</li>
                            <li>FAQ's</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <p>Our Company</p>
                        <ul>
                            <li>About Us</li>
                            <li>We We Offer</li>
                            <li>FAQ's</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                </nav>

                <br />

                <div>
                    <div>
                        <a href="">Terms</a>
                        <a href="">Terms</a>
                        <a href="">Terms</a>
                        <a href="">Terms</a>
                    </div>
                    <div>

                    </div>
                </div>
            </footer>
        </div>
    )
}
