import React from 'react';
import ReactDOM from 'react-dom/client';
import './globals.css';
import './home.css';
import Countdown from './components/Countdown';
import Footer from './components/Footer';
import Header from './components/Header';

const Home = () => {
  const [hover, setHover] = React.useState(null);

  React.useEffect(() => {
    const y = sessionStorage.getItem('home_scroll');
    if (y) {
      sessionStorage.removeItem('home_scroll');
      window.scrollTo(0, parseInt(y, 10));
    }
  }, []);

  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const [districtImgs] = React.useState(() => ({
    img2042: pick([
      'assets/2042-01-Lecco.jpeg', 'assets/2042-02-Bergamo.jpeg',
      'assets/2042-03-Sondrio.jpeg', 'assets/2042-04-Como.jpeg',
      'assets/2042-06-Varese.jpeg', 'assets/2042-13-Monza.jpeg',
    ]),
    img2050: pick([
      'assets/2050-07-Piacenza.jpeg', 'assets/2050-08-Pavia.jpeg',
      'assets/2050-09-Lodi.jpeg', 'assets/2050-10-Brescia.jpeg',
      'assets/2050-11-Cremona.jpeg', 'assets/2050-12-Mantova.jpeg',
    ]),
  }));

  const districts = [
    {
      n: '2041',
      city: 'Area Metropolitana di Milano',
      sub: 'Il cuore metropolitano',
      img: 'assets/2041-05-Milano.jpeg',
      bg: '#c8174a',
      fg: '#ffffff',
      accent: '#ffd54a',
      claim: 'Dove l\'energia della metropoli incontra il servizio.',
      zone: 'Comprende esclusivamente l\'Area Metropolitana di Milano.',
      cities: ['Milano'],
      clubs: 28,
      soci: 612,
      page: 'distretti/2041.html',
      sito: 'https://www.rotaract2041.com/',
      ig: 'https://www.instagram.com/distrettorotaract2041/',
    },
    {
      n: '2042',
      city: 'Lombardia Centro & Nord',
      sub: 'Tra laghi, valli e città d\'arte',
      img: districtImgs.img2042,
      bg: '#1a3d8f',
      fg: '#ffffff',
      accent: '#7eb7ff',
      claim: 'Dalle Alpi alla Brianza, una rete tra laghi, valli e città d\'arte.',
      zone: 'Bergamo · Como · Lecco · Monza Brianza · Sondrio · Varese + provincia MI (escl. 2041).',
      cities: ['Bergamo', 'Como', 'Lecco', 'Monza B.', 'Sondrio', 'Varese'],
      clubs: 24,
      soci: 487,
      page: 'distretti/2042.html',
      sito: 'https://www.distrettorotaract2042.it/',
      ig: 'https://www.instagram.com/rotaract2042/',
    },
    {
      n: '2050',
      city: 'Lombardia Sud & Piacenza',
      sub: 'Quattro macro-zone, una pianura',
      img: districtImgs.img2050,
      bg: '#e8a93a',
      fg: '#1a1a1a',
      accent: '#a4174c',
      claim: 'Francigena, Leonessa, Navigli e Padana: dalla Lombardia all\'Emilia.',
      zone: 'Brescia · Cremona · Lodi · Mantova · Pavia · Piacenza + alcuni comuni Città M. di MI.',
      cities: ['Brescia', 'Cremona', 'Lodi', 'Mantova', 'Pavia', 'Piacenza'],
      clubs: 21,
      soci: 398,
      page: 'distretti/2050.html',
      sito: 'https://www.rotaract2050.org/',
      ig: 'https://www.instagram.com/rotaract2050/',
    },
  ];

  return (
    <div className="vb-root">
      {/* HEADER */}
      <Header 
        homeLink="./index.html" 
        logoPath="assets/logo-mdio.jpeg"
        ctaText="Apertura Nazionale 2026 →"
        ctaLink="./apertura-nazionale.html"
      >
        <a href="#manifesto">Chi siamo</a>
        <a href="#distretti">Distretti</a>
        <a href="#numeri">Numeri</a>
        <a href="#mappa">Territorio</a>
        <span style={{ opacity: 0.45, cursor: 'default' }}>News ▾</span>
      </Header>

      {/* HERO — TRE BLOCCHI */}
      <section className="vb-hero">
        <div className="vb-hero-top">
          <div className="vb-hero-eyebrow">
            <span>◆</span> Multidistretto Italia Ovest
          </div>
          <h1 className="vb-hero-title">
            <span className="vb-h-line">TRE DISTRETTI</span>
            <span className="vb-h-line vb-h-amp">/</span>
            <span className="vb-h-line">UNA LOMBARDIA</span>
          </h1>
          <p className="vb-hero-sub">
            Distretti <strong>2041</strong> · <strong>2042</strong> · <strong>2050</strong>{' '}
            — completamente alla pari. 73 club, 1.497 soci.
          </p>
        </div>

        <div className="vb-blocks">
          {districts.map((d, i) => (
            <div
              key={d.n}
              className={`vb-block ${hover === i ? 'is-hover' : ''} ${hover !== null && hover !== i ? 'is-dim' : ''}`}
              style={{ background: d.bg, color: d.fg }}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
            >
              <div className="vb-block-top">
                <div className="vb-block-num">{d.n}</div>
                <div className="vb-block-arrow" style={{ color: d.accent }}>↗</div>
              </div>
              <div className="vb-block-bottom">
                <div className="vb-block-sub" style={{ color: d.accent }}>Distretto Rotaract</div>
                <div className="vb-block-city">{d.city}</div>
                <div className="vb-block-tag">{d.sub}</div>
                <div className="vb-block-stats">
                  <div><strong>{d.clubs}</strong> club</div>
                  <div className="vb-dot" style={{ background: d.accent }} />
                  <div><strong>{d.soci}</strong> soci</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA APERTURA NAZIONALE — TICKER */}
      <section className="vb-event">
        <div className="vb-event-marquee">
          <div className="vb-event-track">
            {Array(2).fill(0).map((_, i) => (
              <React.Fragment key={i}>
                <span>APERTURA NAZIONALE 2026</span>
                <span className="vb-event-star">✦</span>
                <span>18 · 19 · 20 SETTEMBRE</span>
                <span className="vb-event-star">✦</span>
                <span>MILANO · MONZA · ISEO</span>
                <span className="vb-event-star">✦</span>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="vb-event-body">
          <div className="vb-event-left">
            <div className="vb-event-eyebrow">— L'EVENTO DELL'ANNO</div>
            <h2 className="vb-event-title">
              Tre giorni.<br />
              Tre città.<br />
              <span className="vb-event-emph">Un solo MDIO.</span>
            </h2>
            <a href="./apertura-nazionale.html" className="vb-btn-block">SCOPRI L'EVENTO →</a>
          </div>
          <div className="vb-event-right">
            <Countdown />
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section id="manifesto" className="vb-manifesto">
        <div className="vb-manifesto-side">
          <div className="vb-section-no">[ 01 ]</div>
          <div className="vb-section-name">MANIFESTO</div>
        </div>
        <div className="vb-manifesto-main">
          <h2 className="vb-manifesto-title">
            Cos'è il<br />Multidistretto.
          </h2>
          <div className="vb-manifesto-body">
            <p className="vb-manifesto-lede">
              Il MDIO unisce <strong>2041</strong>, <strong>2042</strong> e <strong>2050</strong>{' '}
              — tre distretti rotaractiani che coprono Lombardia e Provincia di Piacenza —
              <strong> in un coordinamento alla pari</strong>. Nessuno guida, tutti contribuiscono.
            </p>
            <p>
              Una rete giovane, capillare, profondamente diversa: dalla metropoli milanese alle
              valli alpine, dai laghi alla pianura del Po. Tre identità, una sola comunità.
            </p>
          </div>

          <div className="vb-pillars">
            {[
              { n: '01', t: 'Parità', d: 'Tre distretti, peso uguale.' },
              { n: '02', t: 'Servizio', d: 'Progetti che durano oltre l\'evento.' },
              { n: '03', t: 'Territorio', d: 'Capillarità dalla città alla valle.' },
              { n: '04', t: 'Amicizia', d: 'La rete viene prima di tutto.' },
            ].map((p) => (
              <div key={p.n} className="vb-pillar">
                <div className="vb-pillar-n">{p.n}</div>
                <div className="vb-pillar-t">{p.t}</div>
                <div className="vb-pillar-d">{p.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUMERI */}
      <section id="numeri" className="vb-numbers">
        <div className="vb-numbers-head">
          <div className="vb-section-no vb-light">[ 02 ]</div>
          <div className="vb-section-name vb-light">IL MDIO IN CIFRE</div>
        </div>
        <div className="vb-numbers-grid">
          {[
            { n: '73', l: 'CLUB', s: 'Rotaract sul territorio' },
            { n: '1.497', l: 'SOCI', s: 'attivi under 30' },
            { n: '12', l: 'PROVINCE', s: 'Lombardia + Piacenza' },
            { n: '180+', l: 'SERVICE', s: 'all\'anno rotaractiano' },
          ].map((x, i) => (
            <div key={i} className="vb-num-cell">
              <div className="vb-num-n">{x.n}</div>
              <div className="vb-num-l">{x.l}</div>
              <div className="vb-num-s">{x.s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DISTRETTI EXPANDED */}
      <section id="distretti" className="vb-distretti">
        <div className="vb-distretti-head">
          <div>
            <div className="vb-section-no">[ 03 ]</div>
            <div className="vb-section-name">I DISTRETTI</div>
          </div>
          <h2 className="vb-distretti-title">
            Tre identità.<br />
            <span className="vb-amp">Pari dignità.</span>
          </h2>
        </div>

        <div className="vb-dist-stack">
          {districts.map((d, i) => (
            <article
              key={d.n}
              className="vb-dist-row"
              style={{ '--bg': d.bg, '--fg': d.fg, '--ac': d.accent }}
            >
              <div className="vb-dist-no">
                <span className="vb-dist-no-d">{d.n.slice(-2)}</span>
                <span className="vb-dist-no-m">{d.n}</span>
              </div>
              <div className="vb-dist-img">
                <img src={d.img} alt={d.city} />
                <div className="vb-dist-overlay" />
              </div>
              <div className="vb-dist-content">
                <div className="vb-dist-sub">{d.sub.toUpperCase()}</div>
                <h3 className="vb-dist-city">{d.city}</h3>
                <p className="vb-dist-claim">{d.claim}</p>
                <div className="vb-dist-zone">{d.zone}</div>
                {d.n === '2050' && (
                  <div className="vb-dist-zones">
                    <span>MACRO-ZONE:</span>
                    <span>FRANCIGENA</span>
                    <span>LEONESSA</span>
                    <span>NAVIGLI</span>
                    <span>PADANA</span>
                  </div>
                )}
                <div className="vb-dist-cities">
                  {d.cities.map((c) => (
                    <span key={c} className="vb-city-chip">{c}</span>
                  ))}
                </div>
              </div>
              <div className="vb-dist-cta">
                <a
                  href={d.page || d.sito}
                  {...(d.page ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                  className="vb-dist-cta-main"
                  onClick={() => { if (d.page) sessionStorage.setItem('home_scroll', window.scrollY); }}
                >
                  SCOPRI<br />DI PIÙ
                  <span>↗</span>
                </a>
                <div className="vb-dist-cta-sub">
                  <a href={d.ig} target="_blank" rel="noopener noreferrer">IG</a>
                  <a href={d.sito} target="_blank" rel="noopener noreferrer">SITO</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MAPPA */}
      <section id="mappa" className="vb-mappa">
        <div className="vb-mappa-head">
          <div className="vb-section-no vb-light">[ 04 ]</div>
          <div className="vb-section-name vb-light">TERRITORIO</div>
          <h2 className="vb-mappa-title">UNA REGIONE.<br/>TRE DISTRETTI.</h2>
        </div>
        <div className="vb-mappa-wrap">
          <img src="assets/Lombardia%20MDIO.svg" alt="Mappa Lombardia MDIO" className="vb-mappa-svg" />
          <div className="vb-mappa-legend">
            <div className="vb-leg-item"><span style={{background:'#c8174a'}} />2041 — Milano M.</div>
            <div className="vb-leg-item"><span style={{background:'#1a3d8f'}} />2042 — Centro/Nord</div>
            <div className="vb-leg-item"><span style={{background:'#e8a93a'}} />2050 — Sud + PC</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
