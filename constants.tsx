
import { Project, Service, FloorPlan } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'pratibha-enclave',
    title: 'Pratibha Enclave',
    category: 'Residential',
    description: 'A RERA Approved premium residential landmark in Tupudana. Engineered for luxury, built for sustainability with ACC blocks and high-end technical specifications.',
    location: 'Tupudana Chowk, Post Office Gali, Ranchi',
    image: '/pratibha.jpg',
    status: 'Completed',
    amenities: ['2 Premium Lifts', 'RERA Approved', 'ACC Block Construction', 'Vitrified Flooring', 'Modular Electricals']
  },
  {
    id: 'emerald-vistas',
    title: 'Emerald Vistas',
    category: 'Residential',
    description: 'Upcoming ultra-luxury eco-residences designed with vertical forests and smart energy systems.',
    location: 'Skyline District',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    status: 'Upcoming',
    amenities: []
  },
  {
    id: 'nexus-park',
    title: 'Nexus Business Park',
    category: 'Commercial',
    description: 'Next-generation commercial hub featuring Grade-A office spaces and integrated retail experiences.',
    location: 'Tech Corridor',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    status: 'Upcoming',
    amenities: []
  }
];

export const FLOOR_PLANS: FloorPlan[] = [
  { flatNo: 'B', unit: '2BHK+2T', sbua: '1115.00' },
  { flatNo: 'C', unit: '3BHK+2T', sbua: '1400.00' },
  { flatNo: 'D', unit: '3BHK+3T', sbua: '1705.00' },
  { flatNo: 'A', unit: '3BHK+3T', sbua: '1700.00' }
];

export const PRATIBHA_DETAILS = {
  structure: "RCC Columns / Beams / Slabs designed as per relevant safety code and NBC for multi-storey building.",
  tmt: "Jindal/Rungta premium steel reinforcement.",
  walls: "8\" external RCC/Brick walls and 4\" internal partition walls using eco-friendly ACC Blocks with chemicals.",
  flooring: "High-grade vitrified tiles in all rooms (Kajaria/Euro/Somany/Simpolo). Marble/Granite in common areas and staircases.",
  kitchen: "Granite platform with 2' glazed tiles. Hot/Cold water provision, outlet for water purifier.",
  bathroom: "Glazed tiles up to 7ft. Concealed CPVC pipes. Jaquar/ESS/Marc/Kohler fittings.",
  electrical: "Anchor/Havell/L&T modular switches and wires. TV/Cable points in Drawing and Master Bed rooms.",
  lifts: "2 High-speed lifts (1 Goods lift, 1 Passenger lift).",
  pumps: "4\" Deep boring with KSB/Kirloskar pumps.",
  proximity: [
    { name: "Tupudana Chowk", value: "500 MT" },
    { name: "Bridgeford School", value: "300 MT" },
    { name: "Smart City", value: "4 KM" },
    { name: "Airport", value: "10 KM" },
    { name: "Ranchi Railway Stn", value: "12 KM" },
    { name: "High Court", value: "7 KM" }
  ]
};

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Sustainability First',
    description: 'Using ACC Blocks and thermal insulation to reduce energy consumption by up to 30%.',
    icon: 'fa-leaf'
  },
  {
    id: 's2',
    title: 'Engineering Excellence',
    description: 'Structural designs following NBC and safety codes with premium Jindal steel.',
    icon: 'fa-hard-hat'
  },
  {
    id: 's3',
    title: 'RERA Assured',
    description: 'Transparent dealings and legal compliance for absolute peace of mind.',
    icon: 'fa-shield-halved'
  },
  {
    id: 's4',
    title: 'Strategic Locations',
    description: 'Connectivity to schools, airports, and major city hubs is our development priority.',
    icon: 'fa-map-location-dot'
  }
];
