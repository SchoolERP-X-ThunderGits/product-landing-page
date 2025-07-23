import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RefundPolicy() {
    return (
        <div className="common font-sans text-gray-800 bg-white">
            <Navbar></Navbar>

            <div className="text-gray-900 px-4 sm:px-10 py-16 max-w-4xl mx-auto">
                <br />
                <br />
                <br /><br />
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-10">Refund Policy</h1>

                <p className="mb-6">Last Updated: 23 July 2025</p>

                <p className="mb-6">
                    At <strong>Thundergits Consultancy Services Pvt Ltd</strong>, we are committed to providing our clients with a seamless and valuable experience through <strong>Edugits</strong> – our School Management ERP system. This Refund Policy outlines the terms under which refunds may be issued for subscription purchases and related services.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">1. Subscription Charges</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Edugits follows a prepaid subscription model.</li>
                    <li>Pricing is ₹2 per student per month.</li>
                    <li>Discounted annual pricing is available as per selected plans.</li>
                    <li>Optional add-ons (such as data upload and website setup) are charged separately.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">2. Refund Eligibility</h2>
                <p className="mb-6">
                    Refunds are only provided in the following scenarios:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Duplicate payments due to technical errors.</li>
                    <li>Wrong amount charged due to system fault or billing bug (verified by our team).</li>
                    <li>Failure to activate the service within 7 working days of payment.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">3. Non-Refundable Cases</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Once service is activated and accessed, no refunds will be processed.</li>
                    <li>Refunds are not applicable on pro-data usage for active subscriptions.</li>
                    <li>Payments for optional one-time services like data upload or website development are non-refundable after initiation.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">4. Refund Request Process</h2>
                <p className="mb-6">
                    To request a refund, please email us at <a href="mailto:info@thundergits.com" className="text-blue-400 hover:underline">info@thundergits.com</a> with:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>School Name and Registered Email</li>
                    <li>Transaction ID and Date of Payment</li>
                    <li>Reason for Refund</li>
                </ul>
                <p className="mb-6">
                    Our billing team will verify the request and process eligible refunds within <strong>7-10 working days</strong> to the original payment method.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">5. Disputes & Contact</h2>
                <p className="mb-6">
                    If you have any concerns regarding billing or payments, we encourage you to first contact our support team for resolution. You may reach us at:<br />
                    📧 <a href="mailto:info@thundergits.com" className="text-blue-400 hover:underline">info@thundergits.com</a><br />
                    📞 +91-7765979725
                </p>
            </div>

            <Footer></Footer>
        </div>
    );
}
