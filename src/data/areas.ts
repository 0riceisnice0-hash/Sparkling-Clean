// Areas data - edit here to update all area listings across the site

export interface Area {
  name: string;
  slug: string;
  description: string;
  nearby: string[];
}

export const areas: Area[] = [
  {
    name: 'Christchurch',
    slug: 'christchurch',
    description: 'Our home base in Christchurch means fast response times and local knowledge. We serve the entire Christchurch area including the town centre, Purewell, Somerford, and Burton.',
    nearby: ['Highcliffe', 'Mudeford', 'Bournemouth'],
  },
  {
    name: 'Bournemouth',
    slug: 'bournemouth',
    description: 'Bournemouth is one of our most popular areas. We regularly clean ovens across the town, from the seafront to the suburbs.',
    nearby: ['Boscombe', 'Westbourne', 'Southbourne'],
  },
  {
    name: 'Poole',
    slug: 'poole',
    description: 'We provide professional oven cleaning throughout Poole, including Parkstone, Canford Cliffs, and the harbour area.',
    nearby: ['Parkstone', 'Bournemouth', 'Wimborne'],
  },
  {
    name: 'Lymington',
    slug: 'lymington',
    description: 'Serving Lymington and the New Forest area with professional oven cleaning. Beautiful area, beautiful ovens.',
    nearby: ['New Milton', 'Christchurch'],
  },
  {
    name: 'New Milton',
    slug: 'new-milton',
    description: 'New Milton and Barton on Sea are well within our coverage area. Quick response times for all oven cleaning services.',
    nearby: ['Lymington', 'Highcliffe', 'Christchurch'],
  },
  {
    name: 'Ringwood',
    slug: 'ringwood',
    description: 'Ringwood and the surrounding villages receive regular service from our team. Forest and town properties welcome.',
    nearby: ['Ferndown', 'Wimborne', 'Christchurch'],
  },
  {
    name: 'Ferndown',
    slug: 'ferndown',
    description: 'Ferndown is perfectly positioned for our services. We clean ovens across the area, including Longham and West Moors.',
    nearby: ['Ringwood', 'Wimborne', 'Bournemouth'],
  },
  {
    name: 'Wimborne',
    slug: 'wimborne',
    description: 'Wimborne Minster and the surrounding area is well covered. From town centre properties to rural homes, we can help.',
    nearby: ['Ferndown', 'Poole', 'Ringwood'],
  },
  {
    name: 'Highcliffe',
    slug: 'highcliffe',
    description: 'Highcliffe is just minutes from our base. Fast, reliable oven cleaning for this lovely coastal community.',
    nearby: ['Christchurch', 'Mudeford', 'New Milton'],
  },
  {
    name: 'Mudeford',
    slug: 'mudeford',
    description: 'Mudeford residents enjoy quick response times and friendly local service for all oven cleaning needs.',
    nearby: ['Christchurch', 'Highcliffe', 'Bournemouth'],
  },
  {
    name: 'Southbourne',
    slug: 'southbourne',
    description: 'Southbourne, Pokesdown and Tuckton are all within easy reach. Professional oven cleaning for this popular residential area.',
    nearby: ['Bournemouth', 'Boscombe', 'Christchurch'],
  },
  {
    name: 'Boscombe',
    slug: 'boscombe',
    description: 'Boscombe and East Bournemouth get regular service. From flats to family homes, we clean all oven types.',
    nearby: ['Bournemouth', 'Southbourne', 'Christchurch'],
  },
  {
    name: 'Westbourne',
    slug: 'westbourne',
    description: 'Westbourne and Alum Chine properties receive the same professional service. Quality oven cleaning in this sought-after area.',
    nearby: ['Bournemouth', 'Poole', 'Parkstone'],
  },
  {
    name: 'Parkstone',
    slug: 'parkstone',
    description: 'Upper and Lower Parkstone are perfectly placed for our services. Professional cleaning for this popular Poole suburb.',
    nearby: ['Poole', 'Bournemouth', 'Westbourne'],
  },
];

export const primaryAreas = areas.slice(0, 6);
