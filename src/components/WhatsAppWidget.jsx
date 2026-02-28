import React from 'react'
import whatsappIcon from "../assets/whatsapp-icon.svg"

export default function WhatsAppWidget() {
    return (
        <button className='btn bg-[#4DC247] border-0 rounded-full fixed bottom-56 text-white text-lg z-50'>
           <img src={whatsappIcon} alt="whatsapp" width={28} /> Chat Us
        </button>
    )
}
