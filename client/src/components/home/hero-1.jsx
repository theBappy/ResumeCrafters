import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight, Play, Star, Sparkles, CheckCircle2, FileText, Bot } from 'lucide-react';

export const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logos = [
    "https://saasly.prebuiltui.com/assets/companies-logo/instagram.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/framer.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/microsoft.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/huawei.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/walmart.svg",
    // Duplicated for marquee effect
    "https://saasly.prebuiltui.com/assets/companies-logo/instagram.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/framer.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/microsoft.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/huawei.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/walmart.svg",
  ];

  const avatars = [
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200",
    "https://randomuser.me/api/portraits/men/75.jpg",
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-50">
      
      {/* --- Animated Background Elements --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      {/* --- Navbar --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 bg-green-600 rounded-xl text-white shadow-lg shadow-green-200 group-hover:scale-105 transition-transform duration-300">
               <FileText size={20} className="absolute" />
               <Sparkles size={12} className="absolute top-1 right-1 text-yellow-200 animate-pulse" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800">
              Resume<span className="text-green-600">Crafters</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600 text-sm">
            {['Home', 'Features', 'Templates', 'Pricing'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="relative hover:text-green-600 transition-colors duration-200 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-green-500 after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex gap-3 items-center">
            <Link 
              to="/login"
              className="px-5 py-2.5 rounded-full text-slate-600 font-medium hover:text-green-700 hover:bg-green-50 transition-all duration-300 text-sm"
            >
              Sign In
            </Link>
            <Link
              to="/app"
              className="group px-6 py-2.5 bg-slate-900 hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30 text-white rounded-full transition-all duration-300 flex items-center gap-2 text-sm font-medium transform active:scale-95"
            >
              Get Started
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setMenuOpen(true)} 
            className="md:hidden text-slate-700 p-2 hover:bg-slate-100 rounded-lg transition"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* --- Mobile Menu Overlay --- */}
      <div className={`fixed inset-0 z-100 bg-slate-900/90 backdrop-blur-xl transition-all duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-white shadow-2xl p-6 transition-transform duration-500 ease-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center mb-8">
             <span className="font-bold text-lg text-slate-800">Menu</span>
             <button onClick={() => setMenuOpen(false)} className="p-2 bg-slate-100 rounded-full hover:bg-red-50 hover:text-red-500 transition">
               <X size={20} />
             </button>
          </div>
          <div className="flex flex-col gap-6 text-lg font-medium text-slate-700">
            {['Home', 'Features', 'Templates', 'Pricing'].map((item) => (
               <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="hover:text-green-600 transition">
                 {item}
               </a>
            ))}
            <hr className="border-slate-100" />
            <Link to="/login" className="text-center w-full py-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition">
              Sign In
            </Link>
            <Link to="/app" className="text-center w-full py-3 rounded-xl bg-green-600 text-white shadow-lg shadow-green-200 hover:bg-green-700 transition">
              Get Started Free
            </Link>
          </div>
        </div>
      </div>

      {/* --- Hero Content --- */}
      <div className="relative pt-32 pb-20 px-6 lg:pt-48 lg:pb-32">
        <div className="container mx-auto max-w-7xl flex flex-col items-center text-center">
          
          {/* Animated Badge */}
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-green-100 shadow-sm mb-8 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                v2.0 with AI Analysis is live
              </span>
            </div>
          </div>

          {/* Headlines */}
          <h1 className="max-w-4xl mx-auto text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
            Transform your career with <br className="hidden md:block" />
            <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-r from-green-600 to-emerald-500">
              Intelligent Resume Creation
              {/* Decorative underline */}
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-green-300/50" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7501 9.75017 59.8182 2.76678 81.3323 2.16666C121.782 1.03823 162.756 7.6405 197.989 3.99999" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10 leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
            Leverage AI to craft professional resumes in minutes. With real-time scoring, ATS-friendly templates, and smart suggestions, ResumeCrafters makes getting hired effortless.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/app"
              className="h-14 px-8 rounded-full bg-green-600 text-white font-semibold shadow-lg shadow-green-500/25 hover:bg-green-700 hover:shadow-green-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group"
            >
              Build My Resume
              <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
            </Link>
            
            <button className="h-14 px-8 rounded-full bg-white text-slate-700 font-semibold border border-slate-200 hover:border-green-300 hover:bg-green-50/50 transition-all duration-300 flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
                <Play size={14} fill="currentColor" />
              </div>
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Social Proof / Stats */}
          <div className="mt-16 flex flex-col md:flex-row items-center gap-6 md:gap-12 animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center -space-x-4">
              {avatars.map((src, i) => (
                <div key={i} className="relative w-10 h-10 rounded-full border-2 border-white shadow-sm hover:-translate-y-1 transition-transform duration-300 z-0 hover:z-10">
                  <img src={src} alt={`User ${i}`} className="w-full h-full object-cover rounded-full" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-green-50 flex items-center justify-center text-xs font-bold text-green-700 z-10">
                10k+
              </div>
            </div>
            
            <div className="flex flex-col items-start">
              <div className="flex gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-sm text-slate-600 font-medium">Loved by 10,000+ professionals</p>
            </div>
          </div>

          {/* --- Floating Mockup Visual --- */}
          <div className="mt-20 relative w-full max-w-5xl mx-auto perspective-1000 animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s' }}>
            {/* The Main Card */}
            <div className="relative z-10 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden transform hover:scale-[1.01] transition-transform duration-700 ease-out">
              
              {/* Header of the fake UI */}
              <div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="ml-4 px-3 py-1 bg-white rounded-md text-[10px] text-slate-400 font-mono shadow-sm border border-slate-100">
                  resume-v1-final.pdf
                </div>
              </div>

              {/* Body of the fake UI */}
              <div className="flex flex-col md:flex-row h-64 md:h-96">
                {/* Sidebar (Editor) */}
                <div className="hidden md:flex w-64 bg-slate-50 border-r border-slate-100 flex-col p-4 gap-4">
                  <div className="space-y-2">
                    <div className="h-2 w-16 bg-slate-200 rounded"></div>
                    <div className="h-8 w-full bg-white border border-slate-200 rounded-lg shadow-sm"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-24 bg-slate-200 rounded"></div>
                    <div className="h-24 w-full bg-white border border-slate-200 rounded-lg shadow-sm"></div>
                  </div>
                  <div className="mt-auto p-3 bg-green-50 border border-green-100 rounded-lg">
                    <div className="flex items-center gap-2 text-green-700 text-xs font-bold mb-1">
                      <Bot size={14} /> AI Suggestion
                    </div>
                    <div className="h-1.5 w-full bg-green-200/50 rounded mb-1.5"></div>
                    <div className="h-1.5 w-3/4 bg-green-200/50 rounded"></div>
                  </div>
                </div>

                {/* Main Preview Area */}
                <div className="flex-1 bg-slate-100 p-6 md:p-8 flex items-center justify-center relative overflow-hidden">
                   {/* Scanning Beam Effect */}
                   <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-green-400 to-transparent z-20 shadow-[0_0_15px_rgba(74,222,128,0.5)] animate-scan opacity-50"></div>
                   
                   <div className="bg-white w-full max-w-md h-full shadow-lg p-6 md:p-8 flex flex-col gap-4 relative z-10">
                      {/* Resume Content Skeleton */}
                      <div className="flex gap-4 items-center border-b border-slate-100 pb-4">
                        <div className="w-12 h-12 rounded-full bg-slate-200"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-4 w-1/2 bg-slate-800 rounded"></div>
                          <div className="h-2 w-1/3 bg-slate-400 rounded"></div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-2 w-full bg-slate-100 rounded"></div>
                        <div className="h-2 w-full bg-slate-100 rounded"></div>
                        <div className="h-2 w-3/4 bg-slate-100 rounded"></div>
                      </div>
                      <div className="space-y-3 pt-2">
                        <div className="flex items-center justify-between">
                           <div className="h-3 w-1/4 bg-slate-300 rounded"></div>
                           <div className="h-2 w-12 bg-green-100 text-green-600 rounded-full flex justify-center items-center text-[8px] font-bold">98/100</div>
                        </div>
                        <div className="h-2 w-full bg-slate-100 rounded"></div>
                        <div className="h-2 w-5/6 bg-slate-100 rounded"></div>
                      </div>
                   </div>

                   {/* Floating Elements (AI Chips) */}
                   <div className="absolute top-1/4 right-8 bg-white p-2 rounded-lg shadow-xl border border-green-100 animate-float">
                      <div className="flex items-center gap-2">
                         <div className="p-1 bg-green-100 rounded-md text-green-600"><CheckCircle2 size={14} /></div>
                         <span className="text-xs font-semibold text-slate-700">Grammar Fixed</span>
                      </div>
                   </div>

                   <div className="absolute bottom-1/4 left-8 bg-white p-2 rounded-lg shadow-xl border border-blue-100 animate-float" style={{ animationDelay: '1s' }}>
                      <div className="flex items-center gap-2">
                         <div className="p-1 bg-blue-100 rounded-md text-blue-600"><Sparkles size={14} /></div>
                         <span className="text-xs font-semibold text-slate-700">Skills Optimized</span>
                      </div>
                   </div>
                </div>
              </div>
            </div>

            {/* Back Glow behind mockup */}
            <div className="absolute -inset-4 bg-linear-to-r from-green-400 to-teal-400 opacity-20 blur-2xl -z-10 rounded-4xl"></div>
          </div>
          
          {/* Company Logos - Marquee */}
          <div className="mt-24 w-full">
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">Trusted by industry leaders</p>
            <div className="relative w-full overflow-hidden mask-gradient">
              <div className="flex w-max animate-scroll gap-16 items-center">
                {logos.map((logo, index) => (
                  <img 
                    key={index} 
                    src={logo} 
                    alt="Company logo" 
                    className="h-8 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                ))}
              </div>
              <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-slate-50 to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-slate-50 to-transparent z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

