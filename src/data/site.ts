export const site = {
  name: 'SOLO 91',
  fullName: 'Solo 91 Cafe & Restaurant',
  tagline: 'Where the luxury happens.',
  phoneDisplay: '+962 79 928 0622',
  phoneHref: 'tel:+962799280622',
  whatsapp: '962799280622',
  instagram: 'https://www.instagram.com/solo91.jordan/',
  instagramHandle: '@solo91.jordan',
  facebook: 'https://www.facebook.com/p/Solo-91-Cafe-Restaurant-100094618818439/',
  address: ['Madinat Al-Sharq', 'Near the Court of First Instance', 'Zarqa, Jordan'],
  addressAr: 'مدينة الشرق، بالقرب من محكمة البداية، الزرقاء',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Solo%2091%20Cafe%20Zarqa&query_place_id=ChIJRwZISzxvGxURAWw2Yy591VQ',
  hours: 'Every day, 9:00 AM – 12:30 AM',
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Our Story', href: '#story' },
  { label: 'Gatherings', href: '#gatherings' },
  { label: 'Reserve', href: '#reserve' },
];
