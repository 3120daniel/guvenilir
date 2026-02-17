import React from 'react'
import { CopyableText } from '../../components/ui/CopyableText'
import { useLocation, useNavigate } from 'react-router-dom';

export default function ConfirmDeposit() {
    const location = useLocation();
  const navigate = useNavigate();

  const plan = location.state?.plan;
  const spendFrom = location.state?.spendFrom;
  const amountToSpend = location.state?.amountToSpend;
  console.log("chekers" + plan)


    return (
        <div className='bg-base-100 text-base-content'>
            <div className='mx-auto max-w-7xl py-16'>
                <p className='font-semibold text-lg mb-8'>Please confirm your deposit:</p>

                <p className='mb-4'>STEPS TO MAKE DEPOSIT:</p>
                <ol className='list-decimal list-inside'>
                    <li>Copy the company wallet address below.</li>
                    <li>Then go to your wallet app and make payment.</li>
                    <li>Then go to your wallet app and make payment.</li>
                </ol>
                <p>WALLET ADDRESS:  </p>
                <div className='flex'>
                    <CopyableText text="0xc0d52c4BC7A1F1bbd1555fcC6b3bF5c84A3aCe72" mainStyle="font-semibold bg-base-300" />
                </div>

                <p className='my-6'>AFTER PAYMENT COME BACK AND HIT THE SAVE BUTTON</p>
                <p className='mb-4'>
                    NOTE - Please do not click the save button twice and do not click it if you know you are not ready to make payment. <br /> This might attract a penalty.
                </p>
                <div className='space-y-1'>
                    <p><b>Plan:</b> {plan}</p>
                    <p><b>Profit:</b> 80.00% after 72 hours</p>
                    <p><b>Principal Return:</b> Yes</p>
                    <p><b>Principal Withdraw:</b> Not available</p>
                    <p><b>Credit Amount:</b> $1000.00</p>
                    <p><b>Deposit Fee:</b> 0.00% + $0.00 (min. $0.00 max. $0.00)</p>
                    <p><b>Debit Amount:</b> $1000.00</p>
                </div>

                <p>Required Information:</p>
                <p>
                    Payer Account <br />
                    Transaction ID
                </p>

                <div className='mt-6 join'>
                    <button className='join-item btn btn-primary'>Save</button>
                    <button className='join-item btn btn-ghost'>Cancel</button>
                </div>
            </div>
        </div>
    )
}
