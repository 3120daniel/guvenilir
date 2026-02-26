import React, { useState } from 'react'
import imgg from "../assets/NAOMI-3-1.jpg"
import Logo from '../components/Logo'
import { Eye, EyeClosed, AlertCircle, CheckCircle } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

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

    return (
        <div>
            <div>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 items-center gap-4">
                    <div className="max-md:order-1 h-screen min-h-full hidden md:block">
                        <img src={imgg} className="w-full h-full object-cover" alt="login-image" />
                    </div>

                    <div className="max-w-[480px] w-full mx-auto px-2 mt-16 md:mt-0">
                        <div className='flex flex-col items-center justify-center mb-4 sm:mb-8'>
                            <Logo />
                            <h1 className="text-slate-900 text-center text-2xl font-semibold mt-4">
                                Welcome back
                            </h1>
                            <p className="text-slate-600 text-sm mt-2">Please log in to your account</p>
                        </div>

                        <div className="p-6 sm:p-8 rounded-2xl shadow bg-gray-50">
                            {/* Error Alert */}
                            {error && (
                                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-red-800 text-sm">{error}</p>
                                </div>
                            )}

                            {/* Success Alert */}
                            {success && (
                                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-green-800 text-sm">{success}</p>
                                </div>
                            )}

                            <form className="mt-2 space-y-6" onSubmit={handleSubmit}>
                                {/* Username Field */}
                                <div>
                                    <label className="text-slate-900 text-sm font-medium mb-2 block">Username</label>
                                    <div className="relative flex items-center">
                                        <input
                                            className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-500 focus:border-blue-500 transition-colors"
                                            placeholder="Enter your username"
                                            name="username"
                                            type="text"
                                            required
                                            value={formData.username}
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                        />
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                                            <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                                            <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                                        </svg>
                                    </div>
                                </div>

                                {/* Password Field */}
                                <div>
                                    <label className="text-slate-900 text-sm font-medium mb-2 block">Password</label>
                                    <div className="relative flex items-center">
                                        <input
                                            className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-500 focus:border-blue-500 transition-colors"
                                            placeholder="Enter your password"
                                            type={passwordVisible ? "text" : "password"}
                                            required
                                            value={formData.password}
                                            name="password"
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                        />
                                        <button
                                            type="button"
                                            className="absolute right-4 cursor-pointer text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50"
                                            onClick={handlePasswordVisible}
                                            disabled={isSubmitting}
                                        >
                                            {passwordVisible ?
                                                <Eye size={18} /> :
                                                <EyeClosed size={16} />
                                            }
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
                                        <label htmlFor="remember-me" className="ml-3 block text-sm text-slate-900 cursor-pointer">
                                            Keep me logged in
                                        </label>
                                    </div>
                                    <div className="text-sm">
                                        <Link to="/forgot-password" className="text-blue-600 hover:underline font-semibold">
                                            Forgot your password?
                                        </Link>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="!mt-12">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="animate-spin">⚡</span>
                                                Signing in...
                                            </>
                                        ) : (
                                            'Sign in'
                                        )}
                                    </button>
                                </div>

                                {/* Register Link */}
                                <p className="text-slate-900 text-sm !mt-6 text-center">
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
        </div>
    )
}
// userperson
// Password2025%%$$