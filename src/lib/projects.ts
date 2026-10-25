export type Project = {
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "Marrakech Menara Airport",
    category: "Aviation",
    location: "Marrakech",
    description:
      "A striking gateway to the Red City, bringing distinctive architecture to a major international airport.",
    image: "/images/projects/marrakech-menara-airport.jpeg",
  },
  {
    title: "Oujda Angad Airport",
    category: "Aviation",
    location: "Oujda",
    description:
      "A modern regional airport connecting eastern Morocco with destinations at home and abroad.",
    image: "/images/projects/oujda-angad-airport.jpeg",
  },
  {
    title: "Al Akhawayn University Executive Leadership Academy",
    category: "Education",
    location: "Ifrane",
    description:
      "A distinguished academic setting in the Middle Atlas, designed to foster learning and leadership.",
    image: "/images/projects/aui-executive-leadership-academy.jpeg",
  },
  {
    title: "Abdelmoumen Dam",
    category: "Water infrastructure",
    location: "Souss-Massa",
    description:
      "A major reservoir set within the High Atlas foothills, supporting essential water management.",
    image: "/images/projects/abdelmoumen-dam.jpeg",
  },
  {
    title: "Tanger Med Dam",
    category: "Water infrastructure",
    location: "Tangier",
    description:
      "A strategic water infrastructure landmark serving the wider Tanger Med region.",
    image: "/images/projects/tanger-med-dam.jpeg",
  },
  {
    title: "Casablanca Twin Center",
    category: "Commercial",
    location: "Casablanca",
    description:
      "An unmistakable pair of high-rises that has helped define Casablanca’s contemporary skyline.",
    image: "/images/projects/casablanca-twin-center.png",
  },
  {
    title: "Oued El Hachef Dam",
    category: "Water infrastructure",
    location: "Tangier-Tetouan-Al Hoceima",
    description:
      "A reservoir nestled in a green northern landscape, contributing to regional water resources.",
    image: "/images/projects/el-hachef-dam.jpeg",
  },
  {
    title: "Dar Khroufa Dam",
    category: "Water infrastructure",
    location: "Larache",
    description:
      "A large-scale dam and reservoir serving water needs across the Loukkos basin.",
    image: "/images/projects/dar-khroufa-dam.jpeg",
  },
  {
    title: "Idriss I Dam",
    category: "Water infrastructure",
    location: "Fez-Meknes",
    description:
      "A landmark dam on the Inaouen River, supporting water storage and regional development.",
    image: "/images/projects/idriss-i-dam.jpeg",
  },
  {
    title: "Hassan II Mosque",
    category: "Civic & cultural",
    location: "Casablanca",
    description:
      "A world-renowned architectural landmark rising above the Atlantic coast.",
    image: "/images/projects/hassan-ii-mosque.jpeg",
  },
  {
    title: "Jorf Lasfar Port",
    category: "Port & logistics",
    location: "El Jadida",
    description:
      "A major Atlantic port and industrial hub supporting Morocco’s maritime trade.",
    image: "/images/projects/jorf-lasfar-port.png",
  },
  {
    title: "Aoulouz Dam",
    category: "Water infrastructure",
    location: "Taroudant",
    description:
      "A key reservoir in the Souss basin, surrounded by the rugged terrain of southern Morocco.",
    image: "/images/projects/aoulouz-dam.jpeg",
  },
];
