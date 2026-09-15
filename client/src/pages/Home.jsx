import React, { useState } from 'react';
import { 
  Terminal, 
  ShieldCheck, 
  Activity, 
  Cpu, 
  Database, 
  Server, 
  LogOut, 
  Search, 
  Bell, 
  ArrowUpRight, 
  CheckCircle2, 
  RefreshCw,
  Plus,
  Sliders
} from 'lucide-react';

export default function Home({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-zinc-950 relative overflow-x-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-emerald-500/5 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[300px] bg-zinc-800/20 blur-[130px] pointer-events-none rounded-full" />

      {/* Top Navigation Bar */}
      <header className="border-b border-zinc-900 bg-black/60 backdrop-blur-md sticky top-0 z-20 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="h-9 w-9 bg-black border border-zinc-800 rounded-lg flex items-center justify-center shadow-inner">
            <Terminal className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-mono font-bold tracking-wider text-sm uppercase text-zinc-100">
                NEXUS_OS
              </span>
              <span className="text-[10px] font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-900/50 px-2 py-0.5 rounded">
                ONLINE
              </span>
            </div>
            <span className="text-xs font-mono text-zinc-500">SECURE_WORKSPACE // v2.6</span>
          </div>
        </div>

        {/* Right Nav Actions */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 bg-zinc-900/80 border border-zinc-800/80 px-3 py-1.5 rounded-xl text-xs font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>NODE: us-east-1a</span>
          </div>

          <button 
            onClick={handleRefresh}
            className={`p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors ${isRefreshing ? 'animate-spin text-emerald-400' : ''}`}
            title="Refresh Metrics"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          <button className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors relative">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full" />
          </button>

          <div className="h-6 w-[1px] bg-zinc-800" />

          <div className="flex items-center space-x-3">
            <div className="text-right hidden sm:block">
              <div className="text-xs font-medium text-zinc-200">{user?.name || 'Operator Vance'}</div>
              <div className="text-[10px] font-mono text-zinc-500">{user?.email || 'operator@nexus.io'}</div>
            </div>
            <button 
              onClick={onLogout}
              className="p-2 rounded-xl bg-zinc-900 hover:bg-red-950/40 border border-zinc-800 hover:border-red-900/50 text-zinc-400 hover:text-red-400 transition-all flex items-center space-x-1.5 text-xs font-mono"
              title="Terminate Session"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden lg:inline">Disconnect</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Dashboard Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8 z-10 flex flex-col space-y-8">
        
        {/* Welcome Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-black border border-zinc-800/80 rounded-2xl p-6 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-75" />
          
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-900/50 px-2.5 py-1 rounded-md mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>AUTHENTICATED SESSION ACTIVE</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-100">Welcome back, Operator</h1>
            <p className="text-sm text-zinc-400 mt-1">All cluster nodes are reporting optimal latency. Your secure sandbox is ready.</p>
          </div>

          <div className="flex items-center space-x-3">
            <button className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 px-4 py-2.5 rounded-xl text-xs font-mono transition-colors flex items-center space-x-2">
              <Sliders className="w-4 h-4 text-emerald-400" />
              <span>Configure Node</span>
            </button>
            <button className="bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-semibold px-4 py-2.5 rounded-xl text-xs font-mono transition-colors flex items-center space-x-2 shadow-lg shadow-emerald-500/10">
              <Plus className="w-4 h-4" />
              <span>Deploy Instance</span>
            </button>
          </div>
        </div>

        {/* Metric Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-black border border-zinc-800/80 rounded-2xl p-5 relative overflow-hidden shadow-lg">
            <div className="flex items-center justify-between text-zinc-400 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider">CPU Utilization</span>
              <Cpu className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-bold font-mono text-zinc-100 mb-1">14.2%</div>
            <div className="text-xs font-mono text-emerald-400 flex items-center space-x-1">
              <span>Stable baseline load</span>
            </div>
          </div>

          <div className="bg-black border border-zinc-800/80 rounded-2xl p-5 relative overflow-hidden shadow-lg">
            <div className="flex items-center justify-between text-zinc-400 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider">Active Memory</span>
              <Server className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-bold font-mono text-zinc-100 mb-1">4.8 / 16 GB</div>
            <div className="text-xs font-mono text-zinc-400">30% allocation efficiency</div>
          </div>

          <div className="bg-black border border-zinc-800/80 rounded-2xl p-5 relative overflow-hidden shadow-lg">
            <div className="flex items-center justify-between text-zinc-400 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider">Database Clusters</span>
              <Database className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-bold font-mono text-zinc-100 mb-1">12 / 12</div>
            <div className="text-xs font-mono text-emerald-400">All shards synchronized</div>
          </div>

          <div className="bg-black border border-zinc-800/80 rounded-2xl p-5 relative overflow-hidden shadow-lg">
            <div className="flex items-center justify-between text-zinc-400 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider">Network Throughput</span>
              <Activity className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-bold font-mono text-zinc-100 mb-1">1.2 GB/s</div>
            <div className="text-xs font-mono text-emerald-400">Zero packet loss</div>
          </div>
        </div>

        {/* Tabbed Workspace Section */}
        <div className="bg-black border border-zinc-800/80 rounded-2xl p-6 shadow-xl flex-1 flex flex-col">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-900 pb-4 mb-6">
            <div className="flex space-x-2 font-mono text-xs">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 rounded-xl transition-all ${activeTab === 'overview' ? 'bg-zinc-900 text-emerald-400 border border-zinc-800 font-semibold' : 'text-zinc-400 hover:text-zinc-200'}`}
              >
                Active Instances
              </button>
              <button 
                onClick={() => setActiveTab('logs')}
                className={`px-4 py-2 rounded-xl transition-all ${activeTab === 'logs' ? 'bg-zinc-900 text-emerald-400 border border-zinc-800 font-semibold' : 'text-zinc-400 hover:text-zinc-200'}`}
              >
                System Logs
              </button>
            </div>

            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input 
                type="text" 
                placeholder="Filter instances..."
                className="bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-1.5 pl-9 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500 font-mono w-full sm:w-64"
              />
            </div>
          </div>

          {activeTab === 'overview' ? (
            <div className="space-y-3 font-mono text-xs">
              {[
                { name: 'nexus-core-auth-prod', region: 'us-east-1a', status: 'Healthy', uptime: '99.99%', load: '12%' },
                { name: 'nexus-gateway-api-01', region: 'us-west-2b', status: 'Healthy', uptime: '100%', load: '24%' },
                { name: 'nexus-worker-compute-x', region: 'eu-central-1', status: 'Standby', uptime: '99.95%', load: '2%' }
              ].map((instance, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-zinc-950 border border-zinc-900 rounded-xl hover:border-zinc-800 transition-colors">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <div>
                      <div className="font-semibold text-zinc-200">{instance.name}</div>
                      <div className="text-[10px] text-zinc-500">Region: {instance.region}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 text-zinc-400">
                    <span className="hidden sm:inline">Uptime: <strong className="text-zinc-200">{instance.uptime}</strong></span>
                    <span className="hidden sm:inline">Load: <strong className="text-zinc-200">{instance.load}</strong></span>
                    <span className="text-emerald-400 bg-emerald-950/40 border border-emerald-900/60 px-2.5 py-1 rounded-md">{instance.status}</span>
                    <button className="text-zinc-400 hover:text-emerald-400 transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-zinc-950 border border-zinc-900 rounded-xl p-4 font-mono text-xs text-zinc-400 space-y-2">
              <div className="text-zinc-600"># LOG STREAM INITIALIZED AT {new Date().toLocaleTimeString()}</div>
              <div><span className="text-emerald-500">[INFO]</span> User session validated via bearer token.</div>
              <div><span className="text-emerald-500">[INFO]</span> Node cluster us-east-1a responding normally.</div>
              <div><span className="text-emerald-500">[INFO]</span> SSL Handshake complete with primary DB proxy.</div>
              <div><span className="text-emerald-500">[INFO]</span> Ready for operator commands.</div>
            </div>
          )}
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full border-t border-zinc-900 py-4 px-6 text-center text-xs text-zinc-600 font-mono z-10 flex flex-col sm:flex-row items-center justify-between">
        <div>© 2026 NEXUS PROTOCOL. ALL RIGHTS RESERVED.</div>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <span className="hover:text-zinc-400 cursor-pointer">PRIVACY_POLICY</span>
          <span>•</span>
          <span className="hover:text-zinc-400 cursor-pointer">TERMS_OF_SERVICE</span>
        </div>
      </footer>

    </div>
  );
}