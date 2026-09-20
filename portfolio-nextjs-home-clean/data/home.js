export const homeContent = {
  brand: {
    name: 'Xiami',
    homeAriaLabel: 'Xiami home'
  },

  navigation: {
    ariaLabel: 'Primary navigation',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Projects', href: '#portfolio' },
      { label: 'Blog', href: '#blog' },
      { label: 'Contact Me', href: '#contact' }
    ],
    cta: 'Hire Me'
  },

  hero: {
    kicker: 'Hey There',
    titleLine1: "I'm Rachel Davis",
    titleLine2: 'App',
    titleAccent: 'Designer',
    description: 'Product designer creating clear, attractive digital experiences for mobile apps, SaaS products and modern websites.',
    primaryCta: 'Get Started',
    secondaryCta: 'Showreel',
    image: '/assets/images/hero-visual.png',
    imageAlt: 'Product designer portrait illustration'
  },

  marquee: {
    text: 'The Best Solution',
    repeat: 20
  },

  about: {
    kicker: 'About Me',
    titleLine1: 'Solving Problems With',
    titleAccent: 'Intuitive Design',
    description: 'I help ambitious products turn complex ideas into simple experiences by combining interface craft, user-centered thinking and practical product strategy.',
    stats: [
      { value: '10+', labelLine1: 'Years', labelLine2: 'Experience' },
      { value: '10+', labelLine1: 'Global', labelLine2: 'Awards' }
    ],
    cta: 'About Me',
    signature: 'Rachel Davis',
    image: '/assets/images/about-visual.png',
    imageAlt: 'Happy customer illustration with ratings'
  },

  services: {
    kicker: 'My Services',
    titleBeforeAccent: 'The Ease-',
    titleAccent: 'Service',
    titleAfterAccent: ' Process',
    items: [
      {
        number: '01',
        title: 'Full Stack Web',
        description: 'Modern landing pages and product websites with a clean system, clear hierarchy and polished interaction.'
      },
      {
        number: '02',
        title: 'API Development',
        description: 'Practical product flows and integrations connecting the interface to the services the business needs.'
      },
      {
        number: '03',
        title: 'Mobile App Design',
        description: 'Scalable mobile experiences designed from user flows through developer-ready high-fidelity screens.'
      },
      {
        number: '04',
        title: 'Web Design',
        description: 'Responsive interfaces with strong hierarchy, reusable components and thoughtful motion.'
      }
    ]
  },

  portfolio: {
    kicker: 'Project',
    titleBeforeAccent: 'My Featured ',
    titleAccent: 'Portfolio',
    viewAllCta: 'View Projects',
    items: [
      {
        image: '/assets/images/project-task-app.png',
        category: 'App / Product',
        title: 'Mobile App For Task Management'
      },
      {
        image: '/assets/images/project-saas-manager.png',
        category: 'Web / Product',
        title: 'Product Designer SaaS Manager'
      },
      {
        image: '/assets/images/project-analytics.png',
        category: 'App / Dashboard',
        title: 'UX Design Case Study Management'
      },
      {
        image: '/assets/images/project-food-app.png',
        category: 'App / eCommerce',
        title: 'Mobile App For Food Delivery'
      }
    ]
  },

  experience: {
    kicker: 'My Experience',
    titleBeforeAccent: 'My ',
    titleAccent: 'Work',
    titleAfterAccent: ' Experience',
    items: [
      { year: '2024', role: 'Senior Designer', company: 'Muzli' },
      { year: '2020', role: 'UX Design Course Study', company: 'Udemy' },
      { year: '2018', role: 'Product Designer / UX Product Manager', company: 'Product Hunt' },
      { year: '2016', role: 'Xiami Product Design (UI/UX)', company: 'Pinterest' }
    ],
    skills: [
      { icon: '/assets/skills/figma.svg', score: '95%', name: 'Figma' },
      { icon: '/assets/skills/photoshop.svg', score: '85%', name: 'Photoshop' },
      { icon: '/assets/skills/illustrator.svg', score: '70%', name: 'Illustrator' },
      { icon: '/assets/skills/sketch.svg', score: '88%', name: 'Sketch' },
      { icon: '/assets/skills/xd.svg', score: '93%', name: 'Adobe XD' }
    ]
  },

  awards: {
    kicker: 'Awards',
    titleAccent: 'Awards',
    titleAfterAccent: ' & Recognition',
    items: [
      { icon: '/assets/icons/layers.svg', name: 'Best Mobile App Design', date: 'Feb 22, 2024' },
      { icon: '/assets/icons/mobile.svg', name: 'Best Web App Design', date: 'Jan 18, 2024' },
      { icon: '/assets/icons/mobile.svg', name: 'Best Mobile App Design', date: 'Mar 12, 2024' },
      { icon: '/assets/icons/trophy.svg', name: 'Best Mobile App Design', date: 'Apr 02, 2024' }
    ]
  },

  pricing: {
    kicker: 'Best Pricing',
    titleBeforeAccent: 'My ',
    titleAccent: 'Pricing',
    titleAfterAccent: ' Plan',
    featuredLabel: 'Most Popular',
    priceSuffix: '/project',
    cta: 'Start Project',
    plans: [
      {
        name: 'Basic Plan',
        price: '$500',
        description: 'A focused design engagement for a compact landing page or feature.',
        features: ['1–2 key pages', 'UI/UX design', 'Responsive layout', 'Design source file', '1 revision round']
      },
      {
        name: 'Standard Plan',
        price: '$2500',
        description: 'A complete product website or app interface with a reusable design system.',
        features: ['Up to 8 screens', 'UX + UI design', 'Responsive states', 'Prototype included', '3 revision rounds'],
        featured: true
      },
      {
        name: 'Premium Plan',
        price: '$3500',
        description: 'End-to-end design support for a larger digital product or marketing experience.',
        features: ['10+ screens', 'UX research flow', 'Full design system', 'Advanced prototype', 'Priority support']
      }
    ]
  },

  testimonials: {
    kicker: 'Testimonials',
    titleLine1: 'Our Clients Awesome -',
    titleAccent: 'Testimonials',
    rating: '4.8',
    stars: '★★★★★',
    reviews: '250+ reviews',
    avatar: '/assets/images/testimonial-avatar.png',
    avatarAlt: 'Wilson Carey',
    clientName: 'Wilson Carey',
    clientRole: 'Agency Founder',
    quote: '“Working together made the product feel much more focused. Every screen became easier to understand while still feeling premium and distinctive.”'
  },

  blog: {
    kicker: 'My Blog',
    titleBeforeAccent: 'Latest ',
    titleAccent: 'Blog',
    viewAllCta: 'View All',
    readAriaPrefix: 'Read',
    posts: [
      {
        image: '/assets/images/blog-collaboration.png',
        meta: 'Design / 6 min',
        title: 'The Importance Of User In UI/UX Design'
      },
      {
        image: '/assets/images/blog-design-process.png',
        meta: 'Strategy / 8 min',
        title: 'The Behind Clear Choices In UI/UX Design'
      },
      {
        image: '/assets/images/blog-workshop.png',
        meta: 'Process / 7 min',
        title: 'The Role Of Prototyping In UI/UX Design'
      }
    ]
  },

  footer: {
    serviceIntro: {
      title: 'Services',
      text: 'UI/UX design for apps, SaaS, landing pages and responsive product websites.',
      socialText: 'Social:   ◉   ◌   ◍   ×'
    },
    contact: {
      title: 'Contact',
      email: 'hello@racheldavis.design',
      phone: '+1 202 555 0148'
    },
    usefulLinks: {
      title: 'Useful Links',
      items: ['About Me', 'Articles', 'Portfolio', 'Blog']
    },
    servicesList: {
      title: 'Services',
      items: ['Web App Design', 'Mobile App', 'Web Design', 'UI/UX Design']
    },
    bottomLeftBeforeAccent: 'Designed with ',
    bottomLeftAccent: 'care',
    legalText: 'Terms & Conditions   Privacy Policy'
  }
};
