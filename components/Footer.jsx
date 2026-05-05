import React from 'react';
import './Footer.css';

const Footer = ({ bgColor = 'var(--cranberry)', textColor = '#fff', borderTop = 'none' }) => {
  return (
    <footer className="mdio-footer" style={{ background: bgColor, color: textColor, borderTop }}>
      <div className="mdio-footer-big">
        MDIO<br />
        <span>LOMBARDIA & PIACENZA</span>
      </div>
      <div className="mdio-footer-grid">
        <div>
          <div className="mdio-fh">DISTRETTI</div>
          <a href="/distretti/2041.html">2041 — Milano</a>
          <a href="/distretti/2042.html">2042 — Centro/Nord</a>
          <a href="/distretti/2050.html">2050 — Sud + PC</a>
        </div>
        <div>
          <div className="mdio-fh">EVENTI</div>
          <a href="/apertura-nazionale.html">Apertura Naz. 2026</a>
          <a href="#">Calendario</a>
          <a href="#">Formazione</a>
        </div>
        <div>
          <div className="mdio-fh">SOCIAL</div>
          <a href="https://www.instagram.com/multidistrettolombardo/">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
        </div>
        <div>
          <div className="mdio-fh">CONTATTI</div>
          <a href="mailto:segreteria@rotarat2050.org">segreteria@rotarat2050.org</a>
          <a href="#">Press kit</a>
        </div>
      </div>
      <div className="mdio-footer-bottom">
        <span>© 2026 MDIO ROTARACT · A.R. 26—27</span>
        <span>3 DISTRETTI · 12 PROVINCE · 1 MISSIONE</span>
        <span>Fatto con il 🤍 dal Distretto 2050</span>
      </div>
    </footer>
  );
};

export default Footer;
