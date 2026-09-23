import fs from 'fs';

function generateDevotionalSvg({ title, subtitle, iconType }) {
  let iconSvg = '';

  if (iconType === 'bell') {
    iconSvg = `
      <!-- Temple Bell -->
      <path d="M400 180 C360 180 320 220 310 320 C290 440 250 490 220 510 L580 510 C550 490 510 440 490 320 C480 220 440 180 400 180 Z" fill="url(#metalGrad)" stroke="#e4e4e7" stroke-width="4"/>
      <ellipse cx="400" cy="510" rx="180" ry="25" fill="#18181b" stroke="#f4f4f5" stroke-width="4"/>
      <circle cx="400" cy="550" r="28" fill="#e4e4e7" stroke="#71717a" stroke-width="3"/>
      <!-- Chain Links -->
      <rect x="390" y="80" width="20" height="40" rx="10" fill="none" stroke="#d4d4d8" stroke-width="5"/>
      <rect x="390" y="110" width="20" height="40" rx="10" fill="none" stroke="#d4d4d8" stroke-width="5"/>
      <rect x="390" y="140" width="20" height="40" rx="10" fill="none" stroke="#d4d4d8" stroke-width="5"/>
    `;
  } else if (iconType === 'deepam') {
    iconSvg = `
      <!-- Sacred Deepam / Diya -->
      <ellipse cx="400" cy="460" rx="160" ry="40" fill="#27272a" stroke="#d4d4d8" stroke-width="5"/>
      <path d="M240 460 Q400 560 560 460 Z" fill="#18181b" stroke="#a1a1aa" stroke-width="4"/>
      <path d="M370 510 L340 560 L460 560 L430 510 Z" fill="#27272a" stroke="#71717a" stroke-width="3"/>
      <!-- Sacred Flame -->
      <path d="M400 240 C430 330 450 380 400 450 C350 380 370 330 400 240 Z" fill="url(#flameGrad)" filter="url(#glow)"/>
      <path d="M400 320 C415 370 425 400 400 440 C375 400 385 370 400 320 Z" fill="#ffffff"/>
    `;
  } else {
    // Nandi
    iconSvg = `
      <!-- Sacred Nandi Silhouette -->
      <path d="M250 490 C250 420 300 380 360 380 C400 330 450 310 500 320 C540 330 560 370 580 400 C620 420 650 460 650 510 L250 510 Z" fill="#27272a" stroke="#d4d4d8" stroke-width="4"/>
      <!-- Horns and Ears -->
      <path d="M490 320 C480 250 440 210 430 200 C450 240 460 280 475 320 Z" fill="#e4e4e7"/>
      <path d="M525 320 C545 250 585 210 595 200 C575 240 560 280 540 320 Z" fill="#e4e4e7"/>
      <!-- Sacred Garland -->
      <path d="M430 410 Q490 460 550 410" stroke="#f4f4f5" stroke-width="8" stroke-dasharray="12,10" fill="none"/>
      <!-- Sacred Tripundra on forehead -->
      <line x1="485" y1="340" x2="525" y2="340" stroke="#f4f4f5" stroke-width="3"/>
      <line x1="485" y1="346" x2="525" y2="346" stroke="#f4f4f5" stroke-width="3"/>
      <line x1="485" y1="352" x2="525" y2="352" stroke="#f4f4f5" stroke-width="3"/>
      <circle cx="505" cy="346" r="2.5" fill="#f4f4f5"/>
    `;
  }

  return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <defs>
      <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0a0a0c"/>
        <stop offset="50%" stop-color="#18181b"/>
        <stop offset="100%" stop-color="#050505"/>
      </linearGradient>
      <linearGradient id="metalGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#27272a"/>
        <stop offset="50%" stop-color="#71717a"/>
        <stop offset="100%" stop-color="#3f3f46"/>
      </linearGradient>
      <linearGradient id="flameGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="60%" stop-color="#d4d4d8"/>
        <stop offset="100%" stop-color="#71717a"/>
      </linearGradient>
      <radialGradient id="glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
      </radialGradient>
      <filter id="blur">
        <feGaussianBlur stdDeviation="30"/>
      </filter>
    </defs>
    
    <!-- Background -->
    <rect width="800" height="600" fill="url(#bgGrad)"/>
    
    <!-- Ambient Temple Glow -->
    <circle cx="400" cy="300" r="260" fill="url(#glow)" filter="url(#blur)"/>

    <!-- Subtle Temple Arch border -->
    <path d="M 100 580 V 220 Q 400 40 700 220 V 580" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>
    <path d="M 120 580 V 230 Q 400 65 680 230 V 580" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>

    ${iconSvg}

    <!-- Spiritual Smoke elements -->
    <path d="M380 480 Q350 400 390 320 T370 200" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2" stroke-linecap="round"/>
    <path d="M420 460 Q450 380 410 300 T430 180" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="2.5" stroke-linecap="round"/>

    <!-- Bottom Caption Overlay -->
    <rect y="500" width="800" height="100" fill="url(#bgGrad)" opacity="0.9"/>
    <line x1="100" y1="500" x2="700" y2="500" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
    
    <text x="400" y="540" font-family="'Noto Serif Telugu', Georgia, serif" font-size="20" fill="#f4f4f5" text-anchor="middle" font-weight="600" letter-spacing="1">
      ${title}
    </text>
    <text x="400" y="568" font-family="'Inter', sans-serif" font-size="13" fill="#a1a1aa" text-anchor="middle" letter-spacing="2">
      ${subtitle}
    </text>
  </svg>
  `;
}

const items = [
  { file: 'public/images/gallery/gallery4.jpg', title: 'ఆలయ ఘంటానాదం • Sacred Temple Bell', subtitle: 'DIVINE RESONANCE OF DEVOTION', iconType: 'bell' },
  { file: 'public/images/gallery/gallery5.jpg', title: 'దివ్య దీపారాధన • Sacred Akhanda Diya', subtitle: 'ILLUMINATION OF INNER CONSCIOUSNESS', iconType: 'deepam' },
  { file: 'public/images/gallery/gallery6.jpg', title: 'పవిత్ర నంది దర్శనం • Sacred Nandi', subtitle: 'EMBODIMENT OF FAITH & PATIENCE', iconType: 'nandi' },
];

items.forEach(item => {
  const svg = generateDevotionalSvg(item);
  fs.writeFileSync(item.file, svg);
  console.log('Saved devotional gallery image:', item.file);
});
