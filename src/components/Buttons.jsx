import { ArrowRightCircle } from 'lucide-react';
import React, { useState } from 'react'

export default function Buttons({ btnTitle, btnStyles, withArrow }) {
    const [btnHover, setBtnHover] = useState(false);

    let handleBtnMouseIn = () => {
        setBtnHover(true)
    }
    let handleBtnMouseOut = () => {
        setBtnHover(false)
    }
    return (
        <button
            onMouseEnter={handleBtnMouseIn}
            onMouseLeave={handleBtnMouseOut}
            className={`${btnStyles} py-2 px-3 text-sm rounded-lg flex gap-2 items-center transition duration-200 ease-in-out whitespace-nowrap`}
        >
            {btnTitle}
            
            {withArrow && <ArrowRightCircle size={16} className={`${btnHover && "-rotate-45"}`} />}
        </button>
    )
}
