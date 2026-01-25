import React from 'react';
import { ClipboardList, UserPlus, CreditCard, FileText } from 'lucide-react';
import { FEES } from '../constants';

const Admissions: React.FC = () => {
  const steps = [
    { title: 'Registration', desc: 'Fill the inquiry form online or visit school campus.', icon: <ClipboardList /> },
    { title: 'Interaction', desc: 'Student interaction/test followed by parent meet.', icon: <UserPlus /> },
    { title: 'Documents', desc: 'Submission of birth certificate, TC & photographs.', icon: <FileText /> },
    { title: 'Payment', desc: 'Secure the seat by paying the admission fee.', icon: <CreditCard /> },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Join Our Community</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mt-2 mb-4">Admissions 2024-25</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our admission process is transparent and straightforward. Start your journey with us today.
          </p>
        </div>

        {/* Admission Steps Grid - 2x2 on Mobile */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-20">
          {steps.map((step, idx) => (
            <div key={idx} className="relative bg-white p-4 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-blue-600 text-white rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                {React.cloneElement(step.icon as React.ReactElement<{ className?: string }>, { className: "w-5 h-5 sm:w-7 sm:h-7" })}
              </div>
              <h4 className="text-sm sm:text-lg font-bold text-blue-900 mb-2">0{idx + 1}. {step.title}</h4>
              <p className="text-gray-500 text-[10px] sm:text-sm leading-tight sm:leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Fee Structure Table */}
          <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-blue-50">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
               Fee Structure
            </h3>
            <div className="overflow-hidden rounded-xl border border-gray-100">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-900">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Class</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">School Fee</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {FEES.map((fee, idx) => (
                    <tr key={idx} className="hover:bg-blue-50/50 transition-colors">
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{fee.classRange}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-bold text-blue-700">{fee.monthlyFee}<span className="text-[10px] font-normal text-gray-400 ml-1">/ Month</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[10px] text-gray-400 italic">* Note: Admission fees and other charges are applicable at the time of joining. Please contact the office for a detailed breakdown.</p>
          </div>

          {/* Quick Inquiry Form */}
          <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-blue-50 w-full">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-6 text-center">Inquiry Form</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Student Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 transition-all outline-none text-sm" placeholder="Enter full name" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Applying for Class</label>
                <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 transition-all outline-none text-sm">
                  <option>Select Class</option>
                  <option>Nursery - KG</option>
                  <option>Class I - V</option>
                  <option>Class VI - VIII</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Mobile Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 transition-all outline-none text-sm" placeholder="+91 XXXXX XXXXX" />
              </div>
              <button className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 rounded-xl shadow-lg transition-all mt-4 text-sm sm:text-base">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;