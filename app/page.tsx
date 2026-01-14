"use client";
import { ArrowRight, MessageCircle, Shield, Users, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function  ChatApp() {

const router= useRouter();

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
                onClick={() => router.push('/login')}
                className="px-5 py-2 text-slate-300 hover:text-white font-light transition"
              >
                Sign In
              </button>
              <button
                onClick={() => router.push('/register')}
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