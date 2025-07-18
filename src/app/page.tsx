'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import AOS from 'aos'
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import 'aos/dist/aos.css'
import { RiTeamLine, RiCustomerService2Line, RiRefreshLine, RiCheckLine } from 'react-icons/ri';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { IoMenuSharp } from 'react-icons/io5'
import PricingCalculator from './PricingCalculator';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function page() {
    const schoolPlans = [
        {
            title: 'Monthly Plan',
            price: '₹2 / student',
            desc: 'Pay every month. Ideal for small schools or trials.',
            details: [
                '₹2 per student per month',
                '₹2000 one-time installation fee (mandatory)',
                'Optional: ₹5000 for website setup',
                'Optional: ₹10/student for data upload',
            ],
            featured: false,
        },

        {
            title: 'Yearly Plan (250+ students)',
            price: '₹2 / student (15% OFF)',
            desc: 'Discounted pricing for larger schools.',
            details: [
                '15% discount on ₹(No. of students × 2 × 12)',
                '₹2000 one-time installation fee (mandatory)',
                'Optional: ₹5000 for website setup',
                'Optional: ₹10/student for data upload',
            ],
            featured: false,
        },
    ];
    const [activeSection, setActiveSection] = useState('') // Track the active section
    const [showModal, setShowModal] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const handleParentLogin = () => {
        window.location.href = 'https://vidya360.thundergits.com/student';
    };

    const handleAdminLogin = () => {
        window.location.href = 'https://vidya360.thundergits.com/admin';
    };


    const navLinks = [
        { label: 'Features', id: 'features' },
        { label: 'Demo', id: 'demo' },
        // { label: 'Pricing', id: 'pricing' },
        { label: 'FAQ', id: 'faq' },
        { label: 'Contact', id: 'contact' },
    ]
    // Initialize AOS for animations
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }
    }, [mobileMenuOpen])

    useEffect(() => {
        AOS.init({ duration: 1000, once: true })

        // Intersection Observer to track which section is currently in view
        const sections = document.querySelectorAll('section')
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, // Trigger when 50% of the section is in view
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id) // Set active section based on intersection
                }
            })
        }, options)
        sections.forEach((section) => observer.observe(section))

        // Cleanup observer on component unmount
        return () => observer.disconnect()
    }, [])

    return (
        <div className="common font-sans text-gray-800 bg-white">
            {/* Header */}
            <Navbar></Navbar>

            {/* Hero */}
            <section className="relative pt-32 lg:pt-36">
                <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
                    <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
                        <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden" />
                        <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80" />
                    </div>
                    <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90" />
                    <div className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 
      lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
                        <h1 className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight xl:text-6xl/tight font-bold text-gray-900 dark:text-white">
                            The Most Affordable <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600">School ERP</span> Platform
                        </h1>
                        <p className="mt-8 text-gray-700 dark:text-gray-300">
                            ThunderSchool gives you everything — Web App, Mobile App, and Desktop App — at a price no other ERP can match. Modern, fast, and made for Indian schools.
                        </p>

                        <div className="mt-10  w-full flex max-w-md mx-auto lg:mx-0">
                            <div className="flex sm:flex-row flex-col gap-5 w-full">
                                <form action="#" className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-gray-600 dark:text-gray-400 shadow-lg shadow-gray-200/20 dark:shadow-transparent
                      border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 rounded-full ease-linear focus-within:bg-white dark:focus-within:bg-gray-950  focus-within:border-blue-600">
                                    <span className="min-w-max pr-2 border-r border-gray-200 dark:border-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                                        </svg>
                                    </span>
                                    <input type="email" name="" id="" placeholder="johndoe@gmail.com" className="w-full py-3 outline-none bg-transparent" />
                                    <button className="flex text-white justify-center items-center w-max min-w-max sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                          after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-blue-600 border-transparent hover:border-[#172554]">
                                        <span className="hidden sm:flex relative z-[5]">
                                            Get Started
                                        </span>
                                        <span className="flex sm:hidden relative z-[5]">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                            </svg>
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
                        <Image src="https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero image" width={2350} height={2359} className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96" />
                    </div>
                </div>
            </section>
            {/* Problem & Solution */}
            <section
                id="problem-solution"
                className="common relative py-28 px-6  overflow-hidden"
                data-aos="fade-up"
            >
                {/* Glow Background Blobs */}
                <div className="common absolute -top-44 -right-36 w-[400px] h-[400px] bg-pink-400 opacity-25 rounded-full blur-[180px] z-0"></div>
                <div className="common absolute bottom-[-100px] left-[-140px] w-[400px] h-[400px] bg-indigo-400 opacity-25 rounded-full blur-[180px] z-0"></div>

                {/* Heading */}
                <div className="common relative z-10 text-center max-w-3xl mx-auto mb-20">
                    <h2 className="common text-5xl font-extrabold tracking-tight text-gray-900 mb-4 leading-tight">
                        Challenges & Solutions
                    </h2>
                    <p className="common text-lg text-gray-600 font-medium">
                        Real issues. Smart fixes. Let’s transform education
                        together.
                    </p>
                </div>

                {/* Cards */}
                <div className="common relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Problem Card */}
                    <div
                        className="common group bg-gray-100 backdrop-blur-xl backdrop-saturate-100 rounded-[2rem] p-10 
        border border-white/30 
        transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_40px_90px_rgba(0,0,0,0.12)]"
                    >
                        <div className="common flex items-center gap-4 mb-6">

                            <h3 className="common text-3xl font-bold text-red-500">
                                The Problem
                            </h3>
                        </div>
                        <p className="common text-gray-700 text-lg leading-relaxed font-medium">
                            Manual operations, fragmented data, and
                            communication gaps cause delays and errors in school
                            administration.
                        </p>
                    </div>

                    {/* Solution Card */}
                    <div
                        className="common group bg-gray-100 backdrop-blur-xl backdrop-saturate-150 rounded-[2rem] p-10 
        border border-white/30 
        transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_40px_90px_rgba(0,0,0,0.12)]"
                    >
                        <div className="common flex items-center gap-4 mb-6">

                            <h3 className="common text-3xl font-bold text-indigo-600">
                                Our Solution
                            </h3>
                        </div>
                        <p className="common text-gray-800 text-lg leading-relaxed font-medium">
                            <span className="common text-indigo-600 font-semibold">
                                edugits
                            </span>{' '}
                            automates and integrates every academic and
                            administrative function in one seamless platform.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section
                id="features"
                className="common relative py-28 px-4  text-center overflow-hidden"
                data-aos="fade-up"
            >
                {/* Backgrounds */}
                <div className="common absolute -top-72 -left-72 w-[120rem] h-[120rem] bg-indigo-400/10 rounded-full blur-[260px] opacity-40 z-0 pointer-events-none" />
                <div className="common absolute inset-0 bg-[radial-gradient(transparent,transparent,rgba(0,0,0,0.04))] dark:bg-[radial-gradient(transparent,transparent,rgba(255,255,255,0.04))] z-0 pointer-events-none" />
                <div className="common absolute top-0 left-0 w-full h-20 bg-white/10 dark:bg-white/5 blur-sm z-10 pointer-events-none" />


                <div className="common relative z-10 text-center max-w-3xl mx-auto mb-20">
                    <h2 className="common text-5xl font-extrabold tracking-tight text-gray-900 mb-4 leading-tight">
                        Key Features
                    </h2>
                    <p className="common text-lg text-gray-600 font-medium">
                        Core Functionalities That Drive Your School Forward
                    </p>
                </div>

                {/* Cards */}
                <div className="common grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
                    {[
                        {
                            icon: '👨‍🎓',
                            title: 'Student Management',
                            desc: 'Add, edit, filter, import/export student records with ease.',


                        },
                        {
                            icon: '📚',
                            title: 'Class & Subject Management',
                            desc: 'Create classes, assign teachers, map subjects efficiently.',

                        },
                        {
                            icon: '💳',
                            title: 'Smart Fee Management',
                            desc: 'Real-time dues tracking, UPI payments, instant receipts.',

                        },
                        {
                            icon: '🆔',
                            title: 'ID & Admit Cards',
                            desc: 'Generate and print student cards instantly.',

                        },
                        {
                            icon: '📅',
                            title: 'Exam Timetables',
                            desc: 'Easy creation and sharing of examination schedules.',

                        },
                        {
                            icon: '🔐',
                            title: 'Role-Based Access',
                            desc: 'Admin, student, and staff login portals with secure access.',

                        },
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="common group relative cursor-pointer"
                            data-aos="fade-up"
                            data-aos-delay={index * 120}
                        >
                            {/* Outer glow effect */}
                            <div
                                className={`common absolute -inset-1 bg-gradient-to-r rounded-3xl blur-xl opacity-0 group-hover:opacity-75 transition-all duration-1000 group-hover:duration-200 animate-pulse`}
                            />

                            {/* Main card */}
                            <div className="common relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 p-8 rounded-3xl shadow-1xl transition-all duration-700 transform group-hover:-translate-y-4 group-hover:scale-105 overflow-hidden">
                                {/* Animated background particles */}
                                <div className="common absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="common absolute top-4 left-4 w-2 h-2 bg-white/40 rounded-full animate-ping" />
                                    <div className="common absolute top-8 right-6 w-1 h-1 bg-white/30 rounded-full animate-pulse" />
                                    <div className="common absolute bottom-6 left-8 w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" />
                                </div>

                                {/* Icon container with enhanced animations */}
                                <div className="common relative mb-6">
                                    <div
                                        className={`common w-20 h-20 mx-auto flex items-center justify-center rounded-2xl bg-gradient-to-tr shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:rotate-6 group-hover:scale-110`}
                                    >
                                        <span className="common text-4xl z-10 group-hover:scale-125 transition-transform duration-300">
                                            {feature.icon}
                                        </span>
                                        <div className="common absolute inset-0 rounded-2xl bg-white/30 blur-xl opacity-0 group-hover:opacity-50 transition-all duration-300" />
                                    </div>

                                    {/* Floating ring animation */}
                                    <div
                                        className={`common absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2  opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 animate-pulse`}
                                    />
                                </div>

                                {/* Content */}
                                <div className="common space-y-3">
                                    <h3 className="common text-xl font-bold text-gray-800 dark:text-white tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                                        {feature.title}
                                    </h3>

                                    <p className="common text-gray-600 dark:text-gray-300 text-sm leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-all duration-300">
                                        {feature.desc}
                                    </p>
                                </div>

                                {/* Hover effect overlay */}
                                <div className="common absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                                {/* Bottom shine effect */}
                                <div className="common absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* Demo */}
            <section
                id="demo"
                className="common py-20 bg-white text-center px-4"
                data-aos="zoom-in"
            >
                <h2 className="common text-3xl font-bold mb-8">
                    Live Screens & Demo
                </h2>
                {/* Optional Screenshot */}
                {/* <img src="/erp-screenshot.png" alt="ERP Screenshot" className="common my-8 w-full max-w-4xl mx-auto rounded shadow-lg" /> */}
                <a
                    href="#"
                    className="common bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
                >
                    Watch Full Demo
                </a>
            </section>

            {/* Benefits */}
            <section
                id="benefits"
                className="common relative py-20 px-6 bg-gradient-to-br from-white via-indigo-100 to-white overflow-hidden"
            >
                <div className="common absolute -top-40 left-1/2 transform -translate-x-1/2 w-[40rem] h-[40rem] bg-indigo-300 rounded-full blur-[160px] opacity-20"></div>

                <div className="common relative max-w-7xl mx-auto text-center z-10">
                    <h2 className="common text-4xl md:text-5xl font-black text-black mb-4 leading-tight">
                        Why Thundergits School <br />
                        <span className="common text-indigo-600">ERP?</span>
                    </h2>
                    <p className="common text-gray-600 text-lg mb-12">
                        Experience the future of school management with our
                        cutting-edge ERP solution.
                    </p>
                    <div className="common grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="common bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-green-200 transition-all duration-500 group hover:scale-110 hover:ring-4 hover:ring-green-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-green-50 hover:to-white relative overflow-hidden">
                            <div className="common absolute inset-0 bg-gradient-to-r from-green-400/10 to-green-600/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                            <div className="common w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full text-4xl transition-all duration-700  ">
                                💰
                            </div>
                            <h3 className="common text-lg font-bold text-gray-800 text-center mb-2 group-hover:text-green-700 transition-colors duration-300 relative z-10 group-hover:animate-pulse">
                                Most affordable ERP globally
                            </h3>
                            <p className="common text-sm text-gray-600 text-center group-hover:text-green-600 transition-colors duration-300 relative z-10">
                                Save up to 70% on costs compared to
                                international solutions while getting premium
                                features
                            </p>
                        </div>

                        <div className="common bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-blue-200 transition-all duration-500 group hover:scale-110 hover:ring-4 hover:ring-blue-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white relative overflow-hidden">
                            <div className="common absolute inset-0 bg-gradient-to-r from-blue-400/10 to-blue-600/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                            <div className="common w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-full text-4xl transition-all duration-700  relative z-10">
                                📱
                            </div>
                            <h3 className="common text-lg font-bold text-gray-800 text-center mb-2 group-hover:text-blue-700 transition-colors duration-300 relative z-10 group-hover:animate-pulse">
                                Mobile + Web + PC apps
                            </h3>
                            <p className="common text-sm text-gray-600 text-center group-hover:text-blue-600 transition-colors duration-300 relative z-10">
                                Access from anywhere - Android, iOS, Web
                                browsers & Windows desktop applications
                            </p>
                        </div>

                        <div className="common bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-purple-200 transition-all duration-500 group hover:scale-110 hover:ring-4 hover:ring-purple-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-purple-50 hover:to-white relative overflow-hidden">
                            <div className="common absolute inset-0 bg-gradient-to-r from-purple-400/10 to-purple-600/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                            <div
                                className="common w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-gradient-to-br from-purple-400 to-purple-600 text-white rounded-full text-4xl transition-all duration-700  z-10"
                                style={{ animationDuration: '3s' }}
                            >
                                ⚡
                            </div>
                            <h3 className="common text-lg font-bold text-gray-800 text-center mb-2 group-hover:text-purple-700 transition-colors duration-300 relative z-10 group-hover:animate-pulse">
                                Built on latest technologies
                            </h3>
                            <p className="common text-sm text-gray-600 text-center group-hover:text-purple-600 transition-colors duration-300 relative z-10">
                                React, Node.js, AI-powered analytics & cloud
                                infrastructure for future-ready performance
                            </p>
                        </div>

                        <div className="common bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-orange-200 transition-all duration-500 group hover:scale-110 hover:ring-4 hover:ring-orange-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-orange-50 hover:to-white relative overflow-hidden">
                            <div className="common absolute inset-0 bg-gradient-to-r from-orange-400/10 to-orange-600/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                            <div className="common w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-full text-4xl transition-all duration-700 relative z-10">
                                🇮🇳
                            </div>
                            <h3 className="common text-lg font-bold text-gray-800 text-center mb-2 group-hover:text-orange-700 transition-colors duration-300 relative z-10 group-hover:animate-pulse">
                                Made in India
                            </h3>
                            <p className="common text-sm text-gray-600 text-center group-hover:text-orange-600 transition-colors duration-300 relative z-10">
                                Proudly developed in India with local support,
                                compliance & understanding of Indian education
                                system
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integrations */}
            {/* <section
                id="integrations"
                className="common py-24 bg-[#0f0f0f] text-white px-4 relative overflow-hidden"
                data-aos="fade-up"
            >
                <div className="common absolute inset-0 bg-gradient-to-tr from-purple-800 via-transparent to-pink-500 opacity-10 blur-2xl"></div>

                <h2 className="common text-5xl font-extrabold text-center bg-gradient-to-r from-pink-500 via-yellow-400 to-red-500 bg-clip-text text-transparent mb-6 tracking-wide drop-shadow-md">
                    Epic Integrations
                </h2>
                <p className="common text-gray-400 text-lg mb-16 max-w-2xl mx-auto text-center">
                    Supercharge your platform with iconic tools that work like
                    magic ✨
                </p>

                <div className="common flex justify-center flex-wrap gap-10 max-w-6xl mx-auto">
                    <div className="common relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl px-6 py-8 w-[250px] text-center shadow-lg hover:shadow-[0_0_30px_#ff00c855] transition duration-500 overflow-hidden">
                        <div className="common absolute -top-6 -left-6 w-20 h-20 bg-pink-500 rounded-full blur-xl opacity-30 group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="common text-5xl mb-4 animate-pulse">
                            📚
                        </div>
                        <div className="common text-xl font-semibold text-pink-300">
                            Google Classroom
                        </div>
                    </div>

                    <div className="common relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl px-6 py-8 w-[250px] text-center shadow-lg hover:shadow-[0_0_30px_#00d9ff66] transition duration-500 overflow-hidden">
                        <div className="common absolute -top-6 -right-6 w-20 h-20 bg-cyan-400 rounded-full blur-xl opacity-30 group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="common text-5xl mb-4 animate-pulse">
                            🎥
                        </div>
                        <div className="common text-xl font-semibold text-cyan-300">
                            Zoom
                        </div>
                    </div>

                    <div className="common relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl px-6 py-8 w-[250px] text-center shadow-lg hover:shadow-[0_0_30px_#00ff9966] transition duration-500 overflow-hidden">
                        <div className="common absolute -bottom-6 -left-6 w-20 h-20 bg-green-400 rounded-full blur-xl opacity-30 group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="common text-5xl mb-4 animate-pulse">
                            💬
                        </div>
                        <div className="common text-xl font-semibold text-green-300">
                            WhatsApp API
                        </div>
                    </div>

                    <div className="common relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl px-6 py-8 w-[250px] text-center shadow-lg hover:shadow-[0_0_30px_#ffcc0066] transition duration-500 overflow-hidden">
                        <div className="common absolute -bottom-6 -right-6 w-20 h-20 bg-yellow-400 rounded-full blur-xl opacity-30 group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="common text-5xl mb-4 animate-pulse">
                            💳
                        </div>
                        <div className="common text-xl font-semibold text-yellow-300">
                            UPI & Razorpay
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Testimonials */}
            {/* <section
                id="testimonials"
                className="common py-12 bg-gradient-to-br from-white via-indigo-50 to-white px-4 sm:px-6 relative overflow-hidden"
                data-aos="fade-up"
            >
                <h2 className="common text-3xl sm:text-4xl font-extrabold text-indigo-700 text-center mb-12">
                    What Our Clients Say
                </h2>

                <div className="common flex flex-col md:flex-row md:justify-center gap-8 max-w-5xl mx-auto z-10 relative">
                    <div className="common relative bg-white border border-indigo-100 rounded-xl px-6 py-6 shadow-lg hover:shadow-indigo-200 transition duration-300 w-full max-w-sm">
                        <div className="common absolute -top-4 left-5 bg-indigo-600 text-white text-[11px] px-3 py-0.5 rounded-full shadow-sm uppercase tracking-wide">
                            Verified Feedback
                        </div>
                        <p className="common italic text-gray-700 text-[15px] leading-relaxed">
                            “edugits has streamlined everything—from attendance
                            to online fees. Parents love it!”
                        </p>
                        <div className="common mt-3 text-yellow-400 text-base tracking-wide">
                            ★★★★★
                        </div>
                        <cite className="common block mt-1 font-medium text-indigo-600 text-sm">
                            – Principal, Green Valley School
                        </cite>
                    </div>

                    
                    <div className="common relative bg-white border border-indigo-100 rounded-xl px-6 py-6 shadow-lg hover:shadow-indigo-200 transition duration-300 w-full max-w-sm text-right">
                        <div className="common absolute -top-4 right-5 bg-indigo-600 text-white text-[11px] px-3 py-0.5 rounded-full shadow-sm uppercase tracking-wide">
                            Verified Feedback
                        </div>
                        <p className="common italic text-gray-700 text-[15px] leading-relaxed">
                            “We reduced paperwork by 80%. The parent-teacher
                            communication has never been better.”
                        </p>
                        <div className="common mt-3 text-yellow-400 text-base tracking-wide">
                            ★★★★★
                        </div>
                        <cite className="common block mt-1 font-medium text-indigo-600 text-sm">
                            – Admin Head, Sunrise Academy
                        </cite>
                    </div>
                </div>

                
                <div className="common absolute w-60 h-60 bg-indigo-100 rounded-full blur-3xl opacity-30 -top-10 -left-20 z-0"></div>
                <div className="common absolute w-40 h-40 bg-indigo-200 rounded-full blur-2xl opacity-20 bottom-0 right-10 z-0"></div>
            </section> */}

            {/* Pricing */}
            <section className="common relative py-24 bg-gray-50 dark:bg-gray-950">
                <section className="common py-24 bg-white dark:bg-gray-900">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
                            School Plan Options
                        </h2>
                        <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                            Compare plans based on your student strength and billing preference.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
                        {schoolPlans.map((plan) => (
                            <div
                                key={plan.title}
                                className={`relative group max-w-sm mx-auto min-h-[380px] rounded-2xl p-6 md:p-8 transition-all duration-300 border dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-xl hover:scale-[1.035] hover:z-10`}
                            >
                                {plan.featured && (
                                    <div className="absolute top-2 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-md z-10">
                                        Recommended
                                    </div>
                                )}
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    {plan.title}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                    {plan.desc}
                                </p>
                                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                                    {plan.price}
                                </div>
                                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    {plan.details.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <RiCheckLine className="text-green-500 mt-1" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
                <PricingCalculator />


            </section>

            {/* FAQ */}
            <section
                id="faq"
                className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4 relative overflow-hidden"
                data-aos="fade-up"
            >
                {/* Animated background elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
                    <div className="absolute -bottom-32 left-20 w-72 h-72 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
                </div>

                <div className="relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 mb-6">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            <span className="text-blue-200 text-2xl w-12 font-medium">
                                FAQ
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-100 mb-4 leading-tight">
                            Got Questions?
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Find answers to the most common questions about
                            edugits
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-4">
                        {[
                            {
                                question:
                                    'Can edugits work for multiple campuses?',
                                answer: 'Yes, our Enterprise plan supports multi-campus and branch-level reporting with centralized administration and individual campus management.',
                            },
                            {
                                question: 'Do parents need to install any app?',
                                answer: 'Yes, a lightweight parent app is available on Android & iOS for real-time updates, notifications, and easy communication with the school.',
                            },
                            {
                                question: 'Is training provided?',
                                answer: 'Yes, we offer complete onboarding and staff training with live sessions, documentation, and ongoing support to ensure smooth adoption.',
                            },
                            {
                                question:
                                    'Is ThunderSchool suitable for small schools with limited staff?',
                                answer: 'Absolutely. ThunderSchool is lightweight, user-friendly, and designed for schools of all sizes — including small and rural institutions with minimal technical expertise required.',
                            },
                            {
                                question:
                                    'Do students and parents get login access?',
                                answer: "Yes. Students can log in via mobile or web to check fees, download admit cards, and view exam schedules. Parents get dedicated access for monitoring their child's progress.",
                            },
                            {
                                question: 'Is online fee payment supported?',
                                answer: 'Yes. ThunderSchool supports secure online payments via UPI, cards, and net banking, along with auto-generated receipts and payment tracking.',
                            },
                            {
                                question:
                                    'Can I generate ID and admit cards within the ERP?',
                                answer: 'Yes. ThunderSchool includes built-in tools to design, generate, and print ID cards and admit cards — no need for third-party software or external designers.',
                            },
                            {
                                question:
                                    'Is the system cloud-based? What about offline access?',
                                answer: 'ThunderSchool runs on a cloud-first architecture for real-time access from anywhere. The desktop app includes limited offline functionality and syncs data when reconnected.',
                            },
                            {
                                question: 'What support do you offer?',
                                answer: 'We provide full onboarding, live training, 24/7 customer support, regular system updates, and dedicated account management — ensuring your staff is always confident using the system.',
                            },
                            {
                                question:
                                    'Can we migrate from another ERP or manual system?',
                                answer: 'Yes. We help you import all your existing data — students, fees, subjects, attendance records, and more — from Excel, other ERPs, or manual systems. Migration support is part of our setup service.',
                            },
                        ].map((item, idx) => (
                            <details
                                key={idx}
                                className="group bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl shadow-2xl transition-all duration-500 hover:shadow-purple-500/20 hover:border-purple-400/30 hover:from-white/10 hover:to-white/15 hover:-translate-y-1 hover:scale-[1.01]"
                            >
                                <summary className="font-semibold sm:font-bold text-base sm:text-xl text-white cursor-pointer flex items-center justify-between p-4 list-none">
                                    <span className="flex items-center gap-4">
                                        <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                                            {item.question}
                                        </span>
                                    </span>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center border border-white/20 group-hover:border-purple-400/40 transition-all duration-300">
                                            <span className="text-xl sm:text-2xl text-white/80 transition-transform duration-500 group-open:rotate-180 group-hover:text-purple-300">
                                                <FiChevronDown className="text-xl sm:text-2xl text-white/80 transition-transform duration-500 group-open:hidden group-hover:text-purple-300" />
                                                <FiChevronUp className="hidden group-open:block text-xl sm:text-2xl text-white/80 transition-transform duration-500 group-hover:text-purple-300" />
                                            </span>
                                        </div>
                                    </div>
                                </summary>

                                <div className="px-4 sm:px-8 pb-6 sm:pb-8">
                                    <div className="ml-4 sm:ml-12 pl-2 sm:pl-4 border-l-2 border-gradient-to-b from-blue-400/50 to-purple-400/50">
                                        <div className="bg-gradient-to-br from-blue-950/30 to-purple-950/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10">
                                            <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-medium">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </details>
                        ))}
                    </div>
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
                            <button
                                className="common bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition"
                                onClick={handleParentLogin}
                            >
                                👨‍👩‍👧 Login as Parent
                            </button>
                            <button
                                className="common bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition"
                                onClick={handleAdminLogin}
                            >
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
                        We’re here to help with all your questions. Reach out
                        any time!
                    </p>

                    <div className="common flex flex-col sm:flex-row justify-center items-center gap-6 mb-10">
                        <a
                            href="mailto:edugits@thundergits.com"
                            className="common flex items-center gap-2 text-indigo-600 font-semibold hover:underline transition"
                        >
                            📧 edugits@thundergits.com
                        </a>
                        <a
                            href="tel:+919876543210"
                            className="common flex items-center gap-2 text-indigo-600 font-semibold hover:underline transition"
                        >
                            📱 +91-7765979725
                        </a>
                    </div>

                    <a
                        href="#demo"
                        className="common inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition duration-300"
                    >
                        Schedule a Call
                    </a>
                </div>
            </section>

            {/* Footer */}
            <Footer></Footer>
            {/* <footer className="common bg-gray-50 text-center py-6 text-sm text-gray-500 border-t border-gray-200">
                <p>
                    &copy; 2025{' '}
                    <span className="common font-semibold text-indigo-600">
                        edugits
                    </span>
                    . Built by{' '}
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
            </footer> */}
        </div>
    )
}

export default page
