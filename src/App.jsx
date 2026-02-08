import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  Globe,
  Linkedin,
  Mail,
  CheckCircle,
  Award,
  Briefcase,
  Cpu,
  ShoppingBag,
  Phone,
  Zap,
  Users,
  Target,
  FileText,
  Clock,
  Shield,
  MessageSquare,
  MapPin,
  MessageCircle,
} from 'lucide-react';

/* --- ASSET SETUP --- */
// import heroImg from './assets/navindu-profile.png';
// const HERO_IMAGE = heroImg;
const HERO_IMAGE = '/navindu-profile.jpg';

/* --- ANIMATION COMPONENTS --- */
const Reveal = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state based on visibility, allowing animation to replay
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset animation when element leaves view
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    switch (direction) {
      case 'left':
        return 'translate-x-[-50px]';
      case 'right':
        return 'translate-x-[50px]';
      case 'down':
        return 'translate-y-[-50px]';
      default:
        return 'translate-y-[50px]'; // up
    }
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out transform ${className} ${
        isVisible
          ? 'opacity-100 translate-y-0 translate-x-0 blur-0'
          : `opacity-0 ${getTransform()} blur-sm`
      }`}
    >
      {children}
    </div>
  );
};

/* --- DATA CONFIGURATION --- */
const EXPERTISE = [
  {
    title: 'Strategic Planning',
    desc: 'From competitor analysis to end-of-month reporting. I handle the full campaign lifecycle.',
    icon: <Target className="w-8 h-8 text-red-400" />,
  },
  {
    title: 'E-commerce & Shopify',
    desc: 'Specialized in scaling online stores. From UI design to conversion rate optimization.',
    icon: <ShoppingBag className="w-8 h-8 text-blue-400" />,
  },
  {
    title: 'SEO & Organic Growth',
    desc: 'Driving sustainable traffic. I help brands rank #1 and dominate their niche.',
    icon: <Globe className="w-8 h-8 text-green-400" />,
  },
  {
    title: 'AI-Driven Marketing',
    desc: 'Leveraging Generative AI & Azure tools to create high-volume content strategies.',
    icon: <Cpu className="w-8 h-8 text-purple-400" />,
  },
];

const INDUSTRIES = [
  'Real Estate',
  'Hospitality & Restaurants',
  'Medical & Healthcare',
  'Travel & Tourism',
  'Tech & SaaS',
  'Mechanical Engineering',
  'Cosmetics & Beauty',
  'Mobile Apps',
];

const CLIENT_TYPES = [
  {
    label: 'Startups',
    desc: 'Bootstrap to Series A',
    icon: <Zap className="text-yellow-400" />,
  },
  {
    label: 'Enterprises',
    desc: 'Large Scale Business',
    icon: <Briefcase className="text-blue-400" />,
  },
  {
    label: 'Celebrities',
    desc: 'Personal Branding',
    icon: <Users className="text-purple-400" />,
  },
];

const CERTIFICATIONS = [
  { name: 'Fundamentals of Digital Marketing', issuer: 'Google', date: '2026' },
  { name: 'Microsoft Azure AI Essentials', issuer: 'Microsoft', date: '2025' },
  { name: 'Generative AI for Marketing', issuer: 'AMA', date: '2025' },
  {
    name: 'Email Marketing Professional',
    issuer: 'Intuit Mailchimp',
    date: '2025',
  },
  { name: 'Marketing with Canva', issuer: 'Canva', date: '2026' },
];

const EXPERIENCE = [
  {
    role: 'Founder',
    company: 'NSP Agency',
    period: 'Present',
    desc: 'Architecting digital dominance for diverse clients. Specializing in high-ROI campaigns and brand strategy.',
  },
  {
    role: 'Co-Founder',
    company: 'NVX',
    period: '2023 - 2025',
    desc: "Led strategic vision and digital innovation during the agency's foundational years. Built next-gen marketing solutions.",
  },
  {
    role: 'Freelance Specialist',
    company: 'Global & Local Markets',
    period: '5+ Years',
    desc: 'Successfully managed 40+ high-impact projects for local Sri Lankan businesses and international clients across USA, UK, and Australia.',
  },
];

const BENEFITS = [
  {
    title: 'Global Standards, Local Insight',
    desc: 'We combine international quality standards with deep knowledge of local market nuances.',
    icon: <Globe className="text-blue-400 w-6 h-6" />,
  },
  {
    title: 'Total Transparency',
    desc: 'No hidden fees or confusing jargon. We value trust and build long-term partnerships.',
    icon: <Shield className="text-green-400 w-6 h-6" />,
  },
  {
    title: 'Seamless Communication',
    desc: 'We are always a message away. Weekly updates and instant responses are our standard.',
    icon: <MessageSquare className="text-purple-400 w-6 h-6" />,
  },
  {
    title: 'On-Schedule Delivery',
    desc: 'Time is money. We respect yours by hitting every deadline, every launch date, every time.',
    icon: <Clock className="text-orange-400 w-6 h-6" />,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expertise', href: '#expertise' },
    { name: 'About', href: '#about' },
    { name: 'Sectors', href: '#sectors' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
            <img
              src="/logo.png"
              alt="NSP Digital Logo"
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
          <span className="text-2xl font-bold text-white tracking-tight">
            NSP<span className="text-blue-500">.Agency</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold text-sm hover:bg-blue-50 transition-colors"
          >
            Hire Navindu
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-300 text-lg font-medium hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-blue-600 text-white py-3 rounded-lg text-center font-bold mt-2"
          >
            Book Consultation
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-slate-950">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6 order-2 md:order-1">
            <Reveal delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-blue-300 text-xs font-bold uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Founder @ NSP Agency | Co-Founder @ NVX
              </div>
            </Reveal>

            <Reveal delay={200}>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Navindu Sri Prabash <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                  Digital Strategist.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={400}>
              <p className="text-xl text-slate-400 max-w-lg leading-relaxed font-light">
                From{' '}
                <span className="text-white font-medium">Local Leaders</span> to{' '}
                <span className="text-white font-medium">Global Brands</span>. I
                drive organic growth, campaign strategy, and digital dominance
                for clients worldwide.
              </p>
            </Reveal>

            <Reveal delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg shadow-blue-900/50"
                >
                  Start Your Campaign <ArrowRight size={20} />
                </a>
                <a
                  href="#sectors"
                  className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-bold flex items-center justify-center transition-all border border-slate-700"
                >
                  View Clients
                </a>
              </div>
            </Reveal>
          </div>

          {/* Image Container */}
          <div className="md:w-1/2 relative order-1 md:order-2 flex justify-center">
            <Reveal
              delay={400}
              direction="left"
              className="w-full flex justify-center"
            >
              <div className="relative z-10 w-4/5 max-w-md">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-transparent rounded-full blur-3xl transform -translate-y-4"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent z-20"></div>

                <div className="relative rounded-b-3xl overflow-hidden border-b border-slate-700">
                  <img
                    src={HERO_IMAGE}
                    alt="Navindu Sri Prabash"
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 z-10 relative"
                    style={{
                      maskImage:
                        'linear-gradient(to bottom, black 80%, transparent 100%)',
                    }}
                  />
                </div>

                <div className="absolute bottom-10 -right-4 bg-slate-900/90 backdrop-blur border border-slate-700 p-4 rounded-xl shadow-xl z-30 animate-bounce delay-700 duration-[3000ms]">
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-500/20 p-2 rounded-full">
                      <Award className="text-yellow-500 w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-bold uppercase">
                        Experience
                      </p>
                      <p className="text-white font-bold">5+ Years</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutFounder = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <Reveal direction="left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Meet The Strategist.
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                My mission is simple: <strong>I help businesses grow</strong>.
                With a background spanning Real Estate, Hospitality, and SaaS, I
                understand that every industry requires a unique approach.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                I don't just deliver services; I build systems. Whether working
                with a local restaurant or a foreign tech startup, I provide the
                clarity and strategy you need to scale with confidence.
              </p>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Award className="text-blue-400" /> Key Certifications
                </h4>
                <div className="space-y-3">
                  {CERTIFICATIONS.map((cert, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center text-sm"
                    >
                      <span className="text-slate-300">{cert.name}</span>
                      <span className="text-slate-500 text-xs bg-slate-900 px-2 py-1 rounded border border-slate-800">
                        {cert.issuer}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:w-2/3">
            <Reveal direction="up" delay={200}>
              <h3 className="text-xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
                Professional Timeline
              </h3>
              <div className="space-y-8">
                {EXPERIENCE.map((job, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-4 h-4 rounded-full border-4 border-slate-900 shadow-lg ${
                          idx === 0
                            ? 'bg-green-500 shadow-green-500/50'
                            : 'bg-blue-500 shadow-blue-500/50'
                        }`}
                      ></div>
                      <div className="w-0.5 h-full bg-slate-800 my-2 group-last:hidden"></div>
                    </div>
                    <div className="pb-8">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <h4 className="text-xl font-bold text-white">
                          {job.role}
                        </h4>
                        <span className="text-blue-400 text-sm font-medium bg-blue-900/30 px-2 py-1 rounded">
                          {job.company}
                        </span>
                      </div>
                      <span className="text-slate-500 text-sm mb-3 block">
                        {job.period}
                      </span>
                      <p className="text-slate-400 max-w-xl">{job.desc}</p>
                    </div>
                  </div>
                ))}

                {/* Education Block */}
                <div className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-purple-500 border-4 border-slate-900"></div>
                  </div>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <h4 className="text-xl font-bold text-white">
                        Bachelor's Degree, Information Technology
                      </h4>
                      <span className="text-purple-400 text-sm font-medium bg-purple-900/30 px-2 py-1 rounded">
                        University of Colombo
                      </span>
                    </div>
                    <span className="text-slate-500 text-sm mb-3 block">
                      Aug 2024 - 2028
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

const ClientSectors = () => {
  return (
    <section
      id="sectors"
      className="py-20 bg-slate-900 border-b border-slate-800"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <Reveal direction="right">
              <h2 className="text-3xl font-bold text-white mb-6">
                Proven Across Industries
              </h2>
              <p className="text-slate-400 mb-8">
                My strategies adapt to your specific market needs. I've
                successfully navigated complex sectors from Real Estate to
                Personal Branding.
              </p>
              <div className="flex flex-col gap-4">
                {CLIENT_TYPES.map((type, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-blue-500/30 transition-colors"
                  >
                    <div className="p-2 bg-slate-900 rounded-lg">
                      {type.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{type.label}</h4>
                      <p className="text-slate-500 text-sm">{type.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="md:w-1/2">
            <Reveal direction="up" delay={300}>
              <div className="flex flex-wrap gap-3">
                {INDUSTRIES.map((ind, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-slate-950 border border-slate-800 text-slate-300 text-sm hover:border-blue-500/50 hover:text-white transition-all hover:-translate-y-1 cursor-default"
                  >
                    {ind}
                  </span>
                ))}
                <span className="px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/50 text-blue-300 text-sm">
                  + Video & Creative Production
                </span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={500}>
              <div className="mt-8 p-6 bg-slate-800 rounded-xl border border-slate-700">
                <div className="flex gap-4">
                  <FileText className="text-blue-400 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold mb-2">
                      Detailed Monthly Reporting
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Total transparency. You get detailed breakdowns of where
                      every penny went, competitor movement, and your ROI growth
                      month-over-month.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-6 bg-slate-800 rounded-xl border border-slate-700">
                <div className="flex gap-4">
                  <MapPin className="text-green-400 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold mb-2">
                      Local & Foreign Experience
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Expertise in handling both local Sri Lankan brands and
                      international foreign clients with equal precision.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-slate-900 border-y border-slate-800">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Partner With NSP?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We built our reputation on reliability, transparency, and results
              that actually move the needle.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit, index) => (
            <Reveal key={index} delay={index * 150}>
              <div className="group flex flex-col items-center text-center p-8 rounded-2xl bg-slate-800/30 border border-slate-800/50 hover:border-blue-500/30 hover:bg-slate-800 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20">
                <div className="mb-6 p-4 bg-slate-900 rounded-full border border-slate-700 group-hover:border-blue-500/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">{benefit.icon}</div>
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {benefit.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Expertise = () => {
  return (
    <section id="expertise" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Core Competencies
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              From planning to reporting, I handle the entire lifecycle.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERTISE.map((service, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800 transition-all group hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/10">
                <div className="mb-6 bg-slate-950 w-14 h-14 rounded-xl flex items-center justify-center border border-slate-800 group-hover:border-blue-500/30 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-b from-slate-950 to-blue-950/30"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Competitors Are <br />
              Already Moving. <span className="text-blue-500">Are You?</span>
            </h2>

            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              The market doesn't wait. Secure your strategy today and start
              dominating your niche before someone else does.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
              <button
                onClick={() => setShowModal(true)}
                className="relative px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg shadow-xl shadow-blue-900/30 transition-all hover:scale-105 flex items-center gap-3 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                <span className="relative flex items-center gap-2">
                  Book Your Strategy Call{' '}
                  <Phone size={20} className="animate-pulse" />
                </span>
              </button>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=navindu@nspdigital.social&su=Project Inquiry for NSP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-blue-500 transition-all group"
              >
                <Mail className="text-blue-400" size={20} />
                <span className="text-white font-medium">
                  navindu@nspdigital.social
                </span>
                Or email me directly <ArrowRight size={16} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-16 flex justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 text-slate-400 font-bold">
                <Globe size={20} /> Global Experience
              </div>
              <div className="flex items-center gap-2 text-slate-400 font-bold">
                <CheckCircle size={20} /> 100+ Projects
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Pop-up Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="relative bg-slate-900 border border-slate-700 p-8 rounded-2xl shadow-2xl max-w-md w-full transform transition-all scale-100 animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-8">
              <div className="inline-block p-3 rounded-full bg-blue-600/20 mb-4">
                <Phone className="text-blue-400 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Connect With Navindu
              </h3>
              <p className="text-slate-400">Choose your preferred method</p>
            </div>

            <div className="space-y-4">
              <a
                href="https://wa.me/94718842203"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 w-full p-4 bg-green-900/20 hover:bg-green-900/40 border border-green-500/30 hover:border-green-500 rounded-xl transition-all group"
              >
                <div className="bg-green-600 p-3 rounded-full text-white shadow-lg shadow-green-900/50">
                  <MessageCircle size={24} fill="currentColor" />
                </div>
                <div className="text-left flex-1">
                  <p className="text-green-400 font-bold text-sm uppercase tracking-wider mb-0.5">
                    WhatsApp
                  </p>
                  <p className="text-white font-medium">Chat Instantly</p>
                </div>
                <ArrowRight className="text-green-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
              </a>

              <a
                href="tel:+94718842203"
                className="flex items-center gap-4 w-full p-4 bg-blue-900/20 hover:bg-blue-900/40 border border-blue-500/30 hover:border-blue-500 rounded-xl transition-all group"
              >
                <div className="bg-blue-600 p-3 rounded-full text-white shadow-lg shadow-blue-900/50">
                  <Phone size={24} fill="currentColor" />
                </div>
                <div className="text-left flex-1">
                  <p className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-0.5">
                    Mobile Call
                  </p>
                  <p className="text-white font-medium">Direct Line</p>
                </div>
                <ArrowRight className="text-blue-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-left">
          <span className="text-2xl font-bold text-white tracking-tight block">
            NSP<span className="text-blue-500">.Agency</span>
          </span>
          <p className="text-slate-500 text-sm mt-1">
            Founder of NSP. Co-Founder of NVX.
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href="https://linkedin.com"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <Linkedin />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=navindu@nspdigital.social&su=Agency Inquiry"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white font-medium flex items-center gap-2 underline underline-offset-8 decoration-slate-600 hover:decoration-blue-500 transition-all"
          >
            <Mail />
          </a>
          <a
            href="https://wa.me/94718842203"
            className="text-slate-400 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle />
          </a>
        </div>

        <p className="text-slate-600 text-xs">
          &copy; {new Date().getFullYear()} Navindu Sri Prabash. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-blue-500 selection:text-white font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <AboutFounder />
        <ClientSectors />
        <WhyChooseUs />
        <Expertise />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
