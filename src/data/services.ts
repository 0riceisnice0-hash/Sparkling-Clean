// Services data - edit here to update all service listings across the site

export interface Service {
  title: string;
  slug: string;
  shortDescription: string;
  icon: string;
  featured: boolean;
}

export const services: Service[] = [
  {
    title: 'Oven Cleaning',
    slug: 'oven-cleaning',
    shortDescription: 'Deep clean for single and double ovens. We remove all racks, trays and glass for a thorough, professional clean.',
    icon: 'oven',
    featured: true,
  },
  {
    title: 'Range Cooker Cleaning',
    slug: 'range-cooker-cleaning',
    shortDescription: 'Specialist cleaning for range cookers of all sizes, from 1-door to 4-door models including Rangemaster, Stoves and more.',
    icon: 'range',
    featured: true,
  },
  {
    title: 'AGA Cleaning',
    slug: 'aga-cleaning',
    shortDescription: 'Expert AGA and Rayburn cleaning. We understand these classic cookers and give them the care they deserve.',
    icon: 'aga',
    featured: true,
  },
  {
    title: 'Hob Cleaning',
    slug: 'hob-cleaning',
    shortDescription: 'Professional hob cleaning for gas, electric and induction hobs. Removes burnt-on grease and food residue.',
    icon: 'hob',
    featured: true,
  },
  {
    title: 'Extractor Hood Cleaning',
    slug: 'extractor-hood-cleaning',
    shortDescription: 'Deep clean for extractor hoods and filters. Improves efficiency and removes built-up grease.',
    icon: 'extractor',
    featured: true,
  },
  {
    title: 'Microwave Cleaning',
    slug: 'microwave-cleaning',
    shortDescription: 'Thorough cleaning for standard microwaves and combination ovens. Fresh and hygienic results.',
    icon: 'microwave',
    featured: false,
  },
  {
    title: 'BBQ Cleaning',
    slug: 'bbq-cleaning',
    shortDescription: 'Get your barbecue ready for summer. Deep clean for all BBQ sizes, removing grease and carbon build-up.',
    icon: 'bbq',
    featured: true,
  },
  {
    title: 'Oven Repairs',
    slug: 'oven-repairs',
    shortDescription: 'Minor oven repairs including bulb and element replacements. Quick fixes while we clean.',
    icon: 'repairs',
    featured: false,
  },
];

export const featuredServices = services.filter(s => s.featured);
