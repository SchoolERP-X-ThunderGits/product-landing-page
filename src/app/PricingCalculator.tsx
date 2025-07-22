import React, { useState, useMemo } from 'react';
import {
  RiMoneyRupeeCircleLine,
  RiToolsLine,
  RiGlobalLine,
  RiUpload2Line,
  RiIdCardLine,
  RiUserLine,
  RiCalendarLine,
  RiInformationLine,
  RiCheckboxCircleFill
} from 'react-icons/ri';

export default function PricingCalculator() {
  const [students, setStudents] = useState(100);
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');
  const [uploadData, setUploadData] = useState(false);
  const [websiteOpt, setWebsiteOpt] = useState(false);
  const [idCards, setIdCards] = useState(false);

  // const [showBreakdown, setShowBreakdown] = useState(true);

  const baseMonthly = useMemo(() => students * 2, [students]);
  const baseYearly = useMemo(() => {
    const annual = students * 2 * 12;
    return Math.round(annual * 0.85);
  }, [students]);

  const installationFee = 2000;
  const uploadFee = uploadData ? students * 10 : 0;
  const websiteFee = websiteOpt ? 5000 : 0;
  const idCardFee = idCards ? 1000 : 0;

  const core = billing === 'monthly' ? baseMonthly : baseYearly;
  const subtotal = core + installationFee + uploadFee + websiteFee + idCardFee;
  const gst = 0; //subtotal * 0.18;
  const total = subtotal + gst;

  const yearlySavings = Math.round((students * 2 * 12) - baseYearly);

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Background Elements */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-indigo-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div> */}

      <div className="relative max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            School ERP Pricing Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Customize your plan and see exactly what you&apos;ll pay
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Calculator Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <RiMoneyRupeeCircleLine className="text-2xl" />
                Configure Your Plan
              </h3>
            </div>

            <div className="p-6">
              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-3 flex items-center gap-2">
                  <RiUserLine className="text-indigo-600" />
                  Number of Students
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min={1}
                    max={2000}
                    value={students}
                    onChange={(e) => setStudents(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="bg-indigo-100 text-indigo-800 font-bold rounded-lg px-4 py-2 min-w-[80px] text-center">
                    {students}
                  </div>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>1</span>
                  <span>500</span>
                  <span>1000</span>
                  <span>1500</span>
                  <span>2000</span>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-3 flex items-center gap-2">
                  <RiCalendarLine className="text-indigo-600" />
                  Billing Cycle
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {['monthly', 'yearly'].map((option) => (
                    <button
                      key={option}
                      // eslint-disable-next-line
                      onClick={() => setBilling(option as any)}
                      className={`py-4 rounded-xl font-semibold transition-all duration-300 flex flex-col items-center justify-center
                        ${billing === option
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    >
                      <span className="text-lg">
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                      </span>
                      {option === 'yearly' && yearlySavings > 0 && (
                        <span className="text-xs mt-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                          Save ₹{yearlySavings}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-3 flex items-center gap-2">
                  <RiToolsLine className="text-indigo-600" />
                  Additional Services
                </label>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="flex items-center gap-3">
                      <RiToolsLine className="text-xl text-indigo-600" />
                      <div>
                        <p className="font-medium">Installation Fee</p>
                        <p className="text-sm text-gray-500">One-time mandatory fee</p>
                      </div>
                    </div>
                    <div className="text-indigo-600 font-bold">₹2000</div>
                  </div>

                  <div
                    className={`flex justify-between items-center p-4 rounded-xl border cursor-pointer transition-all duration-300 ${websiteOpt ? 'bg-blue-50 border-blue-300' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'}`}
                    onClick={() => setWebsiteOpt(!websiteOpt)}
                  >
                    <div className="flex items-center gap-3">
                      <RiGlobalLine className={`text-xl ${websiteOpt ? 'text-blue-600' : 'text-gray-500'}`} />
                      <div>
                        <p className="font-medium">Website Setup</p>
                        <p className="text-sm text-gray-500">Custom school website</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`font-bold ${websiteOpt ? 'text-blue-600' : 'text-gray-500'}`}>₹5000</span>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${websiteOpt ? 'bg-blue-600 border-blue-600' : 'border-gray-400'}`}>
                        {websiteOpt && <RiCheckboxCircleFill className="text-white text-lg" />}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`flex justify-between items-center p-4 rounded-xl border cursor-pointer transition-all duration-300 ${uploadData ? 'bg-green-50 border-green-300' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'}`}
                    onClick={() => setUploadData(!uploadData)}
                  >
                    <div className="flex items-center gap-3">
                      <RiUpload2Line className={`text-xl ${uploadData ? 'text-green-600' : 'text-gray-500'}`} />
                      <div>
                        <p className="font-medium">Student Data Upload</p>
                        <p className="text-sm text-gray-500">₹10 per student</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`font-bold ${uploadData ? 'text-green-600' : 'text-gray-500'}`}>₹{students * 10}</span>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${uploadData ? 'bg-green-600 border-green-600' : 'border-gray-400'}`}>
                        {uploadData && <RiCheckboxCircleFill className="text-white text-lg" />}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`flex justify-between items-center p-4 rounded-xl border cursor-pointer transition-all duration-300 ${idCards ? 'bg-purple-50 border-purple-300' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'}`}
                    onClick={() => setIdCards(!idCards)}
                  >
                    <div className="flex items-center gap-3">
                      <RiIdCardLine className={`text-xl ${idCards ? 'text-purple-600' : 'text-gray-500'}`} />
                      <div>
                        <p className="font-medium">Custom ID Cards</p>
                        <p className="text-sm text-gray-500">Design & printing</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`font-bold ${idCards ? 'text-purple-600' : 'text-gray-500'}`}>
                        ₹1000
                        {/* {idCards ? `₹${idCardType === 'premium' ? 25 : 10}/student` : 'Optional'} */}
                      </span>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${idCards ? 'bg-purple-600 border-purple-600' : 'border-gray-400'}`}>
                        {idCards && <RiCheckboxCircleFill className="text-white text-lg" />}
                      </div>
                    </div>
                  </div>

                  {/* {idCards && (
                    <div className="ml-12 pl-4 border-l-2 border-purple-200">
                      <label className="block text-gray-700 mb-2">ID Card Type</label>
                      <div className="flex gap-4">
                        <button
                          onClick={() => setIdCardType('basic')}
                          className={`px-4 py-2 rounded-lg font-medium transition-colors ${idCardType === 'basic' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                        >
                          Basic (₹10/student)
                        </button>
                        <button
                          onClick={() => setIdCardType('premium')}
                          className={`px-4 py-2 rounded-lg font-medium transition-colors ${idCardType === 'premium' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                        >
                          Premium (₹25/student)
                        </button>
                      </div>
                    </div>
                  )} */}
                </div>
              </div>
            </div>
          </div>

          {/* Summary Card */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <RiInformationLine className="text-2xl" />
                Your Pricing Summary
              </h3>
            </div>

            <div className="p-6">
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-gray-900 text-lg">Plan Details</h4>
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                    {students} Students
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Core Plan ({billing})</span>
                    <span className="font-medium">₹{core}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Installation Fee</span>
                    <span className="font-medium">₹{installationFee}</span>
                  </div>
                  {websiteOpt && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Website Setup</span>
                      <span className="font-medium">₹{websiteFee}</span>
                    </div>
                  )}
                  {uploadData && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Data Upload</span>
                      <span className="font-medium">₹{uploadFee}</span>
                    </div>
                  )}
                  {idCards && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">ID Cards</span>
                      <span className="font-medium">₹{idCardFee}</span>
                    </div>
                  )}
                  <div className="border-t border-gray-200 pt-3 mt-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">₹{subtotal}</span>
                    </div>
                    {/* <div className="flex justify-between mt-1">
                      <span className="text-gray-600">GST (18%)</span>
                      <span className="font-medium">₹{Math.round(gst)}</span>
                    </div> */}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-indigo-600">₹{Math.round(total)}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    {billing === 'monthly' ?
                      `First payment: ₹${Math.round(total)} (includes installation fee)` :
                      `Annual payment: ₹${Math.round(total)} (includes all fees)`
                    }
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-xl p-5 mb-6">
                <h4 className="font-bold text-green-800 mb-3">Savings Summary</h4>
                <ul className="space-y-2">
                  {billing === 'yearly' && (
                    <li className="flex items-center gap-2">
                      <RiCheckboxCircleFill className="text-green-500" />
                      <span>15% discount on annual billing: <span className="font-semibold">₹{yearlySavings} saved</span></span>
                    </li>
                  )}
                  <li className="flex items-center gap-2">
                    <RiCheckboxCircleFill className="text-green-500" />
                    <span>No hidden fees or setup charges beyond what&apos;s listed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <RiCheckboxCircleFill className="text-green-500" />
                    <span>Free updates and feature additions included</span>
                  </li>
                </ul>
              </div>

              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg">
                Get Started with ThunderSchool
              </button>

              <div className="mt-6 text-center">
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <RiUserLine className="text-blue-600" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <RiCalendarLine className="text-green-600" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <RiInformationLine className="text-purple-600" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Your information is secure. We don&apos;t store any data from this calculator.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 md:w-24 md:h-24 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">What Our Customers Say</h3>
              <p className="text-gray-600 italic mb-4">
                &apos;Very cost effective and simple easy to use software. Very co-operative and quick response customer support.&apos;
              </p>
              <div className="text-gray-700">
                <p className="font-semibold">Shravan sir</p>
                <p className="text-sm">Principal, SSPS jhakar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}