'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Wine,
  Bell,
  Check,
  Circle,
  Users,
  MapPin,
  Handshake,
  Route,
  Share2,
  Crown,
  Medal,
  Flame,
  RotateCcw,
  Eye,
  Pointer,
  Smartphone,
  Car,
  BatteryMedium,
  PhoneOff,
  PieChart,
  ListTodo,
  Layers,
  UsersRound,
  Rocket,
  Lock,
  Shield,
  Gamepad2,
  Loader2,
  Target
} from 'lucide-react';

type ViewType = 'vision' | 'roadmap' | 'features';

export default function Home() {
  const [activeView, setActiveView] = useState<ViewType>('vision');

  return (
    <div className="flex flex-col h-[100dvh] w-full max-w-lg mx-auto bg-[#050505] text-[#FFFFFF] font-sans relative shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
      {/* APP HEADER */}
      <header className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#0A0A0C] z-50 relative shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#FF003C] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(255,0,60,0.3)] shrink-0">
            <Wine className="text-white w-5 h-5 flex-shrink-0" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight leading-none text-white">DrunkMates</h1>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold mt-1">2024 Product Roadmap</p>
          </div>
        </div>
        <button className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 border border-white/10 hover:text-white hover:bg-zinc-800 transition-colors shrink-0">
          <Bell className="w-4 h-4" />
        </button>
      </header>

      {/* MAIN APP CONTENT */}
      <main className="flex-1 bg-white/5 overflow-y-auto overflow-x-hidden p-6 pb-28 hide-scrollbar">
        <AnimatePresence mode="wait">
          {activeView === 'vision' && <VisionView key="vision" />}
          {activeView === 'roadmap' && <RoadmapView key="roadmap" />}
          {activeView === 'features' && <FeaturesView key="features" />}
        </AnimatePresence>
      </main>

      {/* BOTTOM TAB NAVIGATION */}
      <footer className="absolute bottom-0 left-0 right-0 bg-[#0A0A0C] border-t border-white/5 flex justify-around px-2 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] z-[100]">
        <button
          onClick={() => setActiveView('vision')}
          className={`flex flex-col items-center gap-1 w-1/3 text-[11px] font-medium tracking-widest uppercase transition-colors duration-200 ${
            activeView === 'vision' ? 'text-[#FF003C]' : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          <PieChart className={`w-5 h-5 mb-0.5 transition-transform duration-200 ${activeView === 'vision' ? '-translate-y-0.5' : ''}`} />
          <span>Vision</span>
        </button>
        <button
          onClick={() => setActiveView('roadmap')}
          className={`flex flex-col items-center gap-1 w-1/3 text-[11px] font-medium tracking-widest uppercase transition-colors duration-200 ${
            activeView === 'roadmap' ? 'text-[#FF003C]' : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          <ListTodo className={`w-5 h-5 mb-0.5 transition-transform duration-200 ${activeView === 'roadmap' ? '-translate-y-0.5' : ''}`} />
          <span>Roadmap</span>
        </button>
        <button
          onClick={() => setActiveView('features')}
          className={`flex flex-col items-center gap-1 w-1/3 text-[11px] font-medium tracking-widest uppercase transition-colors duration-200 ${
            activeView === 'features' ? 'text-[#FF003C]' : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          <Layers className={`w-5 h-5 mb-0.5 transition-transform duration-200 ${activeView === 'features' ? '-translate-y-0.5' : ''}`} />
          <span>Features</span>
        </button>
      </footer>
    </div>
  );
}

const VisionView = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.2 }}
    className="flex flex-col gap-6"
  >
    <div>
      <h2 className="text-xs font-black text-[#FF003C] uppercase tracking-[0.2em] mb-4">01 / Core Vision</h2>
      <div className="p-4 bg-zinc-900/50 rounded-xl border border-white/5 shadow-sm">
        <p className="text-sm leading-relaxed text-zinc-300">
          Transitioning from a solo utility blocker into a culturally sticky social nightlife companion.
        </p>
      </div>
    </div>

    <div>
      <h3 className="text-xs font-semibold text-zinc-500 mb-3 uppercase tracking-wider">The Three Pillars</h3>
      <div className="space-y-2">
        <div className="flex items-start gap-3 p-2">
          <div className="text-[#FF003C] mt-1 shrink-0">●</div>
          <div>
            <p className="text-sm font-bold text-white">Protection First</p>
            <p className="text-[11px] text-zinc-500 mt-0.5">The Blocker is the core value, not the social layer.</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-2">
          <div className="text-[#FF003C] mt-1 shrink-0">●</div>
          <div>
            <p className="text-sm font-bold text-white">Accountability</p>
            <p className="text-[11px] text-zinc-500 mt-0.5">Strict, explicit privacy controls for all users.</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-2">
          <div className="text-[#FF003C] mt-1 shrink-0">●</div>
          <div>
            <p className="text-sm font-bold text-white">Gamification</p>
            <p className="text-[11px] text-zinc-500 mt-0.5">Reward both flawless wins and recoveries.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-2">
      <h3 className="text-[10px] font-semibold text-zinc-500 mb-3 uppercase tracking-widest">Market Validation</h3>
      <div className="grid grid-cols-1 gap-3">
        <div className="p-4 bg-zinc-900 border border-white/5 rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-zinc-400">
              <Lock className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white">Competitors</h3>
          </div>
          <p className="text-xs leading-relaxed text-zinc-400 mt-2">Clear pitch: block apps, force puzzles. Validates demand, but remains a narrow, single-player utility.</p>
        </div>
        
        <div className="p-4 bg-[#FF003C]/5 border border-[#FF003C]/20 rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-[#FF003C]/20 flex items-center justify-center text-[#FF003C]">
              <Rocket className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white">Where We Win</h3>
          </div>
          <p className="text-xs leading-relaxed text-zinc-300 mt-2">Shared social nightlife experience. Accountability via Crew Mode. Viral loops through recaps and badges.</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const RoadmapView = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.2 }}
    className="flex flex-col"
  >
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xs font-black text-[#FF003C] uppercase tracking-[0.2em]">02 / Execution Roadmap</h2>
      <span className="text-[10px] text-zinc-500 font-mono italic">Updated Oct 2024</span>
    </div>

    <div className="grid grid-cols-1 gap-4">
      {/* Phase 1 */}
      <div className="relative pl-6 border-l border-[#FF003C] pb-6">
        <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-[#FF003C] rounded-full ring-4 ring-[#FF003C]/20"></div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-white">Phase 1: Core Engine</h3>
          <span className="text-[9px] px-2 py-0.5 bg-[#FF003C] text-white font-bold rounded uppercase tracking-widest mt-1">In Progress</span>
        </div>
        <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden mb-4 mt-2">
          <div className="h-full bg-gradient-to-r from-[#FF003C] to-[#FF2A5F]" style={{ width: '65%' }}></div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="text-[11px] bg-zinc-900 border border-white/5 p-2 rounded flex items-center gap-1.5 whitespace-nowrap text-zinc-300"><span className="text-emerald-500">✓</span> Robust Lock</div>
          <div className="text-[11px] bg-zinc-900 border border-white/5 p-2 rounded flex items-center gap-1.5 whitespace-nowrap text-zinc-300"><span className="text-emerald-500">✓</span> Chaos Meter</div>
          <div className="text-[11px] bg-zinc-900 border border-white/5 p-2 rounded flex items-center gap-1.5 text-zinc-400 whitespace-nowrap"><span className="text-zinc-600">○</span> Draft Vault</div>
          <div className="text-[11px] bg-zinc-900 border border-white/5 p-2 rounded flex items-center gap-1.5 text-zinc-400 whitespace-nowrap"><span className="text-zinc-600">○</span> Risk Scoring</div>
        </div>
      </div>

      {/* Phase 2 */}
      <div className="relative pl-6 border-l border-zinc-700 pb-6 opacity-80 mt-2">
        <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-zinc-700 rounded-full"></div>
        <h3 className="text-lg font-bold mb-3 text-white">Phase 2: Crew Layer</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="text-[11px] text-zinc-400 border border-zinc-800 p-2 rounded flex items-center gap-1.5">● Events Layer</div>
          <div className="text-[11px] text-zinc-400 border border-zinc-800 p-2 rounded flex items-center gap-1.5">● Map & SOS</div>
          <div className="text-[11px] text-zinc-400 border border-zinc-800 p-2 rounded flex items-center gap-1.5">● Handlers</div>
          <div className="text-[11px] text-zinc-400 border border-zinc-800 p-2 rounded flex items-center gap-1.5">● Squad Overrides</div>
        </div>
      </div>

      {/* Phase 3 */}
      <div className="relative pl-6 border-l border-zinc-700 pb-4 opacity-60 mt-2">
        <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-zinc-700 rounded-full"></div>
        <h3 className="text-lg font-bold mb-3 text-white">Phase 3: Memories</h3>
        <div className="flex flex-col gap-2 text-[11px] text-zinc-400">
           <div className="bg-zinc-900 px-3 py-2 rounded border border-white/5">● GPS Breadcrumbs</div>
           <div className="bg-zinc-900 px-3 py-2 rounded border border-white/5">● Morning Path Recap</div>
        </div>
      </div>
      
      {/* Phase 4-6 */}
      <div className="relative pl-6 border-l border-zinc-700 pb-2 opacity-50 mt-2">
        <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-zinc-700 rounded-full"></div>
        <h3 className="text-lg font-bold mb-3 text-white">Phase 4-6: Growth</h3>
        <div className="flex flex-col gap-2 text-[11px] text-zinc-400">
           <div className="bg-zinc-900 px-3 py-2 rounded border border-white/5">● Smart Paywalls</div>
           <div className="bg-zinc-900 px-3 py-2 rounded border border-white/5">● Referrals</div>
        </div>
      </div>
    </div>
  </motion.div>
);

const FeaturesView = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.2 }}
    className="flex flex-col gap-8"
  >
    <h2 className="text-xs font-black text-[#FF003C] uppercase tracking-[0.2em] mb-2 -mt-1 relative z-10">03 / Key Features</h2>
    
    <div className="mt-[-24px]">
      <h3 className="text-[10px] font-semibold text-zinc-500 mb-3 uppercase tracking-widest">Gamification</h3>
      <div className="space-y-2">
        <div className="group p-3 bg-zinc-900 border border-white/5 rounded-xl flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-500"><Medal className="w-4 h-4"/></div>
            <div>
              <span className="text-sm font-medium block text-white">Achievements</span>
              <span className="text-[10px] text-zinc-500">Locked In, Digital Bouncer</span>
            </div>
          </div>
          <span className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest">GAME</span>
        </div>
        <div className="group p-3 bg-zinc-900 border border-white/5 rounded-xl flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500"><Flame className="w-4 h-4"/></div>
            <div>
              <span className="text-sm font-medium block text-white">Streaks & Fails</span>
              <span className="text-[10px] text-zinc-500">Threepeat of Peace</span>
            </div>
          </div>
          <span className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest">GAME</span>
        </div>
        <div className="group p-3 bg-zinc-900 border border-white/5 rounded-xl flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500"><RotateCcw className="w-4 h-4"/></div>
            <div>
              <span className="text-sm font-medium block text-white">Recovery</span>
              <span className="text-[10px] text-zinc-500">Redemption Arc</span>
            </div>
          </div>
          <span className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest">GAME</span>
        </div>
      </div>
    </div>

    <div>
      <h3 className="text-[10px] font-semibold text-zinc-500 mb-3 uppercase tracking-widest">Unlock Mechanisms</h3>
      <p className="text-[11px] text-zinc-400 mb-4 leading-relaxed bg-zinc-900/50 p-3 rounded-lg border border-white/5">
        Intentional friction makes impulsive behavior less likely.
      </p>
      <div className="grid grid-cols-2 gap-2">
        <div className="p-3 bg-zinc-900 border border-white/5 rounded-lg text-center flex flex-col items-center gap-1.5 shadow-sm">
          <Eye className="w-4 h-4 text-zinc-400" />
          <p className="text-[10px] text-zinc-500 uppercase mt-1">Eye Check</p>
          <p className="text-xs font-bold text-zinc-200">Follow targets</p>
        </div>
        <div className="p-3 bg-zinc-900 border border-white/5 rounded-lg text-center flex flex-col items-center gap-1.5 shadow-sm">
          <Pointer className="w-4 h-4 text-zinc-400" />
          <p className="text-[10px] text-zinc-500 uppercase mt-1">Reaction</p>
          <p className="text-xs font-bold text-zinc-200">Tap on green</p>
        </div>
        <div className="p-3 bg-zinc-900 border border-white/5 rounded-lg text-center flex flex-col items-center gap-1.5 shadow-sm">
          <Smartphone className="w-4 h-4 text-zinc-400" />
          <p className="text-[10px] text-zinc-500 uppercase mt-1">Balance</p>
          <p className="text-xs font-bold text-zinc-200">Verify steady</p>
        </div>
        <div className="p-3 bg-zinc-900 border border-white/5 rounded-lg text-center flex flex-col items-center gap-1.5 shadow-sm">
          <Users className="w-4 h-4 text-zinc-400" />
          <p className="text-[10px] text-zinc-500 uppercase mt-1">Squad Link</p>
          <p className="text-xs font-bold text-zinc-200">Remote Auth</p>
        </div>
      </div>
    </div>
    
    <div>
      <h3 className="text-[10px] font-semibold text-zinc-500 mb-3 uppercase tracking-widest">Pure Utility</h3>
      <div className="grid grid-cols-1 gap-2">
        <div className="px-3 py-3 bg-zinc-900 border border-white/5 rounded-lg flex items-center gap-3 shadow-sm">
            <Car className="w-4 h-4 text-zinc-400 shrink-0" />
            <span className="text-xs font-medium text-zinc-300">1-Tap Home: Bypass locks for Uber</span>
        </div>
        <div className="px-3 py-3 bg-zinc-900 border border-white/5 rounded-lg flex items-center gap-3 shadow-sm">
            <BatteryMedium className="w-4 h-4 text-zinc-400 shrink-0" />
            <span className="text-xs font-medium text-zinc-300">Save charge by dropping features</span>
        </div>
        <div className="px-3 py-3 bg-zinc-900 border border-white/5 rounded-lg flex items-center gap-3 shadow-sm">
            <PhoneOff className="w-4 h-4 text-zinc-400 shrink-0" />
            <span className="text-xs font-medium text-zinc-300">Fake call to exit situations</span>
        </div>
      </div>
    </div>
  </motion.div>
);
