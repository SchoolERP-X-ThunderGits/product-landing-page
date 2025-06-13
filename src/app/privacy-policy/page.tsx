import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
    return (
        <div className="common font-sans text-gray-800 bg-white">
            <Navbar></Navbar>
            
            <div className="text-gray-900 px-4 sm:px-10 py-16 max-w-4xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-10">Privacy Policy</h1>

                <p className="mb-6">Last Updated: 13 June 2025</p>

                <p className="mb-6">
                    Thundergits Consultancy Services Pvt Ltd (“we”, “our”, “us”) operates <strong>Edugits</strong>, a comprehensive School Management System available through our website <a href="https://edugits.thundergits.com" className="text-blue-400 hover:underline">https://edugits.thundergits.com</a>, mobile apps, and desktop applications. This Privacy Policy outlines how we collect, use, disclose, and protect your information.
                </p>

                <p className="mb-6">
                    By using our services, you agree to the collection and use of information in accordance with this Privacy Policy.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">1. Information We Collect</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Personal Information of Students: Name, contact details, admission info, etc.</li>
                    <li>Fees Information: Complete fee history and payment status.</li>
                    <li>Photographs: Uploaded by schools or parents.</li>
                    <li>Generated Documents: ID cards, admit cards, certificates, etc.</li>
                    <li>Usage Logs: Actions like fee collections and student data entries.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">2. Children’s Privacy</h2>
                <p className="mb-6">
                    Edugits is used by students under the age of 13. We collect personal information from such users under the guidance of schools and parents. Parents or guardians may manage their child’s accounts and view academic data, exam schedules, and fees.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">3. Access Permissions</h2>
                <p className="mb-6">
                    To support features like document upload and identity verification, the Edugits mobile and desktop apps may request the following permissions:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Camera Access – for capturing student photos.</li>
                    <li>Storage Access – to upload and store documents like ID photos or admit cards.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">4. Third-Party Services</h2>
                <p className="mb-6">
                    We integrate <strong>Razorpay</strong> for secure online fee payments. While we do not share any personal information directly, please review Razorpay’s <a href="https://razorpay.com/privacy/" className="text-blue-400 hover:underline">Privacy Policy</a> for their data handling practices.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">5. Data Sharing & Access</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>We do <strong>not share</strong> any user data with third parties.</li>
                    <li>Each school can only access its own students’ data.</li>
                    <li>Data is not used for marketing or profiling purposes.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">6. Security Measures</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>SSL encryption is used across all platforms.</li>
                    <li>Sensitive credentials are securely encrypted.</li>
                    <li>User data is hosted on secure <strong>DigitalOcean</strong> infrastructure.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">7. Data Retention and Deletion</h2>
                <p className="mb-6">
                    Upon service termination or school account deactivation, all stored data is securely deleted within <strong>15 days</strong>.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">8. Cookies</h2>
                <p className="mb-6">
                    We do <strong>not currently use cookies</strong> in our apps or website. Any future changes will be reflected in this policy.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">9. Changes to This Privacy Policy</h2>
                <p className="mb-6">
                    We may revise this Privacy Policy from time to time. Updates will be posted on this page with a revised “Last Updated” date.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">10. Contact Us</h2>
                <p className="mb-6">
                    For any questions or concerns about this policy, reach out to us at:<br />
                    📧 <a href="mailto:info@thundergits.com" className="text-blue-400 hover:underline">info@thundergits.com</a>
                </p>
            </div>
            <Footer></Footer>
        </div>

    );
}
