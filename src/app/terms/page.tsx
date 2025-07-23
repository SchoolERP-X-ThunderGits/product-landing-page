'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsPage() {
    return (
        <div className="bg-white text-gray-800">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16">
                <br />
                <br />
                <br /><br />
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-10">Terms and Conditions</h1>

                <p className="mb-6">
                    Thundergits Consultancy Services Pvt Ltd (“we”, “our”, “us”) built the <strong>Edugits – School Management System</strong> as a professional education platform. This SERVICE is provided for institutional use and is intended strictly for schools and their stakeholders.
                </p>

                <p className="mb-6">
                    By accessing or using the Edugits platform, you agree to the terms outlined in this document. If you do not agree with these terms, please do not use our services.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-4">1. Information Collection and Use</h2>
                <p className="mb-6">
                    We collect data solely to deliver educational and administrative functionalities to schools. This includes:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Student data (e.g., name, photo, academic history)</li>
                    <li>School staff inputs (e.g., fee records, attendance)</li>
                    <li>Uploaded documents (ID cards, admit cards, certificates)</li>
                </ul>
                <p className="mb-6">
                    Permissions required:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong>Camera Access</strong> – to capture student or document photos.</li>
                    <li><strong>Storage Access</strong> – to upload documents.</li>
                </ul>
                <p className="mb-6">We do <strong>not</strong> collect or track user location.</p>

                <h2 className="text-2xl font-semibold mt-10 mb-4">2. Third-Party Services</h2>
                <p className="mb-6">
                    We integrate <strong>Razorpay</strong> for fee transactions. Users are encouraged to review Razorpay’s <a href="https://razorpay.com/privacy/" className="text-blue-500 hover:underline">Privacy Policy</a>.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-4">3. Children’s Privacy</h2>
                <p className="mb-6">
                    Our services are used by children under 13 under the supervision of schools and parents. Data is collected only with institutional approval. Parents/guardians can access only their child’s data.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-4">4. Log Data</h2>
                <p className="mb-6">We do <strong>not</strong> collect any log data or crash analytics via third-party systems.</p>

                <h2 className="text-2xl font-semibold mt-10 mb-4">5. Cookies</h2>
                <p className="mb-6">
                    We currently do <strong>not use cookies</strong> in our platforms. Any future use will be reflected here.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-4">6. Security</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>SSL encryption across all platforms.</li>
                    <li>Encrypted passwords and sensitive data.</li>
                    <li>Hosting on secure DigitalOcean infrastructure.</li>
                    <li>No third-party access or sharing of personal data.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-10 mb-4">7. Data Sharing and Access</h2>
                <p className="mb-6">
                    Data access is limited to:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Schools managing their own students</li>
                    <li>Parents/guardians accessing their child’s data</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-10 mb-4">8. Termination and Data Deletion</h2>
                <p className="mb-6">
                    Upon account deactivation or service termination, all data is permanently deleted within <strong>15 days</strong>.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-4">9. Changes to These Terms</h2>
                <p className="mb-6">
                    These terms may be updated periodically. Revisions will be posted on this page and will take effect immediately.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-4">10. Contact Us</h2>
                <p className="mb-6">
                    For questions or suggestions regarding these terms, contact us at:<br />
                    📧 <a href="mailto:info@thundergits.com" className="text-blue-500 hover:underline">info@thundergits.com</a><br />
                    📞 7765979725<br />
                    📍 Bata Chowk, Faridabad, Haryana, India
                </p>
            </div>
            <Footer />
        </div>
    );
}
