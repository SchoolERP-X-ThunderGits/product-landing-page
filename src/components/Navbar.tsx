'use client';

import React, { useState } from 'react';
import { IoMenuSharp } from 'react-icons/io5';


const navLinks = [
    { label: 'Features', id: 'features' },
    { label: 'Demo', id: 'demo' },
    // { label: 'Pricing', id: 'pricing' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    return (
        <header className="common sticky top-0 z-50 bg-white/60 backdrop-blur-lg border-b border-white/30 shadow-md transition-all duration-300">
            <nav className="common max-w-7xl mx-auto flex justify-between items-center px-4 py-3 sm:px-6 lg:px-8 relative">
                <h1 className="common text-2xl font-extrabold text-indigo-600 tracking-tight">
                    edugits
                </h1>

                <ul className="common hidden md:flex space-x-6 font-medium text-sm">
                    {navLinks.map((link) => (
                        <li key={link.id} className="common relative group">
                            <a
                                href={`/#${link.id}`}
                                className={`px-2 py-1 transition-colors duration-300 ${activeSection === link.id
                                        ? 'text-indigo-600 font-semibold'
                                        : 'text-gray-800'
                                    } hover:text-indigo-600`}
                            >
                                {link.label}
                            </a>
                            <span
                                className={`absolute left-1/2 -bottom-1.5 w-0 h-[2px] bg-indigo-500 rounded-full group-hover:w-3/5 transition-all duration-300 transform -translate-x-1/2 ${activeSection === link.id ? 'w-3/5' : ''
                                    }`}
                            ></span>
                        </li>
                    ))}
                </ul>

                <div className="common hidden md:flex items-center space-x-4">
                    <a
                        href="#demo"
                        className="common bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:shadow-xl transition duration-300 hover:scale-105"
                    >
                        Book a Demo
                    </a>
                    <button
                        onClick={() => setShowModal(true)}
                        className="common bg-white text-indigo-600 border border-indigo-600 px-5 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition hover:scale-105"
                    >
                        Login
                    </button>
                </div>

                <button
                    className="common md:hidden text-indigo-600 focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <IoMenuSharp className="common h-6 w-6" />
                </button>

               {mobileMenuOpen && (
    <div className="common absolute top-full left-0 right-0 bg-white z-40 w-full shadow-lg md:hidden border-t border-gray-200">
        <ul className="common flex flex-col items-start py-6 space-y-4 text-left px-6">
            {navLinks.map((link) => (
                <li key={link.id}>
                    <a
                        href={`#${link.id}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="common block text-gray-800 hover:text-indigo-600 font-medium text-lg transition"
                    >
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
        <div className="common flex flex-col items-start space-y-3 px-6 pb-6">
            <a
                href="#demo"
                onClick={() => setMobileMenuOpen(false)}
                className="common bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-semibold shadow-md"
            >
                🎓 Book a Demo
            </a>
            <button
                onClick={() => {
                    setMobileMenuOpen(false);
                    setShowModal(true);
                }}
                className="common bg-white text-indigo-600 border border-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition"
            >
                🔐 Login
            </button>
        </div>
    </div>
)}

            </nav>
        </header>
    );
}
