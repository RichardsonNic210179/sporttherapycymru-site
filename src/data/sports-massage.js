import { routes, treatments } from './site.js';
import { sportsMassageReviews } from './sports-massage-reviews.js';

/** Content for the sports massage page. The same shape can drive the other treatment pages. */
export const sportsMassage = {
  title: 'Sports Massage Cardiff | Injury Recovery & Rehabilitation | Sports Massage Therapy Cymru',
  description:
    'Sports massage in Cardiff to recover from injury, reduce pain and improve performance. Tailored one-to-one treatment in Birchgrove, Cardiff CF14 4QX.',
  crumbs: [
    { href: routes.home, label: 'Home' },
    { href: routes.treatments, label: 'Treatments' },
    { label: 'Sports massage' },
  ],
  kicker: 'Treatment 01',
  heading: 'Sports massage in Cardiff',
  sub: 'for injury recovery & rehabilitation',
  lede:
    'Targeted sports massage to speed up recovery, relieve muscle tension and restore movement, helping you get back to doing what you love, faster.',
  secondary: { href: routes.prices, label: 'See prices' },
  facts: ['Over 200 five-star Google reviews', '45, 60 & 90 min sessions', 'From £45, all inclusive'],
  image: {
    key: 'elbow',
    alt: "Nic using his forearm to work deep into a client's back muscles",
  },
  what: {
    id: 'what-h',
    kicker: 'What it is',
    heading: 'What is sports massage?',
    lead: 'Sports massage is a specialised form of deep tissue therapy that focuses on muscles, tendons, and soft tissue.',
    body: "Using advanced techniques, sports massage helps improve circulation, release tight muscles, and restore normal movement patterns. It's commonly used for:",
    ticks: ['Injury rehabilitation', 'Muscle recovery', 'Pain relief', 'Injury prevention'],
  },
  who: {
    id: 'who-h',
    kicker: "Who it's for",
    heading: 'Not just for athletes',
    intro: "Sports massage isn't just for athletes. It's ideal for:",
    items: [
      { num: '01', text: 'Runners and gym-goers', nowrap: 'gym-goers' },
      { num: '02', text: 'Office workers with posture-related pain' },
      { num: '03', text: 'Individuals recovering from injury' },
      { num: '04', text: 'Anyone experiencing muscle tightness or discomfort' },
    ],
  },
  benefits: {
    id: 'ben-h',
    kicker: 'Benefits',
    heading: 'Benefits of sports massage',
    intro: 'Six ways regular treatment helps you recover faster and stay injury-free.',
    cards: [
      {
        num: '01',
        title: 'Faster injury recovery',
        body: 'Sports massage increases blood flow to injured areas, delivering oxygen and nutrients that accelerate healing and reduce downtime.',
      },
      {
        num: '02',
        title: 'Pain relief & reduced muscle tension',
        body: 'It targets tight muscles and knots, helping to relieve:',
        list: ['Back pain', 'Neck and shoulder tension', 'Muscle strains'],
      },
      {
        num: '03',
        title: 'Improved mobility & flexibility',
        body: 'By loosening tight tissues, sports massage improves range of motion and helps restore natural movement.',
      },
      {
        num: '04',
        title: 'Injury prevention',
        body: 'Regular treatment helps identify imbalances early, reducing the risk of future injuries.',
      },
      {
        num: '05',
        title: 'Better circulation & reduced inflammation',
        body: 'Enhanced blood flow and lymphatic drainage help reduce swelling and support recovery.',
      },
      {
        num: '06',
        title: 'Scar tissue breakdown',
        body: 'Massage helps break down scar tissue, improving flexibility and long-term recovery outcomes.',
      },
    ],
  },
  expect: {
    id: 'exp-h',
    kicker: 'What to expect',
    heading: 'Why choose Sports Massage Therapy Cymru',
    before: "I don't just treat symptoms. I treat the whole chain of muscles,",
    nowrap: 'up and downstream.',
    steps: [
      { num: '01', title: 'Tailored, one-to-one treatment plans' },
      { num: '02', title: 'Experienced sports massage therapist' },
      { num: '03', title: 'Focus on long-term recovery and prevention' },
      {
        num: '04',
        title: 'Convenient Cardiff location',
        text: 'Birchgrove, Cardiff CF14 4QX.',
        link: { href: routes.location, label: 'Find us' },
      },
    ],
  },
  sessions: 'Sessions of 45, 60 or 90 minutes. Price includes all treatments.',
  reviewsHeading: 'Sports massage clients say',
  reviews: sportsMassageReviews,
  book: {
    heading: 'Book your sports massage in Cardiff',
    text: "Don't let pain, injury or restriction hold you back. Book your sports massage in Cardiff today and start your recovery journey.",
  },
  combine: {
    id: 'ot-h',
    kicker: 'Other treatments',
    heading: 'Combine with',
    intro: 'Four therapies, combined to suit your goals.',
    items: treatments.filter((item) => item.href !== routes.sportsMassage),
  },
};
