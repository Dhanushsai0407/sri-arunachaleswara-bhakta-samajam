# శ్రీ అరుణాచలేశ్వర భక్త సమాజం | Sri Arunachaleswara Bhakta Samajam

> **స్థలం / Location:** హనుమాన్ జంక్షన్, బాపులపాడు మండలం, ఆంధ్రప్రదేశ్, భారతదేశం  
> **Location:** Hanuman Junction, Bapulapadu Mandal, Andhra Pradesh, India  
> **సంప్రదించండి / Contact:** [9493377492](tel:9493377492) • [WhatsApp](https://wa.me/919493377492)  
> **అధ్యక్షులు / President:** దుడ్డుపూడి నారాయణ మూర్తి గారు (Duddupudi Narayana Murthy Garu)

---

## 🕉️ ప్రాజెక్ట్ వివరణ / Project Overview

**శ్రీ అరుణాచలేశ్వర భక్త సమాజం** వెబ్‌సైట్ సనాతన ధర్మ పరిరక్షణ, భక్తి, ఆధ్యాత్మికత మరియు సమాజ సేవలను ప్రతిబింబించేలా రూపొందించబడిన ఆధునిక, పవిత్రమైన మరియు రెస్పాన్సివ్ వెబ్‌సైట్.

This is a modern, robust, responsive, Telugu-first devotional website built for **Sri Arunachaleswara Bhakta Samajam**, Hanuman Junction. Crafted with a premium devotional theme inspired by Lord Shiva / Mahadev, it features smooth sacred smoke/vibhuti particle effects, bilingual support (Telugu / English), an interactive devotional music player, and full mobile optimization.

---

## 🌟 ముఖ్య లక్షణాలు / Features

1. **తెలుగు ప్రథమ ప్రాధాన్యత (Telugu-First & Bilingual)**:
   - Default language is Telugu with a seamless **తెలుగు | English** switch in the sticky navigation.
   - Smooth instant transition without full-page reloads.
   - Saves visitor's language preference in `localStorage`.
2. **స్పిరిచ్యువల్ బ్లాక్ & వైట్ థీమ్ (Spiritual Monochrome Aesthetic)**:
   - Pure black, deep charcoal, white, and subtle silver glowing accents.
   - Inspired by Lord Shiva, Kailash, and Arunachaleshwara.
   - Gentle floating ash (vibhuti) particles and sacred smoke canvas effect with `prefers-reduced-motion` accessibility support.
3. **అధ్యక్షుల పరిచయం (President Section)**:
   - Features **దుడ్డుపూడి నారాయణ మూర్తి గారు (Duddupudi Narayana Murthy Garu)** with a respectful black-and-white frame and verified details.
4. **భక్తి గీతాలు మరియు తత్వాలు (Devotional Music Player)**:
   - 4 Dedicated Categories:
     - వీరబ్రహ్మం గారి పాటలు (Veera Brahmam Gari Songs)
     - వీరబ్రహ్మం గారి తత్వాలు (Veera Brahmam Gari Tatvalu)
     - అమ్మవారి పాటలు (Ammavari Songs)
     - షిరిడీ సాయి పాటలు (Shirdi Sai Songs)
   - Search bar to easily find songs by Telugu or English titles.
   - Full music player controls: Play, Pause, Next, Previous, Progress timeline scrubber, Volume slider, Mute toggle.
   - Rotating sacred Om / Mandala animation while playing.
   - Sticky bottom audio player dock on mobile & desktop.
5. **కార్యక్రమాలు (Activities)**:
   - శివ పూజ (Shiva Pooja)
   - భక్తి కార్యక్రమాలు (Devotional Programs)
   - సేవా కార్యక్రమాలు (Community Welfare)
   - పండుగలు (Festivals)
6. **గ్యాలరీ & లైట్‌బాక్స్ (Devotional Gallery & Lightbox)**:
   - Grayscale to silver tone hover zoom.
   - Fullscreen Lightbox modal with next/previous and keyboard navigation (Esc, Arrow keys).
7. **మమ్మల్ని సంప్రదించండి (Direct Contact Section)**:
   - Direct Call button: `tel:9493377492`
   - WhatsApp direct chat: `https://wa.me/919493377492`
   - Google Maps link for Sivaji Colony, Harijanawada, Hanuman Junction.
8. **Render Deployment Ready**:
   - Pre-configured `render.yaml`, `_redirects`, and optional Node production server (`server.js`).

---

## 🛠️ టెక్నాలజీస్ / Technologies Used

- **Frontend**: React 19 + Vite 8
- **Styling**: Tailwind CSS 3.4 (Custom dark monochrome theme)
- **Icons**: Lucide React
- **Typography**: Google Fonts — `Noto Sans Telugu`, `Noto Serif Telugu`, `Cinzel`, `Inter`
- **Audio & Visual**: HTML5 Audio API + Web Audio Harmonic Synth + HTML5 Canvas Particles
- **Deployment**: Render (Static Site or Web Service)

---

## 📂 ఫోల్డర్ అమరిక / Folder Structure

```
sri-arunacheshwara-bhakta-samajam/
├── public/
│   ├── _redirects                 # SPA routing redirects for static hosting
│   ├── favicon.svg                # Sacred Trishul & Damru vector icon
│   ├── images/
│   │   ├── president.jpg          # President: Duddupudi Narayana Murthy Garu
│   │   ├── shiva-hero.jpg         # Hero background image
│   │   ├── shiva-about.jpg        # About section sacred visual
│   │   ├── shiva-sacred.jpg       # Full-width sacred break background
│   │   └── gallery/
│   │       ├── gallery1.jpg
│   │       ├── gallery2.jpg
│   │       ├── gallery3.jpg
│   │       ├── gallery4.jpg
│   │       ├── gallery5.jpg
│   │       └── gallery6.jpg
│   └── audio/
│       ├── veera-brahmam/         # Sri Veera Brahmendra Swamy songs
│       ├── tatvalu/               # Kalajnana & spiritual tatvalu
│       ├── ammavari/              # Goddess / Ammavari songs
│       └── shirdi-sai/            # Shirdi Sai Baba devotional songs
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # Sticky navigation with mobile menu
│   │   ├── Hero.jsx               # Cinematic hero with Om Namah Shivaya
│   │   ├── About.jsx              # About Samajam 2-column layout
│   │   ├── President.jsx          # Duddupudi Narayana Murthy Garu card
│   │   ├── Activities.jsx         # 4 Devotional and seva program cards
│   │   ├── DevotionalMusic.jsx    # Audio library & player interface
│   │   ├── MusicPlayerBar.jsx     # Floating bottom sticky player
│   │   ├── ShivaSacred.jsx        # Full-width meditative break
│   │   ├── Gallery.jsx            # Responsive masonry photo grid
│   │   ├── LightboxModal.jsx      # Fullscreen image viewer
│   │   ├── Contact.jsx            # Phone, WhatsApp, Maps direct links
│   │   ├── Footer.jsx             # Organization details & copyright
│   │   ├── LanguageToggle.jsx     # Telugu / English switch pill
│   │   └── ParticleCanvas.jsx     # Subtle ash / vibhuti particles
│   ├── context/
│   │   ├── LanguageContext.jsx    # Bilingual state & persistence
│   │   └── AudioContext.jsx       # Global audio player state & controls
│   ├── data/
│   │   ├── translations.js        # Complete Telugu & English text dictionary
│   │   └── songs.js               # Devotional audio database
│   ├── App.jsx                    # Root component
│   ├── index.css                  # Tailwind styles & sacred animations
│   └── main.jsx                   # React entry point
├── render.yaml                    # Render blueprint deployment file
├── server.js                      # Built-in lightweight Node production server
├── tailwind.config.js             # Tailwind monochrome theme configuration
├── package.json
└── README.md
```

---

## 💻 లోకల్ సెటప్ / Local Development Setup

### అవసరమైనవి / Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### 1. ప్రాజెక్ట్ డైరెక్టరీకి వెళ్లండి / Navigate to directory
```bash
cd C:\Users\LENOVO\.gemini\antigravity\scratch\sri-arunacheshwara-bhakta-samajam
```

### 2. డిపెండెన్సీలను ఇన్‌స్టాల్ చేయండి / Install dependencies
```bash
npm install
```

### 3. డెవలప్‌మెంట్ సర్వర్‌ను ప్రారంభించండి / Start development server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. ప్రొడక్షన్ బిల్డ్ చేయండి / Build for production
```bash
npm run build
```
Production build files will be generated in `dist/`.

### 5. ప్రొడక్షన్ ప్రివ్యూ / Test production build locally
```bash
npm start
```
Runs `server.js` and opens `http://localhost:3000`.

---

## 🚀 Render లో డెప్లాయ్ చేయడం ఎలా? / Deploying on Render

### ఆప్షన్ 1: Render Static Site (సిఫార్సు చేయబడింది / Recommended)
1. GitHub లేదా GitLab లో ఈ ప్రాజెక్ట్‌ను పుష్ చేయండి.
2. [Render Dashboard](https://dashboard.render.com/) కి లాగిన్ అవ్వండి.
3. **New +** పై క్లిక్ చేసి **Static Site** ఎంచుకోండి.
4. మీ గిట్‌హబ్ రిపోజిటరీని కనెక్ట్ చేయండి.
5. కింది వివరాలను నమోదు చేయండి:
   - **Name**: `sri-arunachaleswara-bhakta-samajam`
   - **Branch**: `main`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
6. **Create Static Site** పై క్లిక్ చేయండి.

*(గమనిక: ప్రాజెక్ట్‌లో ఉన్న `public/_redirects` ఫైల్ పేజీ రీలోడ్ అయినా 404 రాకుండా రక్షిస్తుంది.)*

---

### ఆప్షన్ 2: Render Web Service (Node Server)
1. **New +** పై క్లిక్ చేసి **Web Service** ఎంచుకోండి.
2. రిపోజిటరీని కనెక్ట్ చేయండి.
3. వివరాలు:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Environment**: Node
4. **Create Web Service** పై క్లిక్ చేయండి.

---

## ✏️ భవిష్యత్తు మార్పులు / How to Customize & Update Content

### 1. అధ్యక్షుల ఫోటో మార్చడం / How to Replace President Photo
- కొత్త ఫోటోను `president.jpg` పేరుతో సేవ్ చేసి `public/images/president.jpg` లో ఉంచండి.
- వెబ్‌సైట్ స్వయంచాలకంగా కొత్త ఫోటోను చూపిస్తుంది.

### 2. శివ బ్యాక్‌గ్రౌండ్ ఇమేజ్ మార్చడం / How to Replace Shiva Background
- కొత్త ఇమేజ్‌ను `public/images/shiva-hero.jpg` పేరుతో భర్తీ చేయండి.
- ఉత్తమ ఫలితాల కోసం బ్లాక్-అండ్-వైట్ లేదా హై-కాంట్రాస్ట్ ఇమేజ్‌ను వాడండి.

### 3. గ్యాలరీ ఫోటోలు జోడించడం / How to Add Gallery Photos
- కొత్త ఫోటోలను `public/images/gallery/` ఫోల్డర్‌లో `gallery1.jpg`, `gallery2.jpg` ... మొదలైన పేర్లతో భర్తీ చేయండి.
- క్యాప్షన్లు మార్చడానికి `src/data/translations.js` లోని `gallery.items` లో శీర్షికను మార్చండి.

### 4. కొత్త భక్తి గీతాలు జోడించడం / How to Add New Devotional Songs
1. మీ MP3 ఆడియో ఫైల్‌ను తగిన ఫోల్డర్‌లో ఉంచండి:
   - `public/audio/veera-brahmam/`
   - `public/audio/tatvalu/`
   - `public/audio/ammavari/`
   - `public/audio/shirdi-sai/`
2. `src/data/songs.js` ఫైల్ ఓపెన్ చేసి కొత్త పాట ఎంట్రీని జోడించండి:
   ```javascript
   {
     id: "vb-4",
     category: "veera-brahmam",
     titleTe: "మీ పాట పేరు",
     titleEn: "Song Title in English",
     duration: "5:20",
     durationSec: 320,
     audio: "/audio/veera-brahmam/my-new-song.mp3",
     descriptionTe: "పాట గురించిన చిన్న వివరణ",
     descriptionEn: "Short English description",
   }
   ```
3. సేవ్ చేయండి. ప్లేయర్‌లో ఆటోమేటిక్‌గా కొత్త పాట కనిపిస్తుంది మరియు ప్లే అవుతుంది!

### 5. తెలుగు / ఇంగ్లీష్ కంటెంట్ మార్చడం / How to Edit Translations
- `src/data/translations.js` ఫైల్‌లో తెలుగు (`te`) మరియు ఇంగ్లీష్ (`en`) విభాగాలు స్పష్టంగా విభజించబడ్డాయి.
- అవసరమైన టెక్స్ట్‌ను సులభంగా ఇక్కడే సవరించుకోవచ్చు.

---

## 🔒 భద్రత & నియమాలు / Security & Code Standards

- బాహ్య కీలు లేదా సీక్రెట్స్ అవసరం లేదు. భవిష్యత్తు కాన్ఫిగరేషన్ల కోసం `.env.example` అందుబాటులో ఉంది.
- ఎటువంటి అవాస్తవ ఆధారాలు, నకిలీ రిజిస్ట్రేషన్ నంబర్లు లేదా కల్పిత సమాచారం చేర్చబడలేదు.
- ప్రాంప్ట్‌లో నిర్ధారించిన అధికారిక వివరాలు మాత్రమే వాడబడ్డాయి:
  - సంస్థ పేరు: **శ్రీ అరుణాచలేశ్వర భక్త సమాజం**
  - చిరునామా: **3-71, శివాజీ కాలనీ, హరిజనవాడ, హనుమాన్ జంక్షన్, బాపులపాడు మండలం, బాపులపాడు పోస్ట్, ఆంధ్రప్రదేశ్**
  - ఫోన్: **9493377492**
  - అధ్యక్షులు: **దుడ్డుపూడి నారాయణ మూర్తి గారు**

---

## 📜 కాపీరైట్ / Copyright

© 2026 శ్రీ అరుణాచలేశ్వర భక్త సమాజం (Sri Arunachaleswara Bhakta Samajam). All Rights Reserved. 
"# sri-arunachaleswara-bhakta-saamajam" 
"# sri-arunachaleswara-bhakta-samajam" 
