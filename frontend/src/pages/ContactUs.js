import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import backgroundImage from '../img/BG3.png'; // Import your background image

export default function ContactUs() {
    return (
        <div
            className="h-screen bg-cover bg-center flex flex-col pt-10"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <main className="flex-grow container mx-auto px-4 md:py-16">
                <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
                    Contact Us
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Contact Form */}
                    <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                            Get in Touch
                        </h3>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                    Name
                                </label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors" 
                                    required 
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                    Email
                                </label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors" 
                                    required 
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                    Message
                                </label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows={4} 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors" 
                                    required 
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Map Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                            Our Location
                        </h3>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.406205908254!2d90.42292431183627!3d23.768545287988736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7892dcf0001%3A0x853ad729be4edc71!2sEast%20West%20University!5e0!3m2!1sen!2sbd!4v1725576550925!5m2!1sen!2sbd"
                                width="100%" 
                                height="450" 
                                style={{ border: 0 }} 
                                allowFullScreen={true} 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </main>

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
