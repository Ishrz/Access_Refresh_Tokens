import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, Eye, EyeOff, Zap } from 'lucide-react';
import UseAuth from '../hooks/UseAuth.jsx';
import { useNavigate } from 'react-router';

export default function Login({ onSwitchToRegister, onSwitchToForgot, onSuccess }) {

    const navigate = useNavigate()

    const {showPassword, setShowPassword,isLoading, setIsLoading,loginData, setLoginData,handleLogin} = UseAuth()


  return (
    <div className="w-full max-w-md bg-black border border-zinc-800/80 rounded-2xl shadow-2xl shadow-black/80 p-8 relative overflow-hidden transition-all duration-300 text-zinc-100 font-sans">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-75" />

      <div className="mb-8">
        <div className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-900/50 px-2.5 py-1 rounded-md mb-3">
          <Zap className="w-3.5 h-3.5" />
          <span>RESTRICTED ACCESS</span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-100">Welcome back</h1>
        <p className="text-sm text-zinc-400 mt-1">Enter your credentials to access your secure node.</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
              <Mail className="w-4 h-4" />
            </div>
            <input 
              type="email" 
              required
              value={loginData.email}
              onChange={(e) => setLoginData({...loginData, email: e.target.value})}
              placeholder="operator@nexus.io"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 pl-10 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider">
              Password
            </label>
            {onSwitchToForgot && (
              <button 
                type="button"
                onClick={onSwitchToForgot}
                className="text-xs text-zinc-400 hover:text-emerald-400 transition-colors underline underline-offset-4"
              >
                Forgot code?
              </button>
            )}
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
              <Lock className="w-4 h-4" />
            </div>
            <input 
              type={showPassword ? "text" : "password"}
              required
              value={loginData.password}
              onChange={(e) => setLoginData({...loginData, password: e.target.value})}
              placeholder="••••••••••••"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 pl-10 pr-10 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono"
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm py-1">
          <label className="flex items-center space-x-2 cursor-pointer select-none">
            <input 
              type="checkbox"
              checked={loginData.remember}
              onChange={(e) => setLoginData({...loginData, remember: e.target.checked})}
              className="w-4 h-4 rounded bg-zinc-950 border-zinc-800 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-zinc-950"
            />
            <span className="text-xs text-zinc-400 font-mono">Remember session</span>
          </label>
        </div>

        <button 
          type="submit"
          disabled={isLoading}
          className="w-full mt-2 bg-zinc-100 hover:bg-emerald-400 text-zinc-950 font-medium py-3 px-4 rounded-xl text-sm transition-all duration-200 flex items-center justify-center space-x-2 group shadow-lg shadow-white/5 hover:shadow-emerald-500/20 disabled:opacity-50"
        >
          {isLoading ? (
            <span className="inline-block w-5 h-5 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <span className="font-semibold tracking-wide">Authenticate</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>

      {
        <div className="mt-8 pt-6 border-t border-zinc-900 text-center">
          <p className="text-xs text-zinc-400">
            New operator?{' '}
            <button 
               onClick={()=>navigate("/register")}
              className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors inline-flex items-center space-x-1 ml-1"
            >
              <span>Initialize account</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </p>
        </div>
      }
    </div>
  );
}