import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function exportPDF() {
  console.log('Iniciando exportación de slides a PDF...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  const htmlPath = join(__dirname, 'index.html');
  console.log(`Cargando archivo: file://${htmlPath}`);
  
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
  
  // Establecer tamaño de viewport de slides 16:9
  await page.setViewport({ width: 1920, height: 1080 });
  
  console.log('Generando PDF...');
  const pdfPath = join(__dirname, 'Agentyx_para_El_Fogoncito.pdf');
  
  await page.pdf({
    path: pdfPath,
    width: '1920px',
    height: '1080px',
    printBackground: true,
    preferCSSPageSize: true
  });
  
  console.log(`¡Éxito! PDF guardado en: ${pdfPath}`);
  await browser.close();
}

exportPDF().catch(err => {
  console.error('Error durante la exportación:', err);
});
