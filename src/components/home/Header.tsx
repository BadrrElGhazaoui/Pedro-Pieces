import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="relative">
            <div className="flex flex-col md:flex-row justify-between items-center z-10">
                <h1 className="font-black text-4xl md:text-5xl lg:text-6xl md:w-3/5 leading-16 text-center md:text-left">
                    Construction Machinery &amp; Spare Parts
                </h1>
                <div className="w-3/4 md:w-2/5 flex justify-center items-center mt-6 md:mt-0">
                    <Image className="w-64 md:w-full max-w-md h-auto" src="/images/petro-pieces-logo.png" alt="Pedro Pièces SARL AU" width={900} height={108} />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center relative w-full xl:mt-0 md:mt-4">
                <Image className="w-full lg:w-3/5 rounded-xl object-cover" src="/images/services/construction-equipment-rental.jpg" alt="Excavator and dump truck working at a construction site" width={2560} height={1707} priority />
                <div className="w-full lg:w-2/5 lg:mt-0 mt-5 sm:ms-6 flex flex-col justify-between h-full">
                    <div className="lg:absolute xl:top-5 top-0">
                        <h2 className="text-text-primary font-extrabold text-3xl xl:text-5xl mb-3 text-center md:text-left">Our Team</h2>
                        <p className="text-text-secondary font-medium text-base xl:text-xl text-center md:text-left">
                            PEDRO PIÈCES is led by Said El Ghazaoui, Managing Director, whose 28 years of experience at SGTM shaped a deep understanding of construction and public works. He founded the Casablanca-based company to bring that experience to a business of his own. Together, Said and his team have delivered the projects featured in our portfolio across Morocco.
                        </p>
                        <div className="mt-5 flex justify-center md:justify-start">
                            <p className="rounded-xl border border-accent/20 bg-bg-secondary px-5 py-3 text-center md:text-left">
                                <span className="block text-2xl font-extrabold text-accent">28 years</span>
                                <span className="mt-1 block text-sm font-medium text-text-secondary">
                                    of industry experience at SGTM
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-2/5 flex flex-row font-semibold sm:text-lg text-sm capitalize text-center md:text-left lg:absolute xl:bottom-5 bottom-0">
                        <Link href="/contact" className="flex justify-center items-center w-1/2 lg:mt-0 mt-5 xl:p-3 py-2 md:mx-0 mx-2 bg-accent text-bg-primary rounded-full">Contact Us</Link>
                        <Link href="/about" className="flex justify-center items-center w-1/2 lg:mt-0 mt-5 xl:p-3 py-2 md:mx-0 mx-2 md:ms-6 border-2 border-accent text-accent rounded-full">About Us</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}