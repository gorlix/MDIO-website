import React from 'react';
import ReactDOM from 'react-dom/client';
import '../globals.css';
import '../home.css';
import './2042.css';
import Countdown from '../components/Countdown';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Distretto2042 = () => {
  const [zoneHover, setZoneHover] = React.useState(null);
  const [heroImg] = React.useState(() => {
    const imgs = [
      '../assets/2042-01-Lecco.jpeg', '../assets/2042-02-Bergamo.jpeg',
      '../assets/2042-03-Sondrio.jpeg', '../assets/2042-04-Como.jpeg',
      '../assets/2042-06-Varese.jpeg', '../assets/2042-13-Monza.jpeg',
    ];
    return imgs[Math.floor(Math.random() * imgs.length)];
  });

  const areas = [
    {
      n: '01',
      name: 'LAGHI',
      prov: 'Como · Lecco · Varese',
      desc: 'Dai grandi laghi prealpini alle ville liberty: la Fellowship più scenografica d\'Italia, tra gite in barca e aperitivi al tramonto.',
      bg: '#1d6b8f',
      fg: '#fff',
    },
    {
      n: '02',
      name: 'VALTELLINA',
      prov: 'Sondrio',
      desc: 'Le Alpi come palestra di vita: il RYLA immersivo, i service di soccorso alpino e la resilienza che solo la montagna sa insegnare.',
      bg: '#2a5c3a',
      fg: '#fff',
    },
    {
      n: '03',
      name: 'BRIANZA',
      prov: 'Monza e Brianza',
      desc: 'Il cuore del Made in Italy manifatturiero: design, PMI e artigianato d\'eccellenza come terreno fertile per i service più concreti.',
      bg: '#7eb7ff',
      fg: '#1a1a1a',
    },
    {
      n: '04',
      name: 'BERGAMASCA',
      prov: 'Bergamo',
      desc: 'La provincia più operosa d\'Italia: spirito d\'impresa, comunità solidale e un distretto che non si è fermato nemmeno nei momenti più difficili.',
      bg: '#1a3d8f',
      fg: '#fff',
    },
  ];

  const awards = [
    {
      n: '01',
      title: 'Premi per l\'Imprenditoria e l\'Artigianato Giovanile',
      body: 'Attivo tramite bandi condivisi con il Rotary, il distretto premia giovani talenti dell\'artigianato, del design e delle PMI, fornendo borse di studio e supporto all\'avvio di nuove imprese.',
      tag: 'Imprenditoria',
    },
    {
      n: '02',
      title: 'Riconoscimenti per la Sostenibilità Ambientale',
      body: 'Data la fragilità e la bellezza dell\'ecosistema lacustre e montano, i club del 2042 ricevono regolarmente encomi e certificati a livello nazionale per i progetti di salvaguardia ambientale.',
      tag: 'Ambiente',
    },
    {
      n: '03',
      title: 'RYLA Immersivo',
      body: 'Il RYLA del 2042 si distingue per l\'approccio outdoor. Sfruttando le location montane e lacustri, la formazione sulla leadership viene affiancata a prove di team building all\'aria aperta.',
      tag: 'Leadership',
    },
    {
      n: '04',
      title: 'Paul Harris Fellow',
      body: 'L\'impegno nei momenti di crisi — come il supporto agli ospedali bergamaschi e lombardi — è valso a molti club e soci del distretto le massime onorificenze rotariane.',
      tag: 'Eccellenza',
    },
  ];

  const services = [
    {
      n: '01',
      icon: '🌲',
      title: 'Tutela del Patrimonio Naturale',
      body: 'Campagne di riforestazione montana, pulizia dei fondali e delle sponde dei laghi, riqualificazione di antichi sentieri alpini. Il territorio è sacro e va protetto con azioni concrete e continuative.',
      tags: ['Natura', 'Laghi', 'Montagna'],
    },
    {
      n: '02',
      icon: '🚑',
      title: 'Sanità & Soccorso sul Territorio',
      body: 'Grandi service distrettuali per l\'acquisto di macchinari diagnostici per gli ospedali locali, ambulanze e attrezzature per le unità del Soccorso Alpino e della Protezione Civile.',
      tags: ['Ospedali', 'Soccorso Alpino', 'P.C.'],
    },
    {
      n: '03',
      icon: '⛷️',
      title: 'Inclusione attraverso Sport e Natura',
      body: 'Il 2042 crede nel potere terapeutico dello sport: presidi per lo sci paralimpico, giornate di vela e ippoterapia per ragazzi con fragilità fisiche e cognitive. La natura non esclude nessuno.',
      tags: ['Paralimpico', 'Vela', 'Ippoterapia'],
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
        <a href="#aree">Aree</a>
        <a href="#storia">Storia</a>
        <a href="#service">Service</a>
      </Header>

      {/* ── HERO ────────────────────────────────── */}
      <section className="d-hero">
        <div className="d-hero-inner">
          <div className="d-hero-left">
            <div className="d-hero-eyebrow">Distretto Rotaract</div>
            <div className="d-hero-num">2042</div>
            <div className="d-hero-title">
              Lombardia<br />Centro &amp; Nord
            </div>
            <p className="d-hero-claim">
              Dalle Alpi alla Brianza, una rete tra laghi,<br />
              valli e città d'arte.
            </p>
            <div className="d-hero-stats">
              <span><strong>24</strong> club</span>
              <span>·</span>
              <span><strong>487</strong> soci</span>
              <span>·</span>
              <span><strong>6</strong> province</span>
              <span>·</span>
              <span><strong>4</strong> aree geografiche</span>
            </div>
            <div className="d-hero-actions">
              <a
                href="https://www.distrettorotaract2042.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="d-btn-primary"
              >
                Sito Ufficiale ↗
              </a>
              <a
                href="https://www.instagram.com/rotaract2042/"
                target="_blank"
                rel="noopener noreferrer"
                className="d-btn-ghost"
              >
                Instagram ↗
              </a>
            </div>
          </div>
          <div className="d-hero-img">
            <img src={heroImg} alt="Distretto Rotaract 2042" />
          </div>
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────── */}
      <div className="d-marquee">
        <div className="d-marquee-track">
          {[0, 1].map((i) => (
            <React.Fragment key={i}>
              <span>DISTRETTO ROTARACT 2042</span>
              <span className="d-star"> ✦ </span>
              <span>LOMBARDIA CENTRO &amp; NORD</span>
              <span className="d-star"> ✦ </span>
              <span>24 CLUB · 487 SOCI</span>
              <span className="d-star"> ✦ </span>
              <span>BERGAMO · COMO · LECCO · MONZA B. · SONDRIO · VARESE</span>
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
            Tra Laghi,<br />Vette e Impresa.
          </h2>
          <div className="vb-manifesto-body">
            <p className="vb-manifesto-lede">
              Il Distretto 2042 abbraccia <strong>l'anima settentrionale della Lombardia</strong>: due anime complementari che si fondono alla perfezione — l'eccellenza industriale delle valli e la Brianza da un lato, il patrimonio naturalistico mozzafiato dei grandi laghi prealpini e della Valtellina dall'altro.
            </p>
            <p>
              Visitare il 2042 significa scoprire una Fellowship autentica, vissuta a stretto contatto con il territorio e la natura. Dai weekend in baita alle gite in barca sul Lago di Como o Maggiore, fino alle degustazioni dei prodotti tipici locali, il senso di appartenenza qui è profondo e indissolubilmente legato alla bellezza dei luoghi.
            </p>
            <p className="d-founding">
              Dal 1968 serviamo al di sopra di ogni interesse personale. Il Distretto Rotaract 2042 riunisce 24 Club Rotaract nelle province di Bergamo, Como, Lecco, Monza e Brianza, Sondrio e Varese.
            </p>
          </div>
          <div className="vb-pillars">
            {[
              { n: '01', t: 'Concretezza', d: 'Il fare prima del dire, sempre.' },
              { n: '02', t: 'Natura', d: 'Il territorio è la nostra identità.' },
              { n: '03', t: 'Impresa', d: 'La vocazione produttiva della Lombardia.' },
              { n: '04', t: 'Appartenenza', d: 'Fellowship viscerale e radicata.' },
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
            { n: '24', l: 'CLUB', s: 'Rotaract sul territorio' },
            { n: '487', l: 'SOCI', s: 'attivi under 30' },
            { n: '6', l: 'PROVINCE', s: 'BG · CO · LC · MB · SO · VA' },
            { n: '4', l: 'AREE', s: 'Laghi · Valtellina · Brianza · Bergamasca' },
          ].map((x, i) => (
            <div key={i} className="vb-num-cell">
              <div className="vb-num-n">{x.n}</div>
              <div className="vb-num-l">{x.l}</div>
              <div className="vb-num-s">{x.s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── AREE GEOGRAFICHE ────────────────────── */}
      <section id="aree" className="d-zones">
        <div className="d-zones-head">
          <div className="vb-section-no vb-light">[ 03 ]</div>
          <div className="vb-section-name vb-light">AREE GEOGRAFICHE</div>
          <h2 className="d-zones-title">
            Quattro anime.<br />Un distretto.
          </h2>
        </div>
        <div className="d-zone-blocks">
          {areas.map((z, i) => (
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
            Una storia<br /><em>di fare e di costruire.</em>
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
            Rimboccarsi le maniche<br /><em>è nel nostro DNA.</em>
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
            Outdoor, cultura, Made in Italy e un networking di eccellenza lontano dalla frenesia metropolitana.
          </div>
          <p className="d-rete-sub">
            Venire a trovare il Distretto 2042 significa immergersi nella Dolce Vita lacustre e nella solidità della montagna. Siamo il partner ideale per gemellaggi all'insegna dell'outdoor, dell'amicizia più vera e di progetti di grande concretezza.
          </p>
          <div className="d-rete-actions">
            <a href="mailto:info@distrettorotaract2042.it" className="d-btn-primary">
              Contattaci →
            </a>
            <a
              href="https://www.distrettorotaract2042.it/"
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
    <Distretto2042 />
  </React.StrictMode>
);
