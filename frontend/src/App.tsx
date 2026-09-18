/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Home } from './pages/Home';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  );
}

