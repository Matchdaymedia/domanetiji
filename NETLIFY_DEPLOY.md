# Netlify Deployment Anleitung

## Wichtige Schritte für das Deployment auf Netlify

### 1. Netlify Plugin installieren

Das `@netlify/plugin-nextjs` Plugin wird automatisch von Netlify erkannt, wenn es in der `netlify.toml` konfiguriert ist.

**WICHTIG:** Falls das Plugin nicht automatisch installiert wird, fügen Sie es manuell hinzu:

```bash
npm install --save-dev @netlify/plugin-nextjs
```

### 2. Build-Einstellungen in Netlify

In den Netlify Build-Einstellungen sollten folgende Werte gesetzt sein:

- **Build command:** `npm run build`
- **Publish directory:** `.next` (wird automatisch vom Plugin verwaltet)
- **Node version:** 18 oder höher

### 3. Umgebungsvariablen

Falls Sie Umgebungsvariablen benötigen, fügen Sie diese in den Netlify Site Settings hinzu:
- Site settings → Environment variables

### 4. Deployment

1. **Via Git (empfohlen):**
   - Repository mit Netlify verbinden
   - Automatisches Deployment bei jedem Push

2. **Via Drag & Drop:**
   - Projekt lokal bauen: `npm run build`
   - Den `.next` Ordner zu Netlify hochziehen
   - **ACHTUNG:** Drag & Drop funktioniert nicht optimal mit Next.js. Git-Deployment wird empfohlen.

### 5. Häufige Probleme

#### Problem: 404 Fehler auf allen Seiten außer der Startseite

**Lösung:** Stellen Sie sicher, dass:
- Das `@netlify/plugin-nextjs` Plugin installiert ist
- Die `netlify.toml` Datei im Root-Verzeichnis liegt
- Node Version 18 oder höher verwendet wird

#### Problem: Build schlägt fehl

**Lösung:**
- Prüfen Sie die Build-Logs in Netlify
- Stellen Sie sicher, dass alle Dependencies installiert sind
- Node Version auf 18+ setzen

### 6. Alternative: Statischer Export (nicht empfohlen für App Router)

Falls das Plugin nicht funktioniert, können Sie einen statischen Export verwenden, aber dann funktionieren keine dynamischen Features:

```js
// next.config.js
module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}
```

**WICHTIG:** Diese Methode funktioniert nicht mit:
- Server Components
- API Routes
- Dynamischen Routen (außer mit `generateStaticParams`)

### 7. Empfohlene Lösung

Für Next.js 14 mit App Router ist das **@netlify/plugin-nextjs** Plugin die beste Lösung. Es wird automatisch von Netlify erkannt und installiert, wenn die `netlify.toml` korrekt konfiguriert ist.

## Support

Bei Problemen:
1. Prüfen Sie die Netlify Build-Logs
2. Stellen Sie sicher, dass die Node-Version korrekt ist
3. Prüfen Sie, ob das Plugin installiert wurde
