import Image from "next/image";
import Link from "next/link";
import { FocusCards } from "@/components/ui/focus-cards";
import { services } from "@/lib/services";

export default function ServicesPage() {
  return (
    <div className="space-y-12 pb-8 sm:space-y-16">
      <section className="relative flex min-h-[24rem] items-center justify-center overflow-hidden rounded-2xl sm:min-h-[30rem]">
        <Image
          src="/images/header-image.jpg"
          alt="Construction professional reviewing plans at a building site"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071a2d]/85 via-[#071a2d]/60 to-[#071a2d]/20" />
        <div className="relative z-10 max-w-3xl px-6 py-16 text-center text-white">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-200">
            PEDRO PIÈCES SARL AU
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            The right support for every machine
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
            BTP spare parts, machinery repairs, equipment rental, and
            import-export services for construction professionals.
          </p>
        </div>
      </section>

      <section aria-labelledby="services-heading">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
            What we do
          </p>
          <h2
            id="services-heading"
            className="mt-2 text-3xl font-extrabold text-text-primary sm:text-4xl"
          >
            Machinery expertise, made practical
          </h2>
          <p className="mt-4 leading-7 text-text-secondary">
            A dependable partner for parts and equipment serving construction
            and public-works operations.
          </p>
        </div>
        <div className="mt-4">
          <FocusCards cards={services} />
        </div>
      </section>

      <section className="rounded-2xl bg-bg-secondary px-6 py-10 text-center sm:px-10">
        <h2 className="text-2xl font-extrabold text-text-primary sm:text-3xl">
          Looking for a specific part or machine?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-text-secondary">
          Tell us what your equipment needs. Our team is ready to discuss
          spare-parts sourcing, repairs, rental and machinery trade.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex rounded-full bg-accent px-8 py-3 font-semibold text-bg-primary transition hover:bg-accent-dark"
        >
          Contact Our Team
        </Link>
      </section>
    </div>
  );
}
