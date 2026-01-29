// Pricing data - edit here to update all pricing sections across the site
// Note: Prices may vary slightly depending on condition, size, and access. We'll confirm before we start.

export interface PriceItem {
  name: string;
  price: string;
  note?: string;
}

export interface PriceCategory {
  title: string;
  icon: string;
  items: PriceItem[];
}

export const prices: PriceCategory[] = [
  {
    title: 'Ovens',
    icon: 'oven',
    items: [
      { name: 'Single Oven', price: '£55' },
      { name: 'Double Oven', price: '£65' },
    ],
  },
  {
    title: 'Range Cookers',
    icon: 'range',
    items: [
      { name: '1 Door Range', price: '£85' },
      { name: '2 Door Range', price: '£95' },
      { name: '3 Door Range', price: '£110' },
      { name: '4 Door Range', price: '£130' },
    ],
  },
  {
    title: 'AGAs',
    icon: 'aga',
    items: [
      { name: 'AGA Cleaning', price: 'From £80' },
    ],
  },
  {
    title: 'Hobs',
    icon: 'hob',
    items: [
      { name: '2 to 4 Ring Hob', price: '£20' },
      { name: '5+ Ring Hob', price: '£25' },
    ],
  },
  {
    title: 'Extractors',
    icon: 'extractor',
    items: [
      { name: 'Extractor Hood', price: '£20' },
    ],
  },
  {
    title: 'Microwaves',
    icon: 'microwave',
    items: [
      { name: 'Standard Microwave', price: '£20' },
      { name: 'Combi Oven', price: '£30' },
    ],
  },
  {
    title: 'Barbecues',
    icon: 'bbq',
    items: [
      { name: 'Small BBQ', price: '£60' },
      { name: 'Medium BBQ', price: '£70' },
      { name: 'Large BBQ', price: '£80' },
    ],
  },
  {
    title: 'Repairs',
    icon: 'repairs',
    items: [
      { name: 'Bulb Replacement', price: '£8' },
      { name: 'Element Replacement', price: '£80' },
    ],
  },
];

export const pricingNote = 'Prices may vary slightly depending on condition, size, and access. We\'ll confirm the final price before we start any work.';

// Popular prices for homepage teaser
export const popularPrices = [
  { name: 'Single Oven', price: '£55' },
  { name: 'Double Oven', price: '£65' },
  { name: 'Hob', price: 'From £20' },
  { name: 'Extractor', price: '£20' },
];
