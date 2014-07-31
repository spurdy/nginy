'use strict';
var cluster = require('cluster-master');

cluster({ exec: 'server.js',
  size: 5,
  silent: true,
  signals: false,
  onMessage: function (msg) {
    console.error('Message from %s %j',
      this.uniqueID,
      msg);
  }
});