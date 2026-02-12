import { ArrowRightCircle } from 'lucide-react';
import React, { useState } from 'react'

export default function Buttons({ btnTitle, btnStyles }) {
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
            className={`${btnStyles} p-2 rounded-lg flex gap-2 items-center transition duration-200 ease-in-out whitespace-nowrap`}
        >
            {btnTitle}
            
            <ArrowRightCircle size={16} className={`${btnHover && "-rotate-45"}`} />
        </button>
    )
}
