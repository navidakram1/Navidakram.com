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
    certificateUrl: "https://navidakram.com/wp-content/uploads/2023/02/6266dadd-27f1-4dd6-8ef0-37400d0e262c.png",
    heroImages: [
      "https://navidakram.com/wp-content/uploads/2025/02/434724407_2933443146798509_2389628769491449782_n.jpg",
      "https://navidakram.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-12-at-01.02.19_9c48cead-scaled-e1739322300550-1200x1127.jpg",
      "https://navidakram.com/wp-content/uploads/2023/09/Firefly-Inpaint-20230619120849-1200x1468.jpg",
      "https://navidakram.com/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-19-at-12.30.07-e1687156471307.jpg"
    ],
    heroBgImage: "https://navidakram.com/wp-content/uploads/2025/02/434724407_2933443146798509_2389628769491449782_n.jpg",
    avatarImage: "https://navidakram.com/wp-content/uploads/2024/02/navidakram.com_-1200x1166.png",
    mascotImage: "https://navidakram.com/wp-content/uploads/2024/02/navidakram.com_-1200x1166.png",
    mascotGif: "https://navidakram.com/wp-content/uploads/2025/04/3.-no-BG.gif",
    photoPortrait: "https://navidakram.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-12-at-01.02.19_9c48cead-scaled-e1739322300550-1200x1127.jpg",
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
    { name: "PHP", icon: "🐘", color: "#777bb4" },
    { name: "Java", icon: "☕", color: "#f89820" },
    { name: "Python", icon: "🐍", color: "#3776ab" },
    { name: "SQL", icon: "🗄️", color: "#00758f" },
    { name: "GitLab", icon: "🦊", color: "#fc6d26" },
    { name: "CSS3", icon: "🎨", color: "#264de4" },
    { name: "Node.js", icon: "🟢", color: "#339933" },
    { name: "HTML5", icon: "📄", color: "#e34f26" },
    { name: "Docker", icon: "🐳", color: "#2496ed" },
    { name: "AWS", icon: "☁️", color: "#ff9900" },
    { name: "Firebase", icon: "🔥", color: "#ffca28" },
    { name: "Android App", icon: "📱", color: "#3ddc84" },
    { name: "GitHub", icon: "🐙", color: "#ffffff" },
    { name: "Chess", icon: "♟️", color: "#e2e8f0" },
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
      avatar: "https://navidakram.com/wp-content/uploads/2022/09/1537517792231-92x92-1.jpg"
    },
    {
      name: "Sam McCraw",
      role: "Partnerships Manager",
      company: "placeit.net",
      comment: "Great communication, provided everything needed, they are kind and a great influencer overall. A pleasure to work with. Thank you!",
      avatar: "https://navidakram.com/wp-content/uploads/2022/09/images-92x92-1.jpg"
    },
    {
      name: "Andrew Wang",
      role: "Director",
      company: "Maximfile",
      comment: "I would recommend them as they work hard and do nice work, always making sure deliverables meet quality standards.",
      avatar: "https://navidakram.com/wp-content/uploads/2022/09/ScreenShot_20220830141526-184x184.png"
    }
  ],

  clients: [
    { name: "Upwork", logo: "https://navidakram.com/wp-content/uploads/2022/07/brand2_w-184x62.png" },
    { name: "Envato", logo: "https://navidakram.com/wp-content/uploads/2022/07/brand1_w-184x62.png" },
    { name: "Fiverr", logo: "https://navidakram.com/wp-content/uploads/2022/07/brand3_w-184x62.png" },
    { name: "Freelancer", logo: "https://navidakram.com/wp-content/uploads/2025/04/brand1_w.png" }
  ],

  funFacts: [
    { count: "1,350+", label: "Orders Delivered", icon: "CheckSquare" },
    { count: "1,280+", label: "5-Star Client Reviews", icon: "Trophy" },
    { count: "45+", label: "Mentees Taught", icon: "Coffee" },
    { count: "22K+", label: "Followers & Reach", icon: "Globe" }
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
      logo: "https://navidakram.com/wp-content/uploads/2025/04/3.-no-BG.gif",
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
      logo: "https://navidakram.com/wp-content/uploads/2025/04/fiverr-logo.png",
      highlights: ["Level 2 Top Seller", "1,350+ Orders", "1,280+ Reviews", "4.9 Rating"]
    },
    {
      period: "June 2023 - June 2024",
      company: "Envato Inc. (Elements.envato.com)",
      role: "Tech Influencer Marketer (Contract)",
      description: "Secured 30 tech influencers driving $20,000 in campaign revenue during contract period. Collaborated on digital asset promotions, creator partnerships, and web template marketing.",
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
      rankInfo: "Modules: Web Dev, Systems Analysis, Cloud Computing, AI, Cyber Security, Data Analytics, Networking"
    },
    {
      period: "2020 - 2022",
      institution: "Milestone College",
      location: "Dhaka, Bangladesh",
      degree: "Higher Secondary Certificate (HSC)",
      rankInfo: "Perfect Academic Standing — GPA: 5.00 / 5.00",
      certificateUrl: "https://eboardresults.com/v2/home"
    },
    {
      period: "2009 - 2020",
      institution: "Mohammadpur Govt. High School",
      location: "Dhaka, Bangladesh",
      degree: "Secondary School Certificate (SSC)",
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
      image: "https://navidakram.com/wp-content/uploads/2020/04/work-r2.jpg",
      link: "https://navidakram.com/portfolio-archive/cryptocurrency-dashboard-app/"
    },
    {
      id: "speedcurve-analytics",
      title: "Speedcurve Performance Analytics Tool",
      category: "Video",
      type: "Analytics & Monitoring",
      image: "https://navidakram.com/wp-content/uploads/2020/04/work2-1.jpg",
      link: "https://vimeo.com/97102654",
      isVideo: true,
      videoUrl: "https://vimeo.com/97102654"
    },
    {
      id: "smart-city",
      title: "Mobile Smart City Application",
      category: "Gallery",
      type: "Mobile App",
      image: "https://navidakram.com/wp-content/uploads/2020/04/work-r9.jpg",
      link: "https://navidakram.com/portfolio-archive/mobile-smart-city-app/"
    },
    {
      id: "analytics-tool",
      title: "Analytics Dashboard Software Tool",
      category: "Content",
      type: "SaaS Software",
      image: "https://navidakram.com/wp-content/uploads/2020/04/work-r4.jpg",
      link: "https://navidakram.com/portfolio-archive/analytics-dashboard-software-tool/"
    },
    {
      id: "investment-app",
      title: "Investment Mobile Application",
      category: "Image",
      type: "FinTech App",
      image: "https://navidakram.com/wp-content/uploads/2020/04/work-r8.jpg",
      link: "https://navidakram.com/portfolio-archive/investment-mobile-application/"
    },
    {
      id: "automation-production",
      title: "Automation System Production",
      category: "Link",
      type: "System Automation",
      image: "https://navidakram.com/wp-content/uploads/2020/04/work6-1.jpg",
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
      image: "https://navidakram.com/wp-content/uploads/2020/04/news1.jpg",
      link: "https://navidakram.com/brand-identity-with-code/"
    },
    {
      id: "data-center",
      title: "Data Center Infrastructure",
      date: "April 28, 2020",
      category: "Code & DevOps",
      snippet: "Servers, storage systems, networking equipment, and cooling systems. Crucial insights for ensuring reliability, performance, and scalability.",
      image: "https://navidakram.com/wp-content/uploads/2020/04/work1-2.jpg",
      link: "https://navidakram.com/data-center-infrastructure/"
    },
    {
      id: "music-player-design",
      title: "Music Player Design",
      date: "April 28, 2020",
      category: "Music & UI",
      snippet: "When designing a music player, it is important to consider user-friendly features such as intuitive navigation, audio visualization, and customization.",
      image: "https://navidakram.com/wp-content/uploads/2020/04/blog3.jpg",
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
      image: "https://navidakram.com/wp-content/uploads/2023/04/50824462_1202518959905424_3492638396898082816_n.jpg",
      specialty: "Full-Stack & Cloud Architecture",
      badge: "Lead Dev"
    },
    {
      id: "frontend-engineer",
      role: "Senior UI/UX & Frontend",
      company: "Fast Rabbit Ltd.",
      image: "https://navidakram.com/wp-content/uploads/2023/04/avatar_v4vjcj6p8rr.jpg",
      specialty: "Next.js, React, Design Systems",
      badge: "Frontend Lead"
    },
    {
      id: "backend-engineer",
      role: "Backend & Systems Engineer",
      company: "Fast Rabbit Ltd.",
      image: "https://navidakram.com/wp-content/uploads/2023/04/162138306_4131923796838377_980558034971635657_o-e1681200442808.jpg",
      specialty: "Java, Python, PostgreSQL, AWS",
      badge: "Backend Lead"
    },
    {
      id: "mobile-specialist",
      role: "Mobile App Specialist",
      company: "Fast Rabbit Ltd.",
      image: "https://navidakram.com/wp-content/uploads/2023/04/272813225_659424895295694_8955442310053691584_n-e1681200604877.jpg",
      specialty: "Android, iOS, React Native",
      badge: "Mobile Lead"
    }
  ]
};
