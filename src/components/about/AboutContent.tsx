import {
  IconSettings,
  IconTruckDelivery,
  IconWorld,
} from "@tabler/icons-react";

const services = [
  {
    title: "Machinery Spare Parts",
    description:
      "Components for construction equipment, including Bobcat and Kubota applications.",
    Icon: IconSettings,
  },
  {
    title: "Equipment Rental & Trading",
    description:
      "Machinery rental and the purchase and sale of equipment.",
    Icon: IconTruckDelivery,
  },
  {
    title: "Import & Export",
    description:
      "International trade in machinery and construction equipment spare parts.",
    Icon: IconWorld,
  },
];

export default function AboutContent() {
  return (
    <section
      aria-labelledby="about-us-heading"
      className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-bg-primary px-5 py-7 shadow-sm sm:px-8 sm:py-9 md:px-10"
    >
      <h2
        id="about-us-heading"
        className="text-2xl font-extrabold text-text-primary sm:text-3xl"
      >
        About Us
      </h2>
      <h3 className="mt-3 text-lg font-semibold text-accent sm:text-xl">
        Your Trusted Partner in Machinery &amp; Spare Parts
      </h3>

      <div className="mt-4 space-y-3 text-base leading-7 text-text-primary sm:text-[17px]">
        <p>
          PEDRO PIÈCES SARL AU specializes in construction machinery spare
          parts, equipment rental, and international trade. Based in Casablanca,
          we help businesses source essential components and equipment for
          their operations.
        </p>
        <p>
          We focus on professional service, dependable commercial
          relationships, and practical solutions for the construction and
          public works sector.
        </p>
      </div>

      <ul className="mt-5">
        {services.map(({ title, description, Icon }, index) => (
          <li
            key={title}
            className={`flex gap-4 py-4 ${
              index < services.length - 1 ? "border-b border-gray-200" : ""
            }`}
          >
            <Icon
              aria-hidden="true"
              className="mt-1 h-5 w-5 shrink-0 text-accent sm:h-[22px] sm:w-[22px]"
              stroke={1.8}
            />
            <div>
              <h4 className="font-semibold text-text-primary">{title}</h4>
              <p className="mt-1 text-sm leading-6 text-text-secondary sm:text-[15px]">
                {description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
