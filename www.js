#!/usr/bin/env node
// --------------------------------------------------------------------------
// codelifecontracts www.js
// Created by Lance T. Walker on 11/01/2019
// Copyright codelifecontracts. All rights reserved.
// --------------------------------------------------------------------------

const http = require('http'), debug = require('debeg')('server');
var src = require('./src'), port = normalizePort(process.env.PORT || '3000');

console.log('STARTING'); 
