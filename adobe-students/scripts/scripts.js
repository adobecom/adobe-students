import { setLibs, decorateArea } from './utils.js';

const STYLES = '';

const LIBS = '/libs';

const locales = { '': { ietf: 'en-US', tk: 'hah7vzn.css' } };

const CONFIG = {
  contentRoot: '/students-shared',
  codeRoot: '/adobe-students',
  imsClientId: 'adobedotcom-cc',
  locales,
  geoRouting: 'on',
  prodDomains: ['www.adobe.com', 'helpx.adobe.com', 'business.adobe.com', 'www.adobe-students.com'],
  decorateArea,
  jarvis: {
    id: 'adobedotcom2',
    version: '1.83',
    onDemand: false,
  },
};

const miloLibs = setLibs(LIBS);
const { loadArea, setConfig, loadLana } = await import(`${miloLibs}/utils/utils.js`);
setConfig({ ...CONFIG, miloLibs });
decorateArea();

(function loadStyles() {
  const paths = [`${miloLibs}/styles/styles.css`];
  if (STYLES) paths.push(STYLES);
  paths.forEach((path) => {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', path);
    document.head.appendChild(link);
  });
}());

(async function loadPage() {
  loadLana({ clientId: 'adobe-students' });
  await loadArea();
}());
