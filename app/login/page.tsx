"use client";
import { MessageCircle, Mail, ArrowRight } from 'lucide-react';
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
        const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
      }
    return (
        <main>


      <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-500 p-3 rounded-xl">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl font-light text-white text-center mb-2 tracking-tight">Welcome Back</h2>
            <p className="text-slate-400 text-center mb-8 font-light">Sign in to continue messaging</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-light text-slate-300 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-lg pl-11 pr-4 py-3 text-white font-light focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-light text-slate-300 mb-2">Password</label>
                <div className="relative">
               
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-lg pl-11 pr-4 py-3 text-white font-light focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-light py-3 rounded-lg transition duration-200 flex items-center justify-center gap-2"
              >
                Sign In
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
            
            <p className="text-center text-slate-400 mt-6 font-light">
              Dont have an account?{' '}
              <button onClick={() => router.push('/register')} className="text-blue-400 hover:text-blue-300 transition">
                Sign up
              </button>
            </p>
            
            <button
              onClick={() => router.push('/')}
              className="w-full text-slate-400 hover:text-slate-300 mt-4 font-light text-sm transition"
            >
              ← Back to home
            </button>
          </div>
        </div>
      </div>
              </main>
    );
}


