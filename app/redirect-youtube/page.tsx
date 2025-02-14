'use client';
import { useEffect } from 'react';

export default function RedirectYoutube() {
  useEffect(() => {
    // Exemple : vidéo YouTube avec l'ID "dQw4w9WgXcQ"
    // Deep link pour ouvrir l'app native YouTube

    const userAgent =
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      navigator.userAgent || navigator.vendor || (window as any).opera;
    // const isAndroid = /android/i.test(userAgent);
    const isiOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;

    const appLink = 'youtube://www.youtube.com/watch?v=dQw4w9WgXcQ';
    const androidAppLink =
      'intent://www.youtube.com/watch?v=dQw4w9WgXcQ#Intent;package=com.google.android.youtube;scheme=https;end;';
    const link = isiOS ? appLink : androidAppLink;
    // Fallback : lien vers la version web de YouTube
    const fallbackLink = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

    // Enregistrement de l'heure de départ
    const start = Date.now();

    // Tentative d'ouverture de l'app native en assignant à window.location.href
    window.location.href = link;

    // Rediriger vers le fallback après 1,5 seconde si l'app n'est pas lancée
    setTimeout(() => {
      if (Date.now() - start < 2000) {
        window.location.href = fallbackLink;
      }
    }, 1500);
  }, []);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Redirection vers YouTube...</h1>
      <p>
        Sinon {` `}
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">cliquez ici</a>.
      </p>
    </div>
  );
}
