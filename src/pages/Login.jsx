import React, { useEffect, useState } from 'react'
import imgg from "../assets/NAOMI-3-1.jpg"
import Logo from '../components/Logo'
import { Eye, EyeClosed, AlertCircle, CheckCircle } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import GoogleTranslateSwitcher from '../components/GoogleTranslateSwitcher'



// 1. Define hook outside the component
function useRealDeviceWidth() {
    const [isMobileDevice, setIsMobileDevice] = useState(false);

    useEffect(() => {
        const checkWidth = () => {
            // Using screen.width to detect the actual hardware
            setIsMobileDevice(window.screen.width <= 768);
        };
        checkWidth();
        window.addEventListener('resize', checkWidth);
        return () => window.removeEventListener('resize', checkWidth);
    }, []);

    return isMobileDevice;
}




export default function Login() {
    const navigate = useNavigate()

    const [passwordVisible, setPasswordVisible] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        keepMeLoggedIn: false
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }))
        if (error) setError("")
    }

    const handlePasswordVisible = () => setPasswordVisible(prev => !prev)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        setSuccess("")

        if (!formData.username.trim()) {
            setError("Username is required.")
            return
        }
        if (!formData.password) {
            setError("Password is required.")
            return
        }

        setIsSubmitting(true)

        try {
            const response = await fetch("https://guv-chi.vercel.app/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: formData.username.trim(),
                    password: formData.password,
                }),
            })

            const data = await response.json()

            if (!response.ok || data?.code !== "200") {
                const message =
                    data?.message ||
                    data?.error ||
                    data?.detail ||
                    (typeof data === "string" ? data : null) ||
                    "Login failed. Please check your credentials."
                setError(message)
                return
            }

            // Save note to localStorage
            localStorage.setItem("note", data.note)

            // If "keep me logged in", also persist a flag
            if (formData.keepMeLoggedIn) {
                localStorage.setItem("keepMeLoggedIn", "true")
            } else {
                localStorage.removeItem("keepMeLoggedIn")
            }

            setSuccess("Login successful! Redirecting...")

            setTimeout(() => {
                navigate("/account")
            }, 1000)

        } catch (err) {
            console.error("Login error:", err)
            setError("Network error. Please check your connection and try again.")
        } finally {
            setIsSubmitting(false)
        }
    }
    const isMobile = useRealDeviceWidth();
    const adaptiveImage = isMobile ? "hidden" : "block";
    // const isMobile = useRealDeviceWidth();

    return (
        <div className="min-h-screen bg-white">

            {/* 1. Change 'grid' to 'flex' on mobile to allow easy centering.
               2. On desktop, we use 'grid-cols-2'.
            */}
            <div className={`w-full ${isMobile ? "flex justify-center items-center py-10" : "grid grid-cols-2 items-center"}`}>

                {/* IMAGE SECTION: 
                   We use standard JS logical AND. If isMobile is true, 
                   this whole div is physically removed from the DOM.
                */}
                {!isMobile && (
                    <div className="h-screen min-h-full">
                        <img src={imgg} className="w-full h-full object-cover" alt="login-image" />
                    </div>
                )}

                {/* FORM SECTION:
                   We remove 'mt-16' and 'md:mt-0' to let the flex centering handle it.
                   We also scale up the text and padding for mobile so it's legible while zoomed out.
                */}
                <div className={`w-full max-w-[480px] px-4 ${isMobile ? "scale-110 flex flex-col justify-between items-center" : ""}`}>
                    <div className='flex flex-col items-center justify-center mb-8'>
                        <Logo />
                        <h1 className={`text-slate-900 text-center font-semibold mt-4 ${isMobile ? "text-4xl" : "text-2xl"}`}>
                            Welcome back
                        </h1>
                        <p className={`text-slate-600 mt-2 ${isMobile ? "text-xl" : "text-sm"}`}>
                            Please log in to your account
                        </p>
                    </div>

                    <div className={`rounded-2xl shadow bg-gray-50 ${isMobile ? "p-12 w-[80vw]" : "p-8"}`}>
                        {/* Error/Success Alerts */}
                        {error && (
                            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <p className={`text-red-800 ${isMobile ? "text-lg" : "text-sm"}`}>{error}</p>
                            </div>
                        )}

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {/* Username */}
                            <div>
                                <label className={`text-slate-900 font-medium mb-2 block  ${isMobile ? "text-2xl" : "text-sm"}`}>
                                    Username
                                </label>
                                <input
                                    className={`w-full text-slate-900 border border-slate-300 rounded-md outline-blue-500 ${isMobile ? "px-6 py-5 text-xl" : "px-4 py-3 text-sm"}`}
                                    placeholder="Enter your username"
                                    name="username"
                                    type="text"
                                    required
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label className={`text-slate-900 font-medium mb-2 block ${isMobile ? "text-xl" : "text-sm"}`}>
                                    Password
                                </label>
                                <div className="relative flex items-center">
                                    <input
                                        className={`w-full text-slate-900 border border-slate-300 rounded-md outline-blue-500 ${isMobile ? "px-6 py-5 text-xl" : "px-4 py-3 text-sm"}`}
                                        placeholder="Enter your password"
                                        type={passwordVisible ? "text" : "password"}
                                        required
                                        value={formData.password}
                                        name="password"
                                        onChange={handleChange}
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-4"
                                        onClick={handlePasswordVisible}
                                    >
                                        {passwordVisible ? <Eye size={isMobile ? 28 : 18} /> : <EyeClosed size={isMobile ? 28 : 16} />}
                                    </button>
                                </div>
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="keepMeLoggedIn"
                                        type="checkbox"
                                        className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-slate-300 rounded cursor-pointer"
                                        checked={formData.keepMeLoggedIn}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                    />
                                    <label htmlFor="remember-me" className={`${isMobile ? "text-xl" : "text-sm"} ml-3 block text-sm text-slate-900 cursor-pointer`}>
                                        Keep me logged in
                                    </label>
                                </div>
                                <div className="text-sm">
                                    <Link to="/forgot-password" className={`${isMobile ? "text-xl" : "text-sm"} text-blue-600 hover:underline font-semibold`}>
                                        Forgot your password?
                                    </Link>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors ${isMobile ? "py-5 text-2xl" : "py-2 text-[15px]"}`}
                            >
                                {isSubmitting ? 'Signing in...' : 'Sign in'}
                            </button>


                            {/* Register Link */}
                            <p className={`${isMobile ? "text-xl" : "text-sm"} text-slate-900 text-sm !mt-4 text-center`}>
                                Don't have an account?
                                <Link to="/register" className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold">
                                    Register here
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
// userperson
// Password2025%%$$