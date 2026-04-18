# WICHTIG: Deployment-Fix für Netlify

## Problem
Die Styles werden nicht geladen - die Website sieht aus wie eine PDF.

## Lösung

### 1. Lokal testen (WICHTIG!)
```bash
cd /Users/mdm/Documents/domanetiji-website
npm install
npm run build
npm start
```

Öffnen Sie http://localhost:3000 und prüfen Sie, ob die Styles geladen werden.

### 2. Falls lokal funktioniert, aber nicht auf Netlify:

**Option A: Netlify Build-Logs prüfen**
1. Gehen Sie zu Netlify Dashboard
2. Öffnen Sie die Build-Logs
3. Prüfen Sie auf Fehler bei:
   - `npm install`
   - `npm run build`
   - TailwindCSS-Kompilierung

**Option B: Node-Version prüfen**
- In Netlify: Site settings → Build & deploy → Environment
- Node version auf 18 oder 20 setzen

**Option C: Build-Command anpassen**
In Netlify Build Settings:
- Build command: `npm install && npm run build`
- Publish directory: `.next` (wird vom Plugin verwaltet)

### 3. Falls lokal NICHT funktioniert:

```bash
# Dependencies komplett neu installieren
rm -rf node_modules package-lock.json .next
npm install
npm run build
npm start
```

### 4. Alternative: Statischer Export (nur wenn Plugin nicht funktioniert)

Falls das @netlify/plugin-nextjs nicht funktioniert, können wir auf statischen Export umstellen:

```js
// next.config.js
module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}
```

**ACHTUNG:** Dann funktionieren keine Server-Features mehr.

## Was ich geändert habe:

1. ✅ `next.config.js` - `output: 'standalone'` entfernt (funktioniert nicht mit Netlify Plugin)
2. ✅ `globals.css` - Basis-Styles verbessert
3. ✅ Startseite komplett neu gestaltet - professionell und spendenorientiert
4. ✅ Unterstützen-Seite komplett überarbeitet - maximale Spenden-CTAs
5. ✅ StatsGrid verbessert mit Cards
6. ✅ Emotionale Hero-Sections mit Gradienten
7. ✅ Visuelle Elemente und Icons hinzugefügt

## Nächste Schritte:

1. **Lokal testen** - wichtig!
2. **Änderungen committen und pushen**
3. **Netlify neu deployen**
4. **Build-Logs prüfen**

Die Website sollte jetzt professionell aussehen und zum Spenden animieren!
