import React from 'react'

export default function Deposit() {
    return (
        <div className='bg-base-100 text-base-content'>
            <div className='max-w-7xl mx-auto p-4'>
                <form action="" className='text-md'>
                    <div className=''>
                        <div className='flex items-center gap-2 mb-2'>
                            <input type="radio" name="radio-1" className="radio radio-sm" />
                            <label htmlFor="">Plan A</label>
                        </div>
                        <div className='flex gap-1 py-1 bg-base-300 p-2 rounded-tl-xl rounded-tr-xl'>
                            <p className='w-3/2 pl-2 py-2'>Plan</p>
                            <p className='w-1/3 pl-2 py-2'>Spent Amount ($)</p>
                            <p className='w-1/3 pl-2 py-2'>Profit (%)</p>
                        </div>
                        <div className='flex gap-1 py-1'>
                            <div className='w-3/2 bg-base-100 pl-2 py-2'>Plan</div>
                            <div className='w-1/3 bg-base-100 pl-2 py-2 flex justify-center gap-2'>
                                <p className='badge badge-primary'>500</p>
                                -
                                <p className='badge badge-primary'>500</p>
                            </div>
                            <div className='w-1/3 bg-base-100 pl-2 py-2'>40.00%</div>
                        </div>
                    </div>
                </form>
                
            </div>
        </div>
    )
}
