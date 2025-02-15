'use client';
// pages/universal.js
import { useEffect } from 'react';

export default function UniversalLink() {
  useEffect(() => {
    // On tente une redirection vers le lien universel
    window.location.href = 'https://thang.codes';
  }, []);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Redirection...</h1>
      <p>
        Sinon, <a href="https://thang.codes">cliquez ici</a>.
      </p>
    </div>
  );
}
