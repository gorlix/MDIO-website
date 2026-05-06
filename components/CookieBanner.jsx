import React from 'react';

const KEY = 'cookie-consent';

const CookieBanner = () => {
  const [visible, setVisible] = React.useState(() => !localStorage.getItem(KEY));

  const accept = () => {
    localStorage.setItem(KEY, 'accepted');
    if (window.gtag) window.gtag('consent', 'update', { analytics_storage: 'granted' });
    setVisible(false);
  };

  const refuse = () => {
    localStorage.setItem(KEY, 'refused');
    if (window.gtag) window.gtag('consent', 'update', { analytics_storage: 'denied' });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      background: '#141414',
      borderTop: '2px solid #c8174a',
      padding: '16px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '16px',
      flexWrap: 'wrap',
      fontFamily: 'Inter, sans-serif',
      fontSize: '14px',
      color: '#e0e0e0',
    }}>
      <p style={{ margin: 0, flex: 1, minWidth: '220px', lineHeight: '1.5' }}>
        Utilizziamo cookie analitici (Google Analytics) per capire come viene usato il sito e migliorarlo.
        Puoi accettare o rifiutare il tracciamento.
      </p>
      <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
        <button
          onClick={refuse}
          style={{
            background: 'transparent',
            border: '1px solid #444',
            color: '#aaa',
            padding: '8px 16px',
            cursor: 'pointer',
            fontFamily: 'inherit',
            fontSize: '13px',
            borderRadius: '3px',
            transition: 'border-color .15s',
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = '#888'}
          onMouseLeave={e => e.currentTarget.style.borderColor = '#444'}
        >
          Solo necessari
        </button>
        <button
          onClick={accept}
          style={{
            background: '#c8174a',
            border: 'none',
            color: '#fff',
            padding: '8px 20px',
            cursor: 'pointer',
            fontFamily: 'inherit',
            fontSize: '13px',
            fontWeight: 600,
            borderRadius: '3px',
            transition: 'background .15s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#a4174c'}
          onMouseLeave={e => e.currentTarget.style.background = '#c8174a'}
        >
          Accetta
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
