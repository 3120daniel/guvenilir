import React, { useEffect, useState } from 'react'
import { CopyableText } from '../../components/ui/CopyableText'
import { useLocation, useNavigate } from 'react-router-dom';

const BASE_URL = import.meta.env.VITE_API_URL;

function useRealDeviceWidth() {
    const [isMobileDevice, setIsMobileDevice] = useState(false);

    useEffect(() => {
        const checkWidth = () => {
            setIsMobileDevice(window.screen.width <= 768);
        };
        checkWidth();
        window.addEventListener('resize', checkWidth);
        return () => window.removeEventListener('resize', checkWidth);
    }, []);

    return isMobileDevice;
}

export default function ConfirmDeposit() {
    const location = useLocation();
    const navigate = useNavigate();

    const plan = location.state?.plan;
    const spendFrom = location.state?.spendFrom;
    const amountToSpend = location.state?.amountToSpend;

    const [loading, setLoading] = useState(false);
    const [saved, setSaved] = useState(false);
    const [error, setError] = useState("");

    const isMobile = useRealDeviceWidth();
    const adaptiveText = isMobile ? "text-4xl" : "text-base";

    const profitMap = {
        "Plan A": "15.00%",
        "Plan B": "30.00%",
        "Plan C": "50.00%",
        "Plan D": "75.00%",
        "Plan E": "100.00%"
    };

    const wallets = [
        {
            wallet: "Bitcoin",
            walletAddress: "bc1qmnhg0lrdqv2ut96ly6rt8pdqzqa7ltkzmj82j5"
        },
        {
            wallet: "Ethereum",
            walletAddress: "0x56AEB5C4aF0319E125f1BdAa9127A5e2Cd61d1A6"
        },
        {
            wallet: "USDT(TRC20)",
            walletAddress: "TM4RUeSht9jY9QZGWfSqc4NBJHfdiCEQyf"
        },
        {
            wallet: "SOLANA",
            walletAddress: "21AfzRjwtHpf2pkvJ6o9xspStxhCFv1dM5CnLrWjnZqm"
        },
        {
            wallet: "XRP",
            walletAddress: "0rp4RnrX2qKUtwFCoQs2xPioBx63c4yHCGp"
        },
        {
            wallet: "TRX",
            walletAddress: "TM4RUeSht9jY9QZGWfSqc4NBJHfdiCEQyf"
        },
        {
            wallet: "LTC",
            walletAddress: "ltc1qf8dm2g7306t3a5exx42pe55x3tks0kmdyzex65"
        },
        {
            wallet: "Dogecoin",
            walletAddress: "DHBbbqNJHEHUif8MZeN1TDqs2S5BZGKuSp5"
        },
    ];

    const selectedWallet = wallets.find(
        w => w.wallet.toLowerCase() === spendFrom?.toLowerCase()
    );

    const handleSave = async () => {
        setError("");
        setLoading(true);

        try {
            const userId = localStorage.getItem("note");

            if (!userId) {
                setError("Session expired. Please log in again.");
                setLoading(false);
                return;
            }

            const res = await fetch(`${BASE_URL}/deposit/create`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId, plan, amountToSpend, spendFrom })
            });

            const data = await res.json();

            if (data.code === "200") {
                setSaved(true);
                setTimeout(() => navigate("/account/your-deposit"), 1500);
            } else {
                setError("Something went wrong. Please try again.");
            }
        } catch (err) {
            setError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`bg-base-100 text-base-content ${adaptiveText} min-h-screen`}>
            <div className='mx-auto max-w-7xl py-16'>
                <p className='font-semibold mb-8'>Please confirm your deposit: {spendFrom}</p>

                <p className='mb-4'>STEPS TO MAKE DEPOSIT:</p>
                <ol className='list-decimal list-inside'>
                    <li>Copy the company wallet address below.</li>
                    <li>Go to your wallet app and send the exact amount.</li>
                    <li>Come back and click the Save button below.</li>
                </ol>

                <div className='py-5 my-8 border-y border-base-300'>
                    <p className='mb-5'>WALLET ADDRESS:</p>
                    {selectedWallet ? (
                        <div className='mb-4'>
                            <p className='mb-3'>{selectedWallet.wallet}:</p>
                            <div className='flex'>
                                <CopyableText
                                    text={selectedWallet.walletAddress}
                                    mainStyle={`font-semibold bg-base-300 ${isMobile ? 'p-4 text-3xl' : 'p-2'}`}
                                    btnStyle={`font-semibold bg-base-300 ${isMobile ? 'p-5 text-3xl' : 'p-2'}`}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className='mb-4'>
                            <p className='text-gray-500'>Please select a wallet to view address</p>
                        </div>
                    )}
                </div>

                <p className='my-6'>AFTER PAYMENT COME BACK AND HIT THE SAVE BUTTON</p>
                <p className='mb-4'>
                    NOTE - Please do not click the save button twice and do not click it if you know you are not ready to make payment. <br /> This might attract a penalty.
                </p>

                <div className='space-y-1 mb-8'>
                    <p><b>Plan:</b> {plan}</p>
                    <p><b>Amount:</b> ${amountToSpend}</p>
                    <p><b>Profit:</b> {profitMap[plan] ?? "N/A"}</p>
                    <p><b>Payment Method:</b> {spendFrom}</p>
                    <p><b>Principal Return:</b> Yes</p>
                    <p><b>Principal Withdraw:</b> Not available during investment</p>
                    <p><b>Deposit Fee:</b> $0.00</p>
                </div>

                {/* Error message */}
                {error && (
                    <p className='mb-4 text-error font-semibold'>{error}</p>
                )}

                {/* Success message */}
                {saved && (
                    <p className='mb-4 text-success font-semibold'>
                        Deposit submitted! Redirecting...
                    </p>
                )}

                <div className={`mt-4 join ${isMobile ? 'scale-150 origin-left' : ''}`}>
                    <button
                        className='join-item btn btn-primary text-black px-8'
                        onClick={handleSave}
                        disabled={loading || saved}
                    >
                        {loading ? "Saving..." : saved ? "Saved!" : "Save"}
                    </button>
                    <button
                        className='join-item btn px-8'
                        onClick={() => navigate(-1)}
                        disabled={loading || saved}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}