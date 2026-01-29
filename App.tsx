
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ChatAssistant from './components/ChatAssistant';
import { PROJECTS, SERVICES, PRATIBHA_DETAILS, FLOOR_PLANS } from './constants';

const App: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('sent'), 1500);
  };

  return (
    <div className="min-h-screen selection:bg-[#50C878]/30 overflow-x-hidden">
      <Navbar />
      <ChatAssistant />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1448630360428-65426d25ce95?q=80&w=2070&auto=format&fit=crop"
            alt="Modern Architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#D1F2EB] via-[#D1F2EB]/95 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="neo-outset bg-white/60 backdrop-blur-xl border border-white/40 p-10 md:p-16 rounded-[4rem] animate-in fade-in slide-in-from-left duration-1000">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-1 bg-[#50C878] rounded-full"></div>
                <span className="text-xs font-black text-[#0B6E4F] uppercase tracking-[0.4em]">RERA Approved Developer</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-extrabold text-[#013220] leading-[0.9] mb-8">
                Build The <span className="text-[#50C878]">Green</span> Legacy.
              </h1>
              <p className="text-xl text-[#0B6E4F] mb-12 leading-relaxed font-medium">
                Green Acres Infrastructures introduces <strong>Pratibha Enclave</strong>. Premium living meets sustainable precision in the heart of Ranchi.
              </p>
              <div className="flex flex-wrap gap-5">
                <a href="#featured" className="px-10 py-5 bg-[#50C878] text-white font-black uppercase tracking-widest text-xs rounded-2xl shadow-xl hover:bg-[#0B6E4F] transition-all hover:scale-105 active:scale-95">
                  Discover Pratibha
                </a>
                <a href="#projects" className="px-10 py-5 neo-outset bg-white text-[#0B6E4F] font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-[#D1F2EB] transition-all active:scale-95">
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project: Pratibha Enclave */}
      <section id="featured" className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-start mb-24">
            {/* Visual Part */}
            <div className="lg:w-1/2 lg:sticky lg:top-32">
              <div className="neo-outset rounded-[4rem] overflow-hidden group border border-white">
                <img
                  src="/pratibha.jpg"
                  alt="Pratibha Enclave Building"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Units', val: '2/3 BHK' },
                  { label: 'Status', val: 'Ready' },
                  { label: 'Type', val: 'Elite' },
                  { label: 'RERA', val: 'Approved' }
                ].map((item, idx) => (
                  <div key={idx} className="p-5 bg-[#D1F2EB]/40 rounded-3xl neo-inset text-center border border-white/50">
                    <span className="block text-lg font-black text-[#013220] tracking-tighter">{item.val}</span>
                    <span className="text-[9px] text-[#0B6E4F] font-black uppercase tracking-widest opacity-60">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Details Part */}
            <div className="lg:w-1/2">
              <div className="mb-16">
                <h2 className="text-5xl font-black text-[#013220] mb-6 tracking-tight">Pratibha Enclave</h2>
                <div className="inline-flex items-center px-4 py-2 bg-[#50C878]/10 text-[#50C878] rounded-xl text-xs font-black uppercase tracking-widest mb-8">
                  <i className="fa-solid fa-location-dot mr-2"></i>
                  Tupudana Chowk, Ranchi
                </div>
                <p className="text-lg text-[#0B6E4F]/80 leading-relaxed font-medium mb-12">
                  Designed for the modern family, Pratibha Enclave combines structural integrity with aesthetic elegance. Every detail, from the Jindal steel to the Kajaria tiles, ensures a home that is as sturdy as it is beautiful.
                </p>

                {/* Floor Plan Breakdown from PDF */}
                <div className="space-y-6">
                  <h3 className="text-xs font-black text-[#50C878] uppercase tracking-[0.4em] mb-8">Typical Floor Plan Units</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {FLOOR_PLANS.map((plan, idx) => (
                      <div key={idx} className="p-6 bg-[#D1F2EB]/20 rounded-[2rem] border border-white flex justify-between items-center group hover:bg-[#50C878] transition-all">
                        <div>
                          <span className="text-[10px] font-black text-[#50C878] group-hover:text-white/80 uppercase tracking-widest">Flat {plan.flatNo}</span>
                          <h4 className="text-xl font-black text-[#013220] group-hover:text-white tracking-tighter">{plan.unit}</h4>
                        </div>
                        <div className="text-right">
                          <span className="block text-xl font-black text-[#0B6E4F] group-hover:text-white tracking-tighter">{plan.sbua}</span>
                          <span className="text-[9px] font-bold text-gray-400 group-hover:text-white/60 uppercase tracking-widest">SBUA (Sq. Ft.)</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Specs Table */}
              <div className="space-y-8 mb-16">
                <h3 className="text-xs font-black text-[#50C878] uppercase tracking-[0.4em] mb-10">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {[
                    { title: "Structure & Steel", desc: `${PRATIBHA_DETAILS.structure} Using ${PRATIBHA_DETAILS.tmt}`, icon: "fa-cubes" },
                    { title: "Eco Walls", desc: PRATIBHA_DETAILS.walls, icon: "fa-wall" },
                    { title: "Premium Flooring", desc: PRATIBHA_DETAILS.flooring, icon: "fa-layer-group" },
                    { title: "Chef's Kitchen", desc: PRATIBHA_DETAILS.kitchen, icon: "fa-utensils" },
                    { title: "Fittings & Sanitary", desc: PRATIBHA_DETAILS.bathroom, icon: "fa-bath" },
                    { title: "Smart Electricals", desc: PRATIBHA_DETAILS.electrical, icon: "fa-plug" },
                    { title: "Vertical Transport", desc: PRATIBHA_DETAILS.lifts, icon: "fa-elevator" },
                    { title: "Water Systems", desc: PRATIBHA_DETAILS.pumps, icon: "fa-droplet" }
                  ].map((s, i) => (
                    <div key={i} className="group">
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-[#D1F2EB] flex items-center justify-center text-[#50C878] group-hover:bg-[#50C878] group-hover:text-white transition-colors">
                          <i className={`fa-solid ${s.icon} text-sm`}></i>
                        </div>
                        <h4 className="font-bold text-[#013220] text-sm uppercase tracking-wider">{s.title}</h4>
                      </div>
                      <p className="text-[11px] text-[#0B6E4F]/70 leading-relaxed ml-12">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Proximity Grid */}
              <div className="space-y-6">
                <h3 className="text-xs font-black text-[#50C878] uppercase tracking-[0.4em] mb-8">Strategic Proximity</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {PRATIBHA_DETAILS.proximity.map((p, idx) => (
                    <div key={idx} className="p-4 bg-white neo-inset rounded-2xl border border-[#D1F2EB]">
                      <span className="block text-[#013220] font-black text-sm tracking-tight">{p.value}</span>
                      <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{p.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section with Blurred Upcoming Projects */}
      <section id="projects" className="py-32 bg-[#D1F2EB]/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-[#013220] mb-6">Our Legacy Portfolio</h2>
            <div className="w-20 h-1.5 bg-[#50C878] mx-auto rounded-full mb-8"></div>
            <p className="text-[#0B6E4F]/60 max-w-xl mx-auto font-medium">From signature landmarks to secret developments, we are building the future.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-[4rem] bg-white neo-outset flex flex-col transition-all duration-700 ${project.status === 'Upcoming' ? 'cursor-not-allowed border-none' : 'hover:translate-y-[-12px] border border-white'
                  }`}
              >
                {/* Image Container */}
                <div className={`relative h-[32rem] overflow-hidden ${project.status === 'Upcoming' ? 'blur-3xl grayscale opacity-30 scale-125' : ''}`}>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>

                {/* Upcoming Overlay - Glass Blur Effect */}
                {project.status === 'Upcoming' && (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-12 text-center bg-[#D1F2EB]/10 backdrop-blur-xl">
                    <div className="w-24 h-24 bg-[#0B6E4F]/40 rounded-full flex items-center justify-center mb-8 border border-white/40 shadow-2xl">
                      <i className="fa-solid fa-eye-slash text-white text-3xl"></i>
                    </div>
                    <h3 className="text-4xl font-black text-[#013220] mb-4 uppercase tracking-tighter drop-shadow-sm">Classified Project</h3>
                    <div className="px-6 py-2 bg-[#50C878] text-white text-[10px] font-black uppercase tracking-[0.5em] rounded-full shadow-lg">
                      Revealing Soon
                    </div>
                  </div>
                )}

                {/* Content Overlay */}
                <div className={`p-12 transition-all duration-700 ${project.status === 'Upcoming' ? 'blur-md grayscale opacity-10 pointer-events-none' : 'group-hover:bg-[#013220]/5'}`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div>
                      <span className="text-[10px] font-black text-[#50C878] uppercase tracking-[0.3em] mb-3 block">{project.category}</span>
                      <h3 className="text-4xl font-black text-[#013220] tracking-tight">{project.title}</h3>
                    </div>
                    <div className="px-5 py-2 bg-[#0B6E4F] text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-lg h-fit">
                      {project.status}
                    </div>
                  </div>
                  <p className="text-gray-500 mb-10 leading-relaxed font-medium text-sm">{project.description}</p>
                  <button className="w-full py-5 bg-[#50C878] text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-[#0B6E4F] transition-all shadow-xl shadow-[#50C878]/20">
                    Full Project Brochure
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {SERVICES.map((service) => (
              <div key={service.id} className="neo-outset p-10 rounded-[3rem] bg-[#D1F2EB]/20 border border-white hover:bg-[#D1F2EB]/40 transition-all duration-500 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#50C878] mb-8 shadow-inner group-hover:bg-[#50C878] group-hover:text-white transition-all transform group-hover:rotate-6">
                  <i className={`fa-solid ${service.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-black text-[#013220] mb-4 uppercase tracking-tighter">{service.title}</h3>
                <p className="text-[#0B6E4F]/70 text-sm leading-relaxed font-medium">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto bg-[#013220] rounded-[4rem] overflow-hidden neo-outset flex flex-col lg:flex-row relative">
            <div className="lg:w-2/5 p-12 md:p-20 bg-[#0B6E4F] text-white relative flex flex-col justify-between overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-5xl font-black mb-8 leading-tight tracking-tight">Your Next Home Awaits.</h2>
                <div className="w-12 h-1 bg-[#50C878] mb-12"></div>

                <div className="space-y-10">
                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl shadow-inner border border-white/5 shrink-0">
                      <i className="fa-solid fa-map-location"></i>
                    </div>
                    <div>
                      <div className="text-[#50C878] text-[10px] uppercase font-black tracking-[0.3em] mb-2">Main Site</div>
                      <div className="font-medium text-sm text-white/90 leading-relaxed">Tupudana Chowk, Post Office Gali,<br />Namkum Road, Ranchi-834003</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl shadow-inner border border-white/5 shrink-0">
                      <i className="fa-solid fa-user-shield"></i>
                    </div>
                    <div>
                      <div className="text-[#50C878] text-[10px] uppercase font-black tracking-[0.3em] mb-2">Legal Compliance</div>
                      <div className="font-medium text-sm text-white/90">PRATIBHA ENCLAVE (RERA APPROVED)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-20 -right-20 p-12 opacity-5 scale-150 rotate-45 pointer-events-none">
                <i className="fa-solid fa-city text-[30rem]"></i>
              </div>
            </div>

            <div className="lg:w-3/5 p-12 md:p-20 bg-[#013220]">
              {formStatus === 'sent' ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-8 animate-in fade-in zoom-in duration-500">
                  <div className="w-28 h-28 bg-[#50C878] text-white rounded-full flex items-center justify-center text-6xl shadow-2xl shadow-[#50C878]/30">
                    <i className="fa-solid fa-paper-plane"></i>
                  </div>
                  <div>
                    <h3 className="text-4xl font-black text-white mb-2">Brochure Requested!</h3>
                    <p className="text-[#D1F2EB]/60 font-medium italic">Our agent will call you with technical floor plans for Pratibha Enclave.</p>
                  </div>
                  <button onClick={() => setFormStatus('idle')} className="text-[#50C878] font-black uppercase tracking-widest text-xs hover:underline">New Inquiry</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-[#50C878] uppercase tracking-[0.3em]">Identity</label>
                      <input required type="text" className="w-full px-0 py-4 bg-transparent border-b-2 border-white/10 text-white outline-none focus:border-[#50C878] transition-all text-lg font-medium placeholder:text-white/20" placeholder="Full Name" />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-[#50C878] uppercase tracking-[0.3em]">Communication</label>
                      <input required type="tel" className="w-full px-0 py-4 bg-transparent border-b-2 border-white/10 text-white outline-none focus:border-[#50C878] transition-all text-lg font-medium placeholder:text-white/20" placeholder="Contact Number" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-[#50C878] uppercase tracking-[0.3em]">Interested Unit</label>
                    <div className="relative">
                      <select className="w-full px-0 py-4 bg-transparent border-b-2 border-white/10 text-white outline-none focus:border-[#50C878] transition-all text-lg font-medium appearance-none">
                        <option className="bg-[#013220]">Pratibha Enclave - 2BHK</option>
                        <option className="bg-[#013220]">Pratibha Enclave - 3BHK</option>
                        <option className="bg-[#013220]">Emerald Vistas (Priority List)</option>
                        <option className="bg-[#013220]">Other Inquiries</option>
                      </select>
                      <i className="fa-solid fa-caret-down absolute right-0 top-1/2 -translate-y-1/2 text-[#50C878] pointer-events-none"></i>
                    </div>
                  </div>
                  <button
                    disabled={formStatus === 'sending'}
                    type="submit"
                    className="w-full py-6 bg-[#50C878] text-white font-black uppercase tracking-[0.4em] text-sm rounded-3xl shadow-2xl shadow-[#50C878]/30 hover:bg-white hover:text-[#013220] transition-all transform hover:-translate-y-1 active:scale-95 disabled:opacity-50"
                  >
                    {formStatus === 'sending' ? 'Transmitting Inbound...' : 'Request Property Brochure'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Footer */}
      <footer className="bg-[#013220] pt-32 pb-16 text-white border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-24">
            <div className="w-20 h-20 bg-[#50C878] rounded-[2rem] flex items-center justify-center shadow-2xl mb-10 transform -rotate-6">
              <i className="fa-solid fa-tree text-white text-4xl"></i>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 uppercase">Green Acres Infrastructures</h2>
            <p className="max-w-xl text-[#D1F2EB]/40 font-medium text-xs leading-relaxed uppercase tracking-widest italic">
              RERA Approved Developer | Promoter of Pratibha Enclave | Specialist in Sustainable Infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-5xl mx-auto border-y border-white/10 py-20 mb-20">
            <div className="text-center">
              <h4 className="text-[#50C878] text-[10px] font-black uppercase tracking-widest mb-6">Corporate Hub</h4>
              <p className="text-sm font-medium text-[#D1F2EB]/70">Sustainable Plaza, Level 42<br />Central Business District</p>
            </div>
            <div className="text-center">
              <h4 className="text-[#50C878] text-[10px] font-black uppercase tracking-widest mb-6">Site Presence</h4>
              <p className="text-sm font-medium text-[#D1F2EB]/70">Tupudana Chowk, Ranchi<br />Namkum Road, 834003</p>
            </div>
            <div className="text-center">
              <h4 className="text-[#50C878] text-[10px] font-black uppercase tracking-widest mb-6">Direct Line</h4>
              <p className="text-sm font-medium text-[#D1F2EB]/70">hello@greenacres.infra<br />+1 (800) GREEN-ACRES</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-[10px] font-black text-[#D1F2EB]/20 uppercase tracking-[0.5em]">
            <p>© 2024 Green Acres Infrastructures. All rights reserved.</p>
            <div className="flex space-x-12">
              <a href="#" className="hover:text-[#50C878] transition-colors">Privacy Standards</a>
              <a href="#" className="hover:text-[#50C878] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
