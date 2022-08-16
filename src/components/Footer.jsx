import React from 'react';
import './footer.scss';

export default function Footer() {
  const data = new Date().getFullYear();

  return (
    <footer>
      <p>© {data} Sneakers, Inc.</p>
    </footer>
  );
}
