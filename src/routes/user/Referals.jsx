import React from 'react'
import { Users, UserCheck, DollarSign } from 'lucide-react'

export default function Referals() {
  const referralData = [
    { label: 'Referral', value: '0' },
    { label: 'Active Referral', value: '0' },
    { label: 'Total Referral Commission', value: '$0.00' }
  ];

  return (
    <div>
      <div className='bg-base-100 text-base-content'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-lg sm:text-xl font-bold mb-4 sm:mb-6'>Referral Statistics</h2>

          {/* Responsive Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {referralData.map((item, index) => (
              <div
                key={index}
                className='bg-base-300 shadow-lg rounded-lg p-4 sm:p-6 hover:shadow-xl transition-all'
              >
                {/* Mobile Layout */}
                <div className='sm:hidden flex justify-between items-center'>
                  <p className='font-medium text-sm'>{item.label}</p>
                  <p className='text-xl font-bold text-primary'>{item.value}</p>
                </div>

                {/* Desktop Layout */}
                <div className='hidden sm:block'>
                  <p className='text-gray-500 text-sm mb-2'>{item.label}</p>
                  <p className='text-3xl font-bold text-primary'>{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Simple divider */}
          <div className='mt-6 pt-4 border-t border-base-300'>
            <p className='text-xs text-gray-500 text-center'>
              Last updated: Just now
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
