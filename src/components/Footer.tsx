
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <span className="text-lg font-bold">SD</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Smile Dental</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Providing exceptional dental care with a gentle touch. Your smile is our priority.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-blue-500 hover:text-blue-400 cursor-pointer" />
              <Twitter className="h-6 w-6 text-blue-400 hover:text-blue-300 cursor-pointer" />
              <Instagram className="h-6 w-6 text-pink-500 hover:text-pink-400 cursor-pointer" />
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>info@smiledental.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <span>123 Dental Street<br />Medical District<br />City, State 12345</span>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>9:00 AM - 3:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
              <div className="mt-4 p-3 bg-red-600 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span className="font-medium">Emergency Care Available 24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/services" className="block hover:text-blue-400 transition-colors">Our Services</a>
              <a href="/about" className="block hover:text-blue-400 transition-colors">About Us</a>
              <a href="/appointments" className="block hover:text-blue-400 transition-colors">Book Appointment</a>
              <a href="/contact" className="block hover:text-blue-400 transition-colors">Contact Us</a>
              <a href="#" className="block hover:text-blue-400 transition-colors">Patient Portal</a>
              <a href="#" className="block hover:text-blue-400 transition-colors">Insurance</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Smile Dental. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
