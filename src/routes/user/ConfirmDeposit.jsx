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

                {/* eth and bnb smart chain have the same address */}
                <div className='py-5 my-8 border-y border-base-300'>
                    <p className='mb-5'>WALLET ADDRESS:</p>
                    {
                        [
                            { wallet: "BTC", walletAddress: "bc1qmnhg0lrdqv2ut96ly6rt8pdqzqa7ltkzmj82j5" },
                            { wallet: "ETHEREUM", walletAddress: "0x56AEB5C4aF0319E125f1BdAa9127A5e2Cd61d1A6" },
                            { wallet: "SOLANA", walletAddress: "21AfzRjwtHpf2pkvJ6o9xspStxhCFv1dM5CnLrWjnZqm" },
                            { wallet: "BNB Smart chain", walletAddress: "0x56AEB5C4aF0319E125f1BdAa9127A5e2Cd61d1A6" },
                            { wallet: "Xrp", walletAddress: "0rp4RnrX2qKUtwFCoQs2xPioBx63c4yHCGp" },
                            { wallet: "TRX", walletAddress: "TM4RUeSht9jY9QZGWfSqc4NBJHfdiCEQyf" },
                            { wallet: "LTC", walletAddress: "ltc1qf8dm2g7306t3a5exx42pe55x3tks0kmdyzex65" },
                        ].map((item, i) => (
                            <div className='mb-4'>
                                <p>{item.wallet}:</p>
                                <div className='flex'>
                                    <CopyableText text={item.walletAddress} mainStyle="font-semibold bg-base-300" />
                                </div>
                            </div>
                        ))
                    }
                    {/* <p>BTC:</p>
                    <div className='flex'>
                        <CopyableText text="bc1qmnhg0lrdqv2ut96ly6rt8pdqzqa7ltkzmj82j5" mainStyle="font-semibold bg-base-300" />
                    </div>
                    <p>ETHEREUM:</p>
                    <div className='flex'>
                        <CopyableText text="0x56AEB5C4aF0319E125f1BdAa9127A5e2Cd61d1A6" mainStyle="font-semibold bg-base-300" />
                    </div>
                    <p>SOLANA:</p>
                    <div className='flex'>
                        <CopyableText text="21AfzRjwtHpf2pkvJ6o9xspStxhCFv1dM5CnLrWjnZqm" mainStyle="font-semibold bg-base-300" />
                    </div>
                    <p>BNB Smart chain:</p>
                    <div className='flex'>
                        <CopyableText text="0x56AEB5C4aF0319E125f1BdAa9127A5e2Cd61d1A6" mainStyle="font-semibold bg-base-300" />
                    </div>
                    <p>Xrp:</p>
                    <div className='flex'>
                        <CopyableText text="0rp4RnrX2qKUtwFCoQs2xPioBx63c4yHCGp" mainStyle="font-semibold bg-base-300" />
                    </div>
                    <p>TRX:</p>
                    <div className='flex'>
                        <CopyableText text="TM4RUeSht9jY9QZGWfSqc4NBJHfdiCEQyf" mainStyle="font-semibold bg-base-300" />
                    </div>
                    <p>LTC:</p>
                    <div className='flex'>
                        <CopyableText text="ltc1qf8dm2g7306t3a5exx42pe55x3tks0kmdyzex65" mainStyle="font-semibold bg-base-300" />
                    </div> */}
                </div>

                <p className='my-6'>AFTER PAYMENT COME BACK AND HIT THE SAVE BUTTON</p>
                <p className='mb-4'>
                    NOTE - Please do not click the save button twice and do not click it if you know you are not ready to make payment. <br /> This might attract a penalty.
                </p>
                <div className='space-y-1'>
                    <p><b>Plan:</b> {plan}</p>
                    <p><b>Profit:</b> {plan === "Plan A" ? "15.00%" : plan === "Plan B" ? "30.00%" : plan === "Plan C" ? "50.00%" : plan === "Plan D" ? "75.00%" : "100.00%"}</p>
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
                    <button className='join-item btn btn-primary text-black'>Save</button>
                    <button className='join-item btn'>Cancel</button>
                </div>
            </div>
        </div>
    )
}
