import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "IMI ARTS | Locations in India",
    description: "Find IMI ARTS locations and premium offset printing, website development, and packaging services across India. Elevate your brand with IMI ARTS.",
    keywords: "IMI ARTS locations, offset printing India, web development India, printing services, packaging services",
    openGraph: {
      title: "IMI ARTS | Locations in India",
      description: "Find IMI ARTS locations and premium offset printing, website development, and packaging services across India. Elevate your brand with IMI ARTS.",
      images: ["/images/IMIlogo.png"],
    },
  };
}

export default function LocationsPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-[#34486b] mb-8">Our Locations</h1>
      
      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <h2 className="text-2xl font-bold text-[#34486b] mb-4">Chennai Office</h2>
        <p className="text-gray-700 mb-4">Visit our main office in Chennai:</p>
        <div className="rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/place/IMI+ARTS/@13.0446385,80.1957948,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5267f88d5423bb:0x945d0e5ae37e33a7!8m2!3d13.0446385!4d80.1957948!16s%2Fg%2F11ycbflh3d?entry=ttu"
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

      <div className="bg-[#f7fafd] rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold text-[#34486b] mb-4">Service Coverage</h2>
        <p className="text-gray-700 mb-4">
          IMI ARTS proudly serves clients across India with our comprehensive range of services:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Premium offset printing</li>
          <li>Website development</li>
          <li>Visual aid books</li>
          <li>Multicolor labels</li>
          <li>Medical carton boxes</li>
        </ul>
      </div>
    </div>
  );
} 