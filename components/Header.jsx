import React from 'react';
import './Header.css';

const Header = ({ 
  children, 
  ctaText = "Apertura Nazionale 2026 →", 
  ctaLink = "../apertura-nazionale.html",
  homeLink = "../index.html",
  logoPath = "../assets/logo-mdio.jpeg",
  showLogoText = true,
  bgColor = "var(--cranberry)",
  textColor = "#fff",
  borderBottom = "none"
}) => {
  return (
    <header className="mdio-header" style={{ background: bgColor, color: textColor, borderBottom }}>
      <div className="mdio-header-inner">
        <a href={homeLink} className="mdio-logo">
          <img src={logoPath} alt="MDIO" />
          {showLogoText && (
            <div className="mdio-logo-text">
              <span>MDIO</span>
              <span>Lombardia &amp; Piacenza</span>
            </div>
          )}
        </a>
        <nav className="mdio-nav">
          {children}
        </nav>
        {ctaText && (
          <a href={ctaLink} className="mdio-cta-pill">{ctaText}</a>
        )}
      </div>
    </header>
  );
};

export default Header;
