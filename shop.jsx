import React from 'react';
import ReactDOM from 'react-dom/client';
import './globals.css';
import './home.css';
import './shop.css';
import CookieBanner from './components/CookieBanner';
import Countdown from './components/Countdown';
import Footer from './components/Footer';
import Header from './components/Header';

const SALES_OPEN = false; // ← imposta true il 19/05 per aprire le vendite

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

const Shop = () => {
  const backUrl = new URLSearchParams(window.location.search).get('back') || 'apertura-nazionale.html';

  return (
  <div className="vb-root shop-root">
    <Header
      homeLink="index.html"
      logoPath="assets/logo-mdio.jpeg"
      ctaText="Apertura Nazionale →"
      ctaLink="apertura-nazionale.html"
    >
      <a href={backUrl}>← Torna indietro</a>
    </Header>

    <section className="shop-hero">
      <div className="shop-hero-inner">
        <div className="shop-eyebrow">Apertura Nazionale 2026 — MDIO Lombardo</div>
        <h1 className="shop-title">Acquista i biglietti</h1>
        <p className="shop-sub">Milano · Monza · Sale Marasino — 18 · 19 · 20 Settembre</p>
      </div>
    </section>

    {SALES_OPEN ? (
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
    ) : (
      <section className="shop-soon">
        <div className="shop-soon-inner">
          <div className="shop-soon-eyebrow">— Apertura vendite</div>
          <h2 className="shop-soon-title">
            Le vendite aprono<br /><em>il 19 maggio.</em>
          </h2>
          <p className="shop-soon-sub">
            Ci stiamo preparando per accoglierti al meglio.<br />
            Torna tra poco: ci aspetta un'apertura rotaractiana indimenticabile.
          </p>
          <Countdown targetDate="2026-05-19T10:00:00" />
          <p className="shop-soon-cta-label">Nel frattempo, scopri il programma completo →</p>
          <a href="apertura-nazionale.html" className="shop-soon-btn">Scopri l'Apertura Nazionale</a>
        </div>
      </section>
    )}

    <Footer />
  </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Shop />
      <CookieBanner />
    </>
  </React.StrictMode>
);
