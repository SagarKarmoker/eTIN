import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactUs() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <main className="flex-grow container mx-auto px-4 py-12">
                <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                                <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                                <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required></textarea>
                            </div>
                            <button type="submit" className="bg-black text-white text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <Phone className="w-6 h-6 text-primary mr-3" />
                                <span>+880 1234-567890</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="w-6 h-6 text-primary mr-3" />
                                <span>info@taxshieldbd.com</span>
                            </div>
                            <div className="flex items-center">
                                <MapPin className="w-6 h-6 text-primary mr-3" />
                                <span>123 Finance Street, Dhaka 1000, Bangladesh</span>
                            </div>
                            <div className="flex items-center">
                                <Clock className="w-6 h-6 text-primary mr-3" />
                                <span>Monday - Friday: 9:00 AM - 5:00 PM</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
                    <div className="bg-gray-300 h-64 rounded-lg">
                        {/* Placeholder for map */}
                        <div className="h-full flex items-center justify-center">
                            <span className="text-gray-600">Map integration goes here</span>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-gray-800 text-white py-8 mt-12">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2023 TaxshieldBD. All rights reserved.</p>
                    <p className="mt-2">Powered by blockchain technology for your security and peace of mind.</p>
                </div>
            </footer>
        </div>
    )
}