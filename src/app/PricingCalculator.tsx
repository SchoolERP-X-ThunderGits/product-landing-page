import React, { useState, useMemo } from 'react';
import { RiMoneyRupeeCircleLine, RiToolsLine, RiGlobalLine, RiUpload2Line, RiIdCardLine } from 'react-icons/ri';

export default function PricingCalculator() {
  const [students, setStudents] = useState(100);
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');
  const [uploadData, setUploadData] = useState(false);
  const [websiteOpt, setWebsiteOpt] = useState(false);

  const baseMonthly = useMemo(() => students * 5, [students]);
  const baseYearly = useMemo(() => {
    if (students < 250) return 5000;
    const annual = students * 5 * 12;
    return Math.round(annual * 0.85);
  }, [students]);

  const installationFee = 2000;
  const uploadFee = uploadData ? students * 10 : 0;
  const websiteFee = websiteOpt ? 5000 : 0;

  const core = billing === 'monthly' ? baseMonthly : baseYearly;
  const total = core + installationFee + uploadFee + websiteFee;

  return (
    <section className="common relative py-24 bg-gray-50 dark:bg-gray-950">
      <div className="common text-center mb-16">
        <h2 className="common text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          School Pricing Calculator
        </h2>
        <p className="common mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Enter your student count and choose a billing option to see your price.
        </p>
      </div>

      <div className="common max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Number of Students
          </label>
          <input
            type="number"
            min={1}
            value={students}
            onChange={(e) => setStudents(Number(e.target.value))}
            className="mt-1 w-full p-2 border rounded-lg"
          />
        </div>

        <div className="mb-6 flex space-x-4">
          {['monthly', 'yearly'].map((option) => (
            <button
              key={option}
              onClick={() => setBilling(option as any)}
              className={`flex-1 py-2 rounded-lg font-semibold transition 
                ${billing === option
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'}`}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>

        <div className="space-y-2 mb-6 text-sm text-gray-600 dark:text-gray-400">
          <p className="flex items-center gap-2">
            <RiToolsLine className="text-lg" /> <strong>Installation Fee:</strong> ₹{installationFee} (one-time, mandatory)
          </p>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={websiteOpt}
              onChange={() => setWebsiteOpt((v) => !v)}
              className="mr-2"
            />
            <RiGlobalLine className="text-lg" /> Website Setup: ₹5000 (optional)
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={uploadData}
              onChange={() => setUploadData((v) => !v)}
              className="mr-2"
            />
            <RiUpload2Line className="text-lg" /> Student Data Upload: ₹10/student (optional)
          </label>
          <p className="flex items-center gap-2">
            <RiIdCardLine className="text-lg" /> Custom ID Cards: Extra (based on design requirements)
          </p>
        </div>

        <div className="mb-6 bg-blue-100 dark:bg-blue-900 p-4 rounded-xl text-gray-800 dark:text-gray-200">
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <RiMoneyRupeeCircleLine className="text-xl" /> Pricing Breakdown
          </h3>
          <ul className="text-sm space-y-1">
            <li className="flex items-center gap-2">
              <RiMoneyRupeeCircleLine /> Core Plan: ₹{core} ({billing === 'monthly' ? 'per month' : 'per year'})
            </li>
            <li className="flex items-center gap-2">
              <RiToolsLine /> Installation Fee: ₹{installationFee}
            </li>
            {websiteOpt && (
              <li className="flex items-center gap-2">
                <RiGlobalLine /> Website Setup: ₹{websiteFee}
              </li>
            )}
            {uploadData && (
              <li className="flex items-center gap-2">
                <RiUpload2Line /> Data Upload: ₹{uploadFee}
              </li>
            )}
          </ul>
        </div>

        <div className="mb-6">
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            Total Payable Now: ₹{total}
          </p>
          {billing === 'monthly' && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Includes ₹{core} for the first month + ₹{installationFee} installation fee
              {uploadFee > 0 && ` + ₹${uploadFee} upload`} {websiteFee > 0 && ` + ₹${websiteFee} website`}.
            </p>
          )}
          {billing === 'yearly' && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Includes full year billing of ₹{core} + one-time fees.
            </p>
          )}
        </div>

        <button className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </section>
  );
}
