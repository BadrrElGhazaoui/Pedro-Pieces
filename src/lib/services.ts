export type Service = {
  title: string;
  description: string;
  image: string;
};

export const services: Service[] = [
  {
    title: "BTP Spare Parts",
    description:
      "Reliable parts sourcing for construction machinery, including Bobcat wheel hubs, bearings and oil seals, plus Kubota injectors and injection pumps.",
    image: "/images/services/heavy-machinery-components.jpg",
  },
  {
    title: "Machinery Repair",
    description:
      "Repair and maintenance for BTP machinery, including four-pillar equipment, Manitou, REV GCV, Bobcat and Doosan machines, and loaders.",
    image: "/images/services/heavy-equipment-repair.jpg",
  },
  {
    title: "Construction Equipment Rental",
    description:
      "Practical equipment rental for construction and public-works needs, with machinery to help keep your work moving.",
    image: "/images/services/construction-equipment-rental.jpg",
  },
  {
    title: "Equipment Trade & Import–Export",
    description:
      "Purchase, sale, import and export of machinery and BTP spare parts, backed by straightforward commercial service.",
    image: "/images/services/machinery-sourcing-trade.jpg",
  },
];
