import React from 'react';
import ReactDOM from 'react-dom/client';
import './globals.css';
import './apertura-nazionale.css';
import Countdown from './components/Countdown';
import CookieBanner from './components/CookieBanner';
import Footer from './components/Footer';
import Header from './components/Header';

const AperturaNazionale = () => {
  const [openFaq, setOpenFaq] = React.useState(-1);
  const [openModal, setOpenModal] = React.useState(null);

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpenModal(null); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const days = [
    {
      id: 'g1',
      num: '01',
      city: 'Milano',
      sub: 'Serata di apertura',
      tag: 'Mille e una Notte',
      date: 'Ven 18 Set',
      img: 'assets/2041-05-Milano.jpeg',
      color: 'cranberry',
      bullets: [
        'Ingresso nella magia di Agrabah',
        'Cena con live show e delizie d\'oriente',
        'Dopocena con DJ set esclusivo',
      ],
      timeline: [
        { t: '20:00', title: 'Ingresso & accoglienza', d: 'Immergiti nella magia di Agrabah e se fortunato tieniti pronto ad esprimere 3 desideri.' },
        { t: 'A seguire', title: 'Cena con live show', d: 'Gusta le delizie d\'oriente e lasciati trasportare in un\'atmosfera unica.' },
        { t: 'Dopocena', title: 'DJ set esclusivo', d: 'La serata continua con musica e divertimento per tutti.' },
        { t: '02:00', title: 'Navette di rientro', d: 'Navette disponibili verso le 2:00 circa per chi alloggia negli hotel.' },
      ],
      info: [
        { l: 'Prezzo', v: 'TBD' },
        { l: 'Posti', v: 'Limitati', s: 'su prenotazione' },
        { l: 'Come arrivare', v: 'Auto o mezzi', s: 'Tibaldi-Bocconi, bus 65' },
        { l: 'Dress code', v: 'Mille e una notte', s: 'tocco arabeggiante' },
      ],
    },
    {
      id: 'g2',
      num: '02',
      city: 'Monza',
      sub: 'Evento principale',
      tag: 'Gala all\'Autodromo',
      date: 'Sab 19 Set',
      img: 'assets/2042-13-Monza.jpeg',
      color: 'royal',
      featured: true,
      bullets: [
        'Cena di gala + tour della pista in bus con guida ufficiale',
        'Salita sul podio + DJ set + team building pit stop',
        'Navette incluse — Hotel Falcone 4★ Monza centro',
      ],
      timeline: [
        { t: '10:00', title: 'City tour di Monza', d: 'Gratuito, con guida locale. Visita al centro storico, Villa Reale e curiosità della città.' },
        { t: '14:00', title: 'Attività opzionali pomeridiane', d: 'Team building pit stop all\'autodromo (cambio gomme su auto da corsa) · Masterclass Rinascente one-to-one (profumi, make-up).' },
        { t: '17:30', title: 'Navetta → Autodromo', d: 'Partenza dall\'Hotel Falcone. Tour della pista in bus con guida ufficiale. Salita sul podio per le foto ricordo.' },
        { t: '19:00', title: 'Aperitivo standing', d: 'Nell\'area box con auto da esposizione dello sponsor. DJ set. Allestimento floreale.' },
        { t: '20:30', title: 'Cena di gala', d: 'Antipasto · Primo · Secondo · Dolce. + drink incluso.' },
      ],
      info: [
        { l: 'Prezzo', v: 'TBD', s: 'Prezzo unico' },
        { l: 'Hotel', v: 'Falcone 4★', s: 'Monza centro' },
        { l: 'Trasporti', v: 'Navette incluse', s: 'hotel ↔ autodromo' },
        { l: 'Da Milano', v: '15 min', s: 'in treno da Centrale' },
      ],
    },
    {
      id: 'g3',
      num: '03',
      city: 'Sale Marasino',
      sub: 'Lavori & conviviale',
      tag: 'Chiusura sul Lago',
      date: 'Dom 20 Set',
      img: 'assets/2050-10-Brescia.jpeg',
      color: 'gold',
      bullets: [
        'Lavori Distrettuale 2050',
        'Relatore d\'eccezione',
        'Pranzo conviviale sul Lago d\'Iseo',
      ],
      timeline: [
        { t: '10:00', title: 'Lavori ufficiali', d: 'Inizio Session Lavori Distretto 2050.' },
        { t: '12:30', title: 'Inizio Conviviale', d: 'Inizio della giornata conviviale sul Lago d\'Iseo.' },
        { t: '13:30', title: 'Conviviale con relatore d\'eccezione', d: 'Pranzo con ospite speciale. Un momento unico sul Lago d\'Iseo.' },
        { t: '16:00', title: 'Chiusura & saluti', d: 'Arrivederci al prossimo Nazionale. Rientro autonomo.' },
      ],
      info: [
        { l: 'Location', v: 'Lago d\'Iseo', s: 'Provincia di Brescia' },
        { l: 'Da Monza', v: '~1h', s: 'in auto o treno' },
        { l: 'Ospite', v: 'Seguiranno Sorprese'},
        { l: 'Prezzo', v: 'TBD', s: 'Prezzo unico' },
      ],
    },
  ];

  const faq = [
    {
      q: 'Posso partecipare a un solo giorno?',
      a: 'Certo. Puoi scegliere i Biglietti Singoli per partecipare solo alle singole giornate: Milano (TBD), Monza (TBD) e Iseo (TBD). Oppure puoi scegliere uno dei Pacchetti Experience con hotel incluso.',
    },
    {
      q: 'L\'hotel è incluso nel pacchetto?',
      a: 'Sì, tutti i Pacchetti Experience (Full Weekend, Venerdì & Sabato, Sabato & Domenica) includono il pernottamento all\'Hotel Falcone 4★ e le navette. Per i Biglietti Singoli, l\'hotel non è incluso.',
    },
    {
      q: 'Come arrivo a Monza dall\'aeroporto?',
      a: 'Da Malpensa: Malpensa Express + cambio a Centrale (~1h). Da Linate: bus + metro o taxi. Da Bergamo Orio: navetta + treno per Monza (~1h15). Per il sabato sono previste navette tra l\'Hotel Falcone e l\'Autodromo.',
    },
    {
      q: 'Qual è il dress code?',
      a: 'Venerdì sera tema "Mille e una Notte" — mettiti un tocco arabeggiante! Sabato gala all\'Autodromo: black tie / abito lungo per le donne, smoking o abito scuro per gli uomini. Domenica casual elegante.',
    },
    {
      q: 'Entro quando posso iscrivermi?',
      a: 'Le iscrizioni sono aperte fino ad esaurimento posti. Non ci sono aumenti di prezzo last minute: la quota è bloccata. I posti per il sabato a Monza sono limitati a 350.',
    },
  ];

  return (
    <div className="an-root">
      {/* HEADER */}
      <Header
        homeLink="./index.html"
        logoPath="assets/logo-mdio.jpeg"
        ctaText="Iscriviti ora"
        ctaLink="#pacchetti"
      >
        <a href="./index.html" onClick={(e) => { if (window.history.length > 1) { e.preventDefault(); window.history.back(); } }}>← MDIO</a>
        <a href="#programma">Programma</a>
        <a href="#pacchetti">Pacchetti</a>
        <a href="#info">Info pratiche</a>
        <a href="#faq">FAQ</a>
      </Header>

      {/* HERO */}
      <section className="an-hero">
        <div className="an-hero-inner">
          <div>
            <div className="an-eyebrow">
              <span className="an-eyebrow-dot" />
              MDIO Lombardo · A.R. 2026—2027
            </div>
            <h1 className="an-hero-title">
              Apertura<br />
              <em>Nazionale</em><br />
              2026.
            </h1>
            <div className="an-hero-dates" style={{ marginBottom: '16px' }}>18 · 19 · 20 Settembre</div>
            <div style={{ display: 'inline-block', background: 'var(--gold)', color: 'var(--ink)', padding: '8px 20px', borderRadius: '999px', fontSize: '14px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '32px', border: '1px solid rgba(0,0,0,0.1)', boxShadow: '0 4px 12px rgba(230, 185, 128, 0.3)' }}>
              Il primo evento nazionale diffuso in 3 distretti
            </div>
            <p className="an-hero-lede" style={{ marginTop: 0 }}>
              Tre giorni per aprire l'anno rotaractiano <em>tutti insieme</em>:
              {' '}<strong>Milano</strong> tra danze e profumi orientali,
              {' '}<strong>Monza</strong> al gala dell'Autodromo,
              {' '}<strong>Sale Marasino</strong> per i lavori e il conviviale sul lago.
            </p>
            <div className="an-hero-actions">
              <a href="#pacchetti" className="an-btn-primary">Scegli il pacchetto →</a>
              <a href="#programma" className="an-btn-ghost">Programma completo</a>
            </div>
          </div>

          <div className="an-hero-right">
            <div className="an-hero-imagewrap">
              <img src="assets/2041-05-Milano.jpeg" alt="" className="an-hero-img an-hero-img-1" />
              <img src="assets/2042-13-Monza.jpeg" alt="" className="an-hero-img an-hero-img-2" />
              <img src="assets/2050-10-Brescia.jpeg" alt="" className="an-hero-img an-hero-img-3" />
              <div className="an-hero-cit-tag an-hero-cit-tag-1">
                <span>GIORNO 01</span>
                <span>Milano</span>
              </div>
              <div className="an-hero-cit-tag an-hero-cit-tag-2">
                <span>GIORNO 02</span>
                <span>Monza</span>
              </div>
              <div className="an-hero-cit-tag an-hero-cit-tag-3">
                <span>GIORNO 03</span>
                <span>Sale Marasino</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COUNTDOWN */}
      <section className="an-countdown">
        <div className="an-countdown-inner">
          <div className="an-countdown-label">
            Manca poco all'apertura <em style={{ color: '#fff', fontStyle: 'normal' }}>nazionale</em>
          </div>
          <div className="an-countdown-numbers">
            <Countdown />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="an-marquee">
        <div className="an-marquee-track">
          <span>Milano</span><span>•</span>
          <span>Monza</span><span>•</span>
          <span>Sale Marasino</span><span>•</span>
          <span>3 giorni</span><span>•</span>
          <span>14 distretti</span><span>•</span>
          <span>Mille e una Notte</span><span>•</span>
          <span>Autodromo Gala</span><span>•</span>
          <span>Lago d'Iseo</span><span>•</span>
          <span>Milano</span><span>•</span>
          <span>Monza</span><span>•</span>
          <span>Sale Marasino</span><span>•</span>
          <span>3 giorni</span><span>•</span>
        </div>
      </div>

      {/* PROGRAMMA */}
      <section id="programma" className="an-programma">
        <div className="an-programma-head">
          <div>
            <div className="an-section-num">01</div>
            <div className="an-section-lab">Programma</div>
          </div>
          <h2 className="an-programma-title">
            Tre città,<br /><em>tre serate</em>,<br />una sola apertura.
          </h2>
          <p className="an-programma-lede">
            Da venerdì 18 a domenica 20 settembre 2026.
            {' '}Sfoglia le giornate, scopri il programma e scegli quale vivere.
          </p>
        </div>

        <div className="an-days-grid">
          {days.map((d) => (
            <button
              key={d.id}
              className={`an-day-card ${d.featured ? 'featured' : ''}`}
              onClick={() => setOpenModal(d.id)}
            >
              <div className="an-day-img">
                <div className="an-day-img-bg" style={{ backgroundImage: `url(${d.img})` }} />
                <div className="an-day-img-overlay">
                  <div className="an-day-img-label">Giorno</div>
                  <div className="an-day-img-num">{d.num}</div>
                </div>
                <div className="an-day-num">{d.num}</div>
                <div className="an-day-date">{d.date}</div>
                {d.featured && <div className="an-day-featured-badge">Evento principale</div>}
              </div>
              <div className="an-day-body">
                <div className="an-day-sub">{d.sub}</div>
                <h3 className="an-day-city">{d.city}</h3>
                <div className="an-day-tag">{d.tag}</div>
                <ul className="an-day-list">
                  {d.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
                <div className="an-day-cta">
                  <span>Scopri di più</span>
                  <span>→</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* PACCHETTI */}
      <section id="pacchetti" className="an-pacchetti">
        <div className="an-pacchetti-head">
          <div>
            <div className="an-section-num an-section-num-light">02</div>
            <div className="an-section-lab an-section-lab-light">Partecipa</div>
          </div>
          <div>
            <h2 className="an-pacchetti-title">
              Scegli il tuo<br /><em>pacchetto</em>.
            </h2>
            <p className="an-pacchetti-lede">
              Crediamo nel valore della partecipazione, non nell'ansia della prenotazione. Nessun dynamic pricing, nessun aumento dell'ultimo minuto: abbiamo scelto di mantenere un <strong>prezzo unico e bloccato</strong>. Stessa esperienza, massima trasparenza.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: '1400px', margin: '0 auto', paddingBottom: '40px' }}>
          <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: '36px', margin: 0 }}>
            Pacchetti <em>Experience</em> <span style={{ fontSize: '18px', fontFamily: 'Inter, sans-serif', fontStyle: 'normal', color: '#cfc8b8' }}>(Multi-giorno con Hotel)</span>
          </h3>
        </div>

        <div className="an-pack-hero an-pack featured" style={{ padding: '48px 40px' }}>
          <div className="an-pack-best" style={{ left: '48px', transform: 'none', top: '-14px', fontSize: '13px', padding: '8px 24px' }}>Best Seller Assoluto</div>

          <div>
            <div className="an-pack-dates" style={{ fontSize: '15px' }}>2 NOTTI + 3 GIORNI</div>
            <h3 className="an-pack-name" style={{ fontSize: 'clamp(40px, 5vw, 64px)', margin: '8px 0 16px' }}>Full<br /><em>Weekend</em></h3>
            <div className="an-pack-tag" style={{ fontSize: '18px', color: 'var(--muted)', marginBottom: 0 }}>Milano, Monza e Iseo</div>
            <ul className="an-pack-includes" style={{ margin: 0, marginTop: '24px' }}>
              <li>Cena Venerdì (Milano)</li>
              <li>Cena Gala Sabato (Monza)</li>
              <li>Pranzo Domenica (Iseo)</li>
              <li>2 Notti in Hotel 4★ a Monza</li>
              <li>Navette incluse tra hotel ed eventi</li>
            </ul>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderLeft: '1.5px solid #eae7e0', paddingLeft: '48px', minHeight: '200px' }}>
            <div className="an-pack-price" style={{ fontSize: 'clamp(64px, 8vw, 88px)', margin: '0 0 8px', borderTop: 'none', paddingTop: 0 }}>TBD</div>
            <div className="an-pack-price-sub" style={{ fontSize: '15px', marginBottom: '32px' }}>Stay Tuned</div>
            <a href="#pacchetti" className="an-pack-cta" style={{ background: '#444', fontSize: '18px', padding: '20px 48px', display: 'inline-block', width: '100%' }}>In arrivo</a>
          </div>
        </div>

        <div className="an-pack-grid-2" style={{ marginBottom: '40px' }}>
          {/* Ven & Sab */}
          <div className="an-pack">
            <div className="an-pack-dates">2 NOTTI</div>
            <h3 className="an-pack-name" style={{ fontSize: '26px' }}>Venerdì &<br /><em>Sabato</em></h3>
            <div className="an-pack-tag">Milano + Monza</div>
            <div className="an-pack-price" style={{ fontSize: '48px' }}>TBD</div>
            <div className="an-pack-price-sub">Stay Tuned</div>
            <ul className="an-pack-includes">
              <li>Cena Venerdì (Milano)</li>
              <li>Cena Gala Sabato (Monza)</li>
              <li>2 Notti in Hotel 4★</li>
              <li>Navette incluse</li>
            </ul>
            <a href="#pacchetti" className="an-pack-cta" style={{ background: '#444' }}>In arrivo</a>
          </div>

          {/* Sab & Dom */}
          <div className="an-pack">
            <div className="an-pack-dates">1 NOTTE + 2 GIORNI</div>
            <h3 className="an-pack-name" style={{ fontSize: '26px' }}>Sabato &<br /><em>Domenica</em></h3>
            <div className="an-pack-tag">Monza + Iseo</div>
            <div className="an-pack-price" style={{ fontSize: '48px' }}>TBD</div>
            <div className="an-pack-price-sub">Stay Tuned</div>
            <ul className="an-pack-includes">
              <li>Cena Gala Sabato (Monza)</li>
              <li>Pranzo Domenica (Iseo)</li>
              <li>1 Notte in Hotel 4★</li>
              <li>Navette incluse</li>
            </ul>
            <a href="#pacchetti" className="an-pack-cta" style={{ background: '#444' }}>In arrivo</a>
          </div>
        </div>

        <div style={{ maxWidth: '1400px', margin: '0 auto 80px' }}>
          <div style={{ background: 'rgba(200, 23, 74, 0.15)', border: '1.5px solid var(--cranberry)', padding: '24px', borderRadius: '8px', color: '#fff', display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ fontSize: '40px', flexShrink: 0 }}>🚌</div>
            <div style={{ fontSize: '15px', lineHeight: 1.5 }}>
              <strong style={{ color: 'var(--gold)', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '13px', display: 'block', marginBottom: '4px' }}>Logistica</strong>
              <strong>Il servizio navetta è sempre incluso</strong> per chi acquista i pacchetti comprensivi di hotel! Non dovrai preoccuparti degli spostamenti tra gli eventi e la struttura.
            </div>
          </div>
        </div>

        <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: '36px', marginBottom: '32px', maxWidth: '1400px', margin: '0 auto 32px', borderTop: '1px solid #444', paddingTop: '64px' }}>
          Biglietti Singoli
        </h3>

        <div className="an-pack-grid" style={{ marginBottom: '80px' }}>
          {/* Singolo Venerdì */}
          <div className="an-pack" style={{ padding: '28px 24px' }}>
            <div className="an-pack-dates">18 SET · UN GIORNO</div>
            <h3 className="an-pack-name" style={{ fontSize: '24px' }}>Solo <em>Milano</em></h3>
            <div className="an-pack-tag" style={{ marginBottom: '16px' }}>Serata Mille e una Notte</div>
            <div className="an-pack-price" style={{ fontSize: '40px', margin: '0 0 4px', paddingTop: '16px' }}>TBD</div>
            <div className="an-pack-price-sub" style={{ marginBottom: '16px' }}>Stay Tuned</div>
            <p style={{ fontSize: '14.5px', lineHeight: 1.5, color: '#2a2620', marginBottom: '24px', flex: 1 }}>
              Ingresso ad Agrabah, cena con live show orientale e DJ set esclusivo. Navette di rientro disponibili.<br /><br /><span style={{ color: '#b0aa9d' }}>Hotel non incluso.</span>
            </p>
            <div className="an-pack-guarantee" style={{ fontSize: '11px', textAlign: 'center', marginBottom: '10px', color: '#c8174a', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>✓ Prezzo Bloccato</div>
            <a href="#pacchetti" className="an-pack-cta" style={{ background: '#444' }}>In arrivo</a>
          </div>

          {/* Singolo Sabato */}
          <div className="an-pack" style={{ padding: '28px 24px' }}>
            <div className="an-pack-dates">19 SET · GALA</div>
            <h3 className="an-pack-name" style={{ fontSize: '24px' }}>Solo <em>Monza</em></h3>
            <div className="an-pack-tag" style={{ marginBottom: '16px' }}>Gala all'Autodromo</div>
            <div className="an-pack-price" style={{ fontSize: '40px', margin: '0 0 4px', paddingTop: '16px' }}>TBD</div>
            <div className="an-pack-price-sub" style={{ marginBottom: '16px' }}>Stay Tuned</div>
            <p style={{ fontSize: '14.5px', lineHeight: 1.5, color: '#2a2620', marginBottom: '24px', flex: 1 }}>
              Tour della pista, aperitivo standing nell'area box, cena di gala 4 portate e DJ set. Navetta inclusa dall'Hotel Falcone.<br /><br /><span style={{ color: '#b0aa9d' }}>Hotel non incluso.</span>
            </p>
            <div className="an-pack-guarantee" style={{ fontSize: '11px', textAlign: 'center', marginBottom: '10px', color: '#c8174a', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>✓ Prezzo Bloccato</div>
            <a href="#pacchetti" className="an-pack-cta" style={{ background: '#444' }}>In arrivo</a>
          </div>

          {/* Singolo Domenica */}
          <div className="an-pack" style={{ padding: '28px 24px' }}>
            <div className="an-pack-dates">20 SET · CONVIVIALE</div>
            <h3 className="an-pack-name" style={{ fontSize: '24px' }}>Solo <em>Iseo</em></h3>
            <div className="an-pack-tag" style={{ marginBottom: '16px' }}>Chiusura sul Lago</div>
            <div className="an-pack-price" style={{ fontSize: '40px', margin: '0 0 4px', paddingTop: '16px' }}>TBD</div>
            <div className="an-pack-price-sub" style={{ marginBottom: '16px' }}>Stay Tuned</div>
            <p style={{ fontSize: '14.5px', lineHeight: 1.5, color: '#2a2620', marginBottom: '24px', flex: 1 }}>
              Sessione dei Lavori Ufficiali, Cerimonia di Passaggio di Consegne, relatore d'eccezione e pranzo sul Lago d'Iseo.<br /><br /><span style={{ color: '#b0aa9d' }}>Hotel e trasporti non inclusi.</span>
            </p>
            <div className="an-pack-guarantee" style={{ fontSize: '11px', textAlign: 'center', marginBottom: '10px', color: '#c8174a', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>✓ Prezzo Bloccato</div>
            <a href="#pacchetti" className="an-pack-cta" style={{ background: '#444' }}>In arrivo</a>
          </div>
        </div>
      </section>

      {/* INFO PRATICHE */}
      <section id="info" className="an-info">
        <div className="an-info-head">
          <div>
            <div className="an-section-num">03</div>
            <div className="an-section-lab">Info pratiche</div>
          </div>
          <h2 className="an-info-title">
            Tutto quello<br />che ti serve <em>sapere</em>.
          </h2>
        </div>
        <div className="an-info-grid">
          <div className="an-info-cell">
            <div className="an-info-cell-h">→ Date</div>
            <div className="an-info-cell-t">18—20 Settembre 2026</div>
            <div className="an-info-cell-d">Tre giorni: Milano, Monza, Iseo</div>
          </div>
          <div className="an-info-cell">
            <div className="an-info-cell-h">→ Hotel ufficiale</div>
            <div className="an-info-cell-t">Hotel Falcone 4★</div>
            <div className="an-info-cell-d">Monza centro · convenzione MDIO</div>
          </div>
          <div className="an-info-cell">
            <div className="an-info-cell-h">→ Posti</div>
            <div className="an-info-cell-t">350 al Gala di Monza</div>
            <div className="an-info-cell-d">Iscrizioni in 3 wave · sold out atteso</div>
          </div>
          <div className="an-info-cell">
            <div className="an-info-cell-h">→ Trasporti</div>
            <div className="an-info-cell-t">Navette incluse</div>
            <div className="an-info-cell-d">Hotel ↔ Autodromo (sabato)</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="an-faq">
        <div className="an-faq-head">
          <div>
            <div className="an-section-num">04</div>
            <div className="an-section-lab">Domande frequenti</div>
          </div>
          <h2 className="an-faq-title">
            Hai un <em>dubbio</em>?<br />Probabilmente è qui.
          </h2>
        </div>
        <div className="an-faq-list">
          {faq.map((f, i) => (
            <div key={i} className={`an-faq-item ${openFaq === i ? '' : 'closed'}`}>
              <div className="an-faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                <span><em>{String(i + 1).padStart(2, '0')}.</em>&nbsp;&nbsp;{f.q}</span>
                <span className="an-faq-q-toggle">{openFaq === i ? '−' : '+'}</span>
              </div>
              <div className="an-faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA finale */}
      <section className="an-cta-final">
        <div className="an-cta-final-inner">
          <div className="an-cta-final-eyebrow">Non perdere il via</div>
          <h2 className="an-cta-final-title">
            Ti aspettiamo a<br /><em>Milano, Monza e Sale Marasino</em>.
          </h2>
          <p className="an-cta-final-text">
            Tre giorni per aprire l'anno rotaractiano insieme,
            tra eventi, amicizia e ricordi che resteranno.
          </p>
          <a href="#pacchetti" className="an-cta-final-btn">Iscriviti adesso →</a>
        </div>
      </section>

      {/* FOOTER */}
      <Footer bgColor="var(--paper-2)" textColor="var(--ink)" borderTop="1.5px solid var(--ink)" />

      {/* MODAL */}
      {openModal && (() => {
        const d = days.find(x => x.id === openModal);
        if (!d) return null;
        return (
          <React.Fragment>
            <div className="an-overlay open visible" onClick={() => setOpenModal(null)} />
            <div className="an-modal open visible">
              <div className={`an-modal-header col-${d.color}`}>
                <button className="an-modal-close" onClick={() => setOpenModal(null)}>✕</button>
                <div className="an-modal-day-meta">Giorno {d.num} · {d.date === 'Ven 18 Set' ? 'Venerdì 18 Settembre' : d.date === 'Sab 19 Set' ? 'Sabato 19 Settembre' : 'Domenica 20 Settembre'}</div>
                <h3 className="an-modal-city">{d.city}</h3>
                <div className="an-modal-subtitle">{d.tag}</div>
                <span className="an-modal-pill">{d.sub}</span>
              </div>
              <div className="an-modal-body">
                <div>
                  <div className="an-mod-section-h">Programma della giornata</div>
                  <div className="an-tl">
                    {d.timeline.map((t, i) => (
                      <div key={i} className="an-tl-row">
                        <div className="an-tl-time">{t.t}</div>
                        <div className="an-tl-content">
                          <h4 className="an-tl-title">{t.title}</h4>
                          <div className="an-tl-desc">{t.d}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="an-mod-section-h">Info pratiche</div>
                  <div className="an-mod-info">
                    {d.info.map((i, k) => (
                      <div key={k} className="an-mod-info-cell">
                        <div className="an-mod-info-l">{i.l}</div>
                        <div className="an-mod-info-v">{i.v} {i.s && <small>{i.s}</small>}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <a href="#pacchetti" className="an-mod-cta">Acquista il biglietto →</a>
              </div>
            </div>
          </React.Fragment>
        );
      })()}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <AperturaNazionale />
      <CookieBanner />
    </>
  </React.StrictMode>
);
