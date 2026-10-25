import Image from "next/image";
  import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <>
            <div className="border-t border-text-primary/50"></div>
            <footer className="relative mx-auto container mb-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                    <div className="text-center">
                        <Image width={900} height={108} className="mx-auto mb-4 w-56 md:w-64 h-auto" src="/images/petro-pieces-logo.png" alt="Pedro Pièces SARL AU" />
                        <ul className="flex justify-center gap-4">
                            {[faInstagram, faWhatsapp, faTelegram, faGithub].map((icon, index) => (
                                <a key={index} href="#" aria-label="Social link" className="flex justify-center items-center size-12 border border-text-primary rounded-full">
                                    <FontAwesomeIcon icon={icon} className="text-4xl" />
                                </a>
                            ))}
                        </ul>
                    </div>

                    <div className="text-center lg:text-left md:mt-0 mt-4">
                        <h1 className="font-bold text-lg sm:text-xl">Useful Links</h1>
                        <ul className="mt-3 space-y-2 sm:space-y-3">
                            <li><Link href="/about">About Us</Link></li>
                            <li><a href="#how-we-work">How we work</a></li>
                            <li><a href="#terms">Terms & Conditions</a></li>
                            <li><a href="#faq">FAQ</a></li>
                        </ul>
                    </div>

                    <div className="text-center lg:text-left lg:mt-0 mt-4">
                        <h1 className="font-bold text-lg sm:text-xl">Content</h1>
                        <ul className="mt-3 space-y-2 sm:space-y-3">
                            <li><Link href="/">Home</Link></li>
                            <li><a href="#menu">Browse Menu</a></li>
                        </ul>
                    </div>

                    <div className="text-center lg:text-left lg:mt-0 mt-4">
                        <h1 className="font-bold text-lg sm:text-xl">Address</h1>
                        <ul className="mt-3 space-y-2 sm:space-y-3">
                            <li>123 Construction Avenue</li>
                            <li><a href="mailto:testemail@gmail.com">testemail@gmail.com</a></li>
                            <li><a href="tel:888-123-42278">888-123-42278</a></li>
                        </ul>
                    </div>
                </div>

                <span className="text-center block lg:mt-6 mt-10 text-sm sm:text-base">
                    Copyright © 2025 All rights reserved
                </span>
            </footer>
        </>
    );
}