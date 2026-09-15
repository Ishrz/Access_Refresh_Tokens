import React, { useState } from "react";
import {
  Mail,
  Lock,
  User,
  ArrowRight,
  Eye,
  EyeOff,
  ShieldCheck,
} from "lucide-react";
import UseAuth from "../hooks/UseAuth.jsx";
import { useNavigate } from "react-router";

export default function Register({ onSwitchToLogin, onSuccess }) {
    const navigate = useNavigate()
  const {
    handleRegister,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    isLoading,
    setIsLoading,
    registerData,
    setRegisterData,
  } = UseAuth();

 

  return (
    <div className="w-full max-w-md bg-black border border-zinc-800/80 rounded-2xl shadow-2xl shadow-black/80 p-8 relative overflow-hidden transition-all duration-300 text-zinc-100 font-sans">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-75" />

      <div className="mb-8">
        <div className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-900/50 px-2.5 py-1 rounded-md mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>NEW NODE SETUP</span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-100">
          Create account
        </h1>
        <p className="text-sm text-zinc-400 mt-1">
          Register your credentials to provision a new workspace.
        </p>
      </div>

      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
            Full Name / Alias
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
              required
              value={registerData.name}
              onChange={(e) =>
                setRegisterData({ ...registerData, name: e.target.value })
              }
              placeholder="Alex Vance"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 pl-10 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono"
            />
          </div>
        </div>

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
              value={registerData.email}
              onChange={(e) =>
                setRegisterData({ ...registerData, email: e.target.value })
              }
              placeholder="operator@nexus.io"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 pl-10 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
              <Lock className="w-4 h-4" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              required
              value={registerData.password}
              onChange={(e) =>
                setRegisterData({ ...registerData, password: e.target.value })
              }
              placeholder="••••••••••••"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 pl-10 pr-10 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
              <Lock className="w-4 h-4" />
            </div>
            <input
              type={showConfirmPassword ? "text" : "password"}
              required
              value={registerData.confirmPassword}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  confirmPassword: e.target.value,
                })
              }
              placeholder="••••••••••••"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 pl-10 pr-10 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              {showConfirmPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full mt-4 bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-medium py-3 px-4 rounded-xl text-sm transition-all duration-200 flex items-center justify-center space-x-2 group shadow-lg shadow-emerald-500/10 disabled:opacity-50"
        >
          {isLoading ? (
            <span className="inline-block w-5 h-5 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <span className="font-semibold tracking-wide">
                Initialize Node
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>

      {
        <div className="mt-8 pt-6 border-t border-zinc-900 text-center">
          <p className="text-xs text-zinc-400">
            Already registered?{" "}
            <button
              onClick={()=>navigate("/")}
              className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors inline-flex items-center space-x-1 ml-1"
            >
              <span>Sign in instead</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </p>
        </div>
      }
    </div>
  );
}
