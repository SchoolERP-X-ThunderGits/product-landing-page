'use client';

import React, { useState, useEffect } from 'react';
import { IoMenuSharp, IoCloseSharp } from 'react-icons/io5';
import { FiMail, FiPhone, FiUser, FiMessageSquare, FiSend } from 'react-icons/fi';
import { createPortal } from 'react-dom';

const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Features', id: 'features' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Demo', id: 'demo' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [form, setForm] = useState({ name: '', mobile: '', email: '', message: '' });
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // eslint-disable-next-line
    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const sendInquiry = async () => {
        setSubmitting(true);
        const htmlContent = `
<div style="max-width:600px;margin:0 auto;font-family:'Segoe UI',Roboto,sans-serif;color:#333;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;">
  <div style="background:#4f46e5;padding:20px;text-align:center;">
    <h2 style="color:#fff;margin:0;font-size:20px;">📩 New Inquiry Received – Edugits</h2>
  </div>
  <div style="padding:24px;background-color:#ffffff;">
    <p style="font-size:16px;margin-bottom:20px;">Hello Admin,</p>
    <p style="font-size:15px;margin-bottom:16px;">You’ve received a new inquiry from the Edugits platform. Here are the details:</p>

    <table style="width:100%;font-size:15px;border-collapse:collapse;">
      <tr>
        <td style="padding:8px 0;"><strong>Name:</strong></td>
        <td style="padding:8px 0;">${form.name}</td>
      </tr>
      <tr>
        <td style="padding:8px 0;"><strong>Mobile:</strong></td>
        <td style="padding:8px 0;">${form.mobile}</td>
      </tr>
      <tr>
        <td style="padding:8px 0;"><strong>Email:</strong></td>
        <td style="padding:8px 0;">${form.email}</td>
      </tr>
      <tr>
        <td style="padding:8px 0;vertical-align:top;"><strong>Message:</strong></td>
        <td style="padding:8px 0;">${form.message}</td>
      </tr>
    </table>

    <p style="margin-top:24px;font-size:14px;color:#6b7280;"><strong>Submitted on:</strong> ${new Date().toLocaleString()}</p>

    <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;">

    <div style="text-align:center;">
      <p style="font-size:14px;color:#4f46e5;font-weight:600;margin-bottom:6px;">🔔 Edugits - Modern ERP for Modern Schools</p>
      <p style="font-size:13px;color:#6b7280;margin-bottom:4px;">Simplify student, staff, and academic management with Edugits.</p>
      <a href="https://pasuseva.in" target="_blank" style="display:inline-block;margin-top:10px;padding:10px 20px;background:#4f46e5;color:#fff;border-radius:6px;text-decoration:none;font-size:14px;">
        Visit Our Website
      </a>
    </div>
  </div>
  <div style="background:#f9fafb;padding:14px;text-align:center;font-size:12px;color:#9ca3af;">
    &copy; ${new Date().getFullYear()} Edugits by ThunderGits Consultancy Services Pvt Ltd
  </div>
</div>
`;


        const emailData = {
            to: form.email,
            subject: 'New Inquiry from Edugits',
            html: htmlContent,
            siteKey: 'thundergits',
            toOwner: true
        };

        try {
            const res = await fetch('https://tg-email-service.thundergits.com/api/email/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(emailData)
            });
            const data = await res.json();
            if (data.success) {
                setSubmitted(true);
                setForm({ name: '', mobile: '', email: '', message: '' });
            } else {
                alert('Failed to send. Try again.');
            }
        } catch (err) {
            console.error(err);
            alert('Server error. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
                }`}>
                <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 relative">
                    <div className="flex items-center">
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-xl">EG</span>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Edu<span className="text-indigo-600">Gits</span>
                        </h1>
                    </div>

                    <ul className="hidden md:flex space-x-8 font-medium">
                        {navLinks.map(link => (
                            <li key={link.id} className="relative group">
                                <a
                                    href={`/#${link.id}`}
                                    className="px-2 py-1 transition-colors duration-300 hover:text-indigo-600 text-gray-700 group-hover:text-indigo-600"
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden md:flex items-center space-x-4">
                        <button
                            onClick={() => setShowModal(true)}
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:shadow-xl transition duration-300 hover:scale-105 flex items-center gap-2"
                        >
                            <FiSend size={16} />
                            Book a Demo
                        </button>
                        <button
                            className="bg-white text-indigo-600 border border-indigo-600 px-5 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition hover:scale-105 flex items-center gap-2"
                        >
                            <FiUser size={16} />
                            Login
                        </button>
                    </div>

                    <button
                        className="md:hidden text-gray-700 focus:outline-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <IoCloseSharp className="h-8 w-8 text-gray-700" />
                        ) : (
                            <IoMenuSharp className="h-8 w-8 text-gray-700" />
                        )}
                    </button>

                    {mobileMenuOpen && (
                        <div className="absolute top-full left-0 right-0 bg-white z-40 w-full shadow-xl md:hidden border-t border-gray-200">
                            <ul className="flex flex-col items-start py-6 space-y-4 text-left px-6">
                                {navLinks.map(link => (
                                    <li key={link.id} className="w-full">
                                        <a
                                            href={`#${link.id}`}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block text-gray-800 hover:text-indigo-600 font-medium text-lg transition w-full py-2 border-b border-gray-100"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-col items-start space-y-3 px-6 pb-6">
                                <button
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setShowModal(true);
                                    }}
                                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md flex items-center justify-center gap-2"
                                >
                                    <FiSend size={18} />
                                    Book a Demo
                                </button>
                                <button
                                    className="w-full bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition flex items-center justify-center gap-2"
                                >
                                    <FiUser size={18} />
                                    Login
                                </button>
                            </div>
                        </div>
                    )}
                </nav>
            </header>

            {/* Modal */}
            {showModal && createPortal(
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
                    <div className="relative w-full max-w-2xl bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://tailwindui.com/img/beams-pricing.png')] bg-[length:700px] bg-top bg-no-repeat opacity-5"></div>
                        <div className="relative z-10">
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl font-bold focus:outline-none bg-white rounded-full p-1 shadow-md"
                                aria-label="Close Inquiry Form"
                            >
                                <IoCloseSharp className="h-6 w-6" />
                            </button>

                            <div className="grid grid-cols-1 md:grid-cols-2">
                                {/* Left Side - Info */}
                                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-8 text-white">
                                    <div className="mb-6">
                                        <h2 className="text-2xl font-bold text-white mb-2">Get a Personalized Demo</h2>
                                        <p className="text-indigo-100">See how ThunderSchool can transform your school administration</p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-white/20 p-3 rounded-full flex-shrink-0">
                                                <FiPhone className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-white text-lg mb-1">Call Us</h3>
                                                <p className="text-indigo-100">+91-7765979725</p>
                                                <p className="text-indigo-200 text-sm">Mon-Fri, 9AM-6PM IST</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="bg-white/20 p-3 rounded-full flex-shrink-0">
                                                <FiMail className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-white text-lg mb-1">Email Us</h3>
                                                <p className="text-indigo-100">info@thunderschool.com</p>
                                                <p className="text-indigo-200 text-sm">Response within 24 hours</p>
                                            </div>
                                        </div>

                                        <div className="mt-8 pt-6 border-t border-indigo-400/30">
                                            <h4 className="font-bold text-white text-lg mb-3">Why Choose ThunderSchool?</h4>
                                            <ul className="space-y-2">
                                                <li className="flex items-center gap-2">
                                                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                                                        <div className="w-2 h-2 rounded-full bg-white"></div>
                                                    </div>
                                                    <span>Most affordable school ERP in India</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                                                        <div className="w-2 h-2 rounded-full bg-white"></div>
                                                    </div>
                                                    <span>Web, Mobile & Desktop applications</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                                                        <div className="w-2 h-2 rounded-full bg-white"></div>
                                                    </div>
                                                    <span>Made for Indian schools</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side - Form */}
                                <div className="p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Schedule a Demo</h2>
                                    <p className="text-gray-600 mb-6">Fill out the form and we&apos;ll contact you shortly</p>

                                    <div className="space-y-5">
                                        <div className="relative">
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                            <div className="relative">
                                                <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                <input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    placeholder="Your full name"
                                                    className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                />
                                            </div>
                                        </div>

                                        <div className="relative">
                                            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
                                            <div className="relative">
                                                <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                <input
                                                    id="mobile"
                                                    name="mobile"
                                                    type="text"
                                                    value={form.mobile}
                                                    onChange={handleChange}
                                                    placeholder="e.g. 9876543210"
                                                    className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                />
                                            </div>
                                        </div>

                                        <div className="relative">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                            <div className="relative">
                                                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    placeholder="you@example.com"
                                                    className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                />
                                            </div>
                                        </div>

                                        <div className="relative">
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                            <div className="relative">
                                                <FiMessageSquare className="absolute left-3 top-4 text-gray-400" />
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    value={form.message}
                                                    onChange={handleChange}
                                                    placeholder="Briefly describe your school and requirements..."
                                                    className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                />
                                            </div>
                                        </div>

                                        <button
                                            onClick={sendInquiry}
                                            disabled={submitting}
                                            className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${submitting
                                                ? 'bg-gray-400 text-white'
                                                : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                                                }`}
                                        >
                                            {submitting ? (
                                                <>
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <FiSend size={18} />
                                                    Submit Inquiry
                                                </>
                                            )}
                                        </button>

                                        {submitted && (
                                            <div className="bg-green-50 border border-green-200 p-4 rounded-lg text-green-700 text-center">
                                                <div className="font-bold flex items-center justify-center gap-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                    Inquiry sent successfully!
                                                </div>
                                                <p className="mt-1 text-sm">We&apos;ll get back to you within 24 hours.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}