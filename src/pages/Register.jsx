import React, { useState } from 'react'
import imggg from "../assets/NAOMI-3-1.jpg"
import Logo from '../components/Logo'
import { Eye, EyeClosed, Mail, AlertCircle, CheckCircle } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()

  const [passwordVisible, setPasswordVisible] = useState(false)
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    repeatpassword: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (error) setError("")
  }

  const handlePasswordVisible = () => setPasswordVisible(prev => !prev)
  const handleConfirmPasswordVisible = () => setConfirmPasswordVisible(prev => !prev)

  const validate = () => {
    if (!formData.fullname.trim()) return "Full name is required."
    if (!formData.username.trim()) return "Username is required."
    if (!formData.email.trim()) return "Email is required."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Please enter a valid email address."
    if (formData.password.length < 6) return "Password must be at least 6 characters."
    if (formData.password !== formData.repeatpassword) return "Passwords do not match."
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("https://guv-chi.vercel.app/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: formData.fullname.trim(),
          username: formData.username.trim(),
          email: formData.email.trim().toLowerCase(),
          password: formData.password,
          repeatpassword: formData.repeatpassword,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        const message =
          data?.message ||
          data?.error ||
          data?.detail ||
          (typeof data === "string" ? data : null) ||
          "Registration failed. Please try again."
        setError(message)
        return
      }

      setSuccess("Account created successfully! Redirecting...")

      setTimeout(() => {
        navigate("/login")
      }, 1500)

    } catch (err) {
      console.error("Registration error:", err)
      setError("Network error. Please check your connection and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Fixed image on the right side */}
      <div className="fixed right-0 top-0 h-screen w-full md:w-1/2 hidden md:block">
        <img src={imggg} className="w-full h-full object-cover" alt="register-image" />
      </div>

      {/* Scrollable form column on the left */}
      <div className="md:w-1/2 h-screen overflow-y-auto no-scrollbar">
        <div className="max-w-[480px] w-full mx-auto px-2 mt-16 pb-8">
          <div className='flex flex-col items-center justify-center mb-4 sm:mb-8'>
            <Logo />
            <h1 className="text-slate-900 text-center text-2xl font-semibold mt-4">
              Create Your Account
            </h1>
            <p className="text-slate-600 text-sm mt-2">Join our trading community</p>
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

            <form className="mt-2 space-y-4" onSubmit={handleSubmit}>
              {/* Full Name Field */}
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">Full Name</label>
                <div className="relative flex items-center">
                  <input
                    name="fullname"
                    type="text"
                    required
                    className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600 focus:border-blue-500 transition-colors"
                    placeholder="Enter your full name"
                    value={formData.fullname}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                    <circle cx="10" cy="7" r="6" />
                    <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" />
                  </svg>
                </div>
              </div>

              {/* Username Field */}
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">Username</label>
                <div className="relative flex items-center">
                  <input
                    name="username"
                    type="text"
                    required
                    className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600 focus:border-blue-500 transition-colors"
                    placeholder="Choose a username"
                    value={formData.username}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                    <circle cx="10" cy="7" r="6" />
                    <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" />
                  </svg>
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">Email</label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600 focus:border-blue-500 transition-colors"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  <Mail size={18} className="w-4 h-4 absolute right-4 text-gray-400" />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type={passwordVisible ? "text" : "password"}
                    required
                    className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600 focus:border-blue-500 transition-colors"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    className="absolute right-4 cursor-pointer text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50"
                    onClick={handlePasswordVisible}
                    disabled={isLoading}
                  >
                    {passwordVisible ? <Eye size={18} /> : <EyeClosed size={16} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password Field */}
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">Confirm Password</label>
                <div className="relative flex items-center">
                  <input
                    name="repeatpassword"
                    type={confirmPasswordVisible ? "text" : "password"}
                    required
                    className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600 focus:border-blue-500 transition-colors"
                    placeholder="Confirm your password"
                    value={formData.repeatpassword}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    className="absolute right-4 cursor-pointer text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50"
                    onClick={handleConfirmPasswordVisible}
                    disabled={isLoading}
                  >
                    {confirmPasswordVisible ? <Eye size={18} /> : <EyeClosed size={16} />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="!mt-8">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <span className="animate-spin">⚡</span>
                      Creating Account...
                    </>
                  ) : (
                    'Create Account'
                  )}
                </button>
              </div>

              {/* Login Link */}
              <p className="text-slate-900 text-sm !mt-6 text-center">
                Already have an account?
                <Link to="/login" className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold">
                  Login here
                </Link>
              </p>

              {/* Terms */}
              <p className="text-slate-600 text-xs text-center !mt-4">
                By registering, you agree to our
                <Link to="/legal" className="text-blue-600 hover:underline ml-1">Terms of Service</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}