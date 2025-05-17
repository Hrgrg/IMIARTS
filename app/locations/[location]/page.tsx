import { Metadata } from "next";

const locations = [
  "chennai",
  "mumbai",
  "delhi",
  "bangalore",
  "hyderabad",
  "kolkata",
  "pune",
  "ahmedabad",
];

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

export async function generateStaticParams() {
  return locations.map((l) => ({ location: l }));
}

export async function generateMetadata({ params }: { params: { location: string } }): Promise<Metadata> {
  const city = locationNames[params.location] || params.location;
  return {
    title: `IMI ARTS | Offset Printing & Web Development in ${city}`,
    description: `Premium offset printing, website development, and packaging services for doctors, pharma, businesses, and startups in ${city}, India. Elevate your brand with IMI ARTS.`,
    keywords: `offset printing, web development, printing in ${city}, web design ${city}, pharma printing, business printing, India`,
    openGraph: {
      title: `IMI ARTS | Offset Printing & Web Development in ${city}`,
      description: `Premium offset printing, website development, and packaging services for doctors, pharma, businesses, and startups in ${city}, India. Elevate your brand with IMI ARTS.`,
      images: ["/images/IMIlogo.png"],
    },
  };
}

type Props = {
  params: { location: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function LocationPage({ params }: Props) {
  const city = locationNames[params.location] || params.location;
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-[#34486b] mb-4">Offset Printing & Web Development in {city}</h1>
      <p className="text-lg text-gray-700 mb-6">
        IMI ARTS proudly serves {city} with premium offset printing, website development, visual aid books, multicolor labels, and medical carton box services. We help doctors, pharmaceutical companies, businesses, and startups in {city} elevate their brand and achieve measurable growth.
      </p>
      <ul className="list-disc list-inside text-gray-600 mb-6">
        <li>Local expertise and fast turnaround</li>
        <li>Custom solutions for every business</li>
        <li>Trusted by clients across India</li>
      </ul>
      <div className="bg-[#f7fafd] rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold text-[#34486b] mb-2">Our Services in {city}</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Offset Printing</li>
          <li>Website Development</li>
          <li>Visual Aid Books</li>
          <li>Multicolor Labels</li>
          <li>Medical Carton Box</li>
        </ul>
      </div>
    </div>
  );
} 