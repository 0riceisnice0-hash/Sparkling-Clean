// Sample reviews - these are placeholder reviews for display purposes
// Replace with real customer testimonials when available

export interface Review {
  name: string;
  location: string;
  text: string;
  service: string;
  date: string;
}

export const reviews: Review[] = [
  {
    name: 'Sarah M.',
    location: 'Christchurch',
    text: 'Aaron did an amazing job on our double oven. It looks brand new! Very professional and tidy. Would highly recommend.',
    service: 'Double Oven Cleaning',
    date: 'Sample review',
  },
  {
    name: 'James T.',
    location: 'Bournemouth',
    text: 'Excellent service. Arrived on time, very thorough, and the oven sparkles. Great value for money too.',
    service: 'Single Oven Cleaning',
    date: 'Sample review',
  },
  {
    name: 'Linda P.',
    location: 'Poole',
    text: 'Used Sparkling Clean for our end of tenancy clean. The landlord was very impressed. Saved us a lot of stress.',
    service: 'Oven & Hob Cleaning',
    date: 'Sample review',
  },
  {
    name: 'Michael R.',
    location: 'Lymington',
    text: 'Our range cooker hadn\'t been professionally cleaned in years. Aaron transformed it. Absolutely brilliant work.',
    service: 'Range Cooker Cleaning',
    date: 'Sample review',
  },
  {
    name: 'Emma W.',
    location: 'Ringwood',
    text: 'Friendly, efficient and reasonably priced. My AGA looks fantastic. Will definitely book again.',
    service: 'AGA Cleaning',
    date: 'Sample review',
  },
  {
    name: 'David H.',
    location: 'Wimborne',
    text: 'Great communication from start to finish. The oven and extractor are spotless. Highly recommend Sparkling Clean.',
    service: 'Oven & Extractor Cleaning',
    date: 'Sample review',
  },
];

export const reviewsNote = 'Sample reviews for illustration purposes. Real customer testimonials will be added.';
