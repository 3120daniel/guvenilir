import React from 'react'

export default function Faqs() {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-2 gap-x-6 gap-y-2 py-10'>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title font-semibold">How do I create an account?</div>
                            <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}
