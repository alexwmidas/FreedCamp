/**
 *
 * @flow
 */

'use strict';

import type { Action } from './types';

type Tab = 'tab1' | 'tab2';

module.exports = {
  switchTab: (tab: Tab): Action => ({
    type: 'SWITCH_TAB',
    tab,
  })
};
