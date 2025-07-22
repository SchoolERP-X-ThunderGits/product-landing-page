'use client'
import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FiCalendar, FiChevronDown, FiChevronUp, FiMail, FiPhone } from 'react-icons/fi';
import PricingCalculator from './PricingCalculator';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./landing-page.css"

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
            title: 'Yearly Plan (15% OFF)',
            price: '₹2 / student',
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
    const [showModal, setShowModal] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    // eslint-disable-next-line
    const toggleAccordion = (index: any) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const [, setActiveSection] = useState('') // Track the active section

    const [mobileMenuOpen] = useState(false)
    const handleParentLogin = () => {
        window.location.href = 'https://tg-panel-edugits.thundergits.com/student';
    };

    const handleAdminLogin = () => {
        window.location.href = 'https://tg-panel-edugits.thundergits.com/admin';
    };


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

    const features = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
            ),
            title: 'Student Management',
            desc: 'Comprehensive student profiles with academic history, attendance, and performance analytics.',
            color: 'from-primary to-indigo'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            title: 'Class & Subject Management',
            desc: 'Create classes, assign teachers, and map subjects with timetable integration.',
            color: 'from-success to-teal'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: 'Fee Management',
            desc: 'Automated fee collection, UPI payments, receipts, and real-time dues tracking.',
            color: 'from-warning to-orange'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
            ),
            title: 'ID & Admit Cards',
            desc: 'Generate and print professional student ID cards and exam admit cards instantly.',
            color: 'from-purple to-violet'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Exam Scheduling',
            desc: 'Create and manage examination timetables with automatic notifications.',
            color: 'from-rose to-pink'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
            title: 'Role-Based Access',
            desc: 'Secure portals for admin, teachers, students, and parents with custom permissions.',
            color: 'from-cyan to-sky'
        },
    ];

    const benefits = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Most Affordable ERP Globally",
            description: "Save up to 70% on costs compared to international solutions while getting premium features",
            color: "from-success to-emerald"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: "Mobile + Web + PC Apps",
            description: "Access from anywhere - Android, iOS, Web browsers & Windows desktop applications",
            color: "from-primary to-sky"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Built on Latest Technologies",
            description: "React, Node.js, AI-powered analytics & cloud infrastructure for future-ready performance",
            color: "from-purple to-violet"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Made in India",
            description: "Proudly developed in India with local support, compliance & understanding of Indian education system",
            color: "from-orange to-warning"
        }
    ];



    const faqs = [
        {
            question: 'Can EduGits work for multiple campuses?',
            answer: 'Yes, our Enterprise plan supports multi-campus and branch-level reporting with centralized administration and individual campus management.'
        },
        {
            question: 'Do parents need to install any app?',
            answer: 'Yes, a lightweight parent app is available on Android & iOS for real-time updates, notifications, and easy communication with the school.'
        },
        {
            question: 'Is training provided?',
            answer: 'Yes, we offer complete onboarding and staff training with live sessions, documentation, and ongoing support to ensure smooth adoption.'
        },
        {
            question: 'Is EduGits suitable for small schools with limited staff?',
            answer: 'Absolutely. EduGits is lightweight, user-friendly, and designed for schools of all sizes — including small and rural institutions with minimal technical expertise required.'
        },
        {
            question: 'Do students and parents get login access?',
            answer: "Yes. Students can log in via mobile or web to check fees, download admit cards, and view exam schedules. Parents get dedicated access for monitoring their child's progress."
        },
        {
            question: 'Is online fee payment supported?',
            answer: 'Yes. EduGits supports secure online payments via UPI, cards, and net banking, along with auto-generated receipts and payment tracking.'
        },
        {
            question: 'Can I generate ID and admit cards within the ERP?',
            answer: 'Yes. EduGits includes built-in tools to design, generate, and print ID cards and admit cards — no need for third-party software or external designers.'
        },
        {
            question: 'Is the system cloud-based? What about offline access?',
            answer: 'EduGits runs on a cloud-first architecture for real-time access from anywhere. The desktop app includes limited offline functionality and syncs data when reconnected.'
        },
        {
            question: 'What support do you offer?',
            answer: 'We provide full onboarding, live training, 24/7 customer support, regular system updates, and dedicated account management — ensuring your staff is always confident using the system.'
        },
        {
            question: 'Can we migrate from another ERP or manual system?',
            answer: 'Yes. We help you import all your existing data — students, fees, subjects, attendance records, and more — from Excel, other ERPs, or manual systems. Migration support is part of our setup service.'
        }
    ];
    return (
        <div className="common font-sans text-gray-800 bg-white">
            {/* Header */}
            <Navbar />

            {/* Hero */}
            <section className="relative py-16 lg:py-24 overflow-hidden">

                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>

                <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                        <div className="w-full lg:w-1/2 z-10">
                            <div className="mb-6">
                                <span className="feature-badge text-white text-sm font-semibold px-4 py-2 rounded-full inline-block">
                                    <i className="fas fa-star mr-2"></i>#1 School ERP in India
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                The Most Affordable <span className="hero-gradient">School ERP</span> Platform
                            </h1>

                            <p className="text-lg text-gray-600 mb-8 max-w-xl">
                                EduGits gives you everything — Web App, Mobile App, and Desktop App — at a price no other ERP can match. Modern, fast, and made for Indian schools.
                            </p>

                            <div className="mb-10">
                                <div className="text-left mb-4">
                                    <h3 className="font-semibold text-gray-700 mb-2">Get started in seconds</h3>
                                    <div className="form-container bg-white rounded-xl p-1 flex items-center">
                                        <div className="pl-4 pr-2 text-gray-500">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <input type="email" placeholder="your.school@example.com" className="w-full py-4 px-2 outline-none bg-transparent" />
                                        <button className="cta-button text-white font-medium py-4 px-6 rounded-xl">
                                            <span>Get Started</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 mt-6">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
                                            <i className="fas fa-check text-green-600"></i>
                                        </div>
                                        <span className="text-gray-600">Free 30-day trial</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                                            <i className="fas fa-check text-blue-600"></i>
                                        </div>
                                        <span className="text-gray-600">No credit card required</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="w-full lg:w-1/2 flex justify-center z-10">
                            <div className="relative">
                                <div className="hero-image overflow-hidden">
                                    <img src="https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="EduGits ERP Platform"
                                        className="w-full h-auto object-cover" />
                                </div>


                                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                                            <i className="fas fa-mobile-alt text-blue-600 text-xl"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Mobile App</h4>
                                            <p className="text-sm text-gray-500">For parents & teachers</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mr-3">
                                            <i className="fas fa-desktop text-green-600 text-xl"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Desktop App</h4>
                                            <p className="text-sm text-gray-500">For admin staff</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 lg:px-8 max-w-7xl mt-16 lg:mt-24 z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                            <div className="text-3xl font-bold text-blue-600">500+</div>
                            <div className="text-gray-600">Schools</div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                            <div className="text-3xl font-bold text-green-600">20K+</div>
                            <div className="text-gray-600">Teachers</div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                            <div className="text-3xl font-bold text-purple-600">200K+</div>
                            <div className="text-gray-600">Students</div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                            <div className="text-3xl font-bold text-yellow-600">₹99</div>
                            <div className="text-gray-600">Starting Price</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative py-20 overflow-hidden">

                <div className="blob problem-blob"></div>
                <div className="blob solution-blob"></div>

                <div className="container mx-auto px-4 lg:px-8 max-w-6xl">

                    <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="section-title">Challenges & Solutions</span>
                        </h2>
                        <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
                            Real issues. Smart fixes. Let&apos;s transform education together.
                        </p>
                    </div>


                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                        <div className="card problem-card p-8 lg:p-10">
                            <div className="icon-container problem-icon">
                                <i className="fas fa-exclamation-triangle text-3xl"></i>
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <h3 className="text-3xl font-bold text-red-500">
                                    The Problem
                                </h3>
                            </div>

                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Manual operations, fragmented data, and communication gaps cause delays and errors in school administration.
                            </p>

                            <div className="mt-8">
                                <h4 className="font-semibold text-gray-800 mb-4 text-lg">Key Challenges:</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 mt-1 mr-3">
                                            <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                                                <i className="fas fa-times text-red-500 text-xs"></i>
                                            </div>
                                        </div>
                                        <span className="text-gray-600">Time-consuming manual processes for attendance, grading, and reporting</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 mt-1 mr-3">
                                            <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                                                <i className="fas fa-times text-red-500 text-xs"></i>
                                            </div>
                                        </div>
                                        <span className="text-gray-600">Disconnected systems leading to data inconsistencies</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 mt-1 mr-3">
                                            <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                                                <i className="fas fa-times text-red-500 text-xs"></i>
                                            </div>
                                        </div>
                                        <span className="text-gray-600">Ineffective communication between staff, teachers, and parents</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 mt-1 mr-3">
                                            <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                                                <i className="fas fa-times text-red-500 text-xs"></i>
                                            </div>
                                        </div>
                                        <span className="text-gray-600">Limited accessibility and mobility for stakeholders</span>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div className="card solution-card p-8 lg:p-10">
                            <div className="icon-container solution-icon">
                                <i className="fas fa-lightbulb text-3xl"></i>
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <h3 className="text-3xl font-bold text-indigo-600">
                                    Our Solution
                                </h3>
                            </div>

                            <p className="text-gray-800 text-lg leading-relaxed mb-6">
                                <span className="text-indigo-600 font-semibold">EduGits</span> automates and integrates every academic and administrative function in one seamless platform.
                            </p>

                            <div className="mt-8">
                                <h4 className="font-semibold text-gray-800 mb-4 text-lg">How We Solve It:</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 mt-1 mr-3">
                                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                                <i className="fas fa-check text-green-500 text-xs"></i>
                                            </div>
                                        </div>
                                        <span className="text-gray-600"><strong className="text-indigo-600">Unified Platform:</strong> All school operations in one integrated system</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 mt-1 mr-3">
                                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                                <i className="fas fa-check text-green-500 text-xs"></i>
                                            </div>
                                        </div>
                                        <span className="text-gray-600"><strong className="text-indigo-600">Real-time Communication:</strong> Instant updates for parents, teachers, and staff</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 mt-1 mr-3">
                                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                                <i className="fas fa-check text-green-500 text-xs"></i>
                                            </div>
                                        </div>
                                        <span className="text-gray-600"><strong className="text-indigo-600">Automation:</strong> Reduce manual work by 80% with smart workflows</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 mt-1 mr-3">
                                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                                <i className="fas fa-check text-green-500 text-xs"></i>
                                            </div>
                                        </div>
                                        <span className="text-gray-600"><strong className="text-indigo-600">Mobile Access:</strong> Full functionality on any device, anywhere</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="relative z-10 mt-20 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl p-8 lg:p-12 text-center">
                        <div className="max-w-3xl mx-auto">
                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">Transform Your School Administration Today</h3>
                            <p className="text-indigo-100 text-lg mb-8">Join thousands of schools that have modernized their operations with EduGits</p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <button className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
                                    Start Free Trial
                                </button>
                                <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white/10 transition duration-300">
                                    Schedule a Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative py-20 px-4 md:px-8 overflow-hidden">
                {/* Background elements */}
                <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Comprehensive School Management Features
                            </h2>
                            <p className="text-xl text-gray-600 font-medium">
                                Everything you need to streamline school operations in one platform
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                                >
                                    {/* Icon with Gradient Background */}
                                    <div className={`bg-gradient-to-br ${feature.color} p-6 flex justify-center`}>
                                        <div className="bg-white p-4 rounded-full">
                                            {feature.icon}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                        <p className="text-gray-600">{feature.desc}</p>
                                    </div>

                                    {/* Learn More Link */}
                                    <div className="px-6 pb-6">
                                        <a
                                            href="#"
                                            className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center"
                                        >
                                            Learn more
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Demo Section */}
                        <div className="mt-24 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl overflow-hidden shadow-xl">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                                {/* Content */}
                                <div className="p-10 text-white">
                                    <h2 className="text-3xl font-bold mb-6">Experience EduGits in Action</h2>
                                    <p className="text-lg mb-8 max-w-xl">
                                        See how our comprehensive ERP solution transforms school administration with a unified platform
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button className="bg-white text-indigo-700 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300">
                                            Watch Demo
                                        </button>
                                        <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition duration-300">
                                            Schedule a Live Demo
                                        </button>
                                    </div>
                                </div>

                                {/* Image Placeholder */}
                                <div className="hidden lg:block relative h-full">
                                    <div className="absolute inset-0 bg-gray-200 border-2 border-dashed rounded-xl flex items-center justify-center">
                                        <div className="text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                            <p className="mt-2 text-gray-500">Platform Screenshot</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                                <div className="text-3xl font-bold text-indigo-600">500+</div>
                                <div className="text-gray-600">Schools</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                                <div className="text-3xl font-bold text-green-600">20K+</div>
                                <div className="text-gray-600">Teachers</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                                <div className="text-3xl font-bold text-purple-600">200K+</div>
                                <div className="text-gray-600">Students</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                                <div className="text-3xl font-bold text-yellow-600">99%</div>
                                <div className="text-gray-600">Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Benefits */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-indigo-50 to-white overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://tailwindui.com/img/beams-pricing.png')] bg-[length:700px] bg-top bg-no-repeat opacity-10"></div>
                <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-[40rem] h-[40rem] bg-indigo-300 rounded-full blur-[160px] opacity-20"></div>

                <div className="relative max-w-7xl mx-auto z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose EduGits ERP?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Experience the future of school management with our cutting-edge ERP solution
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-200 group"
                            >
                                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br text-white ${benefit.color} flex items-center justify-center`}>
                                    {benefit.icon}
                                </div>

                                <h3 className="text-xl font-bold text-center text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors">
                                    {benefit.title}
                                </h3>

                                <p className="text-gray-600 text-center text-base">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">

                    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-7xl mx-auto">
                            {/* Section Header */}
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    Simple, Transparent Pricing
                                </h2>
                                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                    Affordable plans designed for schools of all sizes
                                </p>
                            </div>

                            {/* Pricing Cards */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                                {schoolPlans.map((plan, index) => (
                                    <div
                                        key={index}
                                        className={`relative rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${plan.featured
                                            ? "border-2 border-indigo-600 bg-gradient-to-b from-white to-indigo-50 ring-4 ring-indigo-100"
                                            : "border border-gray-200 bg-white"
                                            }`}
                                    >
                                        {plan.featured && (
                                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold px-6 py-2 rounded-full">
                                                Recommended for Larger Schools
                                            </div>
                                        )}

                                        <div className="text-center mb-8">
                                            <h3 className={`text-2xl font-bold mb-4 ${plan.featured ? "text-indigo-700" : "text-gray-900"}`}>
                                                {plan.title}
                                            </h3>
                                            <p className="text-gray-600 mb-6">{plan.desc}</p>

                                            <div className={`text-4xl font-extrabold mb-4 ${plan.featured ? "text-indigo-600" : "text-gray-900"}`}>
                                                {plan.price} <span className='text-sm text-gray-600 font-bold'>per month</span>
                                            </div>

                                            <div className="h-px bg-gray-200 my-6"></div>
                                        </div>

                                        <div className="mb-10">
                                            <h4 className="font-semibold text-gray-800 mb-4">Plan Includes:</h4>
                                            <ul className="space-y-4">
                                                {plan.details.map((item, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <div className="flex-shrink-0 mt-1 mr-3">
                                                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                                                <svg className="h-3 w-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <span className="text-gray-700">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${plan.featured
                                            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700"
                                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                            }`}>
                                            {plan.featured ? "Get Started" : "Learn More"}
                                        </button> */}
                                    </div>
                                ))}
                            </div>

                            {/* FAQ Section */}
                            <div className="mt-16 max-w-4xl mx-auto">
                                <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Pricing FAQs</h3>

                                <div className="space-y-4">
                                    <div className="bg-white p-6 rounded-xl shadow-sm">
                                        <h4 className="font-semibold text-gray-900 mb-2">Is the installation fee charged every month?</h4>
                                        <p className="text-gray-600">
                                            No, the ₹2000 installation fee is a one-time charge applied only when you first set up EduGits.
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-xl shadow-sm">
                                        <h4 className="font-semibold text-gray-900 mb-2">Can I switch between plans?</h4>
                                        <p className="text-gray-600">
                                            Yes, you can switch between monthly and yearly plans at any time. We&apos;ll prorate any differences.
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-xl shadow-sm">
                                        <h4 className="font-semibold text-gray-900 mb-2">What if my student count changes?</h4>
                                        <p className="text-gray-600">
                                            You can update your student count monthly. We&apos;ll adjust your bill accordingly for the next billing cycle.
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-xl shadow-sm">
                                        <h4 className="font-semibold text-gray-900 mb-2">Do you offer discounts for government schools?</h4>
                                        <p className="text-gray-600">
                                            Yes, we offer special pricing for government schools and educational NGOs. Contact us for details.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enterprise Contact */}
                    <div className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-10 max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a custom solution?</h3>
                                <p className="text-gray-600 mb-6">
                                    For schools with more than 2000 students or special requirements,
                                    we offer custom enterprise solutions with personalized features.
                                </p>
                                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-8 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-colors duration-300">
                                    Contact Sales
                                </button>
                            </div>
                            <div className="flex-1 flex justify-center">
                                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <PricingCalculator />
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900 to-purple-900 relative overflow-hidden">
                {/* Background Elements */}
                {/* <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
                    <div className="absolute -bottom-32 left-20 w-72 h-72 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
                </div> */}

                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 bg-indigo-800/30 backdrop-blur-sm border border-indigo-500/20 rounded-full px-6 py-2 mb-6">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            <span className="text-indigo-200 text-lg font-medium">
                                FREQUENTLY ASKED QUESTIONS
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Need More Information?
                        </h2>
                        <p className="text-xl text-indigo-200 max-w-2xl mx-auto">
                            Find answers to the most common questions about EduGits
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-4">
                        {faqs.map((item, idx) => (
                            <div
                                key={idx}
                                className={`bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden transition-all duration-300 hover:border-indigo-400/50 ${activeIndex === idx ? 'border-indigo-500/50' : ''}`}
                            >
                                <button
                                    className="w-full text-left font-semibold text-lg text-white flex justify-between items-center p-6"
                                    onClick={() => toggleAccordion(idx)}
                                >
                                    <span>{item.question}</span>
                                    <div className="flex-shrink-0 ml-4">
                                        <div className="w-10 h-10 bg-indigo-600/30 rounded-xl flex items-center justify-center border border-white/20">
                                            {activeIndex === idx ?
                                                <FiChevronUp className="text-xl text-white" /> :
                                                <FiChevronDown className="text-xl text-white" />
                                            }
                                        </div>
                                    </div>
                                </button>

                                {activeIndex === idx && (
                                    <div className="px-6 pb-6">
                                        <div className="border-l-2 border-indigo-400 pl-4">
                                            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl p-5 border border-indigo-500/20">
                                                <p className="text-gray-200">{item.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal Component */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
                            Access Your School Portal
                        </h2>
                        <div className="flex flex-col gap-5">
                            <button
                                className="flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-md"
                            >
                                <div className="bg-white/20 p-2 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <span onClick={handleParentLogin} className="font-medium">Login as Parent</span>
                            </button>
                            <button
                                className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md"
                            >
                                <div className="bg-white/20 p-2 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                                    </svg>
                                </div>
                                <span onClick={handleAdminLogin} className="font-medium">Login as Admin</span>
                            </button>
                            <button
                                className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-teal-600 text-white py-4 rounded-xl hover:from-green-700 hover:to-teal-700 transition-all duration-300 shadow-md"
                            >
                                <div className="bg-white/20 p-2 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <span onClick={handleAdminLogin} className="font-medium">Login as Teacher</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Contact Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-indigo-200 opacity-20 rounded-full blur-[180px] z-0"></div>
                <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-200 opacity-20 rounded-full blur-[180px] z-0"></div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Get in Touch With Us
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We&apos;re here to help with all your questions. Reach out any time!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Information */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-5">
                                    <div className="bg-indigo-100 p-3 rounded-lg">
                                        <FiMail className="h-6 w-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-gray-900 mb-1">Email Us</h4>
                                        <a href="mailto:support@thunderschool.com" className="text-indigo-600 hover:underline">
                                            info@thundergits.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="bg-green-100 p-3 rounded-lg">
                                        <FiPhone className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-gray-900 mb-1">Call Us</h4>
                                        <a href="tel:+919876543210" className="text-gray-700">
                                            +91-7765979725
                                        </a>
                                        <p className="text-gray-500 text-sm mt-1">Monday-Friday, 9AM-6PM IST</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="bg-purple-100 p-3 rounded-lg">
                                        <FiCalendar className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-gray-900 mb-1">Schedule a Demo</h4>
                                        <p className="text-gray-600">
                                            Book a personalized demo to see EduGits in action
                                        </p>
                                        <button
                                            onClick={() => setShowModal(true)}
                                            className="mt-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
                                        >
                                            Book Demo
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 pt-8 border-t border-gray-200">
                                <h4 className="text-lg font-medium text-gray-900 mb-4">Our Office</h4>
                                <p className="text-gray-600 mb-2">
                                    THUNDERGITS CONSULTANCY SERVICES Pvt. Ltd.
                                </p>
                                <p className="text-gray-600">
                                    Omaxe world Street, Sector 85, Faridabad
                                </p>
                                <div className="mt-4 bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 overflow-hidden">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.284375927293!2d77.3533519!3d28.38662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdcea586cc867%3A0x16c90326b7de7136!2sOMAXE%20WORLD%20STREET%2C%20Faridabad%2C%20Haryana%20121002!5e0!3m2!1sen!2sin!4v1689659542880!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="w-full h-full border-0"
                                    ></iframe>
                                </div>

                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                            placeholder="john@school.edu"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="school" className="block text-gray-700 mb-2">School Name</label>
                                    <input
                                        type="text"
                                        id="school"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                        placeholder="ABC International School"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="students" className="block text-gray-700 mb-2">Number of Students</label>
                                    <select
                                        id="students"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    >
                                        <option value="">Select student count</option>
                                        <option value="0-100">0-100 students</option>
                                        <option value="101-500">101-500 students</option>
                                        <option value="501-1000">501-1000 students</option>
                                        <option value="1000+">1000+ students</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                        placeholder="Tell us about your requirements..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-md"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
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
