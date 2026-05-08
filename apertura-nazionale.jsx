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
        'Locale "Mille e una Notte" — danzatrici, hennè, profumi orientali',
        'Cena 4 portate con vino incluso (~€75)',
        'Dopocena opzionale ai Magazzini Generali',
      ],
      timeline: [
        { t: '19:30', title: 'Ingresso & accoglienza', d: 'Tappeto rosso, photo booth con specchio magico, postazione profumi orientali e hennè per le socie.' },
        { t: '20:30', title: 'Cena 4 portate', d: 'Falafel e involtini · Couscous con carne · Dolci orientali. Vino incluso. Spettacolo di danzatrici del ventre durante la cena.' },
        { t: '23:00', title: 'Dopocena ai Magazzini Generali', d: 'Opzionale · ~€30 ingresso + 2 drink. Locale adiacente al ristorante con accesso diretto al privé.' },
        { t: 'Fine', title: 'Rientro autonomo', d: 'Metro M3 Porta Romana a pochi minuti dal locale.' },
      ],
      info: [
        { l: 'Prezzo', v: '~€75', s: 'tutto incluso' },
        { l: 'Posti', v: 'Max 130', s: 'sold out atteso' },
        { l: 'Come arrivare', v: 'Metro M3', s: 'Porta Romana' },
        { l: 'Dress code', v: 'Tema orientale', s: 'consigliato' },
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
        { t: '20:30', title: 'Cena di gala', d: 'Antipasto · Primo · Secondo · Dolce. Vino senza limiti + drink incluso. Mise en place curata.' },
      ],
      info: [
        { l: 'Prezzo', v: '€75 + IVA 10%' },
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
        'Sessione ufficiale + passaggio di consegne distrettuali',
        'Relatore d\'eccezione (in corso di conferma)',
        'Pranzo conviviale sul Lago d\'Iseo',
      ],
      timeline: [
        { t: '10:00', title: 'Lavori ufficiali', d: 'Sessione ufficiale dell\'Apertura Nazionale. Presentazioni dei 14 distretti d\'Italia. Sala con attrezzatura completa.' },
        { t: '12:30', title: 'Passaggio di consegne', d: 'Cerimonia ufficiale di passaggio tra gli esecutivi uscenti e i nuovi rappresentanti distrettuali.' },
        { t: '13:30', title: 'Conviviale con relatore d\'eccezione', d: 'Pranzo con ospite speciale in corso di conferma: Luca Parmitano o Samantha Cristoforetti. Un momento unico sul Lago d\'Iseo.' },
        { t: '16:00', title: 'Chiusura & saluti', d: 'Arrivederci al prossimo Nazionale. Rientro autonomo.' },
      ],
      info: [
        { l: 'Location', v: 'Lago d\'Iseo', s: 'Provincia di Brescia' },
        { l: 'Da Monza', v: '~1h', s: 'in auto o treno' },
        { l: 'Ospite', v: 'Astronauta ESA', s: 'TBC' },
        { l: 'Incluso', v: 'Pacchetto', s: 'weekend completo' },
      ],
    },
  ];

  const faq = [
    {
      q: 'Posso partecipare a un solo giorno?',
      a: 'Certo. Ogni giornata ha il suo pacchetto dedicato — Milano (~€75), Monza (€75 + IVA) e Iseo (incluso nel weekend). Il pacchetto Weekend Completo include tutti e tre più hotel e navette.',
    },
    {
      q: 'L\'hotel è incluso nel pacchetto?',
      a: 'Solo nel pacchetto Weekend Completo, dove è inclusa una notte all\'Hotel Falcone 4★ di Monza in camera doppia. Per i singoli giorni l\'hotel è opzionale e va prenotato a parte (convenzione disponibile).',
    },
    {
      q: 'Come arrivo a Monza dall\'aeroporto?',
      a: 'Da Malpensa: Malpensa Express + cambio a Centrale (~1h). Da Linate: bus + metro o taxi. Da Bergamo Orio: navetta + treno per Monza (~1h15). Per il sabato sono previste navette tra l\'Hotel Falcone e l\'Autodromo.',
    },
    {
      q: 'Qual è il dress code?',
      a: 'Venerdì sera tema "Mille e una Notte" — consigliati abiti orientaleggianti o eleganti scuri. Sabato gala all\'Autodromo: black tie / abito lungo per le donne, smoking o abito scuro per gli uomini. Domenica casual elegante.',
    },
    {
      q: 'Entro quando posso iscrivermi?',
      a: 'Le iscrizioni aprono in 3 wave: Early Bird (entro maggio), Standard (giugno-luglio), Last Call (agosto, posti residui). I posti per il sabato a Monza sono limitati a 350.',
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
            <div className="an-hero-dates">18 · 19 · 20 Settembre</div>
            <p className="an-hero-lede">
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
            Manca poco<br />all'apertura<br /><em style={{ color: '#fff', fontStyle: 'normal' }}>nazionale</em>
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
              Partecipa a una giornata o vivi il weekend completo.
              {' '}I posti sono limitati e le wave scadono in fretta.
            </p>
          </div>
        </div>

        <div className="an-pack-grid">
          {/* Singolo Giorno */}
          <div className="an-pack">
            <div className="an-pack-dates">18 SET · UN GIORNO</div>
            <h3 className="an-pack-name">Solo <em>Milano</em></h3>
            <div className="an-pack-tag">Serata Mille e una Notte</div>
            <div className="an-pack-price">€75</div>
            <div className="an-pack-price-sub">tutto incluso · vino incluso</div>
            <ul className="an-pack-includes">
              <li>Cena 4 portate orientale</li>
              <li>Vino e drink inclusi</li>
              <li>Spettacolo danzatrici del ventre</li>
              <li>Photo booth specchio magico</li>
              <li className="muted">Hotel non incluso</li>
              <li className="muted">Sabato/Domenica esclusi</li>
            </ul>
            <a href="#pacchetti" className="an-pack-cta">Acquista il singolo</a>
          </div>

          {/* Weekend Completo - featured */}
          <div className="an-pack featured">
            <div className="an-pack-best">Miglior scelta</div>
            <div className="an-pack-dates">18 · 19 · 20 SET</div>
            <h3 className="an-pack-name"><em>Weekend</em> Completo<br />Zero Sbatti</h3>
            <div className="an-pack-tag">Milano, Monza e Lago d'Iseo — anche il driver</div>
            <div className="an-pack-price">TBD</div>
            <div className="an-pack-price-sub">tutto incluso · prezzo in definizione</div>
            <ul className="an-pack-includes">
              <li>Serata "Mille e una Notte" a Milano</li>
              <li>Gala all'Autodromo di Monza</li>
              <li>Pranzo conviviale sul Lago d'Iseo</li>
              <li>Hotel Falcone 4★ · Monza centro</li>
              <li>Navette incluse hotel ↔ eventi</li>
              <li>Welcome bag e gadget esclusivi</li>
            </ul>
            <a href="#pacchetti" className="an-pack-cta">Acquista il weekend</a>
          </div>

          {/* Singolo Sabato */}
          <div className="an-pack">
            <div className="an-pack-dates">19 SET · GALA</div>
            <h3 className="an-pack-name">Solo <em>Monza</em></h3>
            <div className="an-pack-tag">Gala all'Autodromo</div>
            <div className="an-pack-price">€75<span style={{ fontSize: '18px', color: '#6b665b', fontFamily: 'Inter' }}> +IVA</span></div>
            <div className="an-pack-price-sub">cena gala · vino senza limiti</div>
            <ul className="an-pack-includes">
              <li>Tour pista in bus + podio</li>
              <li>Aperitivo standing area box</li>
              <li>Cena di gala 4 portate</li>
              <li>Vino e drink inclusi · DJ set</li>
              <li>Navetta dall'Hotel Falcone</li>
              <li className="muted">Hotel non incluso</li>
            </ul>
            <a href="#pacchetti" className="an-pack-cta">Acquista il singolo</a>
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
