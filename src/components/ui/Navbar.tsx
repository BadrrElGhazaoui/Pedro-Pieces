"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import Button from "@/components/ui/Button";

const navbarList: { title: string; link: string; mobileOnly?: boolean }[] = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Service", link: "/service" },
    { title: "Project", link: "/project" },
    { title: "Contact", link: "/contact", mobileOnly: true },
];

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav id="navbar" className="relative z-30 mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex items-center lg:w-1/4">
                <Image className="h-7 w-auto sm:h-8 lg:h-9" src="/images/petro-pieces-logo.png" alt="Pedro Pièces SARL AU" width={900} height={108} />
            </div>

            <button
                type="button"
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
                aria-controls="primary-navigation"
                onClick={() => setMenuOpen(!menuOpen)}
                className="z-40 block p-2 text-xl text-text-primary lg:hidden"
            >
                <FontAwesomeIcon icon={faHamburger} aria-hidden="true" />
            </button>

            <ul
                id="primary-navigation"
                className={`absolute left-0 right-0 top-full z-30 flex flex-col border-t border-gray-100 bg-bg-primary px-4 py-2 shadow-lg transition duration-200 lg:static lg:flex-row lg:items-center lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none ${menuOpen ? "visible translate-y-0 opacity-100" : "invisible pointer-events-none -translate-y-2 opacity-0"} lg:visible lg:translate-y-0 lg:opacity-100 lg:pointer-events-auto`}
            >
                {navbarList.map((item) => (
                    <li key={item.link} className={`relative font-bold text-center lg:mx-1 lg:text-left ${item.mobileOnly ? "lg:hidden" : ""}`}>
                        <Link
                            href={item.link}
                            onClick={() => setMenuOpen(false)}
                            className={`relative block cursor-pointer px-4 py-3 text-base tracking-wide transition after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:scale-0 after:rounded after:bg-accent after:transition-transform after:content-[''] hover:after:scale-100 lg:py-2 ${pathname === item.link ? "font-bold text-accent after:scale-100" : "text-text-primary"}`}
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="hidden lg:block w-1/6 text-right">
                <Button link="/contact" text="Contact" />
            </div>
        </nav>
    );
}