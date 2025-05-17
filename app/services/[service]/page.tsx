import { Metadata } from "next";
import Image from "next/image";

const services = [
  {
    slug: "offset-printing",
    name: "Offset Printing",
    description: "Premium offset printing services for doctors, pharmaceutical companies, businesses, and startups across India. High-quality prints, fast turnaround, and expert support.",
    keywords: "offset printing, premium printing, business printing, pharma printing, India",
    image: "/images/hero-illustration.png",
  },
  {
    slug: "web-development",
    name: "Website Development",
    description: "Modern, responsive website development for businesses, startups, and medical professionals. Boost your online presence with IMI ARTS.",
    keywords: "website development, web design, responsive websites, business websites, India",
    image: "/images/hero-illustration.png",
  },
  {
    slug: "visual-aid-books",
    name: "Visual Aid Books",
    description: "Custom visual aid books for pharmaceutical companies and doctors. Enhance your presentations and marketing with high-impact visuals.",
    keywords: "visual aid books, pharma marketing, doctor presentations, India",
    image: "/images/hero-illustration.png",
  },
  {
    slug: "multicolor-labels",
    name: "Multicolor Labels",
    description: "Vibrant, durable multicolor labels for products, packaging, and branding. Perfect for businesses and startups across India.",
    keywords: "multicolor labels, product labels, packaging, branding, India",
    image: "/images/hero-illustration.png",
  },
  {
    slug: "medical-carton-box",
    name: "Medical Carton Box",
    description: "High-quality medical carton boxes for pharmaceutical and healthcare products. Secure, reliable, and customizable packaging solutions.",
    keywords: "medical carton box, pharma packaging, healthcare packaging, India",
    image: "/images/hero-illustration.png",
  },
];

export async function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: { params: { service: string } }): Promise<Metadata> {
  const svc = services.find((s) => s.slug === params.service);
  return {
    title: `${svc?.name} | IMI ARTS` || "Service | IMI ARTS",
    description: svc?.description,
    keywords: svc?.keywords,
    openGraph: {
      title: `${svc?.name} | IMI ARTS` || "Service | IMI ARTS",
      description: svc?.description,
      images: [svc?.image || "/images/IMIlogo.png"],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const resolvedParams = await params;
  const svc = services.find((s) => s.slug === resolvedParams.service);
  
  if (!svc) return <div className="p-12 text-center text-2xl">Service not found.</div>;
  
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <Image src={svc.image} alt={svc.name} width={320} height={320} className="rounded-xl shadow-lg" />
        <div>
          <h1 className="text-4xl font-bold text-[#34486b] mb-4">{svc.name}</h1>
          <p className="text-lg text-gray-700 mb-6">{svc.description}</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Serving doctors, pharmaceutical companies, businesses, and startups across India</li>
            <li>Expert support and fast turnaround</li>
            <li>Custom solutions for your needs</li>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-4xl font-bold text-[#34486b] mb-4">IMI ARTS Services Across India</h2>
        <p className="text-lg text-gray-700 mb-6">
          IMI ARTS proudly serves clients across India with premium offset printing, website development, visual aid books, multicolor labels, and medical carton box services.
        </p>

        <div className="bg-[#f7fafd] rounded-xl shadow p-6 mb-6">
          <h3 className="text-2xl font-bold text-[#34486b] mb-2">Our Services Across India</h3>
          <ul className="list-disc list-inside text-gray-700">
            {services.map((service) => (
              <li key={service.slug}>{service.name}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-2xl font-bold text-[#34486b] mb-4">Our Chennai Location</h3>
          <p className="text-gray-700 mb-4">Visit our main office in Chennai:</p>
          <div className="rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/place/IMI+ARTS/@13.0446385,80.1957948,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5267f88d5423bb:0x945d0e5ae37e33a7!8m2!3d13.0446385!4d80.1957948!16s%2Fg%2F11ycbflh3d?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IMI ARTS Chennai Location"
            />
          </div>
        </div>
      </div>
    </div>
  );
}