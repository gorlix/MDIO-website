import React from 'react';
import ReactDOM from 'react-dom/client';
import '../globals.css';
import '../home.css';
import './2041.css';
import Countdown from '../components/Countdown';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Distretto2041 = () => {
  const [zoneHover, setZoneHover] = React.useState(null);

  const focusAreas = [
    {
      n: '01',
      name: 'INNOVAZIONE',
      prov: 'Startup · Ricerca · Accademia',
      desc: 'Hub di pitch competition, borse di studio e premi di laurea. Il tessuto accademico e imprenditoriale milanese è il nostro incubatore naturale.',
      bg: '#c8174a',
      fg: '#fff',
    },
    {
      n: '02',
      name: 'SOLIDARIETÀ',
      prov: 'Terzo settore · Periferie · Inclusione',
      desc: 'Partnership storiche con Opera San Francesco, Pane Quotidiano, City Angels. Milano non lascia indietro nessuno — e noi siamo in prima linea.',
      bg: '#0e0e0e',
      fg: '#fff',
    },
    {
      n: '03',
      name: 'NETWORK',
      prov: 'Mentorship · Internazionale · Career',
      desc: 'Revisioni CV, incontri con CEO e leader di settore, gemellaggi europei. Il vero valore aggiunto del 2041 è la rete che costruisci.',
      bg: '#ffd54a',
      fg: '#1a1a1a',
    },
  ];

  const awards = [
    {
      n: '01',
      title: 'Premi & Borse di Studio per l\'Innovazione',
      body: 'Sfruttando il tessuto accademico e imprenditoriale milanese, il distretto collabora a bandi, premi di laurea e pitch competition per finanziare start-up giovanili, progetti di ricerca e tesi brillanti.',
      tag: 'Innovazione',
    },
    {
      n: '02',
      title: 'Azione Professionale & Mentorship',
      body: 'Il vero marchio di fabbrica storico del 2041: incontri one-to-one, revisioni CV e seminari con CEO e leader di settore. Un vantaggio competitivo reale nel mondo del lavoro.',
      tag: 'Career',
    },
    {
      n: '03',
      title: 'RYLA Metropolitano',
      body: 'Le edizioni del RYLA organizzate nell\'area milanese si distinguono per il taglio fortemente manageriale e internazionale, formando generazioni di leader oggi attivi nell\'imprenditoria lombarda e nazionale.',
      tag: 'Leadership',
    },
    {
      n: '04',
      title: 'Paul Harris Fellow',
      body: 'Grazie all\'eccezionale capacità di fundraising e al forte impatto sulla comunità urbana, molti soci e club del 2041 vengono regolarmente insigniti di questa prestigiosa onorificenza da Rotary International.',
      tag: 'Eccellenza',
    },
  ];

  const services = [
    {
      n: '01',
      icon: '🤲',
      title: 'Inclusione Sociale & Supporto agli Ultimi',
      body: 'I club collaborano da anni con i giganti della solidarietà milanese — Opera San Francesco, Pane Quotidiano, City Angels e Ronda della Carità — organizzando raccolte alimentari, di coperte e prestando servizio diretto per supportare i senza fissa dimora e le famiglie in difficoltà.',
      tags: ['Inclusione', 'Terzo Settore', 'Milano'],
    },
    {
      n: '02',
      icon: '🔬',
      title: 'Salute & Ricerca Scientifica',
      body: 'Storico è l\'impegno a fianco di enti come LILT e Fondazione Veronesi. Le campagne di sensibilizzazione e i grandi eventi di raccolta fondi del 2041 hanno finanziato borse di studio per giovani ricercatori e macchinari diagnostici per gli ospedali cittadini.',
      tags: ['LILT', 'Ricerca', 'Ospedali'],
    },
    {
      n: '03',
      icon: '🌿',
      title: 'Sostenibilità Urbana',
      body: 'Anche in una metropoli dominata dal cemento, il distretto porta avanti service legati al verde urbano — piantumazioni nel Parco Agricolo Sud, campagne di clean-up cittadino — e all\'economia circolare.',
      tags: ['Green', 'Circolare', 'Parco Sud'],
    },
  ];

  return (
    <div className="vb-root d-root">

      {/* ── HEADER ──────────────────────────────── */}
      <Header 
        homeLink="../index.html" 
        logoPath="../assets/logo-mdio.jpeg"
        ctaText="Apertura Nazionale 2026 →"
        ctaLink="../apertura-nazionale.html"
      >
        <a href="../index.html" onClick={(e) => { if (window.history.length > 1) { e.preventDefault(); window.history.back(); } }}>← MDIO</a>
        <a href="#identita">Identità</a>
        <a href="#numeri">Numeri</a>
        <a href="#focus">Focus</a>
        <a href="#storia">Storia</a>
        <a href="#service">Service</a>
      </Header>

      {/* ── HERO ────────────────────────────────── */}
      <section className="d-hero">
        <div className="d-hero-inner">
          <div className="d-hero-left">
            <div className="d-hero-eyebrow">Distretto Rotaract</div>
            <div className="d-hero-num">2041</div>
            <div className="d-hero-title">
              Area Metropolitana<br />di Milano
            </div>
            <p className="d-hero-claim">
              Dove l'energia della metropoli incontra il servizio.<br />
              Connesso, inclusivo, proiettato verso il futuro.
            </p>
            <div className="d-hero-stats">
              <span><strong>18</strong> club</span>
              <span>·</span>
              <span><strong>352</strong> soci</span>
              <span>·</span>
              <span><strong>1</strong> metropoli</span>
              <span>·</span>
              <span><strong>3</strong> aree di focus</span>
            </div>
            <div className="d-hero-actions">
              <a
                href="https://www.rotaract2041.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="d-btn-primary"
              >
                Sito Ufficiale ↗
              </a>
              <a
                href="https://www.instagram.com/distrettorotaract2041/"
                target="_blank"
                rel="noopener noreferrer"
                className="d-btn-ghost"
              >
                Instagram ↗
              </a>
            </div>
          </div>
          <div className="d-hero-img">
            <img src="../assets/2041-05-Milano.jpeg" alt="Distretto Rotaract 2041 — Milano" />
          </div>
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────── */}
      <div className="d-marquee">
        <div className="d-marquee-track">
          {[0, 1].map((i) => (
            <React.Fragment key={i}>
              <span>DISTRETTO ROTARACT 2041</span>
              <span className="d-star"> ✦ </span>
              <span>AREA METROPOLITANA DI MILANO</span>
              <span className="d-star"> ✦ </span>
              <span>28 CLUB · 612 SOCI</span>
              <span className="d-star"> ✦ </span>
              <span>INNOVAZIONE · SOLIDARIETÀ · NETWORK</span>
              <span className="d-star"> ✦ </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ── IDENTITÀ ────────────────────────────── */}
      <section id="identita" className="vb-manifesto">
        <div className="vb-manifesto-side">
          <div className="vb-section-no">[ 01 ]</div>
          <div className="vb-section-name">IDENTITÀ</div>
        </div>
        <div className="vb-manifesto-main">
          <h2 className="vb-manifesto-title">
            Il Cuore<br />Metropolitano.
          </h2>
          <div className="vb-manifesto-body">
            <p className="vb-manifesto-lede">
              Il Distretto Rotaract 2041 coincide con <strong>l'area metropolitana di Milano</strong>, capitale economica, del design e dell'innovazione in Italia. È l'unico distretto interamente metropolitano del Paese, caratterizzato da un contesto dinamico, internazionale e in continua evoluzione.
            </p>
            <p>
              In questo ambiente altamente connesso, i Rotaract Club del 2041 rappresentano veri e propri centri di progettazione e sviluppo: studenti provenienti da università di eccellenza e giovani professionisti di diversi settori collaborano per ideare e realizzare service ad alto impatto sul territorio e oltre.
            </p>
            <p>
              La forte vocazione europea e internazionale del distretto si riflette anche nella sua Fellowship, fatta di momenti di networking, eventi di rilievo e occasioni di confronto che favoriscono la crescita personale e professionale dei soci.
            </p>
            <p>
              Milano è una città che non si ferma mai: il Distretto Rotaract 2041 ne incarna pienamente lo spirito, unendo energia, innovazione e impegno concreto al servizio della comunità.
            </p>
            <p className="d-founding">
              Dal 1968 serviamo al di sopra di ogni interesse personale. Il Distretto Rotaract 2041 riunisce 18 Club Rotaract nell'Area Metropolitana di Milano.
            </p>
          </div>
          <div className="vb-pillars">
            {[
              { n: '01', t: 'Dinamismo', d: 'I ritmi della metropoli nel servizio.' },
              { n: '02', t: 'Visione', d: 'Sempre proiettati verso il futuro.' },
              { n: '03', t: 'Connessione', d: 'Hub professionale e internazionale.' },
              { n: '04', t: 'Inclusione', d: 'Nessuno escluso, nessuno lasciato indietro.' },
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

      {/* ── NUMERI ──────────────────────────────── */}
      <section id="numeri" className="vb-numbers">
        <div className="vb-numbers-head">
          <div className="vb-section-no vb-light">[ 02 ]</div>
          <div className="vb-section-name vb-light">IL DISTRETTO IN CIFRE</div>
        </div>
        <div className="vb-numbers-grid">
          {[
            { n: '28', l: 'CLUB', s: 'Rotaract sul territorio' },
            { n: '612', l: 'SOCI', s: 'attivi under 30' },
            { n: '1', l: 'METROPOLI', s: 'Milano, capitale d\'Italia' },
            { n: '3', l: 'AREE DI FOCUS', s: 'Innovazione · Solidarietà · Network' },
          ].map((x, i) => (
            <div key={i} className="vb-num-cell">
              <div className="vb-num-n">{x.n}</div>
              <div className="vb-num-l">{x.l}</div>
              <div className="vb-num-s">{x.s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── AREE DI FOCUS ───────────────────────── */}
      <section id="focus" className="d-zones">
        <div className="d-zones-head">
          <div className="vb-section-no vb-light">[ 03 ]</div>
          <div className="vb-section-name vb-light">AREE DI FOCUS</div>
          <h2 className="d-zones-title">
            Tre pilastri.<br />Una metropoli.
          </h2>
        </div>
        <div className="d-zone-blocks">
          {focusAreas.map((z, i) => (
            <div
              key={z.name}
              className={`d-zone-block${zoneHover === i ? ' is-hover' : ''}${zoneHover !== null && zoneHover !== i ? ' is-dim' : ''}`}
              style={{ background: z.bg, color: z.fg }}
              onMouseEnter={() => setZoneHover(i)}
              onMouseLeave={() => setZoneHover(null)}
            >
              <div>
                <div className="d-zone-num">{z.n}</div>
                <div className="d-zone-name">{z.name}</div>
                <div className="d-zone-prov">{z.prov}</div>
              </div>
              <div className="d-zone-desc">{z.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STORIA & RICONOSCIMENTI ─────────────── */}
      <section id="storia" className="d-awards">
        <div className="d-awards-head">
          <div className="vb-section-no">[ 04 ]</div>
          <div className="vb-section-name">STORIA &amp; RICONOSCIMENTI</div>
          <h2 className="d-awards-title">
            Un laboratorio<br /><em>di leadership e eccellenza.</em>
          </h2>
        </div>
        <div className="d-awards-grid">
          {awards.map((a) => (
            <div key={a.n} className="d-award-card">
              <div className="d-award-n">{a.n}</div>
              <div className="d-award-title">{a.title}</div>
              <div className="d-award-body">{a.body}</div>
              <span className="d-award-tag">{a.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICE & SFIDE ─────────────────────── */}
      <section id="service" className="d-services">
        <div className="d-services-head">
          <div className="vb-section-no vb-light">[ 05 ]</div>
          <div className="vb-section-name vb-light">SERVICE &amp; SFIDE</div>
          <h2 className="d-services-title">
            La metropoli<br /><em>ci chiama, noi rispondiamo.</em>
          </h2>
        </div>
        <div className="d-services-grid">
          {services.map((s) => (
            <div key={s.n} className="d-service-card">
              <div className="d-service-icon">{s.icon}</div>
              <div className="d-service-num">{s.n}</div>
              <div className="d-service-title">{s.title}</div>
              <div className="d-service-body">{s.body}</div>
              <div className="d-service-tags">
                {s.tags.map((t) => (
                  <span key={t} className="d-service-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FARE RETE ───────────────────────────── */}
      <section className="d-rete">
        <div className="d-rete-inner">
          <div className="d-rete-label">[ 06 ] — Perché fare rete con noi</div>
          <div className="d-rete-quote">
            L'hub ideale per chi cerca la dimensione metropolitana, i gemellaggi europei e un networking professionale di altissimo livello.
          </div>
          <p className="d-rete-sub">
            Fare rete con il Distretto 2041 significa avere accesso a un vero "hub" internazionale: il ponte perfetto per club di tutta Italia e d'Europa che vogliono confrontarsi con Milano.
          </p>
          <div className="d-rete-actions">
            <a href="mailto:info@rotaract2041.com" className="d-btn-primary">
              Contattaci →
            </a>
            <a
              href="https://www.rotaract2041.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="d-btn-ghost"
            >
              Sito Ufficiale ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA APERTURA ────────────────────────── */}
      <section className="vb-event">
        <div className="vb-event-marquee">
          <div className="vb-event-track">
            {[0, 1].map((i) => (
              <React.Fragment key={i}>
                <span>APERTURA NAZIONALE 2026</span>
                <span className="vb-event-star"> ✦ </span>
                <span>18 · 19 · 20 SETTEMBRE</span>
                <span className="vb-event-star"> ✦ </span>
                <span>MILANO · MONZA · ISEO</span>
                <span className="vb-event-star"> ✦ </span>
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
            <a href="../apertura-nazionale.html" className="vb-btn-block">
              SCOPRI L'APERTURA NAZIONALE →
            </a>
          </div>
          <div className="vb-event-right">
            <Countdown />
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────── */}
      <Footer />

    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Distretto2041 />
  </React.StrictMode>
);
