'use client';

import React, { useState } from 'react';
import { IoMenuSharp } from 'react-icons/io5';
import { createPortal } from 'react-dom';

const navLinks = [
    { label: 'Features', id: 'features' },
    { label: 'Demo', id: 'demo' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [form, setForm] = useState({ name: '', mobile: '', email: '', message: '' });
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        <header className="common sticky top-0 z-50 bg-white/60 backdrop-blur-lg border-b border-white/30 shadow-md transition-all duration-300">
            <nav className="common max-w-7xl mx-auto flex justify-between items-center px-4 py-3 sm:px-6 lg:px-8 relative">
                <h1 className="common text-2xl font-extrabold text-indigo-600 tracking-tight">
                    edugits
                </h1>

                <ul className="common hidden md:flex space-x-6 font-medium text-sm">
                    {navLinks.map(link => (
                        <li key={link.id} className="common relative group">
                            <a
                                href={`/#${link.id}`}
                                className="px-2 py-1 transition-colors duration-300 hover:text-indigo-600 text-gray-800"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="common hidden md:flex items-center space-x-4">
                    <button
                        onClick={() => setShowModal(true)}

                        className="common bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:shadow-xl transition duration-300 hover:scale-105"
                    >
                        Book a Demo
                    </button>
                    <button

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
                            {navLinks.map(link => (
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

                {/* 🟩 MODAL */}
                {showModal && createPortal(
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
                        <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl p-8">
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl font-bold focus:outline-none"
                                aria-label="Close Inquiry Form"
                            >
                                &times;
                            </button>

                            <h2 className="text-2xl font-semibold text-indigo-700 mb-6 border-b pb-3">📩 Inquiry Form</h2>

                            <div className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Your full name"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
                                    <input
                                        id="mobile"
                                        name="mobile"
                                        type="text"
                                        value={form.mobile}
                                        onChange={handleChange}
                                        placeholder="e.g. 9876543210"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Briefly describe your query..."
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>

                                <button
                                    onClick={sendInquiry}
                                    disabled={submitting}
                                    className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-200 disabled:opacity-50"
                                >
                                    {submitting ? 'Sending...' : 'Submit Inquiry'}
                                </button>

                                {submitted && (
                                    <div className="text-green-600 text-sm font-medium mt-2 text-center">
                                        ✅ Inquiry sent successfully! We’ll get back to you shortly.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>,
                    document.body
                )}

            </nav>
        </header>
    );
}
