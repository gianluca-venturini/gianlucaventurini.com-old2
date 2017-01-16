(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var __extends = undefined && undefined.__extends || function (d, b) {
    for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
    }function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var SectionComponent_1 = require("./SectionComponent");
var NameComponent_1 = require("./sections/NameComponent");
var MainComponent = function (_super) {
    __extends(MainComponent, _super);
    function MainComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainComponent.prototype.render = function () {
        return React.createElement(SectionComponent_1.SectionComponent, null, React.createElement(NameComponent_1.NameComponent, null));
    };
    return MainComponent;
}(React.Component);
exports.MainComponent = MainComponent;

},{"./SectionComponent":2,"./sections/NameComponent":3,"react":"react"}],2:[function(require,module,exports){
"use strict";

var __extends = undefined && undefined.__extends || function (d, b) {
    for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
    }function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var SectionComponent = function (_super) {
    __extends(SectionComponent, _super);
    function SectionComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SectionComponent.prototype.render = function () {
        return React.createElement("div", { className: "SectionComponent" }, this.props.children);
    };
    return SectionComponent;
}(React.Component);
exports.SectionComponent = SectionComponent;

},{"react":"react"}],3:[function(require,module,exports){
"use strict";

var __extends = undefined && undefined.__extends || function (d, b) {
    for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
    }function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var NameComponent = function (_super) {
    __extends(NameComponent, _super);
    function NameComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NameComponent.prototype.render = function () {
        return React.createElement("div", { className: "NameComponent" }, React.createElement("div", { className: "background-image" }), React.createElement("span", { className: "name" }, "GIANLUCA VENTURINI"));
    };
    return NameComponent;
}(React.Component);
exports.NameComponent = NameComponent;

},{"react":"react"}],4:[function(require,module,exports){
"use strict";

var ReactDOM = require("react-dom");
var React = require("react");
var MainComponent_1 = require("./components/MainComponent");
ReactDOM.render(React.createElement(MainComponent_1.MainComponent, null), document.getElementById('root'));

},{"./components/MainComponent":1,"react":"react","react-dom":"react-dom"}]},{},[4]);
