import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Brand Website Redesign",
      description: "A modern, responsive redesign for a leading healthcare brand, focusing on accessibility and user experience.",
      image: "/images/project1.jpg",
    },
    {
      title: "E-Commerce Platform",
      description: "A scalable e-commerce solution with custom features for a fast-growing startup.",
      image: "/images/project2.jpg",
    },
    {
      title: "Print Marketing Suite",
      description: "A full suite of print marketing materials for a national pharmaceutical company.",
      image: "/images/project3.jpg",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-[#f7fafd] py-24 px-4 lg:px-16" style={{ fontFamily: 'Nunito, Arial, sans-serif' }}>
      <h1 className="text-5xl font-extrabold text-[#37517E] mb-12 text-center">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
            <div className="w-full h-56 relative mb-6 rounded-xl overflow-hidden">
              <Image src={project.image} alt={project.title} fill className="object-cover" />
            </div>
            <h2 className="text-2xl font-bold text-[#37517E] mb-2 text-center">{project.title}</h2>
            <p className="text-gray-600 text-center mb-4">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 