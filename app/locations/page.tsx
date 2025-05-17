import { Metadata } from "next";

const locationNames: Record<string, string> = {
  chennai: "Chennai",
  mumbai: "Mumbai",
  delhi: "Delhi",
  bangalore: "Bangalore",
  hyderabad: "Hyderabad",
  kolkata: "Kolkata",
  pune: "Pune",
  ahmedabad: "Ahmedabad",
};

export const metadata: Metadata = {
  title: `IMI ARTS | Locations in India`,
  description: `Find IMI ARTS locations and premium offset printing, website development, and packaging services across India. Elevate your brand with IMI ARTS.`, keywords: `IMI ARTS locations, offset printing India, web development India, printing services, packaging services`,
  openGraph: {
    title: `IMI ARTS | Locations in India`,
    description: `Find IMI ARTS locations and premium offset printing, website development, and packaging services across India. Elevate your brand with IMI ARTS.`, images: ["/images/IMIlogo.png"],
  },
};

export default function LocationsPage() {
  const locations = Object.values(locationNames);

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-[#34486b] mb-4">IMI ARTS Locations in India</h1>
      <p className="text-lg text-gray-700 mb-6">
        IMI ARTS proudly serves clients across India with premium offset printing, website development, visual aid books, multicolor labels, and medical carton box services. Here are some of the major cities we serve:
      </p>
      <ul className="list-disc list-inside text-gray-600 mb-6">
        {locations.map(loc => <li key={loc}>{loc}</li>)}
      </ul>

      <div className="bg-[#f7fafd] rounded-xl shadow p-6 mb-6">
        <h2 className="text-2xl font-bold text-[#34486b] mb-2">Our Services Across India</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Offset Printing</li>
          <li>Website Development</li>
          <li>Visual Aid Books</li>
          <li>Multicolor Labels</li>
          <li>Medical Carton Box</li>
        </ul>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold text-[#34486b] mb-4">Our Chennai Location</h2>
         <p className="text-gray-700 mb-4">Visit our main office in Chennai:</p>
        <div className="rounded-xl overflow-hidden">
           <iframe
             src="https://www.google.com/maps?q=13,57%20street,10%20sector,Ayyavupuram,K.%20K.%20Nagar,Chennai,Tamil%20Nadu%20600078&output=embed"
             width="100%"
             height="400"
             style={{ border: 0 }}
             allowFullScreen={false}
             loading="lazy"
             referrerPolicy="no-referrer-when-downgrade"
             title="IMI ARTS Chennai Location"
           ></iframe>
         </div>
      </div>
    </div>
  );
} 