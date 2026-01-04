import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Github, Linkedin, Shield, Terminal, Code, Server, Lock, ChevronRight, ExternalLink } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'projects', 'blog', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  const projects = [
      {
    title: 'Fraud Detection Dashboard',
    description: 'Built a Splunk dashboard analyzing 10,000+ financial transactions to detect fraud patterns across demographics, categories, and merchants using custom SPL queries.',
    tags: ['Splunk', 'spl', 'Data Analysis', 'Data Visualization', 'Fraud Detection'],
    icon: Shield,
    url: 'https://github.com/GuyCPalmer/Fraud-Analysis---Splunk-Dashboard-to-Combat-Financial-Fraud'
  },

    {
      title: 'Active Directory Manager',
      description: 'Custom AD management dashboard for streamlined user provisioning.',
      tags: ['PowerShell', 'Active Directory', 'React'],
      icon: Server,
      url: '#'
    },
    {
      title: 'Phishing Campaign Analyzer',
      description: 'Analytics platform for tracking and improving security awareness training.',
      tags: ['JavaScript', 'API Integration', 'Data Viz'],
      icon: Lock,
      url: '#'
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogCategories = [
    { id: 'all', label: 'All Posts' },
    { id: 'journey', label: 'Journey into Cybersecurity' },
  ];

  const blogPosts = [
{
  title: 'Cracking the Code: A Journey Beyond Titles',
  excerpt: 'In today\'s rapidly advancing digital world, the allure of prestigious job titles within the cybersecurity domain is undeniable...',
  date: '2024',
  category: 'journey',
  url: 'https://medium.com/@guycpalmer_26364/cracking-the-code-a-journey-beyond-titles-f17dc832a5cd'
},
    {
  title: 'Cracking the Code: Navigating the Second Act',
  excerpt: 'I stand at a crossroads, my career path more a series of detours than a direct route to fulfillment...',
  date: '2024',
  category: 'journey',
  url: 'https://medium.com/@guycpalmer_26364/cracking-the-code-navigating-the-second-act-b527a06a8ede'
},

    {
  title: 'Cracking the Code: Go Phish',
  excerpt: 'Buckle up as we navigate through the complicated world of cybersecurity, where the thrill of crafting phishing emails collides...',
  date: '2024',
  category: 'journey',
  url: 'https://medium.com/@guycpalmer_26364/cracking-the-code-go-phish-99fdce084053'
},
{
  title: 'Cracking the Code: Incident Response',
  excerpt: 'Exploring the critical world of cybersecurity incident response, where preparation meets action in protecting digital infrastructure...',
  date: '2024',
  category: 'journey',
  url: 'https://medium.com/@guycpalmer_26364/cracking-the-code-incident-response-c83d80edf002'
}
];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const certifications = [
    'CompTIA Security+ (May 2024)',
    'Evolve Security Certified Professional (2024)',
    'Certificate in Cyber Security (2024)',
    'Azure Administrator (AZ-104) - In Progress'
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Terminal className="w-6 h-6 text-cyan-400" />
              <span className="text-xl font-bold">Guy Palmer</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors hover:text-cyan-400 ${activeSection === item.id ? 'text-cyan-400' : 'text-slate-300'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-300 hover:text-cyan-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-24">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-16 flex justify-center">
            <div className="relative w-52 h-52">
              <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="mb-12 flex justify-center">
  <div className="relative w-56 h-56 mb-8">
    <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-2xl animate-pulse"></div>
    <svg viewBox="0 0 200 220" className="w-56 h-56 relative drop-shadow-2xl">
      <defs>
        {/* Glowing effects - reduced intensity */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        <filter id="innerGlow">
          <feGaussianBlur stdDeviation="1"/>
          <feComposite in2="SourceAlpha" operator="in"/>
        </filter>
        
        {/* Gradients for cyber look */}
        <linearGradient id="cyberShield" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="50%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        
        <linearGradient id="energyGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="50%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        
        <linearGradient id="keyGlow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#67e8f9" />
          <stop offset="50%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
        
        <radialGradient id="energyPulse">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
        </radialGradient>
      </defs>
      
     {/* Outer energy glow - reduced opacity */}
<path
  d="M100 5 L180 40 L180 120 Q180 170 100 210 Q20 170 20 120 L20 40 Z"
  fill="url(#energyPulse)"
  opacity="0.3"
  filter="url(#glow)"
/>

{/* Main shield */}
<path
  d="M100 10 L175 42 L175 118 Q175 165 100 205 Q25 165 25 118 L25 42 Z"
  fill="url(#cyberShield)"
  stroke="url(#energyGlow)"
  strokeWidth="3"
  filter="url(#glow)"
/>

{/* Inner shield layer */}
<path
  d="M100 25 L160 52 L160 115 Q160 155 100 188 Q40 155 40 115 L40 52 Z"
  fill="none"
  stroke="#06b6d4"
  strokeWidth="1.5"
  opacity="0.4"
  filter="url(#innerGlow)"
/>

  {/* Outer shield glow ring - reduced opacity */}
<path
  d="M100 10 L175 42 L175 118 Q175 165 100 205 Q25 165 25 118 L25 42 Z"
  fill="none"
  stroke="#22d3ee"
  strokeWidth="1"
  opacity="0.2"
  filter="url(#glow)"
/>
      
      {/* CONNECTION LINES - Trust paths from center to nodes */}
      <g stroke="#06b6d4" strokeWidth="2" opacity="0.5" filter="url(#glow)">
        <line x1="100" y1="90" x2="100" y2="25" />
        <line x1="100" y1="90" x2="160" y2="60" />
        <line x1="100" y1="90" x2="160" y2="120" />
        <line x1="100" y1="90" x2="100" y2="170" />
        <line x1="100" y1="90" x2="40" y2="120" />
        <line x1="100" y1="90" x2="40" y2="60" />
      </g>
      
      {/* Intermediate connection points - showing trust flow */}
      <g fill="#22d3ee" opacity="0.">
        <circle cx="100" cy="57" r="3" />
        <circle cx="130" cy="75" r="3" />
        <circle cx="130" cy="105" r="3" />
        <circle cx="70" cy="105" r="3" />
        <circle cx="70" cy="75" r="3" />
      </g>
      
      {/* Circuit pattern lines */}
      <g stroke="#06b6d4" strokeWidth="1" fill="none" opacity="0.3">
        {/* Horizontal circuit lines */}
        <line x1="40" y1="70" x2="70" y2="70" />
        <line x1="130" y1="70" x2="160" y2="70" />
        <line x1="40" y1="110" x2="70" y2="110" />
        <line x1="130" y1="110" x2="160" y2="110" />
        
        {/* Vertical circuit lines */}
        <line x1="70" y1="50" x2="70" y2="80" />
        <line x1="130" y1="50" x2="130" y2="80" />
        <line x1="70" y1="100" x2="70" y2="130" />
        <line x1="130" y1="100" x2="130" y2="130" />
      </g>
      
      {/* Hexagonal corner nodes - IDENTITY OBJECTS (users, apps, devices, service principals) */}
      <g filter="url(#glow)">
        {/* Node rings */}
        <circle cx="100" cy="25" r="8" fill="none" stroke="#06b6d4" strokeWidth="2" />
        <circle cx="160" cy="60" r="8" fill="none" stroke="#06b6d4" strokeWidth="2" />
        <circle cx="160" cy="120" r="8" fill="none" stroke="#06b6d4" strokeWidth="2" />
        <circle cx="40" cy="120" r="8" fill="none" stroke="#06b6d4" strokeWidth="2" />
        <circle cx="40" cy="60" r="8" fill="none" stroke="#06b6d4" strokeWidth="2" />
        
        {/* Node centers - glowing cores */}
        <circle cx="100" cy="25" r="5" fill="#22d3ee" />
        <circle cx="160" cy="60" r="5" fill="#22d3ee" />
        <circle cx="160" cy="120" r="5" fill="#22d3ee" />
        <circle cx="40" cy="120" r="5" fill="#22d3ee" />
        <circle cx="40" cy="60" r="5" fill="#22d3ee" />
      </g>
      
      
      {/* Cyber Key - THE AUTHORIZATION MECHANISM - repositioned higher */}
<g transform="translate(100, 95)" filter="url(#glow)">
  {/* Key head - circular with tech details */}
  <circle r="18" fill="#0c4a6e" opacity="0.8" />
  <circle r="16" fill="none" stroke="url(#keyGlow)" strokeWidth="2.5" />
  <circle r="12" fill="none" stroke="#22d3ee" strokeWidth="1.5" />
  
  {/* Inner core */}
  <circle r="6" fill="#06b6d4" />
  <circle r="3.5" fill="#22d3ee" />
  
  {/* Cross design in key head - access grant indicators */}
  <line x1="-12" y1="0" x2="-16" y2="0" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" />
  <line x1="12" y1="0" x2="16" y2="0" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" />
  <line x1="0" y1="-12" x2="0" y2="-16" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" />
  <line x1="0" y1="12" x2="0" y2="16" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" />
  
  {/* Diagonal accents */}
  <line x1="-8" y1="-8" x2="-11" y2="-11" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
  <line x1="8" y1="-8" x2="11" y2="-11" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
  <line x1="-8" y1="8" x2="-11" y2="11" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
  <line x1="8" y1="8" x2="11" y2="11" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
  
  {/* Key shaft - access path - shortened */}
  <rect x="-2.5" y="18" width="4" height="57" fill="url(#keyGlow)" rx="2.5" />
  <rect x="-2.5" y="18" width="4" height="57" fill="#22d3ee" opacity="0.4" />
  
  {/* Key shaft details - tech lines */}
  <line x1="-3.5" y1="30" x2="3.5" y2="30" stroke="#0c4a6e" strokeWidth="0.8" />
  <line x1="-3.5" y1="42" x2="3.5" y2="42" stroke="#0c4a6e" strokeWidth="0.8" />
  <line x1="-3.5" y1="54" x2="3.5" y2="54" stroke="#0c4a6e" strokeWidth="0.8" />
  
  {/* Key teeth - permission grants (different sizes = different privilege levels) */}
  <g fill="#06b6d4">
    <rect x="3.5" y="48" width="7" height="3.5" rx="0.8" />
    <rect x="3.5" y="54" width="10" height="3.5" rx="0.8" />
    <rect x="3.5" y="60" width="7" height="3.5" rx="0.8" />
    <rect x="3.5" y="66" width="5" height="3.5" rx="0.8" />
    
  </g>
  
  {/* Highlight on key shaft */}
  <rect x="-1.5" y="19" width="1.5" height="47" fill="#67e8f9" opacity="0.25" />
</g>
      
      {/* Energy particles - active authorization flows - reduced opacity */}
      <g fill="#06b6d4" opacity="0.3">
        <circle cx="50" cy="80" r="2" filter="url(#glow)" />
        <circle cx="150" cy="85" r="2" filter="url(#glow)" />
        <circle cx="60" cy="130" r="2" filter="url(#glow)" />
        <circle cx="140" cy="135" r="2" filter="url(#glow)" />
        <circle cx="80" cy="40" r="2" filter="url(#glow)" />
        <circle cx="120" cy="45" r="2" filter="url(#glow)" />
      </g>
      
      {/* Outer hex glow ring - governance boundary - reduced opacity */}
      <polygon
        points="100,10 175,52 175,128 100,205 25,128 25,52"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="1"
        opacity="0.2"
        filter="url(#glow)"
      />
    </svg>
  </div>
</div>
            </div>
          </div>
          
          {/* Terminal Window */}
          <div className="mb-8 text-left max-w-2xl mx-auto bg-slate-900/90 backdrop-blur-sm border-2 border-cyan-500/40 rounded-xl shadow-2xl shadow-cyan-500/30 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/90 border-b border-cyan-500/20">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-base text-slate-400 ml-2 font-mono">terminal</span>
            </div>
            <div className="p-6 space-y-4 font-mono text-base">
              <div>
                <span className="text-green-400">$</span>
                <span className="text-slate-300"> whoami</span>
              </div>
              <div className="text-3xl font-bold text-slate-100 pl-2">Guy Palmer</div>
              
              <div className="pt-2">
                <span className="text-green-400">$</span>
                <span className="text-slate-300"> cat role.txt</span>
              </div>
              <div className="text-slate-300 pl-2">IT Manager | Cloud Security & IAM</div>
              
              <div className="pt-2">
                <span className="text-green-400">$</span>
                <span className="text-slate-300"> ls skills/</span>
              </div>
             <div className="text-slate-400 text-base pl-2">
              Azure AD/Entra ID | Active Directory | SCIM | Google Workspace | PowerShell | Team Leadership
              </div>
              
              <div className="pt-1">
                <span className="text-green-400">$</span>
                <span className="animate-pulse text-slate-100"> ▊</span>
              </div>
            </div>
          </div>

          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Securing systems, solving problems, and building resilient infrastructure
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold rounded-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              View Projects <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-all">
             <h3 className="text-2xl font-bold mb-4 text-cyan-400">whoami -v</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
               I am a Core Technician Manager with a CompTIA Security+ certification, leading a team of five technicians supporting enterprise-scale cybersecurity platforms at KnowBe4. I provide technical leadership while remaining hands-on with complex customer environments, ensuring reliable, secure platform operations.
              </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              My expertise centers on identity and access management, including integrations with Microsoft Entra ID (Azure AD), Active Directory, SCIM provisioning, and Google Workspace. I troubleshoot authentication, synchronization, and provisioning issues, implement IP and domain whitelisting, and analyze logs to resolve complex platform and integration problems.
              </p>
            <p className="text-slate-300 leading-relaxed">
              As a manager, I mentor technicians, oversee escalations, and drive consistent troubleshooting standards to improve resolution times and deployment outcomes, aligning technical execution with security best practices.
              </p>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Current Focus</h3>
<p className="text-slate-300 leading-relaxed mb-6">
  Advancing into Cloud Security Engineering with specialization in Identity & Access Management and Azure security architecture. Pursuing Azure Administrator (AZ-104) and Azure Security Engineer (AZ-500) certifications to formalize enterprise-level experience with Azure AD/Entra ID, SCIM provisioning, authentication systems, and security controls. Leveraging hands-on expertise in cloud identity management to build comprehensive cloud security solutions.
</p>
              <div className="space-y-2">
                <h4 className="font-semibold text-cyan-400 mb-3">Certifications</h4>
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 relative bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500 hidden md:block"></div>
            <div className="space-y-12">
<div className="relative md:ml-16">
  <div className="absolute -left-16 top-6 w-12 h-12 bg-slate-900 border-4 border-cyan-500 rounded-full hidden md:flex items-center justify-center">
    <Server className="w-5 h-5 text-cyan-400" />
  </div>
  <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-all">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
      <div>
        <h3 className="text-2xl font-bold text-cyan-400">Core Technician Manager</h3>
        <p className="text-slate-400">KnowBe4</p>
      </div>
      <span className="text-slate-400 text-sm mt-2 sm:mt-0">November 2025 - Present</span>
    </div>
    <p className="text-slate-300 leading-relaxed mb-4">
      Lead a team of five technicians supporting enterprise-scale cybersecurity platforms, providing technical leadership while remaining hands-on with complex customer environments. Expertise centers on identity and access management, including integrations with Microsoft Entra ID, Active Directory, SCIM provisioning, and Google Workspace. Mentor technicians, oversee escalations, and drive consistent troubleshooting standards to improve resolution times and deployment outcomes.
    </p>
    
    <div className="mt-6 pt-6 border-t border-slate-700">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
        <div>
          <h4 className="text-lg font-semibold text-cyan-400/80">Core Technician</h4>
          <p className="text-slate-500 text-sm">Promoted to Manager</p>
        </div>
        <span className="text-slate-500 text-sm mt-2 sm:mt-0">August 2024 - November 2025</span>
      </div>
      <p className="text-slate-400 text-sm leading-relaxed">
        Resolved an average of 200 complex technical issues per month for KnowBe4 customers. Collaborated closely with system administrators to troubleshoot platform-related issues, configure and maintain integrations with Active Directory, Microsoft Entra ID and whitelisting rules in Microsoft 365.
      </p>
    </div>
  </div>
</div>
              <div className="relative md:ml-16">
                <div className="absolute -left-16 top-6 w-12 h-12 bg-slate-900 border-4 border-blue-500 rounded-full hidden md:flex items-center justify-center">
                  <Code className="w-5 h-5 text-blue-400" />
                </div>
                <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-cyan-400">Bachelor of Arts</h3>
                      <p className="text-slate-400">University of Texas</p>
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Foundation in critical thinking, communication, and problem-solving that complements technical expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {projects.map((project, idx) => (
                 <a key={idx}
                   href={project.url}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-all hover:scale-105 group block"
                 >
                   <div className="flex items-center justify-between mb-4">
                     <div className="flex items-center gap-3">
                       <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                         <project.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 bg-slate-800 text-cyan-400 text-sm rounded-full border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
{/* Blog Section */}
<section id="blog" className="py-20 px-4 relative bg-slate-900/30">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-8 text-center">
      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Latest Posts
      </span>
    </h2>
    
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {blogCategories.map(category => (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.id)}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            selectedCategory === category.id
              ? 'bg-cyan-500 text-slate-950'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredPosts.slice(0, 3).map((post, idx) => (
    <a 
    key={idx}
    href={post.url}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-all hover:scale-105 group block"
  >
    <div className="flex items-start justify-between mb-3">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wide">
          {blogCategories.find(cat => cat.id === post.category)?.label || 'Uncategorized'}
        </span>
        <span className="text-sm text-slate-400">{post.date}</span>
      </div>
      
      <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
    </div>
    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
      {post.title}
    </h3>
    <p className="text-slate-400 text-sm leading-relaxed">{post.excerpt}</p>
  </a>
))}
  </div>
{/* View All Posts Button */}
<div className="text-center mt-12">
  <a
    href="https://medium.com/@guycpalmer_26364"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold rounded-lg transition-all hover:scale-105"
  >
    View All Blogs
    <ExternalLink className="w-5 h-5" />
  </a>
</div> 
  </div>
</section>
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-slate-300 mb-12 text-lg">
            Interested in working together or have a question? Feel free to reach out!
          </p>
          <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-all">
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-3 text-lg">
                <Mail className="w-6 h-6 text-cyan-400" />
                <a href="mailto:GuyCPalmer@yahoo.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  GuyCPalmer@yahoo.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-3 text-lg">
                <Terminal className="w-6 h-6 text-cyan-400" />
                <span className="text-slate-300">512.745.9282</span>
              </div>
              <div className="flex justify-center gap-6 pt-4">
                <a href="https://github.com/GuyCPalmer" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-400 transition-all">
  <Github className="w-6 h-6" />
</a>
                <a href="https://www.linkedin.com/in/your-profile-url" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-400 transition-all">
  <Linkedin className="w-6 h-6" />
</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-400 text-sm">
          <p>© 2026 Guy Palmer</p>
        </div>
      </footer>
    </div>
  );
}