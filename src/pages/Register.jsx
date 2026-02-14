import React from 'react'
import imgg from "../assets/NAOMI-3-1.JPG"
import Logo from '../components/Logo'
import { Eye, EyeClosed, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="min-h-screen">
      {/* Fixed image on the right side */}
      <div className="fixed right-0 top-0 h-screen w-full md:w-1/2 hidden md:block">
        <img src={imgg} class="w-full h-full object-cover" alt="login-image" />
      </div>
      
      {/* Scrollable form column on the left */}
      <div className="md:w-1/2 h-screen overflow-y-auto no-scrollbar">
        <div class="max-w-[480px] w-full mx-auto px-2 mt-16 pb-8">
             
              <div className='flex flex-col items-center justify-center mb-4 sm:mb-8'>
                <Logo />
                <h1 class="text-slate-900 text-center text-2xl font-semibold">
                  Welcome
                </h1>
                <p>Create an Account</p>
              </div>


              <div class="p-6 sm:p-8 rounded-2xl shadow bg-gray-50">

                <form class="mt-2 space-y-4">
                  <div>
                    <label class="text-slate-900 text-sm font-medium mb-2 block">Full Name</label>
                    <div class="relative flex items-center">
                      <input name="username" type="text" required class="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600" placeholder="Enter user name" />
                      <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                        <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                        <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <label class="text-slate-900 text-sm font-medium mb-2 block">User name</label>
                    <div class="relative flex items-center">
                      <input name="username" type="text" required class="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600" placeholder="Enter user name" />
                      <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                        <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                        <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <label class="text-slate-900 text-sm font-medium mb-2 block">Email</label>
                    <div class="relative flex items-center">
                      <input name="username" type="email" required class="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600" placeholder="Enter user name" />
                      <Mail size={18} class="w-4 h-4 absolute right-4 text-gray-400" />

                    </div>
                  </div>
                  <div>
                    <label class="text-slate-900 text-sm font-medium mb-2 block">Password</label>
                    <div class="relative flex items-center">
                      <input name="password" type="password" required class="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600" placeholder="Enter password" />
                      <Eye size={18} className="w-4 h-4 absolute right-4 cursor-pointer text-gray-400" />
                      {/* <EyeClosed size={16} className="w-4 h-4 absolute right-4 cursor-pointer text-gray-400" /> */}
                    </div>
                  </div>
                  <div>
                    <label class="text-slate-900 text-sm font-medium mb-2 block">Password</label>
                    <div class="relative flex items-center">
                      <input name="password" type="password" required class="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600" placeholder="Enter password" />
                      <Eye size={18} className="w-4 h-4 absolute right-4 cursor-pointer text-gray-400" />
                      {/* <EyeClosed size={16} className="w-4 h-4 absolute right-4 cursor-pointer text-gray-400" /> */}
                    </div>
                  </div>
                  <div class="flex flex-wrap items-center justify-between gap-4">
                    {/* <div class="flex items-center">
                      <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-slate-300 rounded" />
                      <label for="remember-me" class="ml-3 block text-sm text-slate-900">
                        Remember me
                      </label>
                    </div> */}
                    <div class="text-sm">
                      <a href="jajvascript:void(0);" class="text-blue-600 hover:underline font-semibold">
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <div class="!mt-12">
                    <button type="button" class="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
                      Sign in
                    </button>
                  </div>
                  <p class="text-slate-900 text-sm !mt-6 text-center">Already have an account? <Link to="/login" class="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold">Login</Link></p>
                </form>
              </div>
        </div>
      </div>
    </div>
  )
}
