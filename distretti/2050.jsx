import React from 'react';
import ReactDOM from 'react-dom/client';
import '../globals.css';
import '../home.css';
import './2050.css';
import Countdown from '../components/Countdown';
import CookieBanner from '../components/CookieBanner';
import Footer from '../components/Footer';
import Header from '../components/Header';
const Distretto2050 = () => {
  const [zoneHover, setZoneHover] = React.useState(null);
  const [heroImg] = React.useState(() => {
    const imgs = [
      '../assets/2050-07-Piacenza.jpeg', '../assets/2050-08-Pavia.jpeg',
      '../assets/2050-09-Lodi.jpeg', '../assets/2050-10-Brescia.jpeg',
      '../assets/2050-11-Cremona.jpeg', '../assets/2050-12-Mantova.jpeg',
    ];
    return imgs[Math.floor(Math.random() * imgs.length)];
  });

  const zones = [
    {
      n: '01',
      name: 'FRANCIGENA',
      prov: 'Piacenza · Lodi · Cremona Nord',
      clubs: ['Codogno', 'Fiorenzuola d\'Arda', 'Lodi-Adda', 'Piacenza', 'Terre Cremasche'],
      desc: 'Tra Lombardia ed Emilia, lungo la più antica via di pellegrinaggio.',
      bg: '#a4174c',
      fg: '#fff',
    },
    {
      n: '02',
      name: 'LEONESSA',
      prov: 'Brescia',
      clubs: ['Brescia', 'Brescia Franciacorta', 'Brescia Ovest Castello', 'Brescia Sud-Est Montichiari', 'Brescia Veronica Gambara', 'Brescia Vittoria Alata', 'Garda Valle Sabbia', 'Valtrompia'],
      desc: 'Sotto il manto della Leonessa d\'Italia.',
      bg: '#1a3d8f',
      fg: '#fff',
    },
    {
      n: '03',
      name: 'NAVIGLI',
      prov: 'Pavia · Milano Sud',
      clubs: ['Abbiategrasso', 'Morimondo Abbazia', 'Pavia', 'Pavia Nord', 'Pavia Terre Viscontee', 'Vigevano Castello', 'Vigevano Lomellina', 'Voghera'],
      desc: 'Nel cuore della Langombardia Maior.',
      bg: '#2a6b4a',
      fg: '#fff',
    },
    {
      n: '04',
      name: 'PADANA',
      prov: 'Cremona · Mantova',
      clubs: ['Andes Di Virgilio-Curtatone', 'Casalmaggiore-Viadana-Sabbioneta', 'Castiglione delle Stiviere e Alto Mantovano', 'Cremona', 'Gonzaga-Suzzara', 'Mantova', 'Piadena-Casalmaggiore-Asola'],
      desc: 'In riva al Po, fra arte, storia e natura.',
      bg: '#e8a93a',
      fg: '#1a1a1a',
    },
  ];

  const awards = [
    {
      n: '01',
      title: 'Premio Maturità & Premio Università',
      body: 'Storici riconoscimenti alle eccellenze scolastiche e accademiche del territorio, portati avanti spesso in sinergia con i distretti vicini 2041 e 2042. Un investimento concreto sul futuro dei giovani più meritevoli.',
      tag: 'Formazione & Talento',
    },
    {
      n: '02',
      title: 'RYLA — Rotary Youth Leadership Awards',
      body: 'La storica collaborazione con il Rotary 2050 ci vede in prima linea nell\'organizzazione di questo prestigioso programma di formazione e leadership. Per molti soci, il RYLA è un momento fondamentale di crescita personale.',
      tag: 'Leadership',
    },
    {
      n: '03',
      title: 'Attestati Presidenziali & Riconoscimenti Service',
      body: 'Nel corso della sua storia, i club del distretto hanno più volte ottenuto Certificati di Apprezzamento e Attestati Presidenziali dal Rotary International per la continuità e l\'impatto dei progetti sul territorio.',
      tag: 'Eccellenza',
    },
  ];

  const services = [
    {
      n: '01',
      icon: '🏥',
      title: 'Azione Pubblica e Sanitaria',
      body: 'Imponenti raccolte fondi per macchinari medici negli ospedali locali, donazioni di defibrillatori per i piccoli comuni e riqualificazione di spazi di degenza pediatrica. L\'impegno sanitario è storicamente il cuore del distretto.',
      tags: ['Salute', 'APD', 'Comunità'],
    },
    {
      n: '02',
      icon: '🏛',
      title: 'Patrimonio Culturale',
      body: 'Operando in territori ricchi di siti UNESCO e antichi atenei — come l\'Università di Pavia — il distretto investe costantemente in Service volti a tutelare e promuovere la cultura, i teatri storici e l\'arte locale.',
      tags: ['UNESCO', 'Arte', 'Università'],
    },
    {
      n: '03',
      icon: '🤝',
      title: 'Sensibilizzazione & Intervento Diretto',
      body: 'Dalle campagne di sensibilizzazione sanitaria — con forte impegno nel periodo post-pandemico — alla riqualificazione degli spazi urbani: l\'azione è sempre tangibile e radicata nel territorio.',
      tags: ['Territorio', 'Impatto', 'Diretto'],
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
        <a href="#zone">Zone</a>
        <a href="#storia">Storia</a>
        <a href="#service">Service</a>
      </Header>

      {/* ── HERO ────────────────────────────────── */}
      <section className="d-hero">
        <div className="d-hero-inner">
          <div className="d-hero-left">
            <div className="d-hero-eyebrow">Distretto Rotaract</div>
            <div className="d-hero-num">2050</div>
            <h1 className="d-hero-title">
              Lombardia Sud<br />&amp; Piacenza
            </h1>
            <p className="d-hero-claim">
              Francigena, Leonessa, Navigli e Padana:<br />
              dalla Lombardia all'Emilia.
            </p>
            <div className="d-hero-stats">
              <span><strong>30</strong> club</span>
              <span>·</span>
              <span><strong>403</strong> soci</span>
              <span>·</span>
              <span><strong>6</strong> province</span>
              <span>·</span>
              <span><strong>4</strong> macro-zone</span>
            </div>
            <div className="d-hero-actions">
              <a
                href="https://www.rotaract2050.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="d-btn-primary"
              >
                Sito Ufficiale ↗
              </a>
              <a
                href="https://www.instagram.com/rotaract2050/"
                target="_blank"
                rel="noopener noreferrer"
                className="d-btn-ghost"
              >
                Instagram ↗
              </a>
            </div>
          </div>
          <div className="d-hero-img">
            <img src={heroImg} alt="Distretto Rotaract 2050" />
          </div>
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────── */}
      <div className="d-marquee">
        <div className="d-marquee-track">
          {[0, 1].map((i) => (
            <React.Fragment key={i}>
              <span>DISTRETTO ROTARACT 2050</span>
              <span className="d-star"> ✦ </span>
              <span>LOMBARDIA SUD &amp; PIACENZA</span>
              <span className="d-star"> ✦ </span>
              <span>21 CLUB · 398 SOCI</span>
              <span className="d-star"> ✦ </span>
              <span>BRESCIA · CREMONA · LODI · MANTOVA · PAVIA · PIACENZA</span>
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
            Il Mosaico<br />della Pianura.
          </h2>
          <div className="vb-manifesto-body">
            <p className="vb-manifesto-lede">
              Il Distretto 2050 è un <strong>affascinante mosaico territoriale</strong> che fa da ponte tra la Lombardia e l'Emilia-Romagna, abbracciando le province di Brescia, Cremona, Lodi, Mantova, Pavia, Piacenza e alcune aree limitrofe.
            </p>
            <p>
              È un distretto dall'identità poliedrica: unisce la forza produttiva di importanti poli industriali, la profonda tradizione agricola ed enogastronomica della Pianura Padana e la raffinata bellezza di antiche città universitarie e capitali del Rinascimento.
            </p>
            <p>
              Visitare il 2050 significa immergersi in una Fellowship genuina e calorosa. Che si tratti di un aperitivo in Piazza della Loggia a Brescia, di una visita ai palazzi ducali di Mantova o di una cena a base di eccellenze culinarie locali a Piacenza o Cremona, l'accoglienza è sempre il nostro marchio di fabbrica.
            </p>
            <p className="d-founding">
              Dal 1968 serviamo al di sopra di ogni interesse personale. Il Distretto Rotaract 2050 riunisce 21 Club Rotaract delle Province di Cremona, Brescia, Lodi, Mantova, Pavia, Piacenza e alcuni Comuni della Città Metropolitana di Milano.
            </p>
          </div>
          <div className="vb-pillars">
            {[
              { n: '01', t: 'Tradizione', d: 'Enogastronomia e cultura padana.' },
              { n: '02', t: 'Convivialità', d: 'L\'accoglienza è il nostro marchio.' },
              { n: '03', t: 'Territorio', d: 'Dalla città alla pianura.' },
              { n: '04', t: 'Sinergia', d: 'Rete intergenerazionale con il Rotary.' },
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
            { n: '21', l: 'CLUB', s: 'Rotaract sul territorio' },
            { n: '398', l: 'SOCI', s: 'attivi under 30' },
            { n: '6+', l: 'PROVINCE', s: 'Lombardia Sud + Piacenza' },
            { n: '4', l: 'MACRO-ZONE', s: 'Francigena · Leonessa · Navigli · Padana' },
          ].map((x, i) => (
            <div key={i} className="vb-num-cell">
              <div className="vb-num-n">{x.n}</div>
              <div className="vb-num-l">{x.l}</div>
              <div className="vb-num-s">{x.s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MACRO-ZONE ──────────────────────────── */}
      <section id="zone" className="d-zones">
        <div className="d-zones-head">
          <div className="vb-section-no vb-light">[ 03 ]</div>
          <div className="vb-section-name vb-light">MACRO-ZONE</div>
          <h2 className="d-zones-title">
            Quattro zone.<br />Una pianura.
          </h2>
        </div>
        <div className="d-zone-blocks">
          {zones.map((z, i) => (
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
              <div className="d-zone-clubs">
                {z.clubs.map((c) => (
                  <span key={c} className="d-zone-club">{c}</span>
                ))}
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
            Un'eredità<br /><em>di grande spessore.</em>
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
            Non abbiamo paura<br /><em>di sporcarci le mani.</em>
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
            Partner ideale per scambi culturali, esperienze enogastronomiche e grandi service.
          </div>
          <p className="d-rete-sub">
            Fare rete con il Distretto 2050 significa scoprire un'Italia autentica, operosa e ricca di tesori nascosti. Siamo pronti a trasformare rapidamente le idee in grandi progetti di servizio.
          </p>
          <div className="d-rete-actions">
            <a href="mailto:segreteria@rotaract2050.org" className="d-btn-primary">
              Contattaci →
            </a>
            <a
              href="https://www.rotaract2050.org/"
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
    <>
      <Distretto2050 />
      <CookieBanner />
    </>
  </React.StrictMode>
);
