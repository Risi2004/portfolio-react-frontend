import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-center py-4 text-sm text-gray-400">
      <p>&copy; {new Date().getFullYear()} Risikesan. All rights reserved.</p>
    </footer>
  );
}

export default Footer;