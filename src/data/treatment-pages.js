import { routes, treatmentKicker, treatments } from './site.js';

/**
 * Wording is the indexed copy of the old Squarespace pages (the URLs below).
 * The Wayback Machine has no snapshot of these three URLs, only the homepage.
 * Light tidy: straight apostrophes, the current business name, and the existing
 * page layout. No reviews were on these pages, so none are shown.
 */

const others = (href) => treatments.filter((item) => item.href !== href);

const crumbs = (label) => [
  { href: routes.home, label: 'Home' },
  { href: routes.treatments, label: 'Treatments' },
  { label },
];

export const dryCupping = {
  title: 'Dry cupping in Cardiff | Sports Massage Therapy Cymru',
  description:
    'Dry cupping in Cardiff to relieve muscle tension, improve recovery and support injury prevention. Suction cups lift the skin and fascia at Sports Massage Therapy Cymru in Birchgrove.',
  crumbs: crumbs('Dry cupping'),
  kicker: treatmentKicker(routes.dryCupping),
  heading: 'Dry cupping in Cardiff',
  sub: 'for pain relief, recovery & injury prevention',
  lede:
    'Looking for dry cupping in Cardiff to relieve muscle tension, improve recovery, and move pain-free? I combine dry cupping with sports massage and rehabilitation.',
  secondary: { href: routes.prices, label: 'See prices' },
  facts: ['1-to-1 personalised treatments', '45, 60 & 90 min sessions', 'Birchgrove, Cardiff'],
  image: {
    key: 'cupping',
    alt: 'Dry cupping cups on a client’s hamstring',
  },
  what: {
    id: 'what-h',
    kicker: 'What it is',
    heading: 'What is dry cupping?',
    lead: 'Dry cupping uses suction cups to lift the skin and fascia, the tissue that surrounds muscle, increasing blood flow and releasing tight muscles.',
    body: 'Sports massage compresses tissue. Dry cupping lifts and decompresses it. Combining both gives the best results, which is what I do. Dry cupping is widely used to improve circulation, reduce inflammation, and support muscle recovery.',
    ticks: [
      'Reduce pain and muscle tension',
      'Improve circulation',
      'Speed up recovery',
      'Restore range of movement',
    ],
  },
  who: {
    id: 'who-h',
    kicker: 'Who it’s for',
    heading: 'Conditions we treat',
    intro: 'Dry cupping therapy in Cardiff is highly effective for:',
    items: [
      { num: '01', text: 'Back pain' },
      { num: '02', text: 'Neck and shoulder tension' },
      { num: '03', text: 'Tight quads, hamstrings and calves' },
      { num: '04', text: 'Tight hips' },
      { num: '05', text: 'Sports injuries' },
      { num: '06', text: 'Postural pain from desk work' },
    ],
  },
  benefits: {
    id: 'ben-h',
    kicker: 'Benefits',
    heading: 'Why choose dry cupping in Cardiff',
    intro:
      'Unlike traditional massage alone, dry cupping works by decompressing tissue, allowing a deeper release and faster results.',
    cards: [
      {
        num: '01',
        title: 'Fast pain relief',
        body: 'Targets tight muscles and stubborn knots quickly.',
      },
      {
        num: '02',
        title: 'Improved mobility',
        body: 'Releases fascia and improves movement.',
      },
      {
        num: '03',
        title: 'Faster recovery',
        body: 'Promotes healing after training or injury.',
      },
      {
        num: '04',
        title: 'Reduced muscle tightness',
        body: 'Ideal for chronic tension and overuse injuries.',
      },
    ],
  },
  expect: {
    id: 'exp-h',
    kicker: 'My approach',
    heading: 'Cupping is part of the treatment',
    before: 'Most clinics offer cupping as an add-on. I do not. A session can include dry cupping, assisted stretching, deep tissue sports massage, injury rehabilitation and movement correction, for faster, longer-lasting relief and',
    nowrap: 'less chance of it returning.',
    steps: [
      { num: '01', title: 'Specialist mobility drills' },
      { num: '02', title: 'Sports massage and recovery' },
      { num: '03', title: '1-to-1 personalised treatment' },
      { num: '04', title: 'Trusted by clients across Cardiff' },
      { num: '05', title: 'Proven results for pain and injury' },
    ],
  },
  book: {
    heading: 'Book dry cupping in Cardiff',
    text: 'If you’re dealing with tight muscles, pain, or injury, book your dry cupping session in Cardiff today and start moving better.',
  },
  combine: {
    id: 'ot-h',
    kicker: 'Other treatments',
    heading: 'Combine with',
    intro: 'Dry cupping sits alongside the other treatments.',
    items: others(routes.dryCupping),
  },
};

export const dryNeedling = {
  title: 'Dry needling in Cardiff | Sports Massage Therapy Cymru',
  description:
    'Dry needling in Cardiff for muscle tension, pain and injury recovery. Fine needles target trigger points at Sports Massage Therapy Cymru in Birchgrove.',
  crumbs: crumbs('Dry needling'),
  kicker: treatmentKicker(routes.dryNeedling),
  heading: 'Dry needling in Cardiff',
  sub: 'for pain relief, injury recovery & muscle tension',
  lede:
    'Struggling with tight muscles, ongoing pain, or an injury that won’t shift? Dry needling targets deep muscle tension, restores movement, and speeds up recovery.',
  secondary: { href: routes.prices, label: 'See prices' },
  facts: ['1-to-1 personalised treatments', '45, 60 & 90 min sessions', 'Birchgrove, Cardiff'],
  image: {
    key: 'neck',
    alt: 'Nic treating a seated client’s neck and shoulder',
  },
  what: {
    id: 'what-h',
    kicker: 'What it is',
    heading: 'What is dry needling?',
    lead: 'Dry needling uses fine needles to target trigger points, the tight muscle knots that cause pain and stiffness, restrict movement, and slow recovery.',
    body: 'Inserting needles into these areas releases deep muscle tension, improves blood flow, reduces pain, and restores normal movement. It is a modern, evidence-based treatment used widely in sports therapy and rehabilitation. If massage alone hasn’t worked, dry needling can target the problem at a deeper level.',
    ticks: [
      'Releases deep muscle tension',
      'Improves blood flow',
      'Reduces pain',
      'Restores normal movement',
    ],
  },
  who: {
    id: 'who-h',
    kicker: 'Who it’s for',
    heading: 'Conditions I treat',
    intro: 'Dry needling in Cardiff is highly effective for:',
    items: [
      { num: '01', text: 'Back pain and stiffness' },
      { num: '02', text: 'Neck and shoulder tension' },
      { num: '03', text: 'Muscle strains and tightness' },
      { num: '04', text: 'Sports injuries' },
      { num: '05', text: 'Sciatica and lower back pain' },
      { num: '06', text: 'Postural pain from desk work' },
    ],
  },
  benefits: {
    id: 'ben-h',
    kicker: 'Benefits',
    heading: 'Why choose dry needling in Cardiff',
    intro: 'Muscle tightness and trigger points are a major cause of pain and restricted movement.',
    cards: [
      {
        num: '01',
        title: 'Fast, targeted pain relief',
        body: 'Dry needling releases tight muscle knots directly, often with immediate relief.',
      },
      {
        num: '02',
        title: 'Improves mobility and flexibility',
        body: 'Reducing tension helps restore normal movement patterns.',
      },
      {
        num: '03',
        title: 'Speeds up injury recovery',
        body: 'Improved circulation and muscle function help your body heal faster.',
      },
      {
        num: '04',
        title: 'For longer-term pain',
        body: 'Used for long-term issues such as back pain, neck tension, and recurring injuries.',
      },
    ],
  },
  expect: {
    id: 'exp-h',
    kicker: 'My approach',
    heading: 'Dry needling, massage and rehab',
    before:
      'Most clinics offer dry needling on its own. I combine it with deep tissue sports massage, injury rehabilitation and movement correction. That targets the cause, delivers faster results, and helps prevent the issue from',
    nowrap: 'coming back.',
    steps: [
      { num: '01', title: 'Dry needling' },
      { num: '02', title: 'Deep tissue sports massage' },
      { num: '03', title: 'Injury rehabilitation' },
      {
        num: '04',
        title: 'Across Cardiff',
        text: 'Whitchurch, Rhiwbina, Heath, Llanishen, Roath, Cardiff Bay, and the rest of the city.',
        link: { href: routes.location, label: 'Find the clinic' },
      },
    ],
  },
  book: {
    heading: 'Book dry needling in Cardiff',
    text: 'If you’re dealing with pain, tightness, or injury, book your dry needling session in Cardiff today.',
  },
  combine: {
    id: 'ot-h',
    kicker: 'Other treatments',
    heading: 'Combine with',
    intro: 'Dry needling sits alongside the other treatments.',
    items: others(routes.dryNeedling),
  },
};

export const deepOscillation = {
  title: 'Deep oscillation therapy in Cardiff | Sports Massage Therapy Cymru',
  description:
    'Deep oscillation therapy in Cardiff to reduce pain and inflammation and support recovery, including after surgery. Gentle electrostatic treatment at Sports Massage Therapy Cymru in Birchgrove.',
  crumbs: crumbs('Deep oscillation'),
  kicker: treatmentKicker(routes.deepOscillation),
  heading: 'Deep oscillation therapy in Cardiff',
  sub: 'for pain, swelling and recovery',
  lede:
    'Deep oscillation therapy uses an electrostatic field to create pulsing vibrations in the tissue, without strain or discomfort. It can be used early after injury or surgery, when other hands-on work may not be suitable.',
  secondary: { href: routes.prices, label: 'See prices' },
  facts: ['Gentle and non-invasive', '60 min £70 · 90 min £95', 'Birchgrove, Cardiff'],
  image: {
    key: 'back',
    alt: 'Hands working on a client’s lower back in the treatment room',
  },
  what: {
    id: 'what-h',
    kicker: 'What it is',
    heading: 'What is deep oscillation therapy?',
    lead: 'An electrostatic field generates pulsing vibrations deep in the body. The treatment can reach several centimetres without causing strain.',
    body: 'It uses gentle electrostatic impulses to create resonating vibrations in muscle, connective tissue, circulation and the lymphatic system at the same time. Unlike hands-on massage, it works from within the tissue, so it can be used on sensitive, inflamed, or post-surgical areas.',
    ticks: [
      'Reduce pain and inflammation',
      'Stimulate lymphatic drainage',
      'Improve circulation and tissue healing',
      'Restore mobility and function',
    ],
  },
  who: {
    id: 'who-h',
    kicker: 'Who it’s for',
    heading: 'What it can help with',
    intro: 'Deep oscillation therapy is used for:',
    items: [
      { num: '01', text: 'Fibromyalgia and chronic pain' },
      { num: '02', text: 'Lymphoedema and chronic swelling' },
      { num: '03', text: 'Post-surgical recovery and scars' },
      { num: '04', text: 'Muscle strains and ligament sprains' },
      { num: '05', text: 'Back, neck and joint pain' },
      { num: '06', text: 'Bruising and soft tissue injuries' },
    ],
  },
  benefits: {
    id: 'ben-h',
    kicker: 'Benefits',
    heading: 'How deep oscillation helps',
    intro:
      'Deep oscillation is a non-invasive treatment for pain, healing and movement. It can be used on sensitive or inflamed tissue, and it is supported by clinical research. It has been used worldwide for over 30 years.',
    cards: [
      {
        num: '01',
        title: 'Pain relief',
        body: 'Used for both recent injuries and longer-term pain, by calming irritated tissue and reducing inflammation.',
      },
      {
        num: '02',
        title: 'Less swelling',
        body: 'Helps reabsorb fluid build-up, reduce bruising, and ease inflammation after injury or surgery.',
      },
      {
        num: '03',
        title: 'Healing and repair',
        body: 'By improving circulation, it supports wound healing, tissue repair and scar quality.',
      },
      {
        num: '04',
        title: 'Lymphatic drainage',
        body: 'Stimulates the lymphatic system to move excess fluid and waste products. It can reduce volume in both primary and secondary lymphoedema, and help prevent fibrosis and long-term tissue damage.',
        list: [
          'Less limb swelling',
          'Softer hardened tissue',
          'Used for cancer-related lymphoedema, post-surgical swelling, chronic oedema and lipoedema',
        ],
      },
      {
        num: '05',
        title: 'Mobility',
        body: 'Less pain and stiffness means you can move earlier and get back to normal activities sooner.',
      },
      {
        num: '06',
        title: 'After surgery',
        body: 'It can be used very early after surgery. Commonly used after orthopaedic surgery, caesarean section, mastectomy, joint replacement and soft tissue repair.',
        list: [
          'Less swelling, bruising and haematoma',
          'Faster wound healing',
          'Better scar quality and fewer adhesions',
          'An earlier return to movement and rehab',
        ],
      },
    ],
  },
  expect: {
    id: 'exp-h',
    kicker: 'What to expect',
    heading: 'What a session feels like',
    before:
      'A handheld applicator, or gloved hands, delivers gentle oscillations through the tissue. People often describe a deep, relaxing vibration, and many notice relief and',
    nowrap: 'easier movement afterwards.',
    steps: [
      { num: '01', title: 'Non-invasive' },
      { num: '02', title: 'For recent, longer-term and post-surgical problems' },
      { num: '03', title: 'Suitable for sensitive or inflamed tissue' },
      { num: '04', title: 'No known side effects' },
    ],
  },
  sessionsExtra: 'Deep tissue and deep oscillation is £70 for 60 minutes and £95 for 90 minutes.',
  book: {
    heading: 'Book deep oscillation therapy in Cardiff',
    text: 'If you’re dealing with ongoing pain, swelling, or recovery after surgery, book deep oscillation therapy in Cardiff.',
  },
  combine: {
    id: 'ot-h',
    kicker: 'Other treatments',
    heading: 'Combine with',
    intro: 'Deep oscillation sits alongside the other treatments.',
    items: others(routes.deepOscillation),
  },
};
