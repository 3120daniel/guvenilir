import React from 'react'
import Buttons from './Buttons'

export default function ThreeSteps() {
    return (
        <div>
            <div className='bg-black flex px-20'>
                {/* col 1 */}
                <div className='space-y-6 w-full'>
                    <p>Begin trading in three steps</p>
                    <div className='flex items-center gap-6'>
                        <div className='bg-amber-400 h-12 w-12 rounded-full flex justify-center items-center'>
                            1
                        </div>
                        <div className='border border-amber-400 p-6 rounded-xl'>
                            <p>Register</p>
                            <p>Create an account in few minutes, verify your email and you are set to go.</p>
                        </div>

                    </div>
                    <div className='flex items-center gap-6'>
                        <div className='bg-amber-400 h-12 w-12 rounded-full flex justify-center items-center'>
                            1
                        </div>
                        <div className='border border-amber-400 p-6 rounded-xl'>
                            <p>Register</p>
                            <p>Create an account in few minutes, verify your email and you are set to go.</p>
                        </div>

                    </div>
                    <div className='flex items-center gap-6'>
                        <div className='bg-amber-400 h-12 w-12 rounded-full flex justify-center items-center'>
                            1
                        </div>
                        <div className='border border-amber-400 p-6 rounded-xl'>
                            <p>Register</p>
                            <p>Create an account in few minutes, verify your email and you are set to go.</p>
                        </div>

                    </div>
                </div>
                {/* col 2 */}
                <div className='bg-black'>
                    <Buttons btnTitle="Open Account" btnStyles="bg-gray-300" />

                </div>
            </div>
        </div>
    )
}
