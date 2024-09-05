import { FileText, Lock, Database } from "lucide-react";
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import backgroundImage from '../img/BG1.png';

export default function About() {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col pt-10"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <main className="flex-grow container mx-auto px-4 md:py-16">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
          About eTin powered by TaxshieldBD
        </h2>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-700 leading-relaxed">
            TaxshieldBD is revolutionizing tax services in Bangladesh through our innovative use of eTin powered by eKyc and blockchain technology. We're committed to making tax compliance secure, efficient, and transparent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#007dfe] hover:bg-[#1d4ed8] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl text-white">
            <div className="flex items-center mb-4">
              <FileText className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-semibold">eTin Services</h3>
            </div>
            <p>
              Our eTin services simplify the process of obtaining and managing your Taxpayer Identification Number, ensuring compliance with Bangladesh's tax regulations.
            </p>
          </div>
          <div className="bg-[#007dfe] hover:bg-[#1d4ed8] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl text-white">
            <div className="flex items-center mb-4">
              <Lock className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-semibold">eKyc Verification</h3>
            </div>
            <p>
              We utilize advanced eKyc (Electronic Know Your Customer) technology to verify identities securely and efficiently, reducing fraud and enhancing user trust.
            </p>
          </div>
        </div>

        <div className="bg-[#007dfe] hover:bg-[#1d4ed8] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl text-white">
          <div className="flex items-center mb-6">
            <Database className="w-10 h-10 mr-4" />
            <h3 className="text-3xl font-semibold">Blockchain Technology</h3>
          </div>
          <p className="mb-4">
            At the core of our services is blockchain technology, ensuring:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Immutable record-keeping of all tax-related transactions</li>
            <li>Enhanced security and protection against data tampering</li>
            <li>Transparent and traceable processes for both users and authorities</li>
            <li>Streamlined auditing and compliance verification</li>
          </ul>
        </div>
      </main>

      {/* "Our Mission" Section with a different background color
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-8 text-gray-800">Our Mission</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            To provide cutting-edge, secure, and user-friendly tax services that empower individuals and businesses in Bangladesh to manage their tax obligations with confidence and ease.
          </p>
        </div>
      </div> */}

      {/* Footer */}
      <footer className="bg-gray-800 text-white pt-12 pb-4">
                <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    
                    {/* Column 1: About */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">About Us</h3>
                        <p className="text-gray-300">
                            TaxshieldBD is a blockchain-powered platform providing secure, transparent, and efficient services for tax compliance and security.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Services</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Additional Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">More Links</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Services</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Information */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-center">
                                <FiPhone className="w-5 h-5 mr-2" />
                                +880 1234-567890
                            </li>
                            <li className="flex items-center">
                                <FiMail className="w-5 h-5 mr-2" />
                                info@taxshieldbd.com
                            </li>
                            <li className="flex items-center">
                                <FiMapPin className="w-5 h-5 mr-2" />
                                123 Finance Street, Dhaka 1000, Bangladesh
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-8 w-[80%] mx-auto"></div>

                <div className="mt-4 text-center text-gray-400">
                    <p>&copy; 2023 TaxshieldBD. All rights reserved.</p>
                </div>
            </footer>
    </div>
  );
}
