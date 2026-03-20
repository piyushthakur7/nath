export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  specs: { label: string; value: string }[];
  applications: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "china-clay",
    name: "China Clay",
    description: "High-purity China clay (Kaolin) known for its exceptional whiteness and fine particle size, ideal for paper, ceramics, and rubber industries.",
    image: "/china_clay_mineral_1773999664528.png",
    category: "Clay",
    specs: [
      { label: "Whiteness", value: "90-92%" },
      { label: "Brightness", value: "85-88%" },
      { label: "Mesh Size", value: "300-500" },
      { label: "Alumina content", value: "35-38%" }
    ],
    applications: ["Paper Industry", "Ceramic Tiles", "Rubber & Plastics", "Paints & Coatings"]
  },
  {
    id: "un-41",
    name: "UN-41",
    description: "Specialized industrial mineral UN-41, refined for high-performance applications in ceramic manufacturing and specialized industrial processes.",
    image: "/industrial_mineral_un41_1773999719239.png",
    category: "Minerals",
    specs: [
      { label: "Grade", value: "UN-41 Premium" },
      { label: "Purity", value: "99.2%" },
      { label: "Physical state", value: "Fine Powder" },
      { label: "Moisture", value: "< 0.5%" }
    ],
    applications: ["Ceramic Glazes", "Fluxing Agent", "Laboratory Standard", "Advanced Materials"]
  },
  {
    id: "un-55",
    name: "UN-55",
    description: "Premium grade UN-55 mineral, offering superior thermal stability and excellent binding properties for high-end industrial usage.",
    image: "/industrial_mineral_un55_1773999737808.png",
    category: "Minerals",
    specs: [
      { label: "Grade", value: "UN-55 Industrial" },
      { label: "SiO2 Content", value: "98.8%" },
      { label: "Surface Area", value: "High" },
      { label: "Loss on Ignition", value: "Minimal" }
    ],
    applications: ["Heat Resistant Tiles", "Casting Molds", "Chemical Catalysts", "Abrasives"]
  },
  {
    id: "kaolin-clay",
    name: "Kaolin Clay",
    description: "Pure Kaolin clay with balanced alumina and silica content, providing excellent plastcity and firing characteristics for ceramic art and industry.",
    image: "/kaolin_clay_mineral_1773999828715.png",
    category: "Clay",
    specs: [
      { label: "Alumina (Al2O3)", value: "36-39%" },
      { label: "Silica (SiO2)", value: "45-48%" },
      { label: "Particle Size", value: "Fine" },
      { label: "Plasticity", value: "High" }
    ],
    applications: ["Pottery & Artware", "Tableware", "Sanitaryware", "Refractories"]
  },
  {
    id: "ball-clay",
    name: "Ball Clay",
    description: "Extremely plastic ball clay with high bonding strength and good firing properties, essential for large ceramic bodies and sanitaryware.",
    image: "/ball_clay_mineral_1773999682050.png",
    category: "Clay",
    specs: [
      { label: "Plasticity Index", value: "Excellent" },
      { label: "Dry Strength", value: "High" },
      { label: "Firing Color", value: "Light Grey/Cream" },
      { label: "Organic Content", value: "Low" }
    ],
    applications: ["Sanitaryware", "Wall & Floor Tiles", "Electrical Porcelain", "Refractories"]
  },
  {
    id: "sb-1-clay",
    name: "SB-1 Clay",
    description: "Optimized SB-1 grade clay formulated for specific industrial bonding and coating needs, featuring high consistency and low impurities.",
    image: "/sb1_clay_mineral_1773999756254.png",
    category: "Clay",
    specs: [
      { label: "Grade", value: "SB-1 Specialized" },
      { label: "Melting Point", value: "1680°C" },
      { label: "Iron (Fe2O3)", value: "< 0.5%" },
      { label: "Binding Power", value: "Superior" }
    ],
    applications: ["Foundry Core Binder", "Adhesives", "Specialized Coatings", "Industrial Fillers"]
  },
  {
    id: "white-clay",
    name: "White Clay",
    description: "Super-white processed clay for demanding applications in the paper and cosmetic industries where color purity is paramount.",
    image: "/white_clay_mineral_1773999702245.png",
    category: "Clay",
    specs: [
      { label: "Whiteness Index", value: "94+" },
      { label: "Oil Absorption", value: "40g/100g" },
      { label: "Particle Dispersion", value: "Excellent" },
      { label: "pH", value: "Neutral" }
    ],
    applications: ["Cosmetics", "Pharmaceutical Excipients", "White Paper Coating", "Paints"]
  },
  {
    id: "feldspar",
    name: "Feldspar",
    description: "Premium grade Feldspar for the ceramic and glass industries, ensuring superior fluxing properties and brilliant finish.",
    image: "/feldspar_mineral_1773999853304.png",
    category: "Minerals",
    specs: [
      { label: "K2O + Na2O", value: "> 12%" },
      { label: "Alumina (Al2O3)", value: "18%" },
      { label: "Mesh Size", value: "100-200" },
      { label: "Firing Color", value: "Pure White" }
    ],
    applications: ["Sanitaryware", "Tiles", "Glass Enamels", "Abrasives"]
  },
  {
    id: "quartz",
    name: "Quartz",
    description: "High-purity Quartz available in various mesh sizes for high-tech industries including glass, solar, and semiconductors.",
    image: "/quartz_mineral_1773999871193.png",
    category: "Minerals",
    specs: [
      { label: "Silica (SiO2)", value: "99.8%" },
      { label: "Iron (Fe2O3)", value: "< 0.01%" },
      { label: "Hardness", value: "7 Mohs" },
      { label: "Melting Point", value: "1713°C" }
    ],
    applications: ["Glassware", "Solar Panels", "Foundry", "Semiconductors"]
  }
];


