export const siteConfig = {
  name: "TreeTop Sylhet",
  tagline: "Adventure. Nature. Family.",
  contact: {
    phone: "01711 975 210",
    email: "treetopbd@gmail.com",
    whatsapp: "https://wa.me/8801711975210"
  },
  social: {
    facebook: "#",
    instagram: "#"
  },
  address: "Lilapara, Dupagul, Sylhet",
  copyright: "© 2025 TreeTop Sylhet",
};

export const navLinks = [
  { name: "Activities", href: "/activities" },
  { name: "Packages", href: "/packages" },
  { name: "Accommodation", href: "/accommodation" },
  { name: "How to Book", href: "/how-to-book" },
  { name: "Our Story", href: "/our-story" }
];

export const homeContent = {
  hero: {
    label: "TREETOP SYLHET",
    h1: "Sylhet's Wildest",
    h1Italic: "Day Out",
    sub: "Zipline. Kayak. Archery. Horse Riding. 20 minutes from the airport.",
    trustLine: "Open daily · Call 01711 975 210"
  },
  activities: {
    label: "THE ACTIVITIES",
    h2: "Pick your adventure",
    items: [
      { id: "01", name: "Zipline", hook: "Fly over the treetops", image: "https://placehold.co/400x300/163d22/f4ede4?text=Zipline" },
      { id: "02", name: "Kayaking", hook: "Paddle through the farm lake", image: "https://placehold.co/400x300/163d22/f4ede4?text=Kayaking" },
      { id: "03", name: "Archery", hook: "Test your aim", image: "https://placehold.co/400x300/163d22/f4ede4?text=Archery" },
      { id: "04", name: "Boating", hook: "Float through nature", image: "https://placehold.co/400x300/163d22/f4ede4?text=Boating" },
      { id: "05", name: "Treetop Course", hook: "Climb, balance, conquer", image: "https://placehold.co/400x300/163d22/f4ede4?text=Treetop+Course" },
      { id: "06", name: "Horse Riding", hook: "Gallop through the paddy fields", image: "https://placehold.co/400x300/163d22/f4ede4?text=Horse+Riding" }
    ]
  },
  packages: {
    label: "PACKAGES",
    h2: "Stay for an afternoon — or the night",
    items: [
      { name: "Half-Day", price: "700tk/person", description: "all activities + tea + snacks" },
      { name: "Full-Day", price: "Call for price", description: "ring 01711 975 210" },
      { name: "Overnight", price: "From 3,990tk", description: "activities + breakfast + pool", accent: true }
    ]
  },
  howItWorks: {
    label: "HOW IT WORKS",
    h2: "Three steps to your day out",
    steps: [
      { num: 1, title: "Choose your visit" },
      { num: 2, title: "WhatsApp us your date and group size" },
      { num: 3, title: "Show up and explore" }
    ]
  },
  plan: {
    label: "PLAN YOUR VISIT",
    h2: "How much will it cost?"
  },
  location: {
    h2: "20 minutes from Osmani Airport",
    label: "Perfect stopover on your Sylhet trip",
    distances: [
      "Ratargul 20 min",
      "Bichanakandi 45 min",
      "Shada Patthor 35 min"
    ]
  },
  story: {
    label: "OUR STORY",
    h2: "Family land. Family run.",
    body: "TreeTop was built on land our grandfather brought back from his years in the UK — a piece of Sylhet he wanted to share with the world. Every activity, every cottage, every meal is run by our family and the local community around us."
  }
};

export const activitiesContent = {
  hero: {
    h1: "Everything you can do here",
    sub: "Six ways to spend a day at TreeTop"
  },
  items: [
    {
      id: "01",
      name: "Zipline",
      hook: "Fly over the treetops",
      description: "Fly over the treetops on a 200m zipline above the farm. The fastest way to see TreeTop.",
      duration: "15 min",
      age: "All ages",
      included: "Included in all packages",
      image: "https://placehold.co/600x500/163d22/f4ede4?text=Zipline"
    },
    {
      id: "02",
      name: "Kayaking",
      hook: "Paddle through the farm lake",
      description: "Paddle solo or with a partner across the farm lake. No experience needed.",
      duration: "30 min",
      age: "All ages",
      included: "All packages",
      image: "https://placehold.co/600x500/163d22/f4ede4?text=Kayaking"
    },
    {
      id: "03",
      name: "Archery",
      hook: "Test your aim",
      description: "Take aim at targets set across the field. Bows and arrows provided.",
      duration: "20 min",
      age: "Age 8+",
      included: "All packages",
      image: "https://placehold.co/600x500/163d22/f4ede4?text=Archery"
    },
    {
      id: "04",
      name: "Boating",
      hook: "Float through nature",
      description: "Drift through the waterways on a wooden boat. Perfect for families with young children.",
      duration: "30 min",
      age: "All ages",
      included: "All packages",
      image: "https://placehold.co/600x500/163d22/f4ede4?text=Boating"
    },
    {
      id: "05",
      name: "Treetop Course",
      hook: "Climb, balance, conquer",
      description: "Navigate rope bridges, platforms and balance beams through the trees.",
      duration: "45 min",
      age: "Age 5+",
      included: "All packages",
      image: "https://placehold.co/600x500/163d22/f4ede4?text=Treetop+Course"
    },
    {
      id: "06",
      name: "Horse Riding",
      hook: "Gallop through the paddy fields",
      description: "Ride through the paddy fields on horseback with a guide.",
      duration: "30 min",
      age: "Age 6+",
      included: "All packages",
      image: "https://placehold.co/600x500/163d22/f4ede4?text=Horse+Riding"
    }
  ]
};

export const packagesContent = {
  hero: {
    h1: "Choose how you visit"
  },
  items: [
    {
      name: "HALF-DAY",
      price: "700tk per person (inc VAT)",
      timeSlots: "10am–2pm or 2pm–6pm",
      includes: "All 6 activities · Afternoon tea · Snacks",
      doesNotInclude: "Lunch · Swimming pool · Room access",
      poolAddon: "200tk per person per hour",
      minimum: "1 person"
    },
    {
      name: "FULL-DAY",
      price: "Call for price",
      timeSlots: "10am–6pm",
      includes: "All 6 activities · Lunch · Tea · Snacks",
      doesNotInclude: "Room access",
      poolAddon: "200tk per person per hour",
      minimum: "Call: 01711 975 210"
    },
    {
      name: "OVERNIGHT",
      price: "From 3,990tk",
      timeSlots: "(Per room, not per person)",
      includes: "All activities · Breakfast · Pool · Cottage",
      doesNotInclude: "Lunch/Dinner (can be ordered)",
      poolAddon: "Check-in: 2pm · Check-out: 11am",
      minimum: "Deposit: 50% via bKash to confirm"
    }
  ]
};

export const accommodationContent = {
  hero: {
    h1: "Wake up in the treetops"
  },
  note: "All rooms include full activity access, breakfast, and swimming pool. Deposit: 50% non-refundable via bKash.",
  rooms: [
    {
      name: "COTTAGE",
      guests: "2 guests",
      price: "3,990tk/night",
      features: ["Pond view", "Double bed", "En-suite", "AC", "Balcony"],
      includes: ["Activities", "Breakfast", "Pool"],
      layout: "1 Double Bed",
      image: "https://placehold.co/600x400/163d22/f4ede4?text=Cottage"
    },
    {
      name: "FAMILY ROOM",
      guests: "4–5 guests",
      price: "5,990tk/night",
      features: ["Hill view", "En-suite", "AC"],
      includes: ["Activities", "Breakfast", "Pool"],
      layout: "1 double + 2 singles",
      image: "https://placehold.co/600x400/163d22/f4ede4?text=Family+Room"
    },
    {
      name: "HILLVIEW EXECUTIVE",
      guests: "5–6 guests",
      price: "6,990tk/night",
      features: ["Hill + pond view", "En-suite", "AC"],
      includes: ["Activities", "Breakfast", "Pool"],
      layout: "1 double + 3 singles",
      image: "https://placehold.co/600x400/163d22/f4ede4?text=Hillview+Executive"
    },
    {
      name: "EXECUTIVE FAMILY COTTAGE",
      guests: "6 guests",
      price: "11,990tk/night",
      features: ["Private cottage", "2 bedrooms", "Living area", "Full kitchen", "AC", "Private balcony"],
      includes: ["Activities", "Breakfast", "Pool"],
      layout: "2 Bedrooms",
      image: "https://placehold.co/600x400/163d22/f4ede4?text=Executive+Family+Cottage"
    }
  ]
};

export const howToBookContent = {
  hero: {
    h1: "Booking is simple",
    sub: "No confusing forms. Just a WhatsApp message."
  },
  steps: [
    { title: "Step 1: Choose your visit", text: "Pick your package and dates from the /packages page" },
    { title: "Step 2: WhatsApp us", text: "Send your: date, package, number of guests, room (if overnight)\nWe reply within a few hours to confirm" },
    { title: "Step 3: Pay the deposit", text: "Overnight and full-day: 50% deposit via bKash to confirm\nHalf-day: no advance payment needed, just arrive" },
    { title: "Step 4: Show up and explore", text: "Arrive on your chosen date. Our team will be ready." }
  ],
  faq: [
    { q: "Do I need to book in advance for half-day?", a: "Call us first to confirm we are open: 01711 975 210. Then arrive. No advance payment needed for half-day." },
    { q: "Can I cancel or reschedule?", a: "Deposits are non-refundable. If you need to reschedule, WhatsApp us at least 48 hours before your visit." },
    { q: "Is the pool included?", a: "The pool is included for overnight guests. Day visitors can add it for 200tk per person per hour." },
    { q: "Can I bring outside food?", a: "Outside food is not permitted. We provide tea, snacks, and standard set meals. Ask us about the current menu." },
    { q: "Is it suitable for young children?", a: "Yes. TreeTop was designed for all ages. Most activities suit children from age 5+. Horse riding from age 6+." },
    { q: "Do you do corporate group bookings?", a: "Yes. Groups of 40+ receive special rates. WhatsApp or call us to discuss your team day." },
    { q: "Is there parking?", a: "Yes, free parking on site." },
    { q: "How do I pay?", a: "Deposits via bKash. We can discuss bank transfer for large corporate groups. No card payments currently." }
  ]
};

export const ourStoryContent = {
  hero: {
    h1: "Family land.",
    h1Italic: "Family run."
  },
  story: [
    "TreeTop Sylhet began with a piece of land and a family dream. Our grandfather settled in the United Kingdom in the 1960s — one of thousands of Sylhetis who built new lives abroad while keeping Sylhet close to their hearts. When our family returned to this land, we wanted to build something that honoured that journey: a place where families could reconnect with nature, with Sylhet, and with each other.",
    "Every activity at TreeTop was chosen so that everyone — from murrobbis to newborns — could find something to enjoy. Every cottage was built with family in mind. Every meal is cooked by members of our team from the local community around us. We employ local villagers, support local artisans, and give a share of our revenue back to the families who helped build this place."
  ],
  image: "https://placehold.co/1200x600/163d22/f4ede4?text=family-story-photo",
  community: {
    title: "The local community",
    caption: "TreeTop employs local Sylheti families in every part of the operation — from building to cooking to guiding.",
    images: [
      "https://placehold.co/400x500/163d22/f4ede4?text=portrait+1",
      "https://placehold.co/400x500/163d22/f4ede4?text=portrait+2",
      "https://placehold.co/400x500/163d22/f4ede4?text=portrait+3"
    ]
  },
  cta: "Come visit the family"
};

export const getWhatsAppLink = (message: string) => {
  return `${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
};
