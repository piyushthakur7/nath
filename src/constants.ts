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
    name: "China Clay (Premium Kaolin)",
    description: "High-whiteness Kaolin processed via a specialized wet-process technique. Features exceptional particle fineness and chemical purity, optimized for high-end ceramics and coatings.",
    image: "/china_clay_mineral_1773999664528.png",
    category: "Clay",
    specs: [
      { label: "Alumina (Al2O3)", value: "37.19%" },
      { label: "Silica (SiO2)", value: "46.58%" },
      { label: "Iron (Fe2O3)", value: "0.28%" },
      { label: "Whiteness", value: "92-94%" },
      { label: "Loss on Ignition", value: "13.62%" },
      { label: "TiO2 Content", value: "0.98%" }
    ],
    applications: ["High-Tension Insulators", "Paper Coating", "Cosmetics", "Premium Sanitaryware"]
  },
  {
    id: "un-41",
    name: "UN-41 (MIX-82 Premium)",
    description: "Advanced industrial mineral blend with superior whiteness (68.41) and high Alumina content. Engineered for optimal firing stability and surface finish in industrial ceramics.",
    image: "/industrial_mineral_un41_1773999719239.png",
    category: "Minerals",
    specs: [
      { label: "Alumina (Al2O3)", value: "32.81%" },
      { label: "Silica (SiO2)", value: "50.27%" },
      { label: "Whiteness", value: "68.41" },
      { label: "Fired M.O.R", value: "345.7 kg/cm2" },
      { label: "Shrinkage", value: "11.53%" },
      { label: "Iron (Fe2O3)", value: "0.92%" }
    ],
    applications: ["Ceramic Tiles", "Electronic Grade Porcelain", "Enamel Frits", "Advanced Materials"]
  },
  {
    id: "un-55",
    name: "UN-55 (MIX-82 Standard)",
    description: "High-fluxing industrial grade mineral with excellent plasticity (38.8%) and a balanced chemical profile. Optimized for consistent firing results across wide temperature ranges.",
    image: "/industrial_mineral_un55_1773999737808.png",
    category: "Minerals",
    specs: [
      { label: "Alumina (Al2O3)", value: "29.07%" },
      { label: "Silica (SiO2)", value: "49.32%" },
      { label: "Water of Plasticity", value: "38.8%" },
      { label: "Fired M.O.R", value: "380.8 kg/cm2" },
      { label: "Shrinkage", value: "9.25%" },
      { label: "CaO Content", value: "4.18%" }
    ],
    applications: ["Wall Tiles", "Floor Tiles", "Kiln Furniture", "Abrasive Binders"]
  },
  {
    id: "kaolin-clay",
    name: "Kaolin Clay (Standard)",
    description: "Pure Kaolin clay with balanced alumina and silica content, providing excellent plasticity and firing characteristics for ceramic art and industry.",
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
    name: "Ball Clay (Industrial)",
    description: "Extremely plastic ball clay with high dry and fired strength. Exceptional bonding index (MOR 372.5) and high plasticity (41.2%), essential for large ceramic bodies.",
    image: "/ball_clay_mineral_1773999682050.png",
    category: "Clay",
    specs: [
      { label: "Alumina (Al2O3)", value: "31.94%" },
      { label: "Silica (SiO2)", value: "49.48%" },
      { label: "Water of Plasticity", value: "41.2%" },
      { label: "Fired M.O.R", value: "372.5 kg/cm2" },
      { label: "Iron (Fe2O3)", value: "1.2%" },
      { label: "Loss on Ignition", value: "12.01%" }
    ],
    applications: ["Sanitaryware", "Wall & Floor Tiles", "Electrical Porcelain", "Refractories"]
  },
  {
    id: "mix-82-sr",
    name: "MIX-82 Silica-Rich",
    description: "Specialized high-silica blend (63.42%) with moderate alumina. Ideal for glazes and specific ceramic formulations requiring high silica-alumina ratios.",
    image: "/sb1_clay_mineral_1773999756254.png",
    category: "Minerals",
    specs: [
      { label: "Silica (SiO2)", value: "63.42%" },
      { label: "Alumina (Al2O3)", value: "24.08%" },
      { label: "Whiteness", value: "65.78" },
      { label: "Fired M.O.R", value: "366.9 kg/cm2" },
      { label: "Na2O Content", value: "1.32%" },
      { label: "Shrinkage", value: "11.31%" }
    ],
    applications: ["Glaze Formulations", "Foundry Core Binder", "Specialized Coatings", "Industrial Fillers"]
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
    id: "mix-82-ultra",
    name: "MIX-82 Ultra White Premium",
    description: "Our highest-grade industrial blend, featuring an elite whiteness index of 77.52 and pure alumina-silica ratio. Specifically developed for premium porcelain and high-end coating applications.",
    image: "/white_clay_mineral_1773999702245.png",
    category: "Minerals",
    specs: [
      { label: "Whiteness", value: "77.52" },
      { label: "Alumina (Al2O3)", value: "34.87%" },
      { label: "Silica (SiO2)", value: "45.03%" },
      { label: "Fired M.O.R", value: "225.1 kg/cm2" },
      { label: "Loss on Ignition", value: "14.21%" },
      { label: "Iron (Fe2O3)", value: "0.76%" }
    ],
    applications: ["Premium Porcelain Tabla", "Ultra-White Glazes", "High-End Sanitaryware", "Laboratory Ceramics"]
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
