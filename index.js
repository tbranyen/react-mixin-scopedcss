'use strict';

var ScopedCSS = require('scopedcss');
var Symbol = require('symbol');

var ScopedCSSMixin = {
  ref: new Symbol(),

  componentDidMount: function() {
    if (!this.refs.scoped) {
      return;
    }

    var scopedElement = this.refs.scoped.getDOMNode();
    scopedElement.setAttribute('scoped', true);

    ScopedCSS.applyTo(scopedElement.parentNode);
  }
};

module.exports = ScopedCSSMixin;
