### React ScopedCSS Mixin

A React mixin for scoped style tags.

#### Installation

``` bash
npm install --save react-mixin-scopedcss
```

#### Usage

``` javascript
'use strict';

var React = require('react');
var ScopedCSSMixin = require('react-mixins-scopedcss');

var Component = React.createClass({
  mixins: [ScopedCSSMixin],

  render: function() {
    return (
      <div>
        <style ref={ScopedCSSMixin.ref}>{this.props.styles}</style>
      </div>
    );
  }
});
```
