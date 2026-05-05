import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = path.join(process.cwd(), 'assets');

if (!fs.existsSync(assetsDir)) {
  console.log('Cartella assets non trovata. Crea la cartella "assets" e inserisci i file jpeg/png.');
  process.exit(1);
}

fs.readdirSync(assetsDir).forEach(file => {
  if (file.match(/\.(jpeg|jpg|png)$/i)) {
    const inputPath = path.join(assetsDir, file);
    const outputPath = path.join(assetsDir, `${path.parse(file).name}.webp`);

    sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then(() => {
        console.log(`Convertito: ${file} -> ${path.parse(file).name}.webp`);
      })
      .catch(err => {
        console.error(`Errore convertendo ${file}:`, err);
      });
  }
});
