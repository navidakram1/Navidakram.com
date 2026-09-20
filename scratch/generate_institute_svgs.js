const fs = require('fs');
const path = require('path');

const institutesDir = path.join(process.cwd(), 'public', 'images', 'institutes');
fs.mkdirSync(institutesDir, { recursive: true });

// 1. Griffith College (Cork & Dublin, Ireland)
// Elegant dark crest with crimson/gold accents and the iconic Griffith building facade
const griffithSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
  <defs>
    <radialGradient id="gc-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#c8102e" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#161722" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="gc-gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffd700"/>
      <stop offset="100%" stop-color="#c59b27"/>
    </linearGradient>
  </defs>
  
  <!-- Base Shield / Container -->
  <rect width="100" height="100" rx="20" fill="#181a26"/>
  <rect width="100" height="100" rx="20" fill="url(#gc-glow)"/>
  <rect x="1.5" y="1.5" width="97" height="97" rx="18.5" stroke="#c8102e" stroke-width="2" stroke-opacity="0.4"/>
  
  <!-- Building Architecture (Griffith College Clock Tower & Wings) -->
  <g transform="translate(10, 24) scale(0.8)" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <!-- Center Clock Tower -->
    <path d="M50 8 L50 2 M46 8 L54 8 L54 18 L46 18 Z M45 18 L55 18 L55 35 L45 35 Z"/>
    <circle cx="50" cy="26" r="3.5" fill="url(#gc-gold)" stroke="none"/>
    <path d="M41 35 L59 35 L59 62 L41 62 Z"/>
    <path d="M47 48 L53 48 M47 54 L53 54 M50 35 L50 62"/>
    
    <!-- Left Wing -->
    <path d="M5 38 L41 38 L41 62 L5 62 Z"/>
    <line x1="14" y1="44" x2="14" y2="56"/>
    <line x1="23" y1="44" x2="23" y2="56"/>
    <line x1="32" y1="44" x2="32" y2="56"/>
    
    <!-- Right Wing -->
    <path d="M59 38 L95 38 L95 62 L59 62 Z"/>
    <line x1="68" y1="44" x2="68" y2="56"/>
    <line x1="77" y1="44" x2="77" y2="56"/>
    <line x1="86" y1="44" x2="86" y2="56"/>
    
    <!-- Roof Details -->
    <path d="M4 38 L41 34 M59 34 L96 38"/>
  </g>
  
  <!-- Text Badge at Bottom -->
  <rect x="15" y="77" width="70" height="15" rx="4" fill="#c8102e" fill-opacity="0.25" stroke="#c8102e" stroke-opacity="0.5"/>
  <text x="50" y="87.5" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="7.5" font-weight="800" text-anchor="middle" letter-spacing="1">GRIFFITH</text>
</svg>`;

// 2. Milestone College (Dhaka, Bangladesh)
// Sleek dark badge with the open book of knowledge and torch flame
const milestoneSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
  <defs>
    <radialGradient id="ms-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#161722" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="ms-flame" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#f97316"/>
      <stop offset="100%" stop-color="#ef4444"/>
    </linearGradient>
  </defs>
  
  <rect width="100" height="100" rx="20" fill="#181a26"/>
  <rect width="100" height="100" rx="20" fill="url(#ms-glow)"/>
  <rect x="1.5" y="1.5" width="97" height="97" rx="18.5" stroke="#3b82f6" stroke-width="2" stroke-opacity="0.4"/>
  
  <!-- Flame of Knowledge at Top -->
  <path d="M50 12 C46 20 44 24 47 28 C49 31 53 31 54 28 C56 24 53 20 50 12 Z" fill="url(#ms-flame)"/>
  
  <!-- Torch Base -->
  <path d="M45 28 L55 28 L53 33 L47 33 Z" fill="#60a5fa"/>
  
  <!-- Open Book -->
  <g stroke="#ffffff" stroke-width="2.2" stroke-linejoin="round" fill="none">
    <!-- Left Page -->
    <path d="M50 63 C40 60 25 60 18 63 L18 37 C25 34 40 34 50 37 Z" fill="#1e3a8a" fill-opacity="0.5"/>
    <!-- Right Page -->
    <path d="M50 63 C60 60 75 60 82 63 L82 37 C75 34 60 34 50 37 Z" fill="#1e3a8a" fill-opacity="0.5"/>
    <!-- Center Spine -->
    <line x1="50" y1="36" x2="50" y2="64" stroke="#60a5fa" stroke-width="2.5"/>
  </g>
  
  <!-- Letters A & B on Pages -->
  <text x="34" y="52" fill="#93c5fd" font-family="system-ui, sans-serif" font-size="12" font-weight="900" text-anchor="middle">A</text>
  <text x="66" y="52" fill="#93c5fd" font-family="system-ui, sans-serif" font-size="12" font-weight="900" text-anchor="middle">B</text>
  
  <!-- Banner at Bottom -->
  <rect x="12" y="74" width="76" height="16" rx="5" fill="#3b82f6" fill-opacity="0.25" stroke="#3b82f6" stroke-opacity="0.5"/>
  <text x="50" y="85.5" fill="#ffffff" font-family="system-ui, sans-serif" font-size="8" font-weight="800" text-anchor="middle" letter-spacing="0.5">MILESTONE</text>
</svg>`;

// 3. Mohammadpur Govt. High School
// Dark shield badge with science flask, open book, and hockey stick
const mohammadpurSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
  <defs>
    <radialGradient id="mg-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#161722" stop-opacity="0"/>
    </radialGradient>
  </defs>
  
  <rect width="100" height="100" rx="20" fill="#181a26"/>
  <rect width="100" height="100" rx="20" fill="url(#mg-glow)"/>
  <rect x="1.5" y="1.5" width="97" height="97" rx="18.5" stroke="#10b981" stroke-width="2" stroke-opacity="0.4"/>
  
  <!-- School Shield Emblem -->
  <path d="M50 14 C65 14 74 16 76 22 C76 48 68 64 50 72 C32 64 24 48 24 22 C26 16 35 14 50 14 Z" fill="#0f291e" stroke="#34d399" stroke-width="2" stroke-linejoin="round"/>
  
  <!-- Open Book inside shield -->
  <path d="M50 38 C44 36 37 36 34 38 L34 26 C37 24 44 24 50 26 C56 24 63 24 66 26 L66 38 C63 36 56 36 50 38 Z" fill="#064e3b" stroke="#ffffff" stroke-width="1.4"/>
  
  <!-- Lab Flask (Science) -->
  <path d="M38 45 L42 45 L42 48 L46 55 C47 57 45 59 43 59 L37 59 C35 59 33 57 34 55 L38 48 Z" fill="#34d399" fill-opacity="0.4" stroke="#ffffff" stroke-width="1.2"/>
  
  <!-- Sports (Hockey stick & ball) -->
  <path d="M54 45 L62 55 C64 57 66 57 67 55" stroke="#f87171" stroke-width="2" stroke-linecap="round"/>
  <circle cx="56" cy="56" r="2" fill="#fbbf24"/>
  
  <!-- Year 1967 -->
  <text x="50" y="66" fill="#6ee7b7" font-family="system-ui, sans-serif" font-size="6" font-weight="700" text-anchor="middle">ESTD 1967</text>
  
  <!-- Bottom Text Label -->
  <rect x="15" y="78" width="70" height="14" rx="4" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-opacity="0.4"/>
  <text x="50" y="88" fill="#ffffff" font-family="system-ui, sans-serif" font-size="7" font-weight="800" text-anchor="middle" letter-spacing="0.5">MGHS DHAKA</text>
</svg>`;

fs.writeFileSync(path.join(institutesDir, 'griffith-college.svg'), griffithSvg, 'utf8');
fs.writeFileSync(path.join(institutesDir, 'milestone-college.svg'), milestoneSvg, 'utf8');
fs.writeFileSync(path.join(institutesDir, 'mohammadpur-govt-high-school.svg'), mohammadpurSvg, 'utf8');

console.log('Successfully generated premium, dark-mode harmonized SVG badges for all institutes!');
