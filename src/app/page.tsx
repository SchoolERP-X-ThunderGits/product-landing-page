"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoMenuSharp } from "react-icons/io5";
function page() {
    const [activeSection, setActiveSection] = useState(""); // Track the active section
    const [showModal, setShowModal] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { label: "Features", id: "features" },
        { label: "Demo", id: "demo" },
        { label: "Pricing", id: "pricing" },
        { label: "FAQ", id: "faq" },
        { label: "Contact", id: "contact" },
      ];
    // Initialize AOS for animations
    useEffect(() => {
        if (mobileMenuOpen) {
          document.body.classList.add("overflow-hidden");
        } else {
          document.body.classList.remove("overflow-hidden");
        }
      }, [mobileMenuOpen]);
      
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });

        // Intersection Observer to track which section is currently in view
        const sections = document.querySelectorAll("section");
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5, // Trigger when 50% of the section is in view
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id); // Set active section based on intersection
                }
            });
        }, options);
        sections.forEach((section) => observer.observe(section));

        // Cleanup observer on component unmount
        return () => observer.disconnect();
    }, []);

    return (
        <div className="font-sans text-gray-800 bg-white">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-lg border-b border-white/30 shadow-md transition-all duration-300">
 <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 sm:px-6 lg:px-8 relative">
      {/* Logo */}
      <h1 className="text-2xl font-extrabold text-indigo-600 tracking-tight">
        EduSmart
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 font-medium text-sm">
        {navLinks.map((link) => (
          <li key={link.id} className="relative group">
            <a
              href={`#${link.id}`}
              className={`px-2 py-1 transition-colors duration-300 ${
                activeSection === link.id
                  ? "text-indigo-600 font-semibold"
                  : "text-gray-800"
              } hover:text-indigo-600`}
            >
              {link.label}
            </a>
            <span
              className={`absolute left-1/2 -bottom-1.5 w-0 h-[2px] bg-indigo-500 rounded-full group-hover:w-3/5 transition-all duration-300 transform -translate-x-1/2 ${
                activeSection === link.id ? "w-3/5" : ""
              }`}
            ></span>
          </li>
        ))}
      </ul>

      {/* Desktop CTA Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <a
          href="#demo"
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:shadow-xl transition duration-300 hover:scale-105"
        >
          🎓 Book a Demo
        </a>
        <button
          onClick={() => setShowModal(true)}
          className="bg-white text-indigo-600 border border-indigo-600 px-5 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition hover:scale-105"
        >
          🔐 Login
        </button>
      </div>

      {/* Hamburger Icon (Mobile only) */}
      <button
        className="md:hidden text-indigo-600 focus:outline-none"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? (
          <IoMenuSharp className="h-6 w-6" />
        ) : (
          <IoMenuSharp className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Menu Centered */}
   {mobileMenuOpen && (
  <div className="absolute top-full left-0 right-0 bg-white z-40 w-full shadow-lg md:hidden border-t border-gray-200">
    <ul className="flex flex-col items-center py-6 space-y-4 text-center">
      {navLinks.map((link) => (
        <li key={link.id}>
          <a
            href={`#${link.id}`}
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-800 hover:text-indigo-600 font-medium text-lg transition"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
    <div className="flex flex-col items-center space-y-3 px-6 pb-6">
      <a
        href="#demo"
        onClick={() => setMobileMenuOpen(false)}
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-semibold shadow-md text-center"
      >
        🎓 Book a Demo
      </a>
      <button
        onClick={() => {
          setMobileMenuOpen(false);
          setShowModal(true);
        }}
        className="bg-white text-indigo-600 border border-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition"
      >
        🔐 Login
      </button>
    </div>
  </div>
)}

    </nav>
</header>


            {/* Hero */}
            <section
                id="hero"
                className="relative min-h-screen flex items-center justify-center text-white font-poppins overflow-hidden"
                data-aos="fade-up"
            >
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1600&q=80')",
                    }}
                ></div>

                {/* Soft Dark Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Glassmorphic Content Container */}
                <div className="relative z-10 backdrop-blur-sm bg-white/10 rounded-3xl p-10 sm:p-16 max-w-3xl text-center shadow-2xl border border-white/20">
                    <h2 style={{color:'white' , fontFamily: 'Outfit, sans-serif' }} className="text-4xl sm:text-5xl font-extrabold leading-tight drop-shadow-md">
                        All-in-One School ERP Platform
                    </h2>
                    <p style={{fontFamily: 'Outfit, sans-serif'}} className="mt-6 text-lg sm:text-xl text-indigo-100 drop-shadow-sm">
                        Simplify school management — from admissions to attendance to exams — with <span className="font-semibold text-white">EduSmart ERP</span>.
                    </p>
                    <a
                        href="#demo"
                        className="mt-10 inline-block bg-indigo-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-indigo-700 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
                    >
                        🎓 Try for Free
                    </a>
                </div>
            </section>


            {/* Problem & Solution */}
            <section
                id="problem-solution"
                className="relative py-28 px-6 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 overflow-hidden"
                data-aos="fade-up"
            >
                {/* Glow Background Blobs */}
                <div className="absolute -top-44 -right-36 w-[400px] h-[400px] bg-pink-400 opacity-25 rounded-full blur-[180px] z-0"></div>
                <div className="absolute bottom-[-100px] left-[-140px] w-[400px] h-[400px] bg-indigo-400 opacity-25 rounded-full blur-[180px] z-0"></div>

                {/* Heading */}
                <div className="relative z-10 text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-4 leading-tight">
                        Challenges & Solutions
                    </h2>
                    <p className="text-lg text-gray-600 font-medium">
                        Real issues. Smart fixes. Let’s transform education together.
                    </p>
                </div>

                {/* Cards */}
                <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Problem Card */}
                    <div className="group bg-white/60 backdrop-blur-xl backdrop-saturate-150 rounded-[2rem] p-10 
        border border-white/30 shadow-[0_30px_80px_rgba(0,0,0,0.08)] 
        transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_40px_90px_rgba(0,0,0,0.12)]">

                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 flex items-center justify-center 
          bg-gradient-to-br from-red-100 to-white shadow-inner rounded-2xl 
          text-red-500 text-3xl transform transition duration-300 group-hover:scale-110 group-hover:rotate-6">
                                ❌
                            </div>
                            <h3 className="text-3xl font-bold text-red-500">The Problem</h3>
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed font-medium">
                            Manual operations, fragmented data, and communication gaps cause delays and errors in school administration.
                        </p>
                    </div>

                    {/* Solution Card */}
                    <div className="group bg-white/60 backdrop-blur-xl backdrop-saturate-150 rounded-[2rem] p-10 
        border border-white/30 shadow-[0_30px_80px_rgba(0,0,0,0.08)] 
        transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_40px_90px_rgba(0,0,0,0.12)]">

                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 flex items-center justify-center 
          bg-gradient-to-br from-indigo-100 to-white shadow-inner rounded-2xl 
          text-indigo-600 text-3xl transform transition duration-300 group-hover:scale-110 group-hover:-rotate-6">
                                ✅
                            </div>
                            <h3 className="text-3xl font-bold text-indigo-600">Our Solution</h3>
                        </div>
                        <p className="text-gray-800 text-lg leading-relaxed font-medium">
                            <span className="text-indigo-600 font-semibold">EduSmart</span> automates and integrates every academic and administrative function in one seamless platform.
                        </p>
                    </div>
                </div>
            </section>


            {/* Features */}
            <section
                id="features"
                className="relative py-28 px-4 bg-gradient-to-br from-[#eff3ff] to-[#dce3ff] dark:from-[#0d111c] dark:to-[#1a2233] text-center overflow-hidden"
                data-aos="fade-up"
            >
                {/* Backgrounds */}
                <div className="absolute -top-72 -left-72 w-[120rem] h-[120rem] bg-indigo-400/10 rounded-full blur-[260px] opacity-40 z-0 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(transparent,transparent,rgba(0,0,0,0.04))] dark:bg-[radial-gradient(transparent,transparent,rgba(255,255,255,0.04))] z-0 pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-20 bg-white/10 dark:bg-white/5 blur-sm z-10 pointer-events-none" />

                {/* Heading */}
                <h2 className="text-5xl sm:text-6xl font-extrabold mb-16 text-indigo-700 dark:text-indigo-400 relative z-10 tracking-tight leading-tight">
                    ✨ Key Features
                    <span className="block mt-4 w-20 h-[5px] mx-auto bg-indigo-500/80 rounded-full shadow-md" />
                </h2>

                {/* Cards */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
                    {[
                        {
                            icon: '👨‍🎓',
                            title: 'Student Info System',
                            desc: 'Manage student profiles and grades in one place.',
                        },
                        {
                            icon: '📅',
                            title: 'Timetable & Attendance',
                            desc: 'Automated scheduling and real-time tracking.',
                        },
                        {
                            icon: '🧾',
                            title: 'Fee Payments',
                            desc: 'Easy invoicing with online payment options.',
                        },
                        {
                            icon: '📝',
                            title: 'Exam Reports',
                            desc: 'Schedule exams and auto-generate results.',
                        },
                        {
                            icon: '👩‍🏫',
                            title: 'Teacher Tools',
                            desc: 'Dashboards for staff and teaching resources.',
                        },
                        {
                            icon: '📲',
                            title: 'Parent App',
                            desc: 'Instant updates and progress tracking via app.',
                        },
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/30 dark:bg-white/10 backdrop-blur-[16px] border border-white/30 dark:border-white/20 p-5 rounded-3xl shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.04] overflow-hidden"
                            data-aos="fade-up"
                            data-aos-delay={index * 120}
                        >
                            <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-br from-indigo-500/20 to-pink-500/20 blur-lg opacity-0 group-hover:opacity-40 transition-all duration-700 pointer-events-none" />

                            <div className="relative w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-xl group-hover:shadow-2xl transition duration-300">
                                <span className="text-3xl z-10 group-hover:animate-pulse">{feature.icon}</span>
                                <div className="absolute inset-0 rounded-full bg-white/20 blur-xl opacity-20 group-hover:opacity-40 transition-all" />
                            </div>

                            <h3 className="text-base font-semibold text-gray-800 dark:text-white mb-1 tracking-wide group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                                {feature.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed group-hover:opacity-95 transition-opacity duration-300">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>


            {/* Demo */}
            <section id="demo" className="py-20 bg-white text-center px-4" data-aos="zoom-in">
                <h2 className="text-3xl font-bold mb-8">Live Screens & Demo</h2>
                {/* Optional Screenshot */}
                {/* <img src="/erp-screenshot.png" alt="ERP Screenshot" className="my-8 w-full max-w-4xl mx-auto rounded shadow-lg" /> */}
                <a href="#" className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition">Watch Full Demo</a>
            </section>

            {/* Benefits */}
            <section
                id="benefits"
                className="relative py-20 px-6 bg-gradient-to-br from-white via-indigo-100 to-white overflow-hidden"
            >

                <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-[40rem] h-[40rem] bg-indigo-300 rounded-full blur-[160px] opacity-20"></div>

                <div className="relative max-w-7xl mx-auto text-center z-10">

                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                        Why Smart Schools <br />
                        <span className="text-indigo-600">Love EduSmart</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
                        Save time, gain insights, and build better parent relationships — all in one place.
                    </p>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-indigo-100 transition-all duration-300 group hover:scale-105 hover:ring-2 hover:ring-indigo-300">
                            <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-gradient-to-br from-indigo-400 to-indigo-600 text-white rounded-full text-4xl transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 shadow-lg">
                                ⏱
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 text-center mb-1">
                                Save <span className="text-indigo-600 font-bold">60%</span> admin time
                            </h3>
                            <p className="text-sm text-gray-500 text-center">Automate attendance, reporting & more</p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-indigo-100 transition-all duration-300 group hover:scale-105 hover:ring-2 hover:ring-indigo-300">
                            <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-gradient-to-br from-indigo-400 to-indigo-600 text-white rounded-full text-4xl transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 shadow-lg">
                                📊
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 text-center mb-1">
                                Real-time analytics
                            </h3>
                            <p className="text-sm text-gray-500 text-center">Track student progress instantly</p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-indigo-100 transition-all duration-300 group hover:scale-105 hover:ring-2 hover:ring-indigo-300">
                            <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-gradient-to-br from-indigo-400 to-indigo-600 text-white rounded-full text-4xl transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 shadow-lg">
                                📈
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 text-center mb-1">
                                Higher satisfaction
                            </h3>
                            <p className="text-sm text-gray-500 text-center">Parents stay informed and involved</p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-indigo-100 transition-all duration-300 group hover:scale-105 hover:ring-2 hover:ring-indigo-300">
                            <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-gradient-to-br from-indigo-400 to-indigo-600 text-white rounded-full text-4xl transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 shadow-lg">
                                🔒
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 text-center mb-1">
                                Fully secure & cloud-based
                            </h3>
                            <p className="text-sm text-gray-500 text-center">Military-grade data protection</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Integrations */}
            <section
                id="integrations"
                className="py-24 bg-[#0f0f0f] text-white px-4 relative overflow-hidden"
                data-aos="fade-up"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-800 via-transparent to-pink-500 opacity-10 blur-2xl"></div>

                <h2 className="text-5xl font-extrabold text-center bg-gradient-to-r from-pink-500 via-yellow-400 to-red-500 bg-clip-text text-transparent mb-6 tracking-wide drop-shadow-md">
                    Epic Integrations
                </h2>
                <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto text-center">
                    Supercharge your platform with iconic tools that work like magic ✨
                </p>

                <div className="flex justify-center flex-wrap gap-10 max-w-6xl mx-auto">
                    <div className="relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl px-6 py-8 w-[250px] text-center shadow-lg hover:shadow-[0_0_30px_#ff00c855] transition duration-500 overflow-hidden">
                        <div className="absolute -top-6 -left-6 w-20 h-20 bg-pink-500 rounded-full blur-xl opacity-30 group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="text-5xl mb-4 animate-pulse">📚</div>
                        <div className="text-xl font-semibold text-pink-300">Google Classroom</div>
                    </div>

                    <div className="relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl px-6 py-8 w-[250px] text-center shadow-lg hover:shadow-[0_0_30px_#00d9ff66] transition duration-500 overflow-hidden">
                        <div className="absolute -top-6 -right-6 w-20 h-20 bg-cyan-400 rounded-full blur-xl opacity-30 group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="text-5xl mb-4 animate-pulse">🎥</div>
                        <div className="text-xl font-semibold text-cyan-300">Zoom</div>
                    </div>

                    <div className="relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl px-6 py-8 w-[250px] text-center shadow-lg hover:shadow-[0_0_30px_#00ff9966] transition duration-500 overflow-hidden">
                        <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-green-400 rounded-full blur-xl opacity-30 group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="text-5xl mb-4 animate-pulse">💬</div>
                        <div className="text-xl font-semibold text-green-300">WhatsApp API</div>
                    </div>

                    <div className="relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl px-6 py-8 w-[250px] text-center shadow-lg hover:shadow-[0_0_30px_#ffcc0066] transition duration-500 overflow-hidden">
                        <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-yellow-400 rounded-full blur-xl opacity-30 group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="text-5xl mb-4 animate-pulse">💳</div>
                        <div className="text-xl font-semibold text-yellow-300">UPI & Razorpay</div>
                    </div>
                </div>
            </section>


            {/* Testimonials */}
            <section
                id="testimonials"
                className="py-12 bg-gradient-to-br from-white via-indigo-50 to-white px-4 sm:px-6 relative overflow-hidden"
                data-aos="fade-up"
            >
                <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-700 text-center mb-12">
                    What Our Clients Say
                </h2>

                <div className="flex flex-col md:flex-row md:justify-center gap-8 max-w-5xl mx-auto z-10 relative">
                    {/* Testimonial 1 */}
                    <div className="relative bg-white border border-indigo-100 rounded-xl px-6 py-6 shadow-lg hover:shadow-indigo-200 transition duration-300 w-full max-w-sm">
                        <div className="absolute -top-4 left-5 bg-indigo-600 text-white text-[11px] px-3 py-0.5 rounded-full shadow-sm uppercase tracking-wide">
                            Verified Feedback
                        </div>
                        <p className="italic text-gray-700 text-[15px] leading-relaxed">
                            “EduSmart has streamlined everything—from attendance to online fees. Parents love it!”
                        </p>
                        <div className="mt-3 text-yellow-400 text-base tracking-wide">★★★★★</div>
                        <cite className="block mt-1 font-medium text-indigo-600 text-sm">
                            – Principal, Green Valley School
                        </cite>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="relative bg-white border border-indigo-100 rounded-xl px-6 py-6 shadow-lg hover:shadow-indigo-200 transition duration-300 w-full max-w-sm text-right">
                        <div className="absolute -top-4 right-5 bg-indigo-600 text-white text-[11px] px-3 py-0.5 rounded-full shadow-sm uppercase tracking-wide">
                            Verified Feedback
                        </div>
                        <p className="italic text-gray-700 text-[15px] leading-relaxed">
                            “We reduced paperwork by 80%. The parent-teacher communication has never been better.”
                        </p>
                        <div className="mt-3 text-yellow-400 text-base tracking-wide">★★★★★</div>
                        <cite className="block mt-1 font-medium text-indigo-600 text-sm">
                            – Admin Head, Sunrise Academy
                        </cite>
                    </div>
                </div>

                {/* Background bubbles for subtle flair */}
                <div className="absolute w-60 h-60 bg-indigo-100 rounded-full blur-3xl opacity-30 -top-10 -left-20 z-0"></div>
                <div className="absolute w-40 h-40 bg-indigo-200 rounded-full blur-2xl opacity-20 bottom-0 right-10 z-0"></div>
            </section>


            {/* Pricing */}
            <section className="relative py-24 bg-gray-50 dark:bg-gray-950">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Choose Your Power-Up</h2>
                    <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                        Plans built for every dev level. Start light, go beast mode anytime.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
                    {[
                        {
                            title: "Solo Hacker",
                            price: "$19",
                            desc: "Perfect for indie devs & portfolio projects.",
                            team: "1 dev",
                            support: "Basic support",
                            updates: "6 months",
                            featured: false
                        },
                        {
                            title: "Team Turbo",
                            price: "$89",
                            desc: "Best for teams shipping fast with fire.",
                            team: "Up to 10 devs",
                            support: "Priority support",
                            updates: "12 months",
                            featured: true
                        },
                        {
                            title: "Enterprise Godmode",
                            price: "$499",
                            desc: "Tailored for enterprise dominance.",
                            team: "100+ devs",
                            support: "Dedicated manager",
                            updates: "Lifetime",
                            featured: false
                        }
                    ].map((plan) => (
                        <div
                            key={plan.title}
                            className={`relative group max-w-sm mx-auto min-h-[380px] rounded-2xl p-6 md:p-8 transition-all duration-300 border dark:border-gray-700 bg-white/60 dark:bg-gray-800/50 backdrop-blur-xl hover:shadow-2xl hover:scale-[1.035] hover:z-10 overflow-hidden`}
                        >
                            {/* Hover Glow Ring */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none blur-xl z-0"></div>

                            {plan.featured && (
                                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-md z-10">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white mb-2 relative z-10">
                                {plan.title}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 relative z-10">
                                {plan.desc}
                            </p>
                            <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 relative z-10">
                                {plan.price}
                                <span className="text-base font-medium text-gray-500 dark:text-gray-400">/mo</span>
                            </div>
                            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300 mb-6 relative z-10">
                                <li>👨‍💻 Team size: <strong>{plan.team}</strong></li>
                                <li>🛠 Support: <strong>{plan.support}</strong></li>
                                <li>🔄 Updates: <strong>{plan.updates}</strong></li>
                            </ul>
                            <button
                                className="relative z-10 w-full py-2 rounded-xl text-sm font-semibold transition-colors bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                            >
                                Get {plan.title}
                            </button>
                        </div>
                    ))}
                </div>

            </section>


            {/* FAQ */}
            <section
                id="faq"
                className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 px-4"
                data-aos="fade-up"
            >
                <h2 className="text-4xl font-extrabold text-center text-white mb-12">
                    Frequently Asked Questions
                </h2>
                <div className="max-w-3xl mx-auto space-y-6">
                    {[
                        {
                            question: "Can EduSmart work for multiple campuses?",
                            answer:
                                "Yes, our Enterprise plan supports multi-campus and branch-level reporting.",
                        },
                        {
                            question: "Do parents need to install any app?",
                            answer:
                                "Yes, a lightweight parent app is available on Android & iOS.",
                        },
                        {
                            question: "Is training provided?",
                            answer: "Yes, we offer complete onboarding and staff training.",
                        },
                    ].map((item, idx) => (
                        <details
                            key={idx}
                            className="group bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl"
                        >
                            <summary className="font-semibold text-lg text-white cursor-pointer flex items-center justify-between">
                                {item.question}
                                <span className="transition-transform duration-300 group-open:rotate-180">
                                    ▼
                                </span>
                            </summary>
                            <p className="mt-3 text-gray-200 leading-relaxed">{item.answer}</p>
                        </details>
                    ))}
                </div>
            </section>
            {showModal && (
  <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
    <div className="bg-white rounded-2xl shadow-2xl w-96 p-8 relative">
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
      >
        &times;
      </button>
      <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
        Select Login Type
      </h2>
      <div className="flex flex-col gap-4">
        <button className="bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition">
          👨‍👩‍👧 Login as Parent
        </button>
        <button className="bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition">
          🧑‍💼 Login as Admin
        </button>
      </div>
    </div>
  </div>
)}

       {/* Contact */}
     {/* Contact Section */}
<section
  id="contact"
  className="relative py-28 px-6 bg-gradient-to-br from-white via-indigo-50 to-white overflow-hidden"
  data-aos="fade-up"
>
  {/* Decorative Glow Blobs */}
  <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-indigo-300 opacity-20 rounded-full blur-[180px] z-0"></div>
  <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-pink-300 opacity-20 rounded-full blur-[180px] z-0"></div>

  {/* Content */}
  <div className="relative z-10 max-w-3xl mx-auto text-center">
    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
      📞 Talk to Our Team
    </h2>
    <p className="text-lg text-gray-600 mb-8">
      We’re here to help with all your questions. Reach out any time!
    </p>

    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10">
      <a
        href="mailto:hello@edusmart.com"
        className="flex items-center gap-2 text-indigo-600 font-semibold hover:underline transition"
      >
        📧 hello@edusmart.com
      </a>
      <a
        href="tel:+919876543210"
        className="flex items-center gap-2 text-indigo-600 font-semibold hover:underline transition"
      >
        📱 +91-98765-43210
      </a>
    </div>

    <a
      href="#demo"
      className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition duration-300"
    >
      🎓 Schedule a Call
    </a>
  </div>
</section>

{/* Footer */}
<footer className="bg-gray-50 text-center py-6 text-sm text-gray-500 border-t border-gray-200">
  <p>
    &copy; 2025 <span className="font-semibold text-indigo-600">EduSmart</span>. Built by{" "}
    <a
      href="https://thundergits.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-500 hover:underline font-medium"
    >
      ThunderGits Technologies
    </a>
    .
  </p>
</footer>

        </div>
    );
}

export default page;