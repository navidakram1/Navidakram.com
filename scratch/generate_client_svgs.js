const fs = require('fs');
const path = require('path');

// 1. Upwork SVG (viewBox 0 0 200 60)
// Features the official Upwork mark + bold white wordmark
const upworkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 60" fill="none">
  <!-- Upwork Iconic Mark -->
  <g transform="translate(10, 10) scale(1.66)">
    <path fill="#14a800" d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
  </g>
  <!-- Wordmark "Upwork" -->
  <text x="62" y="38" fill="#ffffff" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="700" letter-spacing="-0.5">Upwork</text>
</svg>`;

// 2. Fiverr SVG (viewBox 0 0 220 60)
// Official Fiverr wordmark with green dot
const fiverrSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 60" fill="none">
  <g transform="translate(10, 8) scale(0.36)">
    <path fill="#ffffff" d="m 366.74157,58.876401 h -13.93258 c -8.98877,0 -13.93259,6.741572 -13.93259,18.426965 V 119.10112 H 311.91011 V 58.876401 h -11.23595 c -8.98877,0 -13.93259,6.741572 -13.93259,18.426965 V 119.10112 H 259.77528 V 36.404491 h 26.96629 v 12.58427 c 4.49439,-9.887641 10.33708,-12.58427 19.32585,-12.58427 h 32.80898 v 12.58427 c 4.49439,-9.887641 10.33708,-12.58427 19.32585,-12.58427 h 8.98876 z M 253.48315,84.044939 h -55.73034 c 1.34832,9.438202 7.19101,14.382022 16.62922,14.382022 7.19101,0 12.13483,-3.146067 13.93258,-8.089887 l 23.82022,6.741572 c -5.84269,14.382024 -20.22471,22.921344 -37.7528,22.921344 -29.21349,0 -42.69663,-22.921344 -42.69663,-42.696624 0,-19.325842 11.68539,-42.247189 40.89887,-42.247189 31.01124,0 41.34832,23.370785 41.34832,40.898875 0,4.044943 0,6.292134 -0.44944,8.089887 z M 227.86517,68.314603 c -0.44944,-7.191011 -5.84269,-13.483146 -14.83146,-13.483146 -8.53932,0 -13.48314,3.595505 -15.2809,13.483146 z M 124.94383,119.10112 h 23.37078 L 177.97753,36.85393 H 151.01124 L 136.62922,84.943815 122.2472,36.404491 H 95.28091 Z m -109.662917,0 H 41.797766 V 58.876401 H 67.415742 V 119.10112 H 93.932595 V 36.404491 H 41.797766 v -4.94382 c 0,-5.393258 4.044944,-8.988763 9.88764,-8.988763 H 67.415742 V 0 H 47.640462 C 28.31462,0 15.280913,12.134829 15.280913,29.662919 v 6.741572 H 0 v 22.47191 h 15.280913 z" />
    <path fill="#1dbf73" d="m 383.37078,121.34831 c 8.98877,0 16.62922,-7.64045 16.62922,-16.62921 0,-8.988768 -7.64045,-16.629217 -16.62922,-16.629217 -8.98876,0 -16.62921,7.640449 -16.62921,16.629217 0,8.98876 7.64045,16.62921 16.62921,16.62921 z" />
  </g>
</svg>`;

// 3. Envato SVG (viewBox 0 0 220 60)
// Official Envato green leaf + white wordmark
const envatoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 60" fill="none">
  <!-- Envato Leaf -->
  <g transform="translate(12, 10) scale(1.66)">
    <path fill="#81b441" d="M16.156 0a2.7 2.7 0 0 0-1.886.8L4 11.253c-.382.42-.558.978-.453 1.57.176.945 1.116 1.571 2.06 1.399l5.54-1.13c.12-.025.183.136.082.204L5.088 17.23c-.769.487-1.119 1.36-.875 2.234.244 1.151 1.398 1.814 2.516 1.537l9.183-2.26a.11.11 0 0 1 .113.176l-1.433 1.77c-.383.487.244 1.15.77.767l4.716-3.877c.84-.697.281-2.062-.803-1.957l-.011-.004-6.047.65a.111.111 0 0 1-.08-.199l5.918-4.609c.382-.315.628-.801.523-1.326-.105-.803-.767-1.328-1.607-1.223l-6.43.942c-.112.015-.174-.128-.084-.2l6.375-4.867c1.256-.978 1.36-2.898.209-4.015A2.6 2.6 0 0 0 16.156 0M13.1 21.855a1.07 1.07 0 0 0-1.073 1.073A1.07 1.07 0 0 0 13.1 24a1.07 1.07 0 0 0 1.072-1.072 1.07 1.07 0 0 0-1.072-1.073"/>
  </g>
  <!-- Wordmark "envato" -->
  <text x="62" y="38" fill="#ffffff" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="700" letter-spacing="-0.5">envato</text>
</svg>`;

// 4. Freelancer SVG (viewBox 0 0 220 60)
// Official Freelancer hummingbird in cyan + white wordmark
const freelancerSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 60" fill="none">
  <!-- Freelancer Origami Bird -->
  <g transform="translate(10, 10) scale(1.66)">
    <path fill="#29b2fe" d="M14.096 3.076l1.634 2.292L24 3.076M5.503 20.924l4.474-4.374-2.692-2.89m6.133-10.584L11.027 5.23l4.022.15M4.124 3.077l.857 1.76 4.734.294m-3.058 7.072l3.497-6.522L0 5.13m7.064 7.485l3.303 3.548 3.643-3.57 1.13-6.652-4.439-.228Z"/>
  </g>
  <!-- Wordmark "freelancer" -->
  <text x="60" y="38" fill="#ffffff" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="26" font-weight="700" letter-spacing="-0.5">freelancer</text>
</svg>`;

const clientsDir = path.join(process.cwd(), 'public', 'images', 'clients');
fs.mkdirSync(clientsDir, { recursive: true });

fs.writeFileSync(path.join(clientsDir, 'upwork.svg'), upworkSvg, 'utf8');
fs.writeFileSync(path.join(clientsDir, 'fiverr.svg'), fiverrSvg, 'utf8');
fs.writeFileSync(path.join(clientsDir, 'envato.svg'), envatoSvg, 'utf8');
fs.writeFileSync(path.join(clientsDir, 'freelancer.svg'), freelancerSvg, 'utf8');

// Also save fiverr-logo.svg in public/images/experience/
const expDir = path.join(process.cwd(), 'public', 'images', 'experience');
fs.mkdirSync(expDir, { recursive: true });
fs.writeFileSync(path.join(expDir, 'fiverr-logo.svg'), fiverrSvg, 'utf8');

console.log('Successfully created authentic vector SVG logos for all clients!');
