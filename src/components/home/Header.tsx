import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="space-y-6 sm:space-y-8">
            <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
                <h1 className="text-center text-3xl font-black leading-tight sm:text-4xl md:w-3/5 md:text-left md:text-5xl lg:text-6xl">
                    Construction Machinery &amp; Spare Parts
                </h1>
                <div className="flex w-full items-center justify-center md:w-2/5">
                    <Image className="h-auto w-56 max-w-full sm:w-64 md:w-full md:max-w-md" src="/images/petro-pieces-logo.png" alt="Pedro Pièces SARL AU" width={900} height={108} />
                </div>
            </div>
            <div className="grid items-center gap-6 lg:grid-cols-[3fr_2fr] lg:gap-8">
                <Image className="h-56 w-full rounded-xl object-cover sm:h-72 lg:h-full lg:min-h-[25rem]" src="/images/services/construction-equipment-rental.jpg" alt="Excavator and dump truck working at a construction site" width={2560} height={1707} priority />
                <div className="flex flex-col gap-5">
                    <div>
                        <h2 className="mb-3 text-center text-3xl font-extrabold text-text-primary md:text-left xl:text-5xl">Our Team</h2>
                        <p className="text-center text-base font-medium text-text-secondary md:text-left xl:text-lg">
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
                    <div className="flex w-full gap-3 font-semibold capitalize sm:max-w-md md:text-left">
                        <Link href="/contact" className="flex flex-1 items-center justify-center rounded-full bg-accent px-3 py-3 text-center text-sm text-bg-primary sm:text-base">Contact Us</Link>
                        <Link href="/about" className="flex flex-1 items-center justify-center rounded-full border-2 border-accent px-3 py-3 text-center text-sm text-accent sm:text-base">About Us</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}