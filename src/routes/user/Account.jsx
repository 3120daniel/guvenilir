import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Account() {
    const [profileData, setProfileData] = useState([]);
    const [userId, setUserId] = useState({
        userId: localStorage.getItem("note")
    });

    const [formData, setFormData] = useState({
        userId: "",
        password: "",
        repeatPassword: "",
        bitcon: "",
        etherum: "",
        usdt: "",
        trx: "---"
    });

    const handleChange = (e) => {
        const { id, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    }

        const [updateForm, setUpdateForm] = useState(false);
        const navigate = useNavigate();

        const getProfile = 'https://guv-xi.vercel.app/profile';
        const updateProfile = 'https://guv-xi.vercel.app/updateProfile';


        useEffect(() => {
            //we are fetching profile data for the user
            const fetchProfile = async () => {
                try {
                    const response = await axios.post(getProfile, userId);
                    console.log(response.data)
                    if (response.status === 200 && response.data.code === 200) {
                        let fullname = response.data.note.fullname;
                        let username = response.data.note.username;
                        let email = response.data.note.email;
                        let password = response.data.note.password;
                        let repeatPassword = response.data.note.repeatPassword;
                        let bitcon = response.data.note.bitcon;
                        let etherum = response.data.note.etherum;
                        let usdt = response.data.note.usdt;
                        let trx = response.data.note.trx;

                        setFormData({
                            userId: localStorage.getItem("note"),
                            fullname: fullname,
                            username: username,
                            email: email,
                            password: password,
                            repeatPassword: repeatPassword,
                            bitcon: bitcon,
                            etherum: etherum,
                            usdt: usdt,
                            trx: trx
                        });
                        setUpdateForm(false);
                    } else {
                        setProfileData([]);
                    }
                } catch (err) {
                    setProfileData([]);
                }
            }
            fetchProfile();
        }, []);
// navigate, formData.username, updateForm
        const updateProfileData = async () => {
            try {
                const response = await axios.post(updateProfile, formData);
                if (response.status === 200 && response.data.code === 200) {
                    setUpdateForm(true);
                }
                else {
                    setUpdateForm(false);
                }
            } catch (err) {
                setUpdateForm(false);
            }
        }

        
        return (
            <div className='bg-base-100 text-base-content min-h-screen'>
                <div className='max-w-7xl mx-auto'>
                    <p className='text-2xl font-semibold mb-6'>Your account: </p>

                    <div>
                        <div className='hidden sm:flex gap-1 py-2 px-2 bg-base-200 rounded-t-lg'>
                            <p className='w-1/2 pl-3 py-2 font-semibold'>Account Name</p>
                            <p className='w-1/4 pl-3 py-2 font-semibold'>Joe</p>

                        </div>
                        <div className='hidden sm:flex gap-1 py-2 px-2 bg-base-100 rounded-t-lg'>
                            <p className='w-1/2 pl-3 py-2 font-semibold'>Registration date:</p>
                            <p className='w-1/4 pl-3 py-2 font-semibold'>Feb- 12-2023</p>
                        </div>
                        {/* Forms */}
                        <form onSubmit={updateProfileData}>
                            <div className='hidden sm:flex gap-1 py-2 px-2 bg-base-200 rounded-t-lg'>
                                <label htmlFor="" className='w-1/2 pl-3 py-2 font-semibold'>Your Full Name:</label>
                                <input
                                    className="input input-bordered w-1/2"
                                    value="Username"
                                    type="text"
                                    required
                                    id="fullname"
                                    defaultValue={formData.fullname}
                                />
                            </div>
                            <div className='hidden sm:flex gap-1 py-2 px-2 bg-base-100 rounded-t-lg'>
                                <label htmlFor="" className='w-1/2 pl-3 py-2 font-semibold'>Your E-mail Address:</label>
                                <input
                                    className="input input-bordered w-1/2"
                                    value="example@email.com"
                                    type="email"
                                    required
                                    id="email"
                                    defaultValue={formData.email}
                                />
                            </div>
                            <div className='hidden sm:flex gap-1 py-2 px-2 bg-base-200 rounded-t-lg'>
                                <label htmlFor="" className='w-1/2 pl-3 py-2 font-semibold'>New Password:</label>
                                <input
                                    className="input input-bordered w-1/2"
                                    type="password"
                                    required
                                    id="password"
                                    defaultValue={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='hidden sm:flex gap-1 py-2 px-2 bg-base-100 rounded-t-lg'>
                                <label htmlFor="" className='w-1/2 pl-3 py-2 font-semibold'>Retype Password:</label>
                                <input
                                    className="input input-bordered w-1/2"
                                    type="password"
                                    required
                                />
                            </div>
                            <div className='hidden sm:flex gap-1 py-2 px-2 bg-base-200 rounded-t-lg'>
                                <label htmlFor="" className='w-1/2 pl-3 py-2 font-semibold'>Your Bitcoin Wallet:</label>
                                <input
                                    className="input input-bordered w-1/2"
                                    type="text"
                                    required
                                    id="bitcon"
                                    defaultValue={formData.bitcon}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='hidden sm:flex gap-1 py-2 px-2 bg-base-100 rounded-t-lg'>
                                <label htmlFor="" className='w-1/2 pl-3 py-2 font-semibold'>Your Etherum Wallet:</label>
                                <input
                                    className="input input-bordered w-1/2"
                                    type="text"
                                    required
                                    id="etherum"
                                    defaultValue={formData.etherum}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='hidden sm:flex gap-1 py-2 px-2 bg-base-200 rounded-t-lg'>
                                <label htmlFor="" className='w-1/2 pl-3 py-2 font-semibold'>Your USDT(TRC20) Wallet:</label>
                                <input
                                    className="input input-bordered w-1/2"
                                    type="text"
                                    required
                                    id="usdt"
                                    defaultValue={formData.usdt}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='hidden sm:flex gap-1 py-2 px-2 bg-base-100 rounded-t-lg'>
                                <label htmlFor="" className='w-1/2 pl-3 py-2 font-semibold'>Your TRX Wallet:</label>
                                <input
                                    className="input input-bordered w-1/2"
                                    type="text"
                                    required
                                    id="trx"
                                    defaultValue={formData.trx}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='flex justify-end gap-1 py-2 px-2 bg-base-200 rounded-t-lg'>
                                <button type='submit' className='btn btn-primary text-base text-black w-1/2'>Change Account Details</button>
                            </div>


                        </form>

                    </div>

                </div>
            </div>
        )
    }
