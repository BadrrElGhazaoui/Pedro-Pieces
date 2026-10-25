import { FocusCards } from "@/components/ui/focus-cards";
import { services } from "@/lib/services";

export default function Services() {
  return (
    <section className="text-center md:text-left">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
        Parts, machinery &amp; support
      </p>
      <h2 className="mt-2 text-3xl font-extrabold text-text-primary md:text-4xl lg:text-5xl">
        Services Built Around Your Equipment
      </h2>
      <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-text-secondary md:mx-0 md:text-base lg:text-lg">
        From the right replacement part to equipment repair, rental and
        international trade, PEDRO PIÈCES helps keep construction work moving.
      </p>
      <FocusCards cards={services} />
    </section>
  );
}