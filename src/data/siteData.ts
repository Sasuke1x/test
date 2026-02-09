export const siteInfo = {
  name: 'House Transformers Inc.',
  tagline: 'Award-winning roofing, remodeling, and restoration in Glen Burnie, MD',
  phone: '(410) 508-8110',
  phoneDigits: '4105088110',
  email: 'info@housetransformersinc.com',
  address: '7442 Baltimore Annapolis Blvd, Suite 201, Glen Burnie, MD 21061',
  hours: 'Mon–Fri 8:00 AM – 4:00 PM',
  serviceArea: 'Glen Burnie, MD and surrounding Maryland / DMV communities',
  social: {
    facebook: 'https://www.facebook.com/housetransformersinc/',
    instagram: 'https://www.instagram.com/housetransformers.inc/',
    linkedin: 'https://www.linkedin.com/company/house-transformers-inc',
    youtube: 'https://www.youtube.com/@housetransformersinc',
    yelp: 'https://www.yelp.com/biz/house-transformers-glen-burnie-4',
    googleReviews: 'https://g.page/r/Cc2BxhaKTw44EAI/review',
  },
}

export const zipCodes = [
  '20601', '20608', '20613', '20678',
  '20711', '20715', '20721', '20733', '20737', '20754', '20758',
  '20772', '20774', '20776', '20778',
  '21012', '21032', '21035', '21037', '21054', '21076',
  '21113', '21122', '21146',
  '21401',
]

export const serviceCategories = [
  {
    slug: 'roofing',
    title: 'Roofing',
    description: 'Roof repair, replacement, and storm-ready solutions built to last.',
    image: '/services/roof-repairs.jpg',
    type: 'remodeling',
  },
  {
    slug: 'windows',
    title: 'Windows',
    description: 'Energy-efficient window replacement and custom installs.',
    image: '/services/window.jpg',
    type: 'remodeling',
  },
  {
    slug: 'siding-gutters',
    title: 'Siding & Gutters',
    description: 'Durable siding systems and seamless gutter protection.',
    image: '/services/siding.jpg',
    type: 'remodeling',
  },
  {
    slug: 'kitchen-bath',
    title: 'Kitchen & Bath',
    description: 'High-impact remodels designed for comfort and ROI.',
    image: '/services/services-4.jpg',
    type: 'remodeling',
  },
  {
    slug: 'home-additions',
    title: 'Home Additions',
    description: 'Expand your space with expertly managed additions.',
    image: '/services/roof-siding.jpg',
    type: 'remodeling',
  },
  {
    slug: 'decks-patios',
    title: 'Decks & Patios',
    description: 'Outdoor living spaces built for year-round enjoyment.',
    image: '/services/gutter2.jpg',
    type: 'remodeling',
  },
  {
    slug: 'emergency-services',
    title: 'Emergency Services',
    description: '24/7 response for storm damage, tarping, and board-up.',
    image: '/services/roofing-repair.jpg',
    type: 'restoration',
  },
  {
    slug: 'water-damage',
    title: 'Water & Flood Damage',
    description: 'Rapid extraction, drying, and full restoration services.',
    image: '/services/gutter-repair.jpg',
    type: 'restoration',
  },
  {
    slug: 'fire-smoke-damage',
    title: 'Fire & Smoke Damage',
    description: 'Soot cleanup, odor removal, and reconstruction support.',
    image: '/services/siding-repair.jpg',
    type: 'restoration',
  },
  {
    slug: 'storm-damage',
    title: 'Storm Damage',
    description: 'Emergency response and repairs after severe weather.',
    image: '/services/window-repair.jpg',
    type: 'restoration',
  },
]

export const serviceDetails = {
  roofing: {
    hero: 'Roof replacements and repairs that protect your home or facility year-round.',
    includes: [
      'Roof inspections and leak detection',
      'Full roof replacement and re-roofing',
      'Storm and wind damage repair',
      'Shingle, metal, and flat roof systems',
      'Gutter and ventilation upgrades',
    ],
    residential: [
      'Architectural shingles and premium materials',
      'Warranty-backed installations',
      'Insurance claim support when needed',
    ],
    commercial: [
      'Flat roof and low-slope systems',
      'Preventative maintenance programs',
      'Minimal disruption scheduling',
    ],
  },
  windows: {
    hero: 'Upgrade comfort, efficiency, and curb appeal with new windows.',
    includes: [
      'Energy-efficient replacement windows',
      'Custom window sizing and styles',
      'Weatherproofing and trim work',
      'Specialty window installations',
      'Manufacturer-backed warranties',
    ],
    residential: [
      'Noise reduction and UV protection',
      'Enhanced security and lock systems',
      'Modern styles to match your home',
    ],
    commercial: [
      'Large-format glazing solutions',
      'Office and retail frontage upgrades',
      'Code-compliant installations',
    ],
  },
  'siding-gutters': {
    hero: 'Protect your exterior with durable siding and water management systems.',
    includes: [
      'Siding repair and replacement',
      'Seamless gutter installation',
      'Soffit and fascia upgrades',
      'Moisture and weather barrier protection',
      'Color and texture matching',
    ],
    residential: [
      'Fiber cement, vinyl, and composite options',
      'Enhanced curb appeal with low maintenance',
      'Storm-ready exterior systems',
    ],
    commercial: [
      'Durable cladding for multi-family and retail',
      'Waterproofing and drainage coordination',
      'Long-term maintenance planning',
    ],
  },
  'kitchen-bath': {
    hero: 'High-value kitchen and bath remodels that blend function and style.',
    includes: [
      'Full design-build remodeling',
      'Cabinetry, countertops, and tile',
      'Lighting and plumbing coordination',
      'Accessibility upgrades',
      'Permit management and inspections',
    ],
    residential: [
      'Layout optimization and storage upgrades',
      'Premium finishes and fixtures',
      'Project timelines tailored to your household',
    ],
    commercial: [
      'Breakroom and restroom renovations',
      'ADA compliance planning',
      'Off-hours scheduling to reduce downtime',
    ],
  },
  'home-additions': {
    hero: 'Expand your square footage with seamless, code-compliant additions.',
    includes: [
      'Room additions and expansions',
      'Structural framing and exterior tie-ins',
      'Roofline integration and finishing',
      'Permit and inspection management',
      'Full interior build-out',
    ],
    residential: [
      'Primary suites, sunrooms, and offices',
      'Design guidance to match your home',
      'Energy-efficient envelopes',
    ],
    commercial: [
      'Office expansions and tenant build-outs',
      'Workflow-focused layouts',
      'Phased construction planning',
    ],
  },
  'decks-patios': {
    hero: 'Outdoor living spaces engineered for durability and comfort.',
    includes: [
      'Deck construction and replacement',
      'Composite and wood decking options',
      'Patio covers and pergolas',
      'Stairs, railings, and lighting',
      'Drainage and foundation support',
    ],
    residential: [
      'Custom outdoor entertaining areas',
      'Low-maintenance composite builds',
      'Safety-focused rail systems',
    ],
    commercial: [
      'Hospitality patios and seating areas',
      'Durable materials for high traffic',
      'Code compliance and permitting',
    ],
  },
  'emergency-services': {
    hero: 'Immediate response for storm damage, tarping, and board-up needs.',
    includes: [
      '24/7 emergency response',
      'Roof tarping and temporary repairs',
      'Board-up and site security',
      'Tree removal coordination',
      'Damage documentation for insurance',
    ],
    residential: [
      'Rapid stabilization after storms',
      'Temporary protection to prevent further loss',
      'Insurance coordination support',
    ],
    commercial: [
      'Priority response for critical facilities',
      'Safety and access control',
      'Multi-site damage triage',
    ],
  },
  'water-damage': {
    hero: 'Rapid water extraction, drying, and full restoration services.',
    includes: [
      '24/7 water extraction and drying',
      'Structural drying and dehumidification',
      'Mold prevention and remediation',
      'Content cleaning and pack-out',
      'Full reconstruction and repairs',
    ],
    residential: [
      'Basement and crawlspace flooding',
      'Appliance and plumbing leak restoration',
      'Storm-driven water intrusion response',
    ],
    commercial: [
      'Large-loss water mitigation',
      'Business continuity planning',
      'Multi-unit and facility restoration',
    ],
  },
  'fire-smoke-damage': {
    hero: 'Soot removal, odor elimination, and full reconstruction support.',
    includes: [
      'Fire and smoke damage assessment',
      'Soot cleanup and odor removal',
      'HVAC and duct cleaning',
      'Content pack-out and restoration',
      'Structural repair and rebuild',
    ],
    residential: [
      'Family-safe cleanup procedures',
      'Temporary protections during reconstruction',
      'Insurance claim guidance',
    ],
    commercial: [
      'Large-scale deodorization',
      'Equipment and asset recovery',
      'Phased reconstruction for operations',
    ],
  },
  'storm-damage': {
    hero: 'Storm recovery services with expert repairs and restoration.',
    includes: [
      'Wind and hail damage inspections',
      'Emergency tarping and stabilization',
      'Roof, siding, and window repairs',
      'Water intrusion mitigation',
      'Insurance documentation support',
    ],
    residential: [
      'Fast-response repair scheduling',
      'Interior and exterior storm restoration',
      'Clear project communication',
    ],
    commercial: [
      'Multi-building storm assessments',
      'Priority scheduling for critical sites',
      'Coordinated trades and reporting',
    ],
  },
} as const

export const processSteps = [
  {
    title: 'Inspection & Consultation',
    description: 'We assess the scope, document damage, and outline clear next steps.',
  },
  {
    title: 'Detailed Estimate',
    description: 'You receive a transparent estimate with timelines and options.',
  },
  {
    title: 'Project Execution',
    description: 'Our crews deliver the work with daily progress updates.',
  },
  {
    title: 'Final Walkthrough',
    description: 'We confirm quality, review warranties, and close out the project.',
  },
]

export const faqs = [
  {
    question: 'Do you offer free inspections and estimates?',
    answer: 'Yes. We provide complimentary inspections and written estimates for all services.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'House Transformers Inc. is fully licensed and insured for residential and commercial work.',
  },
  {
    question: 'Do you help with insurance claims?',
    answer: 'Absolutely. We document damage, provide reports, and work alongside your adjuster when needed.',
  },
  {
    question: 'How fast can you respond to emergencies?',
    answer: 'Our emergency team is available 24/7 and prioritizes same-day response when possible.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We are based in Glen Burnie, MD and serve surrounding Maryland and DMV communities.',
  },
  {
    question: 'Do you handle commercial projects?',
    answer: 'Yes. We specialize in commercial roofing, restoration, and remodeling with minimal disruption.',
  },
  {
    question: 'What financing options are available?',
    answer: 'Financing is available for qualified customers. We will guide you through available programs.',
  },
  {
    question: 'What materials do you install for roofing and siding?',
    answer: 'We install premium shingle, metal, and flat roof systems along with fiber cement and vinyl siding options.',
  },
  {
    question: 'Can you coordinate multiple trades?',
    answer: 'Yes. Our project managers coordinate roofing, siding, windows, and interior trades for seamless delivery.',
  },
  {
    question: 'What should I do after storm or water damage?',
    answer: 'Call us immediately. We will secure the property, prevent further damage, and guide you on next steps.',
  },
]

export const testimonials = [
  {
    name: 'Amanda L.',
    location: 'Glen Burnie, MD',
    rating: 5,
    text: 'The team handled our roof replacement quickly and the cleanup was spotless. We felt informed every step of the way.',
    date: '2024-08-15',
  },
  {
    name: 'Jason P.',
    location: 'Severna Park, MD',
    rating: 5,
    text: 'After a storm, they secured our home the same day and helped with the insurance paperwork. Highly recommended.',
    date: '2024-09-09',
  },
  {
    name: 'Maria S.',
    location: 'Annapolis, MD',
    rating: 5,
    text: 'Our kitchen remodel was on schedule and the craftsmanship is outstanding. Great communication throughout.',
    date: '2024-10-05',
  },
]

export const galleryImages = [
  {
    src: '/services/roof-repairs.jpg',
    alt: 'Roof replacement project in Glen Burnie, MD',
  },
  {
    src: '/services/services-4.jpg',
    alt: 'Exterior remodeling project completed by House Transformers Inc.',
  },
  {
    src: '/services/roof-siding.jpg',
    alt: 'Roofing and siding upgrade for a Maryland home',
  },
  {
    src: '/services/gutter2.jpg',
    alt: 'Seamless gutter installation project',
  },
  {
    src: '/services/siding.jpg',
    alt: 'New siding installation with upgraded trim',
  },
  {
    src: '/services/window.jpg',
    alt: 'Energy-efficient window replacement project',
  },
  {
    src: '/services/roofing-repair.jpg',
    alt: 'Storm damage roof repair and restoration',
  },
  {
    src: '/services/window-repair.jpg',
    alt: 'Commercial window repair and restoration',
  },
]

export const videoGallery = [
  {
    title: 'House Transformers Inc. on YouTube',
    url: siteInfo.social.youtube,
    embed: 'https://www.youtube.com/embed?listType=search&list=House%20Transformers%20Inc',
  },
  {
    title: 'Roofing & Restoration Highlights',
    url: siteInfo.social.youtube,
    embed: 'https://www.youtube.com/embed?listType=search&list=Glen%20Burnie%20roofing%20restoration',
  },
  {
    title: 'Emergency Storm Response',
    url: siteInfo.social.youtube,
    embed: 'https://www.youtube.com/embed?listType=search&list=storm%20damage%20restoration%20Maryland',
  },
]

export const blogPosts = [
  {
    slug: 'what-to-do-after-storm-damage',
    title: 'What To Do Immediately After Storm Damage',
    date: '2025-01-18',
    excerpt: 'Fast action can prevent secondary damage and speed up insurance approvals. Here is what to do first.',
    content: [
      'Storm damage can escalate quickly if the property is left exposed. The first step is to secure the structure and prevent additional water intrusion.',
      'Document everything with photos and videos before any major cleanup. This helps your insurance claim and speeds up approvals.',
      'Call a licensed contractor who can provide emergency tarping, board-up services, and a full inspection report.',
    ],
  },
  {
    slug: 'signs-you-need-a-roof-replacement',
    title: '7 Signs You May Need a Roof Replacement',
    date: '2025-02-02',
    excerpt: 'Knowing when to replace your roof can save money and prevent emergency damage.',
    content: [
      'Look for missing shingles, granule loss, sagging areas, or persistent leaks. These are common indicators that a replacement may be needed.',
      'Age matters too. Many asphalt roofs reach the end of their lifespan around 20-25 years depending on maintenance and ventilation.',
      'A professional inspection will confirm the extent of wear and recommend repair or replacement options.',
    ],
  },
  {
    slug: 'water-damage-restoration-process',
    title: 'Understanding the Water Damage Restoration Process',
    date: '2025-02-20',
    excerpt: 'From extraction to reconstruction, here is how a professional water restoration project works.',
    content: [
      'Professional water restoration begins with rapid extraction and structural drying using commercial-grade equipment.',
      'Next, we address moisture monitoring, mold prevention, and content restoration to protect valuables and finishes.',
      'Once the space is fully dry, we complete repairs and reconstruction to return the property to pre-loss condition.',
    ],
  },
  {
    slug: 'financing-options-for-remodeling',
    title: 'Financing Options for Home Remodeling Projects',
    date: '2025-03-04',
    excerpt: 'Financing can help you start your project sooner while preserving cash flow.',
    content: [
      'Many homeowners use financing to spread costs across manageable monthly payments.',
      'We can review available options and connect you with lenders who specialize in home improvement projects.',
      'Our team will help you select the right scope and timeline to meet your budget goals.',
    ],
  },
]
