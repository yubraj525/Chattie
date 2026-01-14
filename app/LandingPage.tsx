
import React, { useState } from 'react';
import { MessageCircle, Lock, Mail, User, ArrowRight, Zap, Shield, Users } from 'lucide-react';

export default function  ChatApp() {
  const [view, setView] = useState('landing');
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  if (view === 'login') {
    return (
        <main>


      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
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
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
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
              Don't have an account?{' '}
              <button onClick={() => setView('register')} className="text-blue-400 hover:text-blue-300 transition">
                Sign up
              </button>
            </p>
            
            <button
              onClick={() => setView('landing')}
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

  if (view === 'register') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-500 p-3 rounded-xl">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl font-light text-white text-center mb-2 tracking-tight">Create Account</h2>
            <p className="text-slate-400 text-center mb-8 font-light">Join thousands of users worldwide</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-light text-slate-300 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-lg pl-11 pr-4 py-3 text-white font-light focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              
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
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
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
                Create Account
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
            
            <p className="text-center text-slate-400 mt-6 font-light">
              Already have an account?{' '}
              <button onClick={() => setView('login')} className="text-blue-400 hover:text-blue-300 transition">
                Sign in
              </button>
            </p>
            
            <button
              onClick={() => setView('landing')}
              className="w-full text-slate-400 hover:text-slate-300 mt-4 font-light text-sm transition"
            >
              ← Back to home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-7 h-7 text-blue-500" />
              <span className="text-xl font-light text-white tracking-tight">ChatFlow</span>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setView('login')}
                className="px-5 py-2 text-slate-300 hover:text-white font-light transition"
              >
                Sign In
              </button>
              <button
                onClick={() => setView('register')}
                className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-light transition"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-light text-white mb-6 tracking-tight">
            Connect. Chat. Collaborate.
          </h1>
          <p className="text-xl text-slate-400 mb-10 font-light leading-relaxed">
            Experience seamless real-time messaging with end-to-end encryption. 
            Stay connected with your team, friends, and family.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setView('register')}
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-light transition duration-200 flex items-center gap-2"
            >
              Start Chatting
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-3 border border-slate-600 hover:border-slate-500 text-white rounded-lg font-light transition duration-200">
              Learn More
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8 hover:bg-slate-800/50 transition">
            <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-5">
              <Zap className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-light text-white mb-3 tracking-tight">Lightning Fast</h3>
            <p className="text-slate-400 font-light leading-relaxed">
              Instant message delivery with real-time synchronization across all your devices.
            </p>
          </div>

          <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8 hover:bg-slate-800/50 transition">
            <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-5">
              <Shield className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-light text-white mb-3 tracking-tight">Secure & Private</h3>
            <p className="text-slate-400 font-light leading-relaxed">
              End-to-end encryption ensures your conversations remain private and secure.
            </p>
          </div>

          <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8 hover:bg-slate-800/50 transition">
            <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-5">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-light text-white mb-3 tracking-tight">Team Collaboration</h3>
            <p className="text-slate-400 font-light leading-relaxed">
              Create groups, share files, and collaborate seamlessly with your team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}