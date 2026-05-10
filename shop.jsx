import React from 'react';
import ReactDOM from 'react-dom/client';
import './globals.css';
import './home.css';
import './shop.css';
import CookieBanner from './components/CookieBanner';
import Footer from './components/Footer';
import Header from './components/Header';

const TicketTailorWidget = () => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const fallback = document.createElement('div');
    fallback.className = 'tt-widget-fallback';
    fallback.innerHTML = '<p><a href="https://www.tickettailor.com/checkout/new-session/id/7914588/chk/054c/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true" target="_blank">Clicca qui per acquistare i biglietti</a></p>';
    container.appendChild(fallback);

    const script = document.createElement('script');
    script.src = 'https://cdn.tickettailor.com/js/widgets/min/widget.js';
    script.setAttribute('data-url', 'https://www.tickettailor.com/checkout/new-session/id/7914588/chk/054c/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true');
    script.setAttribute('data-type', 'inline');
    script.setAttribute('data-inline-minimal', 'false');
    script.setAttribute('data-inline-show-logo', 'true');
    script.setAttribute('data-inline-bg-fill', 'false');
    script.setAttribute('data-inline-inherit-ref-from-url-param', '');
    script.setAttribute('data-inline-ref', 'website_widget');
    container.appendChild(script);

    return () => { container.innerHTML = ''; };
  }, []);

  return <div className="tt-widget" ref={ref} />;
};

const Shop = () => (
  <div className="vb-root shop-root">
    <Header
      homeLink="index.html"
      logoPath="assets/logo-mdio.jpeg"
      ctaText="Apertura Nazionale →"
      ctaLink="apertura-nazionale.html"
    >
      <a href="apertura-nazionale.html" onClick={(e) => { if (window.history.length > 1) { e.preventDefault(); window.history.back(); } }}>← Torna indietro</a>
    </Header>

    <section className="shop-hero">
      <div className="shop-hero-inner">
        <div className="shop-eyebrow">Apertura Nazionale 2026 — MDIO Lombardo</div>
        <h1 className="shop-title">Acquista i biglietti</h1>
        <p className="shop-sub">Milano · Monza · Sale Marasino — 18 · 19 · 20 Settembre</p>
      </div>
    </section>

    <section className="shop-widget-wrap">
      <TicketTailorWidget />
      <div className="shop-fallback">
        <span>Non vedi nulla?</span>
        <a
          href="https://www.tickettailor.com/checkout/new-session/id/7914588/chk/054c/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true"
          target="_blank"
          rel="noopener noreferrer"
          className="shop-fallback-link"
        >
          Clicca qui per acquistare →
        </a>
      </div>
    </section>

    <Footer />
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Shop />
      <CookieBanner />
    </>
  </React.StrictMode>
);
