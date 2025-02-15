'use client';
import { useEffect } from 'react';

export default function OpenNativeBrowser() {
  useEffect(() => {
    // URL à ouvrir dans le navigateur natif
    const url = 'https://thang.codes';
    // Ouvre la page dans un nouvel onglet/une nouvelle fenêtre (navigateur natif)
    window.open(url, '_blank');
  }, []);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Ouverture dans le navigateur natif...</h1>
      <p>
        Sinon{' '}
        <a href="https://thang.codes" target="_blank" rel="noopener noreferrer">
          cliquez ici
        </a>
        .
      </p>
    </div>
  );
}
