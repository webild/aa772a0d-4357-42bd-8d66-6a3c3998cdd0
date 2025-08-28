"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import ContentTextbox from '@/components/textbox/ContentTextbox';
import SimpleHero from '@/components/sections/layouts/hero/SimpleHero';
import BentoFAQ from '@/components/sections/layouts/faq/BentoFAQ';
import Bento from '@/components/bento/Bento';
import SimpleFloatingNavbar from '@/components/navigation/SimpleFloatingNavbar';
import { ArrowRight } from 'lucide-react';

const services = [
  { title: 'Service 1', description: 'Quick description about service 1' },
  { title: 'Service 2', description: 'Quick description about service 2' },
  { title: 'Service 3', description: 'Quick description about service 3' },
];

const HeroSection = () => {
  return <SimpleHero title="Welcome to Your Brand" description="We provide the best services for you." primaryButtonText="Get Started" secondaryButtonText="Learn More" />;
};

const AboutSection = () => {
  return <ContentTextbox title={<h2>About Us</h2>} description={<p>Your brand strives for excellence in every service we provide.</p>} />;
};

const ServicesSection = () => {
  return <Bento items={services.map(service => ({ title: service.title, description: service.description }))} className="grid md:grid-cols-3 gap-4" />;
};

const TermsSection = () => {
  return <ContentTextbox title={<h2>Terms & Conditions</h2>} description={<p>Here's a brief overview of our terms and policies.</p>} />;
};

const PrivacySection = () => {
  return <ContentTextbox title={<h2>Privacy Policy</h2>} description={<p>Your privacy is important to us. Here's how we protect it.</p>} />;
};

const ContactSection = () => {
  return (
    <div className="bg-gray-200 p-6 rounded">
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <form action="#" className="flex flex-col gap-4 mt-4">
        <input required className="p-2 border border-gray-300 rounded" type="text" placeholder="Name" />
        <input required className="p-2 border border-gray-300 rounded" type="email" placeholder="Email" />
        <textarea required className="p-2 border border-gray-300 rounded" placeholder="Message" rows={4}></textarea>
        <button className="bg-blue-500 text-white rounded p-2" type="submit">Send</button>
      </form>
    </div>
  );
};

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <header>
        <SimpleFloatingNavbar navItems={[{ id: 'hero', name: 'Hero' }, { id: 'about', name: 'About' }, { id: 'services', name: 'Services' }, { id: 'terms', name: 'Terms' }, { id: 'privacy', name: 'Privacy' }, { id: 'contact', name: 'Contact' }]} logoSrc="/images/logo.svg" logoWidth={100} logoHeight={50} buttonText="Get in Touch" onButtonClick={() => alert('Button clicked!')} className="p-4" />
      </header>
      <main>
        <section id="hero" className="bg-gray-100 p-6">
          <HeroSection />
        </section>
        <section id="about" className="bg-white p-6">
          <AboutSection />
        </section>
        <section id="services" className="bg-white p-6">
          <ServicesSection />
        </section>
        <section id="terms" className="bg-white p-6">
          <TermsSection />
        </section>
        <section id="privacy" className="bg-white p-6">
          <PrivacySection />
        </section>
        <section id="contact" className="bg-gray-200 p-6">
          <ContactSection />
        </section>
      </main>
    </SiteThemeProvider>
  );
}