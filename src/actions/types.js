/**
 * Copyright 2016 Facebook, Inc.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to
 * use, copy, modify, and distribute this software in source code or binary
 * form for use in connection with the web services and APIs provided by
 * Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use
 * of this software is subject to the Facebook Developer Principles and
 * Policies [http://developers.facebook.com/policy/]. This copyright notice
 * shall be included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE
 *
 * @flow
 */

'use strict';

type ParseObject = Object;

export type Action =
  {type: 'LOADED_MESSAGES', list: Array<Object>}
  | {type: 'REMOVE_CHAT_ROOM', indexes: Array<number>}
  | {type: 'LOADED_CHAT_ROOMS', data: Object}
  | {type: 'ADD_CHAT_MESSAGE', data: Object}
  | {type: 'LOADED_QUESTIONS', list: Array<Object>}
  | {type: 'LOADED_ANSWERS', list: Array<Object>}
  | {type: 'LOADED_MENTORS', data: Array<Object>}
  | {type: 'CHANGE_TERM', data: string}
  | {type: 'CHANGE_PRIVACY', data: string}
  | {type: 'SUBMIT_MENTEE_QUESTION_ANSWER', id: number, value: number}
  | {type: 'SUBMIT_MENTOR_QUESTION_ANSWER', id: number, value: number}
  | {type: 'SUBMIT_QUESTION_ANSWER', id: number, value: number}
  | {type: 'SUBMIT_FILTER_DATA', data: Object}
  | {type: 'CLEAR_FILTER_DATA'}

  | {type: 'SET_PROFILE_NAME', name: string}
  
  | { type: 'LOGGED_IN', data: Object, profile: Object }
  | { type: 'AVAILABILITY', data: Object }
  | { type: 'LOG_IN_FAIL', data: { message: string; } }
  | { type: 'CLEAR_ERROR' }

  | { type: 'MENTEE_SIGNUP_FIRST_QUESTION', data: Object }
  | { type: 'MENTEE_SIGNUP_QUESTION_SUBMIT', data: Object }
  | { type: 'MENTEE_REMOVE_ANSWERED_QUESTION', id: number }
  | { type: 'MENTEE_CREATE_USER', data: Object }
  | { type: 'MENTOR_CREATE_USER', data: Object }

  | { type: 'MENTOR_REMOVE_ANSWERED_QUESTION', id: number}
  
  | { type: 'SWITCH_DAY', day: 1 | 2 }
  | { type: 'SWITCH_TAB', tab: 'conversation' }
  | { type: 'SWITCH_NAVIGATION', nav: string }
  
  ;

export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;
