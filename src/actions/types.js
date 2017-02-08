/**
 * @flow
 */

'use strict';

type ParseObject = Object;

export type Action =
  { type: 'SWITCH_TAB', tab: 'conversation' };

export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;
