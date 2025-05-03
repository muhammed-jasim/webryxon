import Link from 'next/link';
import { Code, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Logo and about */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Code size={32} strokeWidth={2.5} className="text-brand" />
              <span className="font-bold text-xl">Webryxon</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              We craft digital experiences that elevate brands and drive growth.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="rounded-full hover:text-brand">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:text-brand">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:text-brand">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:text-brand">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-brand transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Web Development',
                'Mobile App Development',
                'Web Design',
                'Graphic Design',
                'Digital Marketing'
              ].map((service) => (
                <li key={service}>
                  <Link 
                    href="/services" 
                    className="text-muted-foreground hover:text-brand transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3">
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-brand shrink-0 mt-0.5" />
                <a 
                  href="mailto:hello@webryxon.com" 
                  className="text-muted-foreground hover:text-brand transition-colors"
                >
                  hello@webryxon.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-brand shrink-0 mt-0.5" />
                <a 
                  href="tel:+1234567890" 
                  className="text-muted-foreground hover:text-brand transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-brand shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  123 Design Street, San Francisco, CA 94107
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Webryxon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}