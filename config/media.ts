// MEDIA CONFIG
// Tauschen Sie die Dateien einfach in /public/media/ aus.
// Beispiel:
// /public/media/video.mp4
// /public/media/hero.jpg
// /public/media/about.jpg
// /public/media/impact1.jpg
// /public/media/impact2.jpg

export const mediaConfig = {
  video: {
    src: '/Domane%20Tiji%201%20video.MOV',
    fallbackSrc: '/media/video.mp4',
  },
  images: {
    hero: { src: '/Galerie/image1.jpeg', fallbackSrc: '/media/hero.jpg', alt: 'Domanê Tiji Arbeit vor Ort' },
    about: { src: '/Galerie/image2.jpeg', fallbackSrc: '/media/about.jpg', alt: 'Teamarbeit von Domanê Tiji e.V.' },
    impact1: { src: '/Galerie/image3.jpeg', fallbackSrc: '/media/impact1.jpg', alt: 'Unterstützungsarbeit für Familien' },
    impact2: { src: '/Galerie/image4.jpeg', fallbackSrc: '/media/impact2.jpg', alt: 'Kinderhilfe und Bildungsförderung' },
  },
}

