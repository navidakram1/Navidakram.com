const fs = require('fs');
const path = require('path');

const parsed = JSON.parse(fs.readFileSync(path.join(__dirname, 'parsed_svgl.json'), 'utf8'));

function createSvgCase(caseNames, iconKey, customInner) {
  const item = parsed[iconKey];
  if (!item && !customInner) return '';
  const viewBox = item ? item.viewBox : '0 0 24 24';
  const inner = customInner || item.inner;

  const cases = caseNames.map(c => `    case "${c}":`).join('\n');
  return `${cases}
      return (
        <svg width={size} height={size} viewBox="${viewBox}" className={className}>
          ${inner}
        </svg>
      );\n`;
}

// Chess SVG
const chessInner = `<path fill="#FBBF24" d="M96 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 480zM384 384c0 8.8-7.2 16-16 16L80 400c-8.8 0-16-7.2-16-16c0-40.2 24.3-75.7 61.8-90.7l23.5-9.4C137.9 264.4 128 238.6 128 208c0-30.7 13.9-46.7 34.2-60.6c2.8-1.9 5.8-3.7 8.9-5.4C172.9 123 176 100.8 176 80c0-14.1 6.5-27.4 17.6-36.1s25.8-11.8 39.5-8.4c38.7 9.7 68.3 39.3 78 78c3.4 13.7 .3 28.4-8.4 39.5s-22 17.6-36.1 17.6c-4.6 0-9.2-.6-13.6-1.9c-2.3 8.3-6.4 16.5-12.2 24.3c15.1 7.2 31.8 12.5 49.3 15.6c14.2 2.5 24.9 14.8 24.9 29.2c0 8.3-3.4 16.1-9.4 21.9l-22.6 21.7c38.4 17.8 63.4 56.4 63.4 99.6zM224 96a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />`;

// Xcode SVG
const xcodeInner = `<rect width="24" height="24" rx="5" fill="#147EFB" /><path fill="#FFFFFF" d="M17.8 7.2l-2.1-2.1c-.4-.4-1-.4-1.4 0l-1.1 1.1 3.5 3.5 1.1-1.1c.4-.4.4-1 0-1.4zM6.2 16.7l-.9 3c-.1.4.2.7.6.6l3-.9 7.8-7.8-2.7-2.7L6.2 16.7z" />`;

const code = `/* Official Vector Tech Icons powered by SVGL (svgl.app) */
import React from "react";

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export function TechIcon({ name, className = "", size = 28 }: TechIconProps) {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  switch (normalized) {
${createSvgCase(['react'], 'react')}
${createSvgCase(['nextjs', 'next'], 'nextjs')}
${createSvgCase(['nodejs', 'node'], 'nodejs')}
${createSvgCase(['typescript', 'ts'], 'typescript')}
${createSvgCase(['javascript', 'js'], 'javascript')}
${createSvgCase(['python'], 'python')}
${createSvgCase(['php'], 'php')}
${createSvgCase(['java'], 'java')}
${createSvgCase(['sql', 'mysql', 'database'], 'mysql')}
${createSvgCase(['postgresql', 'postgres'], 'postgresql')}
${createSvgCase(['gitlab'], 'gitlab')}
${createSvgCase(['css', 'css3'], 'css')}
${createSvgCase(['html', 'html5'], 'html5')}
${createSvgCase(['docker'], 'docker')}
${createSvgCase(['aws', 'amazonwebservices'], 'aws')}
${createSvgCase(['firebase'], 'firebase')}
${createSvgCase(['android', 'androidapp', 'androidstudio'], 'android')}
${createSvgCase(['github'], 'github')}
${createSvgCase(['wordpress'], 'wordpress')}
${createSvgCase(['figma'], 'figma')}
${createSvgCase(['photoshop', 'ps'], 'photoshop')}
${createSvgCase(['illustrator', 'ai'], 'illustrator')}
${createSvgCase(['laravel'], 'laravel')}
${createSvgCase(['csharp', 'c'], 'csharp')}
${createSvgCase(['tailwindcss', 'tailwind'], 'tailwindcss')}
${createSvgCase(['vscode', 'visualstudiocode'], 'vscode')}
${createSvgCase(['linux'], 'linux')}
${createSvgCase(['apple', 'ios', 'macos'], 'apple')}
${createSvgCase(['windows'], 'windows')}
${createSvgCase(['stripe'], 'stripe')}
${createSvgCase(['xcode'], 'docker', xcodeInner)}
${createSvgCase(['chess'], 'docker', chessInner)}

    default:
      return (
        <div
          className={\`flex items-center justify-center font-bold text-xs uppercase bg-[#0084ff]/20 text-[#0084ff] rounded-lg \${className}\`}
          style={{ width: size, height: size }}
        >
          {name.slice(0, 2)}
        </div>
      );
  }
}
`;

fs.writeFileSync(path.join(__dirname, '..', 'src', 'components', 'TechIcons.tsx'), code, 'utf8');
console.log('Successfully wrote src/components/TechIcons.tsx with official SVGL vector icons!');
