import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Deposit() {
    const [formData, setFormData] = useState({
        plan: 'planA',
        spendFrom: 'bitcoin',
        amountToSpend: "25.00"
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // VERY IMPORTANT

        navigate("/confirm-deposit", {
            state: {
                plan: formData.plan,
                spendFrom: formData.spendFrom,
                amountToSpend: formData.amountToSpend
            }
        });
    };
    return (
        <div className='bg-base-100 text-base-content'>
            <div className='max-w-7xl mx-auto p-4'>
                {/* <p>{formData.plan} {formData.spendFrom} {formData.amountToSpend}</p> */}
                <form action="" className='text-md space-y-6' onSubmit={handleSubmit}>
                    <div className='p-2 bg-base-300 shadow'>
                        <div className='flex items-center gap-2 mb-2 px-4'>
                            <input
                                className="radio radio-xs"
                                type="radio"
                                name="plan"
                                value="planA"
                                checked={formData.plan === 'planA'}
                                onChange={handleChange}
                            />
                            <label htmlFor="">Plan A</label>
                        </div>
                        <div className='flex gap-1 py-1 p-2 rounded-tl-2xl rounded-tr-2xl '>
                            <p className='w-3/2 pl-2 py-2 bg-base-200'>Plan A</p>
                            <p className='w-1/3 pl-2 py-2 bg-base-200'>Spent Amount ($)</p>
                            <p className='w-1/3 pl-2 py-2 bg-base-200'>Profit (%)</p>
                        </div>
                        <div className='flex gap-1 py-1 px-2'>
                            <div className='w-3/2  pl-2 py-2'>Plan</div>
                            <div className='w-1/3 pl-2 py-2 gap-2'>
                                {/* <p className='badge badge-primary'>500</p>
                                -
                                <p className='badge badge-primary'>500</p> */}
                                <span>500 - 600</span>
                            </div>
                            <div className='w-1/3 pl-2 py-2'>40.00%</div>
                        </div>
                    </div>
                    <div className='p-2 bg-base-300 shadow'>
                        <div className='flex items-center gap-2 mb-2 px-4'>
                            <input
                                className="radio radio-xs"
                                type="radio"
                                name="plan"
                                value="planB"
                                checked={formData.plan === 'planB'}
                                onChange={handleChange}
                            />
                            <label htmlFor="">Plan B</label>
                        </div>
                        <div className='flex gap-1 py-1 p-2 rounded-tl-2xl rounded-tr-2xl '>
                            <p className='w-3/2 pl-2 py-2 bg-base-200'>Plan A</p>
                            <p className='w-1/3 pl-2 py-2 bg-base-200'>Spent Amount ($)</p>
                            <p className='w-1/3 pl-2 py-2 bg-base-200'>Profit (%)</p>
                        </div>
                        <div className='flex gap-1 py-1 px-2'>
                            <div className='w-3/2  pl-2 py-2'>Plan</div>
                            <div className='w-1/3 pl-2 py-2 gap-2'>
                                {/* <p className='badge badge-primary'>500</p>
                                -
                                <p className='badge badge-primary'>500</p> */}
                                <span>500 - 600</span>
                            </div>
                            <div className='w-1/3 pl-2 py-2'>40.00%</div>
                        </div>
                    </div>
                    <div className='p-2 bg-base-300 shadow'>
                        <div className='flex items-center gap-2 mb-2 px-4'>
                            <input
                                className="radio radio-xs"
                                type="radio"
                                name="plan"
                                value="planC"
                                checked={formData.plan === "planC"}
                                onChange={handleChange}
                            />
                            <label htmlFor="">Plan C</label>
                        </div>
                        <div className='flex gap-1 py-1 p-2 rounded-tl-2xl rounded-tr-2xl '>
                            <p className='w-3/2 pl-2 py-2 bg-base-200'>Plan A</p>
                            <p className='w-1/3 pl-2 py-2 bg-base-200'>Spent Amount ($)</p>
                            <p className='w-1/3 pl-2 py-2 bg-base-200'>Profit (%)</p>
                        </div>
                        <div className='flex gap-1 py-1 px-2'>
                            <div className='w-3/2  pl-2 py-2'>Plan</div>
                            <div className='w-1/3 pl-2 py-2 gap-2'>
                                {/* <p className='badge badge-primary'>500</p>
                                -
                                <p className='badge badge-primary'>500</p> */}
                                <span>500 - 600</span>
                            </div>
                            <div className='w-1/3 pl-2 py-2'>40.00%</div>
                        </div>
                    </div>
                    {/*  */}
                    <div className='p-2 bg-base-300 shadow'>
                        <div className='flex justify-between py-2 px-4'>
                            <p>Your account balance ($):</p>
                            <p>0.00</p>
                        </div>

                        <div className='py-4 px-4 bg-base-200'></div>

                        <div className='flex justify-between items-center py-2 px-4'>
                            <p>Amount to Spend ($):</p>
                            <input
                                className="input validator text-end"
                                type="text"
                                name="amountToSpend"
                                value={formData.amountToSpend}
                                onChange={handleChange}
                                required />
                        </div>


                        <div className='flex items-center gap-6 mb-2 py-2 px-4 bg-base-200'>
                            <input
                                className="radio radio-xs"
                                type="radio"
                                name="spendFrom"
                                value="bitcoin"
                                checked={formData.spendFrom === "bitcoin"}
                                onChange={handleChange}
                            />
                            <label htmlFor="">Spend funds from BITCOIN</label>
                        </div>
                        <div className='flex items-center gap-6 mb-2 py-2 px-4'>
                            <input
                                className="radio radio-xs"
                                type="radio"
                                name="spendFrom"
                                value="Ethereum"
                                checked={formData.spendFrom === "Ethereum"}
                                onChange={handleChange}
                            />
                            <label htmlFor="">Spend funds from Ethereum</label>
                        </div>
                        <div className='flex items-center gap-6 mb-2 py-2 px-4 bg-base-200'>
                            <input
                                className="radio radio-xs"
                                type="radio"
                                name="spendFrom"
                                value="USDT(TRC20)"
                                checked={formData.spendFrom === "USDT(TRC20)"}
                                onChange={handleChange}
                            />
                            <label htmlFor="">Spend funds from USDT(TRC20)</label>
                        </div>
                        <div className='flex items-center gap-6 mb-2 py-2 px-4'>
                            <input
                                className="radio radio-xs"
                                type="radio"
                                name="spendFrom"
                                value="TRX"
                                checked={formData.spendFrom === "TRX"}
                                onChange={handleChange}
                            />
                            <label htmlFor="">Spend funds from TRX</label>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-lg btn-primary'>Spend</button>

                </form>
            </div>
        </div>
    )
}
