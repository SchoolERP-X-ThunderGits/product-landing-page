import Link from 'next/link';
import { Mail, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-100 px-6 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo & Description */}
                <div>
                    <h2 className="text-2xl font-bold">Edugits</h2>
                    <p className="mt-2 text-sm text-gray-400">
                        A complete School Management Solution for modern educational institutions.
                    </p>
                </div>

                {/* Quick Links in Two Columns */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
                    <div className="flex flex-wrap gap-8 text-sm">
                        {/* Column 1 */}
                        <ul className="space-y-2 min-w-[120px]">
                            <li><Link href="/#features" className="hover:underline">Features</Link></li>
                            <li><Link href="/#demo" className="hover:underline">Demo</Link></li>
                            <li><Link href="/#faq" className="hover:underline">FAQ</Link></li>
                            <li><Link href="/#contact" className="hover:underline">Contact</Link></li>
                        </ul>
                        {/* Column 2 */}
                        <ul className="space-y-2 min-w-[140px]">
                            <li><Link href="/terms" className="hover:underline">Terms & Conditions</Link></li>
                            <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Contact & Social */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
                    <p className="text-sm text-gray-400 mb-2">
                        Email: <a href="mailto:info@thundergits.com" className="underline">info@thundergits.com</a>
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <a href="mailto:info@thundergits.com" aria-label="Email">
                            <Mail className="w-5 h-5 hover:text-white" />
                        </a>
                        <a href="#" aria-label="Facebook">
                            <Facebook className="w-5 h-5 hover:text-white" />
                        </a>
                        <a href="#" aria-label="Twitter">
                            <Twitter className="w-5 h-5 hover:text-white" />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <Instagram className="w-5 h-5 hover:text-white" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} Edugits. All rights reserved by ThunderGits Consultancy Services.
            </div>
        </footer>
    );
}
