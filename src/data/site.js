/** Business facts shared by the layout, homepage, and llms.txt. */

export const business = {
  name: 'Sports Massage Therapy Cymru',
  url: 'https://www.sporttherapycymru.com',
  phoneDisplay: '07735 177801',
  phoneTel: '+447735177801',
  email: 'massagetherapycymru@gmail.com',
  booking: 'https://sportsmassagetherapycymru.setmore.com/book',
  googleProfile: 'https://g.page/r/CfhXp2wjENMzEBE',
  directions:
    'https://www.google.com/maps/dir/?api=1&destination=33+Groveland+Road%2C+Birchgrove%2C+Cardiff+CF14+4QX',
  mapEmbed:
    'https://maps.google.com/maps?q=Sports+Massage+Therapy+Cymru%2C+33+Groveland+Road%2C+Birchgrove%2C+Cardiff+CF14+4QX&output=embed',
  imagePath: '/img/og-share-logo-on-white.jpg',
  address: {
    street: '33 Groveland Road',
    locality: 'Birchgrove',
    city: 'Cardiff',
    postcode: 'CF14 4QX',
    country: 'GB',
  },
  /* ONS postcode coordinate for CF14 4QX (postcodes.io, quality 1), the postcode
     of 33 Groveland Road. Checked 3 Nov 2026. Latitude 51.513043, longitude -3.201624. */
  geo: {
    latitude: 51.513043,
    longitude: -3.201624,
  },
  openingHours: ['Mo-Fr 08:30-21:30', 'Sa-Su 08:30-18:30'],
  hoursLabel: {
    weekday: 'Mon–Fri 8:30am–9:30pm',
    weekend: 'Sat–Sun 8:30am–6:30pm',
  },
  sameAs: [
    'https://www.instagram.com/sportsmassage_therapy_cymru/',
    'https://www.facebook.com/profile.php?id=100095621850067',
  ],
  instagram: 'https://www.instagram.com/sportsmassage_therapy_cymru/',
  facebook: 'https://www.facebook.com/profile.php?id=100095621850067',
  /* Live site (sporttherapycymru.com/prices) and Setmore, both read 3 Nov 2026. */
  priceRange: '£45–£95',
};

/**
 * Prices from the live prices page and Setmore on 3 Nov 2026.
 * 45 £45, 60 £55, 60 deep tissue + deep oscillation £70, 90 £80, 90 deep oscillation £95.
 */
export const prices = [
  {
    minutes: 45,
    name: 'Sports massage',
    group: 'sports',
    summary: 'Sports massage appointment.',
    detail: 'Sports massage appointment. Price includes all treatments.',
    amount: 45,
    onHomepage: true,
  },
  {
    minutes: 60,
    name: 'Sports massage',
    group: 'sports',
    summary: 'Sports massage appointment.',
    amount: 55,
    onHomepage: true,
  },
  {
    minutes: 60,
    name: 'Deep tissue + deep oscillation',
    group: 'oscillation',
    summary: 'Deep tissue and deep oscillation.',
    amount: 70,
    onHomepage: true,
  },
  {
    minutes: 90,
    name: 'Sports massage',
    group: 'sports',
    summary:
      'Sports massage. Book if you need emphasis on specific body parts and require full body treatments.',
    amount: 80,
    onHomepage: false,
  },
  {
    minutes: 90,
    name: 'Deep tissue and deep oscillation',
    group: 'oscillation',
    summary:
      '90 minutes deep tissue and deep oscillation. Great if you train regularly and need full body treatment.',
    amount: 95,
    onHomepage: false,
  },
];

export const fromPrice = Math.min(...prices.map((price) => price.amount));

export const priceGroups = [
  { id: 'sm-h', title: 'Sports massage', group: 'sports' },
  { id: 'do-h', title: 'Deep tissue + deep oscillation', group: 'oscillation' },
].map((group) => ({
  ...group,
  items: prices.filter((price) => price.group === group.group),
}));

/** Built pages, plus homepage sections for content that has no page yet. */
export const routes = {
  home: '/',
  sportsMassage: '/benefits-of-sports-massage-cardiff-injury-recovery-rehabilitation',
  prices: '/prices',
  location: '/location-sports-massage-cardiff-injury-prevention-rehabilitation',
  contact: '/book-sports-massage-cardiff-injury-prevention-rehabilitation',
  privacy: '/privacy',
  about: '/#about',
  reviews: '/#reviews',
  treatments: '/#treatments',
};

export const treatments = [
  {
    num: '01',
    title: 'Sports Massage',
    menu: 'Deep tissue work for recovery, mobility and injury prevention.',
    card: 'Slow, firm deep tissue work to break down adhesions and restore muscle function.',
    href: routes.sportsMassage,
    image: 'elbow',
  },
  {
    num: '02',
    title: 'Dry Cupping',
    menu: 'Suction cups to cut tension and boost circulation.',
    card: 'Suction lifts the tissue to reduce muscle tension, speed recovery and improve mobility.',
    href: routes.treatments,
    image: 'cupping',
  },
  {
    num: '03',
    title: 'Dry Needling',
    menu: 'Fine needles that release trigger points and stubborn knots.',
    card: 'Thin needles target trigger points for stubborn knots and chronic tightness.',
    href: routes.treatments,
    image: 'neck',
  },
  {
    num: '04',
    title: 'Deep Oscillation',
    menu: 'Gentle electrostatic therapy for pain and swelling.',
    card: 'Non-invasive electrostatic therapy that eases pain and swelling, even post-surgery.',
    href: routes.treatments,
    image: 'back',
  },
];

export const mainNav = [
  { label: 'Home', href: routes.home },
  { label: 'Sports massage', href: routes.sportsMassage },
  { label: 'Prices', href: routes.prices },
  { label: 'Location', href: routes.location },
  { label: 'Contact', href: routes.contact },
];

export const footerNav = [
  { label: 'Sports massage', href: routes.sportsMassage },
  { label: 'Prices', href: routes.prices },
  { label: 'Location', href: routes.location },
  { label: 'Contact', href: routes.contact },
  { label: 'Privacy', href: routes.privacy },
];

/** Reviews #2, #9 and #3 from google-reviews-picks.md, word for word. */
export const reviews = [
  {
    name: 'Hannah T.',
    when: 'about 6 months ago',
    text: 'Saw Nic for the first time this week and he was brilliant! Very professional and knew his stuff. Helped tackle a few problem areas for a sports massage along with a general overall body MOT. Comfortable environment and would highly recommend to anyone looking for a good sports massage in the Cardiff area! :)',
  },
  {
    name: 'Aled',
    when: 'about 11 months ago',
    text: 'Nic has been excellent in helping me with hip pain during long runs and improving my ankle mobility while training for HYROX. His knowledge is exceptional and explains everything clearly. The treatments have made a massive difference to my performance and comfort. Professional, very easy to talk to, and genuinely invested in helping you improve. Highly recommend!',
  },
  {
    name: 'Christopher',
    when: 'about 4 months ago',
    text: 'I have seen Nick a few times now for physical therapy. He is extremely friendly, knowledgeable and understands which MSK areas to target. The combination of massage therapy, cupping and dry needling has helped relieved chronic pain and tightness with old rugby injuries. 100% would recommend',
  },
];

/** Approved about copy. Do not add qualifications beyond this. */
export const bio = [
  "I'm Nic, a Level 4 Massage Therapist and the therapist behind Sports Massage Therapy Cymru in Cardiff.",
  "I'm also qualified in dry needling and dry cupping, which I use alongside sports massage to help you recover from injury and stay injury-free.",
];
