import Image from "next/image";

// Static project cards: no slider, no before/after effect, no particles (lighter and smoother)
const projectList = [
    { image: "/images/projects/project-1.jpg", title: "Modern Office Complex" },
    { image: "/images/projects/project-2.jpg", title: "Residential Tower" },
    { image: "/images/projects/project-3.jpg", title: "Industrial Warehouse" },
    { image: "/images/projects/project-1.jpg", title: "Shopping Center" },
    { image: "/images/projects/project-2.jpg", title: "Hospital Extension" },
    { image: "/images/projects/project-3.jpg", title: "Educational Campus" },
];

export default function OurProject() {
    return (
        <section className="w-full text-center">
            <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-3">Our Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
                {projectList.map((item, index) => (
                    <div key={index} className="relative h-56 md:h-64 rounded-xl overflow-hidden bg-bg-secondary">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                            className="object-cover absolute inset-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-text-primary/90 to-transparent"></div>
                        <div className="absolute inset-x-0 bottom-0 p-4 text-left text-bg-primary text-xl sm:text-2xl font-medium">
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
