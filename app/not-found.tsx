"use client";

import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    window.location.href = 'https://sugeevan.com';
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif' }}>
      <h1>Redirecting to sugeevan.com...</h1>
    </div>
  );
}
