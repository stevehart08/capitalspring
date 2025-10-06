// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-[#a06eff] text-white py-12">
      <div className="max-w-2xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Capitalspring</h3>
            <p className="text-indigo-100">
              Empowering investors with intelligent, secure, and personalized investment solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Testimonies', href: '/testimonies' },
                { label: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-indigo-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="flex items-center mb-2">
              <MdEmail className="mr-2 text-xl" />
              <span>support@capitalspring.co</span>
            </div>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="flex flex-col md:flex-row justify-between border-t mt-8 pt-8 gap-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="md:text-center">
            <p>© 2025 Capitalspring. All Rights Reserved.</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 text-xl">
            <Link to="/about" className="hover:text-indigo-900">
              <FaFacebookF />
            </Link>
            <Link to="/about" className="hover:text-indigo-900">
              <FaInstagram />
            </Link>
            <Link to="/about" className="hover:text-indigo-900">
              <FaTwitter />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
