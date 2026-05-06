# MDIO Rotaract · Multidistretto Italia Ovest

<div align="center">
  <img src="public/assets/Logo-MDIO.jpeg" alt="Logo MDIO" width="120" style="border-radius: 50%;" />
  <h3>Lombardia & Provincia di Piacenza</h3>
  <p><strong>Distretti 2041 · 2042 · 2050</strong></p>
</div>

---

Repository ufficiale del sito web del **Multidistretto Italia Ovest (MDIO)**. 
Il portale raggruppa le informazioni, la storia, i numeri e le aree geografiche dei tre distretti Rotaract lombardi, promuovendo il networking, i service condivisi e i grandi eventi interdistrettuali come l'**Apertura Nazionale 2026**.

## 🛠 Stack Tecnologico

Il progetto è una **Multi-Page Application (MPA)** moderna, veloce e scalabile, sviluppata con:

- **[React 18](https://react.dev/)**: Libreria core per la creazione di componenti UI dinamici.
- **[Vite](https://vitejs.dev/)**: Build tool di nuova generazione per un ambiente di sviluppo rapido (HMR) e build di produzione ultra-ottimizzate.
- **Vanilla CSS**: Stili customizzati focalizzati su performance, design geometrico e tipografia moderna (Google Fonts: *Archivo*, *Fraunces*, *Inter*).

## 📂 Struttura del Progetto

Il sito è diviso in diversi **Entry Points (Pagine HTML indipendenti)**, ciascuno abbinato al proprio file `.jsx`:

```text
📦 MDIO-website
 ┣ 📜 README.md                   # Documentazione (questo file)
 ┣ 📜 index.html                  # Homepage Multidistrettuale
 ┣ 📜 home.jsx                    # Core logic Homepage
 ┣ 📜 apertura-nazionale.html     # Landing page Apertura Nazionale 2026
 ┣ 📜 apertura-nazionale.jsx      # Core logic Apertura Nazionale
 ┣ 📂 distretti                   # Pagine specifiche dei Distretti
 ┃  ┣ 📜 2041.html / 2041.jsx     # Area Metropolitana di Milano
 ┃  ┣ 📜 2042.html / 2042.jsx     # Lombardia Centro & Nord
 ┃  ┗ 📜 2050.html / 2050.jsx     # Lombardia Sud & Piacenza
 ┣ 📂 assets                      # Immagini, loghi e risorse statiche
 ┣ 📜 vite.config.js              # Configurazione bundle Multi-Page
 ┗ 📂 .github/workflows/          # Script CI/CD per il deploy automatico
```

## 🚀 Sviluppo Locale

Per eseguire il progetto sul proprio computer ed effettuare modifiche in tempo reale:

1. **Clona il repository**:
   ```bash
   git clone https://github.com/gorlix/MDIO-website.git
   cd MDIO-website
   ```

2. **Installa le dipendenze** (richiede Node.js v18+):
   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo**:
   ```bash
   npm run dev
   ```
   Il server si avvierà su `http://localhost:5173`. Tutte le modifiche ai file `.jsx` o `.css` si rifletteranno istantaneamente nel browser grazie al supporto *Hot Module Replacement (HMR)*.

## 🏗 Build e Deploy (CI/CD)

Il progetto sfrutta le **GitHub Actions** per il deploy automatizzato via FTP.

- **Fase di Build**: Per generare manualmente i file statici ottimizzati pronti per la produzione, eseguire:
  ```bash
  npm run build
  ```
  Vite formatterà, minimizzerà e inserirà tutto il codice compilato all'interno della cartella `dist/`.

- **Deploy Automatico**: 
  Ogni volta che viene effettuato un `git push` sul branch `main`, il workflow `.github/workflows/deploy.yml` si attiva automaticamente. 
  1. Compila il sito tramite Vite in un ambiente cloud protetto.
  2. Si collega al server tramite le credenziali impostate nei **GitHub Secrets** (`FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`).
  3. Carica il contenuto della cartella `dist/` nella directory pubblica dell'hosting.

---
<div align="center">
  <small>© 2026 MDIO Rotaract · A.R. 2026—2027</small>
</div>
