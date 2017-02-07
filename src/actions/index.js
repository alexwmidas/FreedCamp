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
 * @providesModule AppActions
 * @flow
 */

'use strict';

const navigationActions = require('./navigation');
const welcomeNavigationActions = require('./welcomeNavigation');
const loginActions = require('./login');
const menteeActions = require('./mentee');
const mentorActions = require('./mentor');
const filterActions = require('./filter');
const messageActions = require('./messages');
const filtersActions = require('./filters');
const termPrivacy = require('./termPrivacy');
const chatMessages = require('./chatMessages');
const chatBotMessages = require('./chatBotMessages');
const chatRooms = require('./chatRooms');
const profile = require('./profile');
const userActions = require('./user');

module.exports = {
  ...loginActions,
  ...menteeActions,
  ...mentorActions,
  ...filterActions,
  ...navigationActions,
  ...welcomeNavigationActions,
  ...messageActions,
  ...filtersActions,
  ...termPrivacy,
  ...chatMessages,
  ...chatBotMessages,
  ...chatRooms,
  ...profile,
  ...userActions
};
