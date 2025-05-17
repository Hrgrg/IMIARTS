'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  console.log("Home component rendered");
  // FAQ data
  const faqs = [
    {
      question: "What is the typical turnaround time for printing projects?",
      answer: "Project timelines depend on size, complexity, and quantity. Most offset printing jobs are completed within 5-7 business days after final proof approval. Web development timelines vary based on project scope.",
    },
    {
      question: "How long does it take to develop a website?",
      answer: "A standard business website can take 2-4 weeks from planning to launch. Custom features or e-commerce may require additional time.",
    },
    {
      question: "Do you offer design services for printed products?",
      answer: "Yes! Our in-house design team can create custom layouts, branding, and visuals for all your print and digital needs.",
    },
    {
      question: "What locations do you serve?",
      answer: "We serve clients across India, with dedicated landing pages for each major city and region.",
    },
  ];
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#37517E] flex flex-col">
      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg p-2 max-w-2xl w-full flex flex-col items-center">
            <button
              className="absolute top-2 right-4 text-3xl font-bold text-gray-700 hover:text-red-500 z-10"
              onClick={() => setShowVideo(false)}
              aria-label="Close video"
            >
              ×
            </button>
            <video
              src="/videos/IMI_Atys_V1.mp4"
              controls
              autoPlay
              className="w-full max-h-[70vh] rounded"
            />
          </div>
        </div>
      )}
      <section className="w-full min-h-screen bg-[#37517E] py-32 px-4 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden" style={{ fontFamily: 'Nunito, Arial, sans-serif' }}>
        <div className="flex-1 flex flex-col items-start justify-center text-white z-10">
          <h1 className="text-6xl font-extrabold mb-8 leading-tight tracking-wide">
            Where Design Meets<br />Perfection
          </h1>
          <p className="text-2xl mb-10 max-w-2xl text-[#bfc9dd] tracking-wide">
            Elevate your brand with our premium offset printing and cutting-edge web development services.
          </p>
          <div className="flex gap-6 items-center">
            <a href="#services" className="bg-[#44b6e9] hover:bg-[#2196f3] text-white px-10 py-4 rounded-full font-bold text-xl shadow transition">Our services</a>
            <button type="button" onClick={() => setShowVideo(true)} className="flex items-center gap-2 text-white font-bold text-xl hover:underline focus:outline-none">
              <span className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-white mr-2">
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 23 14 5 25 5 3"></polygon></svg>
              </span>
              Watch Video
            </button>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center z-10 mt-12 md:mt-0">
          <Image
            src="/images/hero-illustration.png"
            alt="IMI ARTS Hero Illustration"
            width={600}
            height={400}
            className="w-[500px] md:w-[600px] animate-float-bounce"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
        <style jsx global>{`
          @keyframes float-bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-24px); }
          }
          .animate-float-bounce {
            animation: float-bounce 3.5s ease-in-out infinite;
          }
        `}</style>
      </section>
      {/* About Us Section */}
      <section id="about" className="w-full flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-16 bg-white min-h-screen">
        <div className="flex-1 flex flex-col items-start justify-center mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#37517E]">About Us</h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#37517E]">How we&apos;ve grown from a small design studio to a comprehensive print and digital agency.</h3>
          <p className="text-gray-700 mb-4 max-w-lg">IMI ARTS started in 2003 as a small design studio in Chennai, India. Over the years, we have evolved into a full-service agency, offering premium offset printing and web development services to doctors, pharmaceutical companies, general businesses, and startups. Our mission is to empower businesses across India to enhance their online presence and achieve measurable growth.</p>
          <button type="button" disabled className="flex items-center gap-2 text-[#37517E] font-bold text-xl hover:underline mt-4 focus:outline-none opacity-50 cursor-not-allowed">
            <span className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#37517E] mr-2">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 23 14 5 25 5 3"></polygon></svg>
            </span>
            Watch Video
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image src="/images/wroking.jpg" alt="Working" width={420} height={300} className="rounded-xl shadow-lg w-[350px] md:w-[420px] object-cover" />
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="w-full py-16 px-4 md:px-16 bg-[#f7fafd] min-h-screen">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#37517E] text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-2 text-[#37517E]">Offset Printing</h3>
            <ul className="text-gray-700 list-disc list-inside">
              <li>Visual Aid books</li>
              <li>Multicolor labels</li>
              <li>Medical Carton Box</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-2 text-[#37517E]">Web Development</h3>
            <ul className="text-gray-700 list-disc list-inside">
              <li>Website development</li>
              <li>SEO & Digital Marketing</li>
              <li>Custom Web Solutions</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-2 text-[#37517E]">For Businesses</h3>
            <ul className="text-gray-700 list-disc list-inside">
              <li>Doctors & Pharma</li>
              <li>Startups</li>
              <li>General Businesses</li>
            </ul>
          </div>
        </div>
        {/* Our Story with teamproject.jpg and 18+ years icon */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-xl shadow-lg p-8 mt-8 relative">
          <div className="flex-1 flex flex-col items-start justify-center mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-2 text-[#37517E]">Our Story</h3>
            <p className="text-gray-700 mb-4 max-w-lg">IMI ARTS has delivered professional design and creative print solutions for over 18 years. Our team brings together expertise in printing, marketing, and technology to help your business stand out and grow.</p>
            <span className="inline-block bg-[#1e90ff] text-white font-bold rounded-full px-4 py-2 text-lg shadow absolute right-8 bottom-8 z-20">18+ Years Experience</span>
          </div>
          <div className="flex-1 flex items-center justify-center relative">
            <Image src="/images/teamproject.jpg" alt="Team Project" width={420} height={300} className="rounded-xl shadow-lg w-[350px] md:w-[420px] object-cover" />
          </div>
        </div>
      </section>
      {/* Project Process Section */}
      <section className="w-full py-16 px-4 md:px-16 bg-[#f7fafd] min-h-screen">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#37517E] text-center">Our Project Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: 'Discovery Phase',
              desc: 'We start by understanding your needs, goals, and vision to create a tailored solution.',
              icon: '🔍',
            },
            {
              title: 'Planning Stage',
              desc: 'We develop a clear project roadmap with timelines, deliverables, and milestones.',
              icon: '🗺️',
            },
            {
              title: 'Implementation',
              desc: 'Our team brings your project to life with precision, creativity, and technical expertise.',
              icon: '⚙️',
            },
            {
              title: 'Final Delivery',
              desc: 'We ensure everything is perfect and deliver your project on time, every time.',
              icon: '🚀',
            },
          ].map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl cursor-pointer"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-[#37517E]">{step.title}</h3>
              <p className="text-gray-700">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Ready to Transform Your Brand? Section with animated SVG background */}
      <section className="w-full py-16 px-4 md:px-16 relative flex items-center justify-center overflow-hidden min-h-screen" style={{backgroundImage: 'url(/images/background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <AnimatedScrollBackground />
        <div className="bg-[#37517Ecc] rounded-xl p-10 flex flex-col items-center justify-center w-full max-w-2xl mx-auto z-10 relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center">Ready to Transform Your Brand?</h2>
          <p className="text-lg text-white mb-6 text-center">It&apos;s time to bring your vision to life with IMI ARTS. Reach out to us for a free consultation and discover how we can help your business stand out.</p>
          <a href="#contact" className="bg-white text-[#37517E] px-8 py-3 rounded-full font-semibold shadow hover:bg-blue-100 transition">Get in Touch</a>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="w-full py-16 px-4 md:px-16 bg-white min-h-screen">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#37517E] text-center">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="w-full py-16 px-4 md:px-16 bg-[#f7fafd] min-h-screen">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#37517E] text-center">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Details & Map */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold mb-2 text-[#37517E]">Address</h3>
              <p className="text-gray-700 mb-2">13, 57 street, 10 sector, Ayyavupuram, K. K. Nagar, Chennai, Tamil Nadu 600078</p>
              <h3 className="text-xl font-bold mb-2 text-[#37517E]">Call Us</h3>
              <p className="text-gray-700 mb-2">+91 9444218037</p>
              <h3 className="text-xl font-bold mb-2 text-[#37517E]">Email</h3>
              <p className="text-gray-700 mb-2">imi_arts@yahoo.com</p>
            </div>
            <div className="rounded-xl overflow-hidden shadow">
              <iframe
                src="https://www.google.com/maps?q=13,57%20street,10%20sector,Ayyavupuram,K.%20K.%20Nagar,Chennai,Tamil%20Nadu%20600078&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IMI ARTS Location"
              ></iframe>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow p-8 flex flex-col gap-4">
            <h3 className="text-xl font-bold mb-4 text-[#37517E]">Send Us a Message</h3>
            <form className="flex flex-col gap-4" onSubmit={e => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const name = (form.elements.namedItem('name') as HTMLInputElement).value;
              const email = (form.elements.namedItem('email') as HTMLInputElement).value;
              const message = (form.elements.namedItem('message') as HTMLInputElement).value;
              const phone = form.elements.namedItem('phone') ? (form.elements.namedItem('phone') as HTMLInputElement).value : '';
              const service = form.elements.namedItem('service') ? (form.elements.namedItem('service') as HTMLInputElement).value : '';
              const date = new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' });
              const submission = { date, name, email, phone, service, message, status: 'new' };
              const prev = JSON.parse(localStorage.getItem('imiarts_contact_submissions') || '[]');
              localStorage.setItem('imiarts_contact_submissions', JSON.stringify([submission, ...prev]));
              form.reset();
              alert('Message sent!');
            }}>
              <input type="text" name="name" placeholder="Your Name" required className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#37517E]" />
              <input type="email" name="email" placeholder="Email" required className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#37517E]" />
              <textarea name="message" placeholder="Message" required className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#37517E] min-h-[100px]" />
              <button type="submit" className="bg-[#37517E] text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-[#1e90ff] transition">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

// AnimatedScrollBackground component
function AnimatedScrollBackground() {
  return (
    <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <defs>
        <linearGradient id="scrollGradient" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#37517E" stopOpacity="0.3" />
          <stop offset="1" stopColor="#37517E" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <g>
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
          d="M0,160 C360,240 1080,80 1440,160 L1440,320 L0,320 Z"
          fill="url(#scrollGradient)"
        />
      </g>
    </svg>
  );
}

// FAQAccordion component
function FAQAccordion({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="divide-y divide-gray-200">
      {faqs.map((faq, idx) => (
        <div key={idx}>
          <button
            className="w-full flex items-center justify-between py-4 text-left text-lg font-medium text-[#37517E] focus:outline-none transition-colors hover:bg-gray-50"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
          >
            <span>{faq.question}</span>
            <svg
              className={`w-5 h-5 ml-2 transform transition-transform duration-300 ${openIndex === idx ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-40 py-2' : 'max-h-0 py-0'}`}
            style={{ color: '#37517E' }}
          >
            <p className="text-base">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
