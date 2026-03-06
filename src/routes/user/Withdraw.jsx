import React, { useState } from 'react'

export default function Withdraw() {
    const [selectedCurrency, setSelectedCurrency] = useState(null);
    const [amount, setAmount] = useState('');
    const [address, setAddress] = useState('');

    const currencies = [
        { name: 'Bitcoin', symbol: 'BTC', available: '$0.00', pending: '$0.00', account: 'Not set' },
        { name: 'Ethereum', symbol: 'ETH', available: '$0.00', pending: '$0.00', account: 'Not set' },
        { name: 'USDT(TRC20)', symbol: 'USDT', available: '$0.00', pending: '$0.00', account: 'Not set' },
        { name: 'TRX', symbol: 'TRX', available: '$0.00', pending: '$0.00', account: 'Not set' }
    ];

    const openModal = (currency) => {
        setSelectedCurrency(currency);
        setAmount('');
        setAddress('');
        document.getElementById('withdraw_modal').showModal();
    };

    const closeModal = () => {
        document.getElementById('withdraw_modal').close();
        setSelectedCurrency(null);
    };

    return (
        <div className='bg-base-100 text-base-content min-h-screen'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6'>
                <div className='p-3 sm:p-4 bg-base-300 shadow-lg rounded-lg'>

                    {/* Account Balance */}
                    <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4 px-2 sm:px-4 py-3 bg-base-200 rounded-lg'>
                        <p className='text-sm sm:text-base font-medium'>Account Balance</p>
                        <p className='text-lg sm:text-xl font-bold'>$0.00</p>
                    </div>

                    {/* Desktop Table Header */}
                    <div className='hidden md:flex gap-1 py-2 px-2 bg-base-200 rounded-t-lg'>
                        <p className='w-1/4 pl-3 py-2 font-semibold'>Currency</p>
                        <p className='w-1/4 pl-3 py-2 font-semibold text-green-600'>Available</p>
                        <p className='w-1/4 pl-3 py-2 font-semibold text-red-600'>Pending</p>
                        <p className='w-1/4 pl-3 py-2 font-semibold'>Account</p>
                    </div>

                    {/* Mobile Table Header */}
                    <div className='md:hidden grid grid-cols-4 gap-1 py-2 px-2 bg-base-200 rounded-t-lg text-center text-xs font-semibold'>
                        <p className='col-span-1'>Curr</p>
                        <p className='col-span-1 text-green-600'>Avail</p>
                        <p className='col-span-1 text-red-600'>Pending</p>
                        <p className='col-span-1'>Account</p>
                    </div>

                    {/* Currency Rows */}
                    <div className='space-y-1'>
                        {currencies.map((currency, index) => (
                            <div
                                key={index}
                                onClick={() => openModal(currency)}
                                className='cursor-pointer'
                            >
                                {/* Desktop Row */}
                                <div className='hidden md:flex gap-1 py-2 px-2 bg-base-100 hover:bg-base-200 active:scale-[0.99] transition-all rounded-lg'>
                                    <p className='w-1/4 pl-3 py-2 font-medium'>{currency.name}</p>
                                    <p className='w-1/4 pl-3 py-2 text-green-500 font-bold'>{currency.available}</p>
                                    <p className='w-1/4 pl-3 py-2 text-red-500 font-bold'>{currency.pending}</p>
                                    <p className='w-1/4 pl-3 py-2 italic text-gray-500'>{currency.account}</p>
                                </div>

                                {/* Mobile Row */}
                                <div className='md:hidden grid grid-cols-4 gap-1 py-3 px-2 bg-base-100 hover:bg-base-200 active:scale-[0.99] transition-all rounded-lg text-center text-sm'>
                                    <p className='col-span-1 font-medium text-xs break-words'>{currency.name}</p>
                                    <p className='col-span-1 text-green-500 font-bold text-xs'>{currency.available}</p>
                                    <p className='col-span-1 text-red-500 font-bold text-xs'>{currency.pending}</p>
                                    <p className='col-span-1 italic text-gray-500 text-xs'>{currency.account}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* No Funds Message */}
                    <div className='mt-4 sm:mt-6 px-2 sm:px-4'>
                        <p className='text-sm sm:text-base font-bold text-warning bg-warning/10 p-3 sm:p-4 rounded-lg text-center sm:text-left'>
                            ⚠️ You have no funds to withdraw
                        </p>
                    </div>
                </div>
            </div>

            {/* DaisyUI Modal */}
            <dialog id='withdraw_modal' className='modal modal-bottom sm:modal-middle'>
                <div className='modal-box'>
                    {selectedCurrency && (
                        <>
                            <h3 className='font-bold text-lg mb-1'>
                                Withdraw {selectedCurrency.name}
                            </h3>
                            <p className='text-sm text-base-content/60 mb-4'>
                                {selectedCurrency.symbol} · Wallet Withdrawal
                            </p>

                            {/* Balance Info */}
                            <div className='grid grid-cols-2 gap-3 mb-5'>
                                <div className='bg-base-200 rounded-lg p-3'>
                                    <p className='text-xs text-base-content/50 mb-1'>Available</p>
                                    <p className='font-bold text-green-500'>{selectedCurrency.available}</p>
                                </div>
                                <div className='bg-base-200 rounded-lg p-3'>
                                    <p className='text-xs text-base-content/50 mb-1'>Pending</p>
                                    <p className='font-bold text-red-500'>{selectedCurrency.pending}</p>
                                </div>
                            </div>

                            {/* Wallet Address */}
                            <div className='form-control mb-4'>
                                <label className='label'>
                                    <span className='label-text font-medium'>Wallet Address</span>
                                    <span className='label-text-alt text-base-content/50'>
                                        {selectedCurrency.account === 'Not set' ? 'No address saved' : selectedCurrency.account}
                                    </span>
                                </label>
                                <input
                                    type='text'
                                    placeholder={`Enter ${selectedCurrency.symbol} wallet address`}
                                    className='input input-bordered w-full'
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>

                            {/* Amount */}
                            <div className='form-control mb-6'>
                                <label className='label'>
                                    <span className='label-text font-medium'>Amount (USD)</span>
                                    <span className='label-text-alt'>
                                        <button className='text-primary text-xs hover:underline'>Max</button>
                                    </span>
                                </label>
                                <input
                                    type='number'
                                    placeholder='0.00'
                                    className='input input-bordered w-full'
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    min='0'
                                    step='0.01'
                                />
                            </div>

                            {/* Warning */}
                            <div className='alert alert-warning mb-5 text-sm py-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.538-1.333-3.308 0L3.732 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                <span>Insufficient balance to process this withdrawal.</span>
                            </div>

                            {/* Actions */}
                            <div className='modal-action mt-0'>
                                <button className='btn btn-ghost' onClick={closeModal}>Cancel</button>
                                <button className='btn btn-primary' disabled>
                                    Withdraw {selectedCurrency.symbol}
                                </button>
                            </div>
                        </>
                    )}
                </div>

                {/* Click outside to close */}
                <form method='dialog' className='modal-backdrop'>
                    <button onClick={closeModal}>close</button>
                </form>
            </dialog>
        </div>
    )
}