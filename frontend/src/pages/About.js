import { Shield, FileText, Lock, Database } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-8">About eTin powered by TaxshieldBD </h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-600">
            TaxshieldBD is revolutionizing tax services in Bangladesh through our innovative use of eTin powered by eKyc and blockchain technology. We're committed to making tax compliance secure, efficient, and transparent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FileText className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-semibold">eTin Services</h3>
            </div>
            <p className="text-gray-600">Our eTin services simplify the process of obtaining and managing your Taxpayer Identification Number, ensuring compliance with Bangladesh's tax regulations.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Lock className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-semibold">eKyc Verification</h3>
            </div>
            <p className="text-gray-600">We utilize advanced eKyc (Electronic Know Your Customer) technology to verify identities securely and efficiently, reducing fraud and enhancing user trust.</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="flex items-center mb-6">
            <Database className="w-10 h-10 text-primary mr-4" />
            <h3 className="text-3xl font-semibold">Blockchain Technology</h3>
          </div>
          <p className="text-gray-600 mb-4">
            At the core of our services is blockchain technology, ensuring:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Immutable record-keeping of all tax-related transactions</li>
            <li>Enhanced security and protection against data tampering</li>
            <li>Transparent and traceable processes for both users and authorities</li>
            <li>Streamlined auditing and compliance verification</li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            To provide cutting-edge, secure, and user-friendly tax services that empower individuals and businesses in Bangladesh to manage their tax obligations with confidence and ease.
          </p>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 TaxshieldBD. All rights reserved.</p>
          <p className="mt-2">Powered by blockchain technology for your security and peace of mind.</p>
        </div>
      </footer>
    </div>
  )
}