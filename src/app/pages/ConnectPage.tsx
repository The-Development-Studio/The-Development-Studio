import { Mail, Phone, MapPin } from 'lucide-react';
import { SEO, SEOData } from '../components/SEO';

export function ConnectPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <SEO {...SEOData.connect} />
      <div className="max-w-[1200px] mx-auto px-8 py-24">
        <h1 className="text-5xl font-bold text-black mb-6">Let's Connect</h1>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          Ready to start your next project? Get in touch with us and let's create something amazing together.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-black mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6600] transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6600] transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6600] transition-colors"
                  placeholder="Your Company Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6600] transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#FF6600] text-white px-6 py-4 rounded-lg font-medium hover:bg-[#FF7722] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FF6600]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#FF6600]" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Email</h3>
                  <p className="text-gray-600">hello@devstudioco.com</p>
                  <p className="text-gray-600">info@devstudioco.com</p>
                  <p className="text-gray-600">support@devstudioco.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FF6600]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#FF6600]" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Phone</h3>
                  <p className="text-gray-600">+91 84380 28227</p>
                  <p className="text-gray-600">+91 84895 51887</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FF6600]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#FF6600]" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Office Locations</h3>
                  <p className="text-gray-600">Chennai, India</p>
                  <p className="text-gray-600">Bengaluru, India</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-black rounded-xl text-white">
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}