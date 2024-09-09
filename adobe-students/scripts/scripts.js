/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import { setLibs, decorateArea } from './utils.js';

// Add project-wide style path here.
const STYLES = '';

// Use '/libs' if your live site maps '/libs' to milo's origin.
const LIBS = '/libs';

const locales = { '': { ietf: 'en-US', tk: 'hah7vzn.css' } };

// Add any config options.
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

/*
 * ------------------------------------------------------------
 * Edit below at your own risk
 * ------------------------------------------------------------
 */

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
