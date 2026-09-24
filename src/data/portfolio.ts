export interface NavItem {
  id: string;
  label: string;
  iconName: string;
}

export interface SkillItem {
  name: string;
  category: "coding" | "tools" | "platforms" | "languages" | "general";
  percentage?: number;
  icon?: string;
  color?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  iconName: string;
}

export interface PricingItem {
  name: string;
  price: string;
  unit: string;
  features: { text: string; included: boolean }[];
  isPopular?: boolean;
  stripeUrl: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  comment: string;
  avatar: string;
}

export interface ExperienceItem {
  period: string;
  company: string;
  role: string;
  description: string;
  logo?: string;
  websiteUrl?: string;
  highlights?: string[];
}

export interface EducationItem {
  period: string;
  institution: string;
  location: string;
  degree: string;
  certificateUrl?: string;
  rankInfo?: string;
  image?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  type: string;
  image: string;
  link: string;
  isVideo?: boolean;
  videoUrl?: string;
}

export interface BlogPostItem {
  id: string;
  title: string;
  date: string;
  category: string;
  snippet: string;
  image?: string;
  link: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  period?: string;
  iconName?: string;
  badge?: string;
  url?: string;
}

export interface TeamMemberItem {
  id?: string;
  name?: string;
  role: string;
  company: string;
  image: string;
  specialty: string;
  badge?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

export interface GamingItem {
  id: string;
  name: string;
  genre: string;
  tagline: string;
  rank: string;
  role: string;
  platform: string;
  image: string;
  accentColor: string;
  badge: string;
  stats: { label: string; value: string }[];
}

export const portfolioData = {
  personal: {
    name: "Sk Navid Akram",
    titles: [
      "Full-Stack Developer",
      "Software Engineer",
      "IT Support Specialist",
      "Operations Manager",
      "Laravel & React Expert"
    ],
    bio: "Experienced Full-Stack Developer & IT Support Specialist with 6+ years in technical troubleshooting, SaaS development, and cloud solutions.",
    extendedBio: "Owner of Rabbitguy.com (Fast Rabbit Ltd.) & Government-Certified Freelancer. Proven track record delivering Laravel SaaS applications, motion-animated platforms, and managing 1,350+ freelance client projects worldwide with a 4.9-star rating.",
    location: "Cork, Ireland",
    phone: "+353 85 195 6384",
    phoneAlt: "+880 1673-998507",
    status: "Freelance Available",
    email: "Me@navidakram.com",
    cvUrl: "https://navidakram.com/cv.pdf",
    whatsappUrl: "https://api.whatsapp.com/send/?phone=353851956384&text&app_absent=0",
    stripeGeneralUrl: "https://buy.stripe.com/cN2aHUf8Z3Ka6QMcNQ",
    googleKnowledgeUrl: "https://g.co/kgs/rYXxTf",
    rabbitGuyUrl: "https://rabbitguy.com/",
    certificateUrl: "/images/certificates/certificate-hsc.png",
    heroImages: [
      "/images/profile/hero-1.jpg",
      "/images/profile/hero-2.jpg",
      "/images/profile/hero-3.jpg",
      "/images/profile/hero-4.jpg"
    ],
    heroBgImage: "/images/profile/hero-1.jpg",
    avatarImage: "/images/profile/avatar.png",
    mascotImage: "/images/profile/avatar.png",
    mascotGif: "/images/brand/rabbit-mascot.gif",
    photoPortrait: "/images/profile/hero-2.jpg",
    socialLinks: [
      { name: "Facebook", icon: "facebook", url: "https://facebook.com" },
      { name: "Instagram", icon: "instagram", url: "https://instagram.com" },
      { name: "WhatsApp", icon: "message-circle", url: "https://api.whatsapp.com/send/?phone=353851956384&text&app_absent=0" },
      { name: "Discord", icon: "disc", url: "https://discord.com" },
      { name: "YouTube", icon: "youtube", url: "https://youtube.com" },
      { name: "GitHub", icon: "github", url: "https://github.com" },
      { name: "LinkedIn", icon: "linkedin", url: "http://linkedin.com/in/navidakram" },
      { name: "Telegram", icon: "send", url: "https://t.me" },
      { name: "Stripe", icon: "credit-card", url: "https://buy.stripe.com/cN2aHUf8Z3Ka6QMcNQ" }
    ]
  },

  skillsIcons: [
    { name: "React", icon: "⚛️", color: "#61dafb" },
    { name: "Next.js", icon: "▲", color: "#ffffff" },
    { name: "TypeScript", icon: "TS", color: "#3178c6" },
    { name: "Node.js", icon: "🟢", color: "#339933" },
    { name: "Python", icon: "🐍", color: "#3776ab" },
    { name: "PHP", icon: "🐘", color: "#777bb4" },
    { name: "Java", icon: "☕", color: "#f89820" },
    { name: "SQL", icon: "🗄️", color: "#00758f" },
    { name: "Docker", icon: "🐳", color: "#2496ed" },
    { name: "AWS", icon: "☁️", color: "#ff9900" },
    { name: "Firebase", icon: "🔥", color: "#ffca28" },
    { name: "Android App", icon: "📱", color: "#3ddc84" },
    { name: "GitHub", icon: "🐙", color: "#ffffff" },
    { name: "GitLab", icon: "🦊", color: "#fc6d26" },
    { name: "CSS3", icon: "🎨", color: "#264de4" },
    { name: "WordPress", icon: "📝", color: "#21759b" }
  ],

  services: [
    {
      title: "App & Web Development",
      description: "End-to-end development of robust SaaS applications, Laravel backends, interactive React interfaces, and mobile applications.",
      iconName: "Smartphone"
    },
    {
      title: "IT Support & Cloud Solutions",
      description: "System administration, POS support, AWS & Docker deployments, CI/CD pipelines, and proactive technical troubleshooting.",
      iconName: "BarChart3"
    },
    {
      title: "UI/UX & Interactive Prototyping",
      description: "Modern, motion-animated responsive interfaces and prototypes engineered for high conversion and intuitive user journeys.",
      iconName: "Layout"
    },
    {
      title: "Operations & Project Management",
      description: "Managing project lifecycles, sprint delivery, team coordination, customer success, and digital marketing strategy.",
      iconName: "CheckSquare"
    }
  ],

  pricing: [
    {
      name: "Personal Package",
      price: "$29",
      unit: "Hour",
      features: [
        { text: "App & Web Development", included: true },
        { text: "Installation & Configuration", included: true },
        { text: "Patch Management", included: true },
        { text: "Graphics & UI Support", included: true },
        { text: "User Management", included: true },
        { text: "Ongoing Maintenance", included: false }
      ],
      isPopular: false,
      stripeUrl: "https://buy.stripe.com/6oEeYad0R3Ka4IE7sx"
    },
    {
      name: "Company Package",
      price: "$59",
      unit: "Hour",
      features: [
        { text: "App & Web Development", included: true },
        { text: "Installation & Configuration", included: true },
        { text: "Patch Management", included: true },
        { text: "Graphics & UI Support", included: true },
        { text: "Multi-User Management", included: true },
        { text: "Full Ongoing Maintenance", included: true }
      ],
      isPopular: true,
      stripeUrl: "https://buy.stripe.com/6oEeYad0R3Ka4IE7sx"
    }
  ],

  testimonials: [
    {
      name: "Nick Rasmussen",
      role: "Partnerships Manager",
      company: "Envato",
      comment: "We are enjoying working with you. Best wishes to you and your continuous great work.",
      avatar: "/images/testimonials/testimonial-1.jpg"
    },
    {
      name: "Sam McCraw",
      role: "Partnerships Manager",
      company: "placeit.net",
      comment: "Great communication, provided everything needed, they are kind and a great influencer overall. A pleasure to work with. Thank you!",
      avatar: "/images/testimonials/testimonial-2.jpg"
    },
    {
      name: "Andrew Wang",
      role: "Director",
      company: "Maximfile",
      comment: "I would recommend them as they work hard and do nice work, always making sure deliverables meet quality standards.",
      avatar: "/images/testimonials/testimonial-3.png"
    }
  ],

  clients: [
    { name: "Upwork", logo: "/images/clients/upwork.svg" },
    { name: "Fiverr", logo: "/images/clients/fiverr.svg" },
    { name: "Envato", logo: "/images/clients/envato.svg" },
    { name: "Freelancer", logo: "/images/clients/freelancer.svg" }
  ],

  funFacts: [
    { count: "1,850+", label: "Chess ELO Peak", icon: "Trophy" },
    { count: "8,200+", label: "Clash Royale Trophies", icon: "Crown" },
    { count: "1,350+", label: "Projects Delivered", icon: "CheckSquare" },
    { count: "5,000+", label: "Tactical Gaming Hours", icon: "Gamepad2" }
  ],

  gaming: [
    {
      id: "pubg",
      name: "PUBG: Battlegrounds",
      genre: "Battle Royale / Tactical Shooter",
      tagline: "Drop in, loot up, and survive till the final circle.",
      rank: "Conqueror / Ace Tier",
      role: "Assault & Sniper",
      platform: "PC & Mobile",
      image: "/images/gaming/pubg.jpg",
      accentColor: "#f59e0b",
      badge: "Chicken Dinner Specialist",
      stats: [
        { label: "Play Style", value: "Aggressive Rush" },
        { label: "Favorite Weapon", value: "M416 + AWM" },
        { label: "Survival Rate", value: "Top 2%" }
      ]
    },
    {
      id: "valorant",
      name: "Valorant",
      genre: "Tactical Hero Shooter (5v5)",
      tagline: "Pixel-perfect crosshairs, fast reaction time, and tactical entry.",
      rank: "Immortal / Diamond",
      role: "Duelist & Initiator",
      platform: "PC (Riot)",
      image: "/images/gaming/valorant.jpg",
      accentColor: "#00d2ff",
      badge: "Clutch Master",
      stats: [
        { label: "Main Agent", value: "Jett / Reyna" },
        { label: "Headshot Rate", value: "28.5%" },
        { label: "Clutch Success", value: "High Impact" }
      ]
    },
    {
      id: "cod-warzone",
      name: "Call of Duty: Warzone",
      genre: "Fast-Paced Battle Royale",
      tagline: "Verdansk veteran with crisp movement and long-range sniper accuracy.",
      rank: "Top Tier Resurgence",
      role: "Squad Leader & Pointman",
      platform: "PC / Crossplay",
      image: "/images/gaming/cod-warzone.jpg",
      accentColor: "#10b981",
      badge: "Verdansk Veteran",
      stats: [
        { label: "Favorite Loadout", value: "Kar98k + SMG" },
        { label: "Mode", value: "Resurgence & Trios" },
        { label: "KD Ratio", value: "3.2+ Competitive" }
      ]
    },
    {
      id: "clash-royale",
      name: "Clash Royale",
      genre: "Real-Time Strategy / Tower Defense",
      tagline: "Strict elixir counting, counter-pushes, and 3-crown domination.",
      rank: "Ultimate Champion (8K+)",
      role: "Deck Builder & Strategist",
      platform: "Mobile (iOS/Android)",
      image: "/images/gaming/clash-royale.jpg",
      accentColor: "#a855f7",
      badge: "Arena Legend",
      stats: [
        { label: "Favorite Card", value: "P.E.K.K.A & Miner" },
        { label: "Trophies", value: "8,200+ Peak" },
        { label: "Archetype", value: "Bridge Spam / Control" }
      ]
    },
    {
      id: "chess",
      name: "Chess (Chess.com)",
      genre: "Classical & Rapid Strategy",
      tagline: "Tactical calculation, pawn structure mastery, and endgame precision.",
      rank: "1850+ Rating (Rapid/Blitz)",
      role: "Positional & Tactical",
      platform: "Chess.com / FIDE Rules",
      image: "/images/gaming/chess.webp",
      accentColor: "#38bdf8",
      badge: "Tactical Mind",
      stats: [
        { label: "Favorite Opening", value: "Sicilian & Queen's Gambit" },
        { label: "Peak Rating", value: "1850+ ELO" },
        { label: "Time Control", value: "10m Rapid / 3m Blitz" }
      ]
    }
  ],

  certifications: [
    {
      name: "Technical Support Fundamentals",
      issuer: "Google",
      badge: "Google Certified",
      iconName: "ShieldCheck"
    },
    {
      name: "Network Security Certification",
      issuer: "Cisco Learning & Certifications",
      badge: "Cisco Certified",
      iconName: "Lock"
    },
    {
      name: "Government-Certified Freelancer",
      issuer: "ICT Division Bangladesh",
      badge: "Govt. Verified",
      iconName: "Award"
    },
    {
      name: "Digital IT Expert Certification",
      issuer: "National IT Framework",
      badge: "IT Expert",
      iconName: "CheckCircle2"
    }
  ],

  toolStack: [
    { name: "GitLab / GitHub", percentage: 95 },
    { name: "Xcode", percentage: 85 },
    { name: "Figma & UI/UX", percentage: 80 },
    { name: "Photoshop & Illustrator", percentage: 80 }
  ],

  programmingSkills: [
    { name: "JavaScript & TypeScript", percentage: 95 },
    { name: "Python", percentage: 85 },
    { name: "PHP & Laravel", percentage: 90 },
    { name: "Java & OOP", percentage: 85 }
  ],

  codingSkills: [
    { name: "React & Next.js", percentage: 95 },
    { name: "SQL & MySQL", percentage: 90 },
    { name: "Docker & AWS", percentage: 80 },
    { name: "WordPress & Shopify", percentage: 85 }
  ],

  languages: [
    { name: "English", percentage: 95 },
    { name: "Bangla", percentage: 100 },
    { name: "Hindi", percentage: 75 },
    { name: "Urdu", percentage: 75 },
    { name: "French", percentage: 50 }
  ],

  platforms: [
    { name: "Linux, macOS & Windows", percentage: 95 },
    { name: "AWS & Firebase Cloud", percentage: 85 },
    { name: "VS Code & IntelliJ", percentage: 90 },
    { name: "VMware & POS Systems", percentage: 85 }
  ],

  knowledge: [
    "SaaS Architecture & System Analysis",
    "IT Support & Hardware/Software Diagnostics",
    "SQL Database & RESTful APIs",
    "Cloud Computing (AWS EC2/S3, Docker)",
    "Agile Operations & Project Management",
    "Git, GitLab & CI/CD Pipelines",
    "UI/UX Design & Responsive Layouts",
    "Digital Marketing & Stripe Payments",
    "Ticket Management & Help Desk Systems",
    "AI Integration (OpenAI API)"
  ],

  experience: [
    {
      period: "Dec 2022 - Present",
      company: "Fast Rabbit Ltd. (Rabbitguy.com)",
      role: "Owner, Full-Stack Developer & Operations Manager",
      description: "UK-registered digital service agency (#14561616). Delivered Laravel SaaS platforms, motion-animated websites, e-commerce solutions, and digital consultancy. Achieved 40% annual growth ($30k+ in sales across 125+ projects with a 5-person team) and 22,000+ Facebook audience.",
      logo: "/images/brand/rabbit-mascot.gif",
      websiteUrl: "https://rabbitguy.com/",
      highlights: ["UK Registered (#14561616)", "$30k+ Sales", "125+ Projects", "40% Growth"]
    },
    {
      period: "June 2024 - Present",
      company: "Maxol Tivoli (Cork, Ireland)",
      role: "General Assistant & Supervisor",
      description: "Supervise daily store operations and team workflows. Oversee €5,000+ in shift sales with high transaction accuracy. Provided technical support for POS systems, transaction troubleshooting, and workflow optimization.",
      highlights: ["€5k+ Sales / Shift", "POS Systems Support", "Team Leadership"]
    },
    {
      period: "Aug 2018 - Feb 2022",
      company: "Fiverr.com",
      role: "Level 2 Top Seller Freelancer",
      description: "Completed 1,350+ orders across 3 accounts with 1,280+ five-star reviews and an exceptional 4.9-star rating delivering top-tier web development, e-commerce, and design solutions.",
      logo: "/images/experience/fiverr-logo.svg",
      highlights: ["Level 2 Top Seller", "1,350+ Orders", "1,280+ Reviews", "4.9 Rating"]
    },
    {
      period: "June 2023 - June 2024",
      company: "Envato Inc. (Elements.envato.com)",
      role: "Tech Influencer Marketer (Contract)",
      description: "Secured 30 tech influencers driving $20,000 in campaign revenue during contract period. Collaborated on digital asset promotions, creator partnerships, and web template marketing.",
      logo: "/images/clients/envato.svg",
      highlights: ["30 Influencers Onboarded", "$20,000 Campaign Revenue"]
    },
    {
      period: "2020 - 2024",
      company: "Esuja.com.bd",
      role: "CTO & Co-Founder",
      description: "E-commerce platform in Bangladesh providing 250+ global skincare brands with automated catalog and inventory management.",
      highlights: ["250+ Brands", "Custom E-commerce Engine"]
    }
  ],

  education: [
    {
      period: "2023 - Expected 2026",
      institution: "Griffith College",
      location: "Cork, Ireland",
      degree: "BSc (Hons) in Computing Science",
      image: "/images/institutes/griffith-college.svg",
      rankInfo: "Modules: Web Dev, Systems Analysis, Cloud Computing, AI, Cyber Security, Data Analytics, Networking"
    },
    {
      period: "2020 - 2022",
      institution: "Milestone College",
      location: "Dhaka, Bangladesh",
      degree: "Higher Secondary Certificate (HSC)",
      image: "/images/institutes/milestone-college.svg",
      rankInfo: "Perfect Academic Standing — GPA: 5.00 / 5.00",
      certificateUrl: "https://eboardresults.com/v2/home"
    },
    {
      period: "2009 - 2020",
      institution: "Mohammadpur Govt. High School",
      location: "Dhaka, Bangladesh",
      degree: "Secondary School Certificate (SSC)",
      image: "/images/institutes/mohammadpur-govt-high-school.svg",
      rankInfo: "One of the oldest renowned public institutions in Dhaka",
      certificateUrl: "https://eboardresults.com/v2/home"
    }
  ],

  projects: [
    {
      id: "crypto-app",
      title: "Cryptocurrency Dashboard Application",
      category: "Content",
      type: "Web Application",
      image: "/images/projects/crypto-app.jpg",
      link: "https://navidakram.com/portfolio-archive/cryptocurrency-dashboard-app/"
    },
    {
      id: "speedcurve-analytics",
      title: "Speedcurve Performance Analytics Tool",
      category: "Video",
      type: "Analytics & Monitoring",
      image: "/images/projects/speedcurve.jpg",
      link: "https://vimeo.com/97102654",
      isVideo: true,
      videoUrl: "https://vimeo.com/97102654"
    },
    {
      id: "smart-city",
      title: "Mobile Smart City Application",
      category: "Gallery",
      type: "Mobile App",
      image: "/images/projects/smart-city.jpg",
      link: "https://navidakram.com/portfolio-archive/mobile-smart-city-app/"
    },
    {
      id: "analytics-tool",
      title: "Analytics Dashboard Software Tool",
      category: "Content",
      type: "SaaS Software",
      image: "/images/projects/analytics-tool.jpg",
      link: "https://navidakram.com/portfolio-archive/analytics-dashboard-software-tool/"
    },
    {
      id: "investment-app",
      title: "Investment Mobile Application",
      category: "Image",
      type: "FinTech App",
      image: "/images/projects/investment-app.jpg",
      link: "https://navidakram.com/portfolio-archive/investment-mobile-application/"
    },
    {
      id: "automation-production",
      title: "Automation System Production",
      category: "Link",
      type: "System Automation",
      image: "/images/projects/automation.jpg",
      link: "https://bslthemes.com"
    }
  ],

  blogPosts: [
    {
      id: "brand-identity",
      title: "Brand Identity with Code",
      date: "April 28, 2020",
      category: "Design & Code",
      snippet: "Creating a digital representation of a brand’s values, personality, and message through web design, user experience, and visual elements.",
      image: "/images/articles/article-1.jpg",
      link: "https://navidakram.com/brand-identity-with-code/"
    },
    {
      id: "data-center",
      title: "Data Center Infrastructure",
      date: "April 28, 2020",
      category: "Code & DevOps",
      snippet: "Servers, storage systems, networking equipment, and cooling systems. Crucial insights for ensuring reliability, performance, and scalability.",
      image: "/images/articles/article-2.jpg",
      link: "https://navidakram.com/data-center-infrastructure/"
    },
    {
      id: "music-player-design",
      title: "Music Player Design",
      date: "April 28, 2020",
      category: "Music & UI",
      snippet: "When designing a music player, it is important to consider user-friendly features such as intuitive navigation, audio visualization, and customization.",
      image: "/images/articles/article-3.jpg",
      link: "https://navidakram.com/music-player-design/"
    },
    {
      id: "hello-world",
      title: "Welcome to navidakram.com",
      date: "February 12, 2025",
      category: "Updates",
      snippet: "Next generation digital portfolio, interactive showcase of full-stack engineering, SaaS projects, and freelance services.",
      link: "https://navidakram.com/hello-world/"
    }
  ],

  teamMembers: [
    {
      id: "lead-architect",
      role: "Lead Architect & Full-Stack",
      company: "Fast Rabbit Ltd.",
      image: "/images/team/team-1.jpg",
      specialty: "Full-Stack & Cloud Architecture",
      badge: "Lead Dev"
    },
    {
      id: "frontend-engineer",
      role: "Senior UI/UX & Frontend",
      company: "Fast Rabbit Ltd.",
      image: "/images/team/team-2.jpg",
      specialty: "Next.js, React, Design Systems",
      badge: "Frontend Lead"
    },
    {
      id: "backend-engineer",
      role: "Backend & Systems Engineer",
      company: "Fast Rabbit Ltd.",
      image: "/images/team/team-3.jpg",
      specialty: "Java, Python, PostgreSQL, AWS",
      badge: "Backend Lead"
    },
    {
      id: "mobile-specialist",
      role: "Mobile App Specialist",
      company: "Fast Rabbit Ltd.",
      image: "/images/team/team-4.jpg",
      specialty: "Android, iOS, React Native",
      badge: "Mobile Lead"
    }
  ]
};
