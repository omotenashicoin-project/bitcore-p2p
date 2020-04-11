'use strict';

var Message = require('../message');
var inherits = require('util').inherits;
var bitcore = require('bitcore-lib');
var BufferUtil = bitcore.util.buffer;

function GetsporksMessage(arg, options) {
  Message.call(this, options);
  this.command = 'getsporks';
}
inherits(GetsporksMessage, Message);

GetsporksMessage.prototype.setPayload = function() {};

GetsporksMessage.prototype.getPayload = function() {
  return BufferUtil.EMPTY_BUFFER;
};

module.exports = GetsporksMessage;
