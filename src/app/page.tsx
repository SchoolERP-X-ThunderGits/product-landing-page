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
        <div className="common font-sans text-gray-800 bg-white">
            {/* Header */}
            <header className="common sticky top-0 z-50 bg-white/60 backdrop-blur-lg border-b border-white/30 shadow-md transition-all duration-300">
    <nav className="common max-w-7xl mx-auto flex justify-between items-center px-4 py-3 sm:px-6 lg:px-8 relative">
        {/* Logo */}
        <h1 className="common text-2xl font-extrabold text-pink-600 tracking-tight">
            BulkBlaster
        </h1>

        {/* Desktop Navigation */}
        <ul className="common hidden md:flex space-x-6 font-medium text-sm">
            {navLinks.map((link) => (
                <li key={link.id} className="common relative group">
                    <a
                        href={`#${link.id}`}
                        className={`px-2 py-1 transition-colors duration-300 ${
                            activeSection === link.id
                                ? "text-pink-600 font-semibold"
                                : "text-gray-800"
                        } hover:text-pink-600`}
                    >
                        {link.label}
                    </a>
                    <span
                        className={`absolute left-1/2 -bottom-1.5 w-0 h-[2px] bg-pink-500 rounded-full group-hover:w-3/5 transition-all duration-300 transform -translate-x-1/2 ${
                            activeSection === link.id ? "w-3/5" : ""
                        }`}
                    ></span>
                </li>
            ))}
        </ul>

        {/* Desktop CTA Buttons */}
        <div className="common hidden md:flex items-center space-x-4">
            <a
                href="#demo"
                className="common bg-gradient-to-r from-pink-500 via-orange-500 to-red-500 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:shadow-xl transition duration-300 hover:scale-105"
            >
                🚀 View Demo
            </a>
            <button
                onClick={() => setShowModal(true)}
                className="common bg-white text-pink-600 border border-pink-600 px-5 py-2 rounded-lg font-semibold hover:bg-pink-50 transition hover:scale-105"
            >
                🔐 Login
            </button>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
            className="common md:hidden text-pink-600 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
            <IoMenuSharp className="common h-6 w-6" />
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
            <div className="common absolute top-full left-0 right-0 bg-white z-40 w-full shadow-lg md:hidden border-t border-gray-200">
                <ul className="common flex flex-col items-center py-6 space-y-4 text-center">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                onClick={() => setMobileMenuOpen(false)}
                                className="common block text-gray-800 hover:text-pink-600 font-medium text-lg transition"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="common flex flex-col items-center space-y-3 px-6 pb-6">
                    <a
                        href="#demo"
                        onClick={() => setMobileMenuOpen(false)}
                        className="common bg-gradient-to-r from-pink-500 via-orange-500 to-red-500 text-white px-6 py-2 rounded-lg font-semibold shadow-md text-center"
                    >
                        🚀 View Demo
                    </a>
                    <button
                        onClick={() => {
                            setMobileMenuOpen(false);
                            setShowModal(true);
                        }}
                        className="common bg-white text-pink-600 border border-pink-600 px-6 py-2 rounded-lg font-semibold hover:bg-pink-50 transition"
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
                className="common relative min-h-screen flex items-center justify-center text-white font-poppins overflow-hidden px-4"
                data-aos="fade-up"
            >
                {/* Background Image */}
                <div
                    className="common absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://tse4.mm.bing.net/th?id=OIP.1uv-WvvHMQj7cqO3ojXhHQHaNK&pid=Api'), url('https://path/to/your/second/image.jpg')",
                        backgroundSize: 'cover', // Ensures the images cover the entire section
                        backgroundPosition: 'center', // Centers the background images
                        backgroundRepeat: 'no-repeat', // Prevents repetition of the images
                    }}
                ></div>

                {/* Dark Overlay */}
                <div className="common absolute inset-0 bg-black/60"></div>

                {/* Main Content */}
                <div className="common relative z-10 backdrop-blur-lg bg-white/10 rounded-3xl p-10 sm:p-14 max-w-3xl w-full text-center shadow-2xl border border-white/20">
                    <h2
                        style={{ color: 'white', fontFamily: 'Outfit, sans-serif' }}
                        className="common text-4xl sm:text-5xl font-extrabold leading-tight drop-shadow-lg"
                    >
                        Send Bulk SMS in Seconds 🚀
                    </h2>
                    <p className="common mt-6 text-lg sm:text-xl text-indigo-200 drop-shadow-sm">
                        Engage your audience instantly with high-delivery, high-conversion SMS campaigns via <span className="font-semibold text-white">SMS Pro Platform</span>.
                    </p>
                    <a
                        href="#demo"
                        className="common mt-8 inline-block bg-indigo-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-indigo-700 transition-transform duration-300 hover:scale-105"
                    >
                        📲 Try It Free
                    </a>

                    {/* Features */}
                    <div className="common mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-white text-sm sm:text-base">
                        <div className="common flex flex-col items-center">
                            <span className="text-indigo-400 text-3xl mb-2">📤</span>
                            <p className="text-center">Send Thousands of Messages Instantly</p>
                        </div>
                        <div className="common flex flex-col items-center">
                            <span className="text-indigo-400 text-3xl mb-2">📊</span>
                            <p className="text-center">Real-Time Delivery Reports</p>
                        </div>
                        <div className="common flex flex-col items-center">
                            <span className="text-indigo-400 text-3xl mb-2">📞</span>
                            <p className="text-center">Personalized Sender IDs</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem & Solution */}
            <section
                id="features"
                className="common relative py-28 px-6 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 overflow-hidden"
                data-aos="fade-up"
            >
                {/* Glow Background Blobs */}
                <div className="common absolute -top-44 -right-36 w-[400px] h-[400px] bg-pink-400 opacity-25 rounded-full blur-[180px] z-0"></div>
                <div className="common absolute bottom-[-100px] left-[-140px] w-[400px] h-[400px] bg-indigo-400 opacity-25 rounded-full blur-[180px] z-0"></div>

                {/* Heading */}
                <div className="common relative z-10 text-center max-w-3xl mx-auto mb-20">
                    <h2 className="common text-5xl font-extrabold tracking-tight text-gray-900 mb-4 leading-tight">
                        Bulk SMS Marketing Features
                    </h2>
                    <p className="common text-lg text-gray-600 font-medium">
                        Transform your marketing strategy with automated, personalized, and data-driven SMS campaigns.
                    </p>
                </div>

                {/* Features Cards */}
                <div className="common relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Feature Card 1 */}


                    {/* Feature Card 2 */}




                    {/* Feature Card 4 */}
                    <div className="common group bg-white/60 backdrop-blur-xl backdrop-saturate-150 rounded-[2rem] p-10 
    border border-white/30 shadow-[0_30px_80px_rgba(0,0,0,0.08)] 
    transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_40px_90px_rgba(0,0,0,0.12)]">

                        <div className="common flex items-center gap-4 mb-6">
                            <div className="common w-16 h-16 flex items-center justify-center 
    bg-gradient-to-br from-purple-100 to-white shadow-inner rounded-2xl 
    text-purple-500 text-3xl transform transition duration-300 group-hover:scale-110 group-hover:rotate-6">
                                📱
                            </div>
                            <h3 className="common text-3xl font-bold text-purple-500">Mobile-Friendly</h3>
                        </div>
                        <p className="common text-gray-700 text-lg leading-relaxed font-medium">
                            Our platform ensures that your SMS messages are fully optimized for mobile devices, ensuring seamless engagement.
                        </p>
                    </div>


                    <div className="common group bg-white/60 backdrop-blur-xl backdrop-saturate-150 rounded-[2rem] p-10 
    border border-white/30 shadow-[0_30px_80px_rgba(0,0,0,0.08)] 
    transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_40px_90px_rgba(0,0,0,0.12)]">

                        <div className="common flex items-center gap-4 mb-6">
                            <div className="common w-16 h-16 flex items-center justify-center 
    bg-gradient-to-br from-teal-100 to-white shadow-inner rounded-2xl 
    text-teal-500 text-3xl transform transition duration-300 group-hover:scale-110 group-hover:rotate-6">
                                🔒
                            </div>
                            <h3 className="common text-3xl font-bold text-teal-500">Secure & Compliant</h3>
                        </div>
                        <p className="common text-gray-700 text-lg leading-relaxed font-medium">
                            Ensure data security and comply with SMS marketing regulations, such as GDPR and TCPA, for peace of mind.
                        </p>
                    </div>

                </div>
            </section>



            {/* Features */}
            <section
                id="features"
                className="common relative py-28 px-4 bg-gradient-to-br from-[#eff3ff] to-[#dce3ff] dark:from-[#0d111c] dark:to-[#1a2233] text-center overflow-hidden"
                data-aos="fade-up"
            >
                {/* Backgrounds */}
                <div className="common absolute -top-72 -left-72 w-[120rem] h-[120rem] bg-indigo-400/10 rounded-full blur-[260px] opacity-40 z-0 pointer-events-none" />
                <div className="common absolute inset-0 bg-[radial-gradient(transparent,transparent,rgba(0,0,0,0.04))] dark:bg-[radial-gradient(transparent,transparent,rgba(255,255,255,0.04))] z-0 pointer-events-none" />
                <div className="common absolute top-0 left-0 w-full h-20 bg-white/10 dark:bg-white/5 blur-sm z-10 pointer-events-none" />

                {/* Heading */}
                <h2 className="common text-5xl sm:text-6xl font-extrabold mb-16 text-indigo-700 dark:text-indigo-400 relative z-10 tracking-tight leading-tight">
                    🚀 SMS Marketing Features
                    <span className="common block mt-4 w-20 h-[5px] mx-auto bg-indigo-500/80 rounded-full shadow-md" />
                </h2>

                {/* Feature Cards */}
                <div className="common grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
                    {[
                        {
                            icon: '📨',
                            title: 'Mass Messaging',
                            desc: 'Send bulk SMS instantly to thousands of users.',
                        },
                        {
                            icon: '📊',
                            title: 'Campaign Reports',
                            desc: 'Monitor delivery, click-throughs, and user response.',
                        },
                        {
                            icon: '🕒',
                            title: 'Auto Scheduling',
                            desc: 'Plan messages in advance with flexible timing.',
                        },
                        {
                            icon: '📋',
                            title: 'Contact Groups',
                            desc: 'Organize your audience for better targeting.',
                        },
                        {
                            icon: '💬',
                            title: '2-Way Chat',
                            desc: 'Allow replies and manage conversations.',
                        },
                        {
                            icon: '🔌',
                            title: 'API Access',
                            desc: 'Integrate SMS into your software or app easily.',
                        },
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="common group relative bg-white/30 dark:bg-white/10 backdrop-blur-[16px] border border-white/30 dark:border-white/20 p-5 rounded-3xl shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.04] overflow-hidden"
                            data-aos="fade-up"
                            data-aos-delay={index * 120}
                        >
                            <div className="common absolute -inset-[2px] rounded-3xl bg-gradient-to-br from-indigo-500/20 to-pink-500/20 blur-lg opacity-0 group-hover:opacity-40 transition-all duration-700 pointer-events-none" />

                            <div className="common relative w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-xl group-hover:shadow-2xl transition duration-300">
                                <span className="common text-3xl z-10 group-hover:animate-pulse">{feature.icon}</span>
                                <div className="common absolute inset-0 rounded-full bg-white/20 blur-xl opacity-20 group-hover:opacity-40 transition-all" />
                            </div>

                            <h3 className="common text-base font-semibold text-gray-800 dark:text-white mb-1 tracking-wide group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                                {feature.title}
                            </h3>

                            <p className="common text-gray-600 dark:text-gray-300 text-sm leading-relaxed group-hover:opacity-95 transition-opacity duration-300">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>



       {/* Demo */}
<section id="demo" className="common py-20 bg-white text-center px-4" data-aos="zoom-in">
    <h2 className="common text-3xl font-bold mb-8 text-gray-800">See Bulk Messaging in Action</h2>

    {/* Optional Screenshot Placeholder */}
    {/* <img src="/sms-dashboard-demo.png" alt="Bulk SMS Dashboard" className="common my-8 w-full max-w-4xl mx-auto rounded shadow-lg" /> */}

    <p className="common max-w-xl mx-auto text-gray-600 mb-6 text-lg">
        Explore how you can send 10,000+ personalized SMS with ease, track delivery, and boost engagement — all from one powerful dashboard.
    </p>

    <a href="#" className="common bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-3 rounded-lg hover:brightness-110 transition">
        Watch SMS Platform Demo
    </a>
</section>

            {/* Benefits */}
            <section
                id="benefits"
                className="common relative py-20 px-6 bg-gradient-to-br from-white via-indigo-100 to-white overflow-hidden"
            >
                <div className="common absolute -top-40 left-1/2 transform -translate-x-1/2 w-[40rem] h-[40rem] bg-indigo-300 rounded-full blur-[160px] opacity-20"></div>

                <div className="common relative max-w-7xl mx-auto text-center z-10">
                    <h2 className="common text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                        Bulk SMS That <br />
                        <span className="common text-indigo-600">Drives Real Business</span>
                    </h2>
                    <p className="common text-lg text-gray-600 max-w-2xl mx-auto mb-12">
                        Don’t just send messages — send impact. Reach thousands instantly, increase conversions, and grow on autopilot.
                    </p>

                    <div className="common grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="common bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-indigo-100 transition-all duration-300 group hover:scale-105 hover:ring-2 hover:ring-indigo-300">
                            <div className="common w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-indigo-700 text-white rounded-full text-4xl transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 shadow-lg">
                                📡
                            </div>
                            <h3 className="common text-lg font-semibold text-gray-800 text-center mb-1">
                                Reach 10,000+ in One Click
                            </h3>
                            <p className="common text-sm text-gray-500 text-center">Whether it's a sale or an update — everyone hears you, instantly.</p>
                        </div>

                        <div className="common bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-indigo-100 transition-all duration-300 group hover:scale-105 hover:ring-2 hover:ring-indigo-300">
                            <div className="common w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-indigo-700 text-white rounded-full text-4xl transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 shadow-lg">
                                💸
                            </div>
                            <h3 className="common text-lg font-semibold text-gray-800 text-center mb-1">
                                5X More Conversions
                            </h3>
                            <p className="common text-sm text-gray-500 text-center">Text campaigns outperform emails — get results where it matters.</p>
                        </div>

                        <div className="common bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-indigo-100 transition-all duration-300 group hover:scale-105 hover:ring-2 hover:ring-indigo-300">
                            <div className="common w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-indigo-700 text-white rounded-full text-4xl transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 shadow-lg">
                                ⚙️
                            </div>
                            <h3 className="common text-lg font-semibold text-gray-800 text-center mb-1">
                                Set It & Forget It
                            </h3>
                            <p className="common text-sm text-gray-500 text-center">Automate birthday offers, reminders, and follow-ups with ease.</p>
                        </div>

                        <div className="common bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-indigo-100 transition-all duration-300 group hover:scale-105 hover:ring-2 hover:ring-indigo-300">
                            <div className="common w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-indigo-700 text-white rounded-full text-4xl transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 shadow-lg">
                                🔐
                            </div>
                            <h3 className="common text-lg font-semibold text-gray-800 text-center mb-1">
                                100% Secure Delivery
                            </h3>
                            <p className="common text-sm text-gray-500 text-center">Your data is protected. Your messages get delivered. Every time.</p>
                        </div>
                    </div>
                </div>
            </section>


        {/* Integrations */}
<section
    id="integrations"
    className="common py-24 bg-[#0f0f0f] text-white px-4 relative overflow-hidden"
    data-aos="fade-up"
>
    <div className="common absolute inset-0 bg-gradient-to-tr from-purple-800 via-transparent to-pink-500 opacity-10 blur-2xl"></div>

    <h2 className="common text-5xl font-extrabold text-center bg-gradient-to-r from-pink-500 via-yellow-400 to-red-500 bg-clip-text text-transparent mb-6 tracking-wide drop-shadow-md">
        Powerful Integrations
    </h2>
    <p className="common text-gray-400 text-lg mb-16 max-w-2xl mx-auto text-center">
        Connect your SMS campaigns with tools that boost reach, automation, and conversion. 🚀
    </p>

    <div className="common flex justify-center flex-wrap gap-10 max-w-6xl mx-auto">
        {/* CRM Integration */}
        <div className="common relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl px-6 py-8 w-[250px] text-center shadow-lg hover:shadow-[0_0_30px_#ff00c855] transition duration-500 overflow-hidden">
            <div className="common absolute -top-6 -left-6 w-20 h-20 bg-pink-500 rounded-full blur-xl opacity-30 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="common text-5xl mb-4 animate-pulse">🔗</div>
            <div className="common text-xl font-semibold text-pink-300">CRM Tools (Zoho, HubSpot)</div>
        </div>

        {/* E-commerce */}
        <div className="common relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl px-6 py-8 w-[250px] text-center shadow-lg hover:shadow-[0_0_30px_#00d9ff66] transition duration-500 overflow-hidden">
            <div className="common absolute -top-6 -right-6 w-20 h-20 bg-cyan-400 rounded-full blur-xl opacity-30 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="common text-5xl mb-4 animate-pulse">🛍️</div>
            <div className="common text-xl font-semibold text-cyan-300">Shopify & WooCommerce</div>
        </div>

        {/* WhatsApp API */}
        <div className="common relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl px-6 py-8 w-[250px] text-center shadow-lg hover:shadow-[0_0_30px_#00ff9966] transition duration-500 overflow-hidden">
            <div className="common absolute -bottom-6 -left-6 w-20 h-20 bg-green-400 rounded-full blur-xl opacity-30 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="common text-5xl mb-4 animate-pulse">💬</div>
            <div className="common text-xl font-semibold text-green-300">WhatsApp & SMS API</div>
        </div>

        {/* Payment Gateways */}
        <div className="common relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl px-6 py-8 w-[250px] text-center shadow-lg hover:shadow-[0_0_30px_#ffcc0066] transition duration-500 overflow-hidden">
            <div className="common absolute -bottom-6 -right-6 w-20 h-20 bg-yellow-400 rounded-full blur-xl opacity-30 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="common text-5xl mb-4 animate-pulse">💳</div>
            <div className="common text-xl font-semibold text-yellow-300">Razorpay & Stripe</div>
        </div>
    </div>
</section>


            {/* Testimonials */}
            <section
    id="testimonials"
    className="common py-12 bg-gradient-to-br from-white via-indigo-50 to-white px-4 sm:px-6 relative overflow-hidden"
    data-aos="fade-up"
>
    <h2 className="common text-3xl sm:text-4xl font-extrabold text-indigo-700 text-center mb-12">
        What Our Clients Say
    </h2>

    <div className="common flex flex-col md:flex-row md:justify-center gap-8 max-w-5xl mx-auto z-10 relative">
        {/* Testimonial 1 */}
        <div className="common relative bg-white border border-indigo-100 rounded-xl px-6 py-6 shadow-lg hover:shadow-indigo-200 transition duration-300 w-full max-w-sm">
            <div className="common absolute -top-4 left-5 bg-indigo-600 text-white text-[11px] px-3 py-0.5 rounded-full shadow-sm uppercase tracking-wide">
                Verified Feedback
            </div>
            <p className="common italic text-gray-700 text-[15px] leading-relaxed">
                “We’ve seen a 60% increase in engagement after switching to this bulk SMS platform. Super reliable!”
            </p>
            <div className="common mt-3 text-yellow-400 text-base tracking-wide">★★★★★</div>
            <cite className="common block mt-1 font-medium text-indigo-600 text-sm">
                – Marketing Lead, Finwave Solutions
            </cite>
        </div>

        {/* Testimonial 2 */}
        <div className="common relative bg-white border border-indigo-100 rounded-xl px-6 py-6 shadow-lg hover:shadow-indigo-200 transition duration-300 w-full max-w-sm text-right">
            <div className="common absolute -top-4 right-5 bg-indigo-600 text-white text-[11px] px-3 py-0.5 rounded-full shadow-sm uppercase tracking-wide">
                Verified Feedback
            </div>
            <p className="common italic text-gray-700 text-[15px] leading-relaxed">
                “The delivery speed is fantastic. Our alerts and offers go out in seconds. Highly recommended!”
            </p>
            <div className="common mt-3 text-yellow-400 text-base tracking-wide">★★★★★</div>
            <cite className="common block mt-1 font-medium text-indigo-600 text-sm">
                – Founder, DealsNow.in
            </cite>
        </div>
    </div>

    {/* Background bubbles for subtle flair */}
    <div className="common absolute w-60 h-60 bg-indigo-100 rounded-full blur-3xl opacity-30 -top-10 -left-20 z-0"></div>
    <div className="common absolute w-40 h-40 bg-indigo-200 rounded-full blur-2xl opacity-20 bottom-0 right-10 z-0"></div>
</section>



            {/* Pricing */}
            <section className="common relative py-24 bg-gray-50 dark:bg-gray-950">
                <div className="common text-center mb-16">
                    <h2 className="common text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Choose Your Power-Up</h2>
                    <p className="common mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                        Plans built for every dev level. Start light, go beast mode anytime.
                    </p>
                </div>

                <div className="common relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
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
                            <div className="common absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none blur-xl z-0"></div>

                            {plan.featured && (
                                <div className="common absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-md z-10">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="common text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white mb-2 relative z-10">
                                {plan.title}
                            </h3>
                            <p className="common text-sm text-gray-500 dark:text-gray-400 mb-4 relative z-10">
                                {plan.desc}
                            </p>
                            <div className="common text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 relative z-10">
                                {plan.price}
                                <span className="common text-base font-medium text-gray-500 dark:text-gray-400">/mo</span>
                            </div>
                            <ul className="common space-y-1 text-sm text-gray-700 dark:text-gray-300 mb-6 relative z-10">
                                <li >👨‍💻 Team size: <strong>{plan.team}</strong></li>
                                <li >🛠 Support: <strong>{plan.support}</strong></li>
                                <li >🔄 Updates: <strong>{plan.updates}</strong></li>
                            </ul>
                            <button
                                className="common relative z-10 w-full py-2 rounded-xl text-sm font-semibold transition-colors bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
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
    className="common py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 px-4"
    data-aos="fade-up"
>
    <h2 className="common text-4xl font-extrabold text-center text-white mb-12">
        Frequently Asked Questions
    </h2>
    <div className="common max-w-3xl mx-auto space-y-6">
        {[
            {
                question: "Can I send bulk SMS to international numbers?",
                answer:
                    "Yes, our platform supports both local and international SMS campaigns based on your selected plan.",
            },
            {
                question: "Is there an API for automation?",
                answer:
                    "Absolutely! We provide a robust SMS API to automate messages, alerts, and campaigns.",
            },
            {
                question: "Do I need DLT registration in India?",
                answer:
                    "Yes, for promotional and transactional SMS in India, DLT registration is mandatory as per TRAI regulations.",
            },
            {
                question: "How fast are the SMS deliveries?",
                answer:
                    "Messages are usually delivered within seconds. Delivery time may vary depending on network traffic and recipient carrier.",
            },
        ].map((item, idx) => (
            <details
                key={idx}
                className="common group bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl"
            >
                <summary className="common font-semibold text-lg text-white cursor-pointer flex items-center justify-between">
                    {item.question}
                    <span className="common transition-transform duration-300 group-open:rotate-180">
                        ▼
                    </span>
                </summary>
                <p className="common mt-3 text-gray-200 leading-relaxed">{item.answer}</p>
            </details>
        ))}
    </div>
</section>

            {showModal && (
                <div className="common fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
                    <div className="common bg-white rounded-2xl shadow-2xl w-96 p-8 relative">
                        <button
                            onClick={() => setShowModal(false)}
                            className="common absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
                        >
                            &times;
                        </button>
                        <h2 className="common text-2xl font-bold mb-6 text-center text-indigo-600">
                            Select Login Type
                        </h2>
                        <div className="common flex flex-col gap-4">
                            <button className="common bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition">
                                👨‍👩‍👧 Login as Parent
                            </button>
                            <button className="common bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition">
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
                className="common relative py-28 px-6 bg-gradient-to-br from-white via-indigo-50 to-white overflow-hidden"
                data-aos="fade-up"
            >
                {/* Decorative Glow Blobs */}
                <div className="common absolute -top-32 -right-32 w-[400px] h-[400px] bg-indigo-300 opacity-20 rounded-full blur-[180px] z-0"></div>
                <div className="common absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-pink-300 opacity-20 rounded-full blur-[180px] z-0"></div>

                {/* Content */}
                <div className="common relative z-10 max-w-3xl mx-auto text-center">
                    <h2 className="common text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                        📞 Talk to Our Team
                    </h2>
                    <p className="common text-lg text-gray-600 mb-8">
                        We’re here to help with all your questions. Reach out any time!
                    </p>

                    <div className="common flex flex-col sm:flex-row justify-center items-center gap-6 mb-10">
                        <a
                            href="mailto:hello@edusmart.com"
                            className="common flex items-center gap-2 text-indigo-600 font-semibold hover:underline transition"
                        >
                            📧 hello@edusmart.com
                        </a>
                        <a
                            href="tel:+919876543210"
                            className="common flex items-center gap-2 text-indigo-600 font-semibold hover:underline transition"
                        >
                            📱 +91-98765-43210
                        </a>
                    </div>
                    <a
                        href="#demo"
                        className="common inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition duration-300"
                    >
                        🎓 Schedule a Call
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="common bg-gray-50 text-center py-6 text-sm text-gray-500 border-t border-gray-200">
                <p>
                    &copy; 2025 <span className="common font-semibold text-indigo-600">EduSmart</span>. Built by{" "}
                    <a
                        href="https://thundergits.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="common text-purple-500 hover:underline font-medium"
                        style={{ fontFamily: 'Outfit, sans-serif' }}
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