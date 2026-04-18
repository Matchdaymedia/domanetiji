# Domanê Tiji e.V. Website

Moderne, responsive Website für den gemeinnützigen Verein Domanê Tiji e.V.

## 🚀 Schnellstart

### Installation

```bash
npm install
```

### Entwicklung

```bash
npm run dev
```

Die Website ist dann unter [http://localhost:3000](http://localhost:3000) erreichbar.

### Build für Produktion

```bash
npm run build
npm start
```

## 📁 Projektstruktur

```
domanetiji-website/
├── app/                    # Next.js App Router Seiten
│   ├── page.tsx           # Startseite
│   ├── ueber-uns/         # Über uns Seite
│   ├── wirkung/           # Projekte & Wirkung
│   ├── unterstuetzen/     # Unterstützungsmöglichkeiten
│   ├── kontakt/           # Kontaktseite
│   ├── impressum/          # Impressum
│   ├── datenschutz/       # Datenschutz
│   ├── layout.tsx         # Root Layout
│   └── globals.css        # Globale Styles
├── components/
│   ├── common/            # Wiederverwendbare Komponenten
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── ContactForm.tsx
│   │   ├── DonateModal.tsx
│   │   ├── StatsGrid.tsx
│   │   └── CTA.tsx
│   └── layout/
│       ├── Header.tsx
│       └── Footer.tsx
└── lib/
    └── utils.ts           # Utility-Funktionen
```

## 🎨 Design-System

### Farben
- **Background**: Warmes Beige (#F5F1EB)
- **Primary**: Warmes Braun (#8B6F47)
- **Accent**: Zartes Rosé (#E8C4B8)
- **Highlight**: Sanftes Gelb (#F5E6D3)

### Typografie
- **Headlines**: Playfair Display (Serif)
- **Body**: Inter (Sans-Serif)

## 📝 Wichtige Anpassungen

### Logo einfügen

Das Logo ist aktuell als Platzhalter (Herz-Icon) im Header implementiert. Um ein echtes Logo einzufügen:

1. Logo-Datei in `/public/logo.png` speichern
2. In `components/layout/Header.tsx` den Platzhalter ersetzen:

```tsx
// Aktuell:
<div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
  <Heart className="w-7 h-7 text-white" />
</div>

// Ersetzen durch:
<Image
  src="/logo.png"
  alt="Domanê Tiji e.V. Logo"
  width={48}
  height={48}
  className="w-12 h-12 object-contain"
/>
```

### Spendenlink/Spendenkonto einfügen

Das Spendenmodal (`components/common/DonateModal.tsx`) enthält aktuell einen Platzhaltertext. Um den Spendenlink einzufügen:

1. Öffnen Sie `components/common/DonateModal.tsx`
2. Ersetzen Sie den Platzhaltertext durch:
   - Einen Link zu einem Spendenformular
   - Oder Bankverbindungsdaten
   - Oder einen Button, der zu einer externen Spendenplattform führt

Beispiel:
```tsx
<a
  href="https://ihr-spendenlink.de"
  className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors inline-block"
>
  Jetzt spenden
</a>
```

### Kontaktformular

Das Kontaktformular verwendet aktuell einen `mailto:`-Link. Für eine professionellere Lösung können Sie:

1. **Server Action** in Next.js implementieren (empfohlen)
2. **Externen Service** wie Formspree, EmailJS oder ähnliches nutzen
3. **Backend-API** einrichten

## 🔧 Technologien

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Lucide React** (Icons)

## 📱 Features

- ✅ Responsive Design (Mobile-first)
- ✅ SEO-optimiert
- ✅ Barrierefrei (WCAG-konform)
- ✅ Sticky Header mit Navigation
- ✅ Kontaktformular
- ✅ Spendenmodal
- ✅ Alle erforderlichen Seiten

## 📄 Seiten

- `/` - Startseite mit Hero, Mission, Stats, Ziele
- `/ueber-uns` - Über uns, Geschichte, Werte
- `/wirkung` - Projekte & Wirkung in Zahlen
- `/unterstuetzen` - Spenden, Mitgliedschaft, Ehrenamt
- `/kontakt` - Kontaktformular & Kontaktdaten
- `/impressum` - Impressum (in Bearbeitung)
- `/datenschutz` - Datenschutzerklärung (in Bearbeitung)

## 🌐 Deployment

### Vercel (empfohlen)

1. Projekt auf GitHub pushen
2. Bei [Vercel](https://vercel.com) anmelden
3. Projekt importieren
4. Automatisches Deployment

### Andere Plattformen

Die Website kann auf jeder Plattform deployed werden, die Next.js unterstützt:
- Netlify
- AWS Amplify
- Railway
- Eigenes VPS mit Node.js

## 📧 Kontakt

Bei Fragen zur Website oder zum Verein:
- E-Mail: Domanetijiev@outlook.de
- Telefon: 0163 4958244 (12–18 Uhr)

## 📝 Lizenz

© 2025 Domanê Tiji e.V. Alle Rechte vorbehalten.
